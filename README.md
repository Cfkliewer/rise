# Rise - Fitness Training Website

A modern fitness training website built with Next.js 13, TypeScript, and Tailwind CSS. The application showcases fitness training services, schedules, testimonials, and includes features like Google Maps integration and contact forms.

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Maps**: Google Maps React
- **Icons**: Font Awesome
- **Analytics**: Vercel Analytics
- **Email**: Nodemailer
- **Other Libraries**: 
  - react-device-detect
  - react-snowfall
  - classnames
  - axios

## Features

- 📱 Responsive design
- 🗺️ Google Maps integration for location display
- 📅 Schedule display with day selection
- 💬 Testimonials section
- 📝 Contact form with email integration
- ✨ Smooth animations using Framer Motion
- 📊 Analytics tracking with Vercel Analytics

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env` file with necessary API keys and configuration.

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Main application code
  - `/components` - Reusable React components
  - `/api` - API routes
  - `page.tsx` - Main landing page
  - `layout.tsx` - Root layout component

## Build & Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

The application is optimized for deployment on Vercel.
