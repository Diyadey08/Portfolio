# Experience Images Management

This document explains how to manage and update the rotating images in the experience section.

## File Structure

- `/public/experience-images.json` - Contains all image data for different projects
- `/components/ui/rotating-image-gallery.tsx` - The reusable rotating gallery component
- `/hooks/use-rotating-images.tsx` - Custom hook for image rotation logic

## Adding New Images

### 1. Add Images to Public Folder
Place your images in the `/public` directory.

### 2. Update experience-images.json
Add your new images to the appropriate project array:

```json
{
  "experienceImages": {
    "ignisDine": [
      {
        "id": 1,
        "src": "/your-new-image.png",
        "alt": "Description of the image",
        "title": "Short Title",
        "description": "Longer description that appears in overlay"
      }
    ]
  }
}
```

### 3. Project Categories Available
- `ignisDine` - IgnisDine restaurant booking system
- `shopify` - E-commerce platform clone
- `fundrise` - Crowdfunding platform
- `phoenix` - AI agent framework
- `kalakaar` - Educational platform
- `zidio` - Web development projects

## Image Rotation Settings

You can modify the global settings in `experience-images.json`:

```json
{
  "settings": {
    "autoChangeInterval": 3000,    // Time between auto-changes (ms)
    "transitionDuration": 500,     // Animation duration (ms)
    "enableHoverPause": true,      // Pause on hover
    "showIndicators": true,        // Show dot indicators
    "enableManualNavigation": true // Show prev/next buttons
  }
}
```

## Current Project Images

### IgnisDine (Restaurant Booking System)
- `/Ignis1.png` - Dashboard View
- `/Ignis 2.png` - Booking Interface  
- `/Ignis 3.png` - Real-time Updates

### Phoenix AI Framework
- `/Phoenix.png` - Main Interface (Agent Builder)
- `/Phoenix2.png` - Tool Integration Dashboard  
- `/Phoenix3.png` - Agent Testing Environment
- `/Phoenix4.png` - OnChain NFT Deployment
- `/Phoenix5.png` - Analytics & Monitoring Dashboard

### FundRise (Crowdfunding Platform)
- **Campaign Dashboard** - Campaign management interface with real-time updates
- **Wallet Integration** - Secure Web3 wallet connectivity and transactions
- **Fund Tracking** - Transparent fund tracking and community support

### Kalakaar (Educational Platform)
- **Learning Platform** - Creative education for art and design workshops
- **Workshop Management** - System for organizing workshops and courses
- **Student Portfolios** - Feature for showcasing creative work and progress

### Shopify Clone (E-commerce Platform)
- **Product Catalog** - Modern product browsing with filtering and search
- **Shopping Cart** - Seamless cart experience with real-time updates
- **Payment Gateway** - Secure payment processing with multiple methods
- **Admin Dashboard** - Comprehensive admin panel for management

### Zidio Development
- `/NewsApp1.png` - News Application Project
- `/NewsApp2.png` - News App Features & Interface
- `/NewsApp3.png` - News Dashboard & Analytics
- **Web Development** - Modern web projects using latest technologies
- **Team Collaboration** - Development team collaboration experience

## Features

- **Auto-rotation**: Images change automatically every 3 seconds
- **Hover pause**: Rotation pauses when hovering over images
- **Manual navigation**: Click prev/next buttons or indicators to navigate
- **Smooth transitions**: Fade and scale animations between images
- **Responsive**: Works on all screen sizes
- **Image info overlay**: Shows title and description on hover
- **Fallback handling**: Shows loading state if images fail to load

## Customizing Individual Galleries

Each `RotatingImageGallery` component can be customized:

```tsx
<RotatingImageGallery
  images={experienceImages?.ignisDine || []}
  gradientColors="bg-gradient-to-r from-orange-500/20 to-red-500/20"
  autoChangeInterval={4000}  // Custom interval
  showControls={true}        // Show navigation buttons
  showIndicators={true}      // Show dot indicators
  className="w-full"
/>
```
