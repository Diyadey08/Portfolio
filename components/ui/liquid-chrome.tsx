import React, { useRef, useEffect } from "react";

interface LiquidChromeProps extends React.HTMLAttributes<HTMLDivElement> {
  baseColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
}

export const LiquidChrome: React.FC<LiquidChromeProps> = ({
  baseColor = [0.1, 0.1, 0.1],
  speed = 0.2,
  amplitude = 0.5,
  frequencyX = 3,
  frequencyY = 2,
  interactive = true,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
    
    if (!gl) {
      console.warn('WebGL not supported, falling back to CSS animation');
      return;
    }

    // Vertex shader source
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_uv;
      varying vec2 v_uv;
      
      void main() {
        v_uv = a_uv;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader source
    const fragmentShaderSource = `
      precision mediump float;
      
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec3 u_baseColor;
      uniform float u_amplitude;
      uniform float u_frequencyX;
      uniform float u_frequencyY;
      uniform vec2 u_mouse;
      
      varying vec2 v_uv;
      
      void main() {
        vec2 uv = v_uv;
        vec2 center = vec2(0.5, 0.5);
        
        // Create liquid distortion
        for (float i = 1.0; i < 8.0; i++) {
          uv.x += u_amplitude / i * cos(i * u_frequencyX * uv.y + u_time + u_mouse.x * 3.14159);
          uv.y += u_amplitude / i * cos(i * u_frequencyY * uv.x + u_time + u_mouse.y * 3.14159);
        }
        
        // Mouse interaction
        vec2 diff = (v_uv - u_mouse);
        float dist = length(diff);
        float falloff = exp(-dist * 15.0);
        float ripple = sin(8.0 * dist - u_time * 3.0) * 0.02;
        uv += (diff / (dist + 0.0001)) * ripple * falloff;
        
        // Chrome-like color generation
        vec3 color = u_baseColor / abs(sin(u_time - uv.y - uv.x));
        
        // Add metallic shimmer
        float shimmer = sin(uv.x * 20.0 + u_time * 2.0) * 0.1 + 0.9;
        color *= shimmer;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Helper function to create shader
    function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }

    // Create program
    function createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram | null {
      const program = gl.createProgram();
      if (!program) return null;
      
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      
      return program;
    }

    // Initialize shaders and program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return;
    
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    // Set up geometry (full screen quad)
    const positions = new Float32Array([
      -1, -1,  0, 0,
       1, -1,  1, 0,
      -1,  1,  0, 1,
       1,  1,  1, 1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const uvLocation = gl.getAttribLocation(program, 'a_uv');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const baseColorLocation = gl.getUniformLocation(program, 'u_baseColor');
    const amplitudeLocation = gl.getUniformLocation(program, 'u_amplitude');
    const frequencyXLocation = gl.getUniformLocation(program, 'u_frequencyX');
    const frequencyYLocation = gl.getUniformLocation(program, 'u_frequencyY');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    // Mouse tracking
    let mouseX = 0.5;
    let mouseY = 0.5;

    function handleMouseMove(event: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseX = (event.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (event.clientY - rect.top) / rect.height;
    }

    function handleTouchMove(event: TouchEvent) {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = canvas.getBoundingClientRect();
        mouseX = (touch.clientX - rect.left) / rect.width;
        mouseY = 1.0 - (touch.clientY - rect.top) / rect.height;
      }
    }

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('touchmove', handleTouchMove);
    }

    // Resize function
    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resize);
    resize();

    // Render loop
    let animationId: number;
    function render(time: number) {
      animationId = requestAnimationFrame(render);
      
      gl.useProgram(program);
      
      // Set uniforms
      gl.uniform1f(timeLocation, time * 0.001 * speed);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform3f(baseColorLocation, baseColor[0], baseColor[1], baseColor[2]);
      gl.uniform1f(amplitudeLocation, amplitude);
      gl.uniform1f(frequencyXLocation, frequencyX);
      gl.uniform1f(frequencyYLocation, frequencyY);
      gl.uniform2f(mouseLocation, mouseX, mouseY);
      
      // Set up attributes
      gl.enableVertexAttribArray(positionLocation);
      gl.enableVertexAttribArray(uvLocation);
      
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 16, 0);
      gl.vertexAttribPointer(uvLocation, 2, gl.FLOAT, false, 16, 8);
      
      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    animationId = requestAnimationFrame(render);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('touchmove', handleTouchMove);
      }
      
      // Clean up WebGL resources
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
      {...props}
    />
  );
};

export default LiquidChrome;
