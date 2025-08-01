# 2x6-and-Sticks-Website
This is a website for a carpentry company idea that I would like to start with a friend.

## Features
- Modern React frontend with TypeScript
- Contact form with Netlify Forms integration
- Responsive design
- Service showcase
- Company story section

## Technology Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: CSS
- **Forms**: Netlify Forms (no backend required)
- **Deployment**: Netlify (recommended)

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd 2x6-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

## Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

The contact form will automatically work with Netlify Forms, sending email notifications when someone submits the form.

### Other Static Hosting
You can deploy to any static hosting service like:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## Contact Form
The contact form uses Netlify Forms for handling submissions. No backend is required - all form submissions are processed by Netlify and can be configured to send email notifications.

## Project Structure
```
2x6-frontend/
├── src/
│   ├── components/     # React components
│   ├── assets/        # Images and static files
│   └── App.tsx        # Main app component
├── public/            # Public assets
├── netlify.toml      # Netlify configuration
└── index.html        # HTML template with form detection
```

## Backend Removal
This project previously used a Node.js backend for form handling. It has been converted to use Netlify Forms, eliminating the need for server-side code while maintaining all functionality. 
