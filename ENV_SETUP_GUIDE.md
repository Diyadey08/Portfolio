# Environment Variables Setup Guide

## 🔐 **Contact Information Management**

This guide shows you how to securely manage your contact information and social media links using environment variables.

## 📁 **Files Created:**

### 1. `.env.local` (Your actual values)
```bash
# Personal Contact Information
NEXT_PUBLIC_EMAIL=diyadey310804@gmail.com
NEXT_PUBLIC_PHONE=+919647844040
NEXT_PUBLIC_LOCATION=Kolkata, India

# Social Media Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername

# Additional Contact
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourusername
```

### 2. `.env.example` (Template for others)
Contains placeholder values that others can use as a template.

## 🎯 **How to Update Your Information:**

### Step 1: Edit `.env.local`
Replace the placeholder values with your actual information:

```bash
# Update these with your real links:
NEXT_PUBLIC_GITHUB_URL=https://github.com/Diyadey08
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-linkedin-username
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/your-twitter-username
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendly-username
```

### Step 2: Restart Development Server
After updating `.env.local`, restart your development server:
```bash
npm run dev
```

## 🎨 **What's Added to Contact Page:**

### 1. **Environment Variable Integration**
- Email, phone, and location now pull from `.env.local`
- All social media links are configurable via environment variables
- Fallback values ensure the site works even without env file

### 2. **New Social Media Section**
- **GitHub Icon**: Links to your GitHub profile
- **LinkedIn Icon**: Links to your LinkedIn profile
- **Professional styling**: Consistent with existing design
- **Hover effects**: Scale and color transitions

### 3. **Dynamic Contact Methods**
All contact methods now use environment variables:
- **Email**: `NEXT_PUBLIC_EMAIL`
- **Phone**: `NEXT_PUBLIC_PHONE`
- **Location**: `NEXT_PUBLIC_LOCATION`
- **Calendar**: `NEXT_PUBLIC_CALENDLY_URL`

## 🔒 **Security Features:**

### 1. **Environment Variable Protection**
- `.env.local` is in `.gitignore` (not committed to GitHub)
- `.env.example` provides template without revealing real data
- `NEXT_PUBLIC_` prefix makes variables available in browser

### 2. **Fallback Values**
- If env variables are missing, fallback values are used
- Site remains functional even without configuration
- Graceful degradation for all contact methods

## 🎮 **User Experience:**

### Contact Methods (Top Row):
1. **📧 Email** - Opens email client with your address
2. **📞 Phone** - Opens phone dialer on mobile devices
3. **📍 Location** - Shows your location
4. **📅 Calendar** - Links to your scheduling tool

### Social Links (Middle Section):
1. **🐙 GitHub** - Links to your GitHub profile
2. **💼 LinkedIn** - Links to your LinkedIn profile

## 🚀 **Benefits:**

1. **Easy Updates**: Change all contact info in one file
2. **Security**: Sensitive info not in code repository
3. **Flexibility**: Different configs for dev/staging/production
4. **Professional**: Clean, organized contact presentation
5. **Responsive**: Works perfectly on all devices

## 📝 **Next Steps:**

1. **Update `.env.local`** with your actual social media URLs
2. **Test all links** to ensure they work correctly
3. **Add more social platforms** if needed (Twitter, Instagram, etc.)
4. **Configure Calendly** or similar scheduling tool

Your contact section now automatically uses your configured information and provides professional social media integration!
