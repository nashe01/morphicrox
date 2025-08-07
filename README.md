# Porcelain Motion Showcase

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-2.50.0-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.19.1-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-9+-CB3837?style=for-the-badge&logo=npm)](https://www.npmjs.com/)

A modern, responsive website showcasing porcelain and bathroom fixtures with stunning motion effects and an integrated admin panel for content management.

## 🏠 Overview

Porcelain Motion Showcase is a professional website built for showcasing bathroom fixtures, kitchen products, and porcelain installations. The site features smooth animations, video backgrounds, and a comprehensive admin panel for easy content management.

## ✨ Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Video Hero Sections**: Engaging video backgrounds for immersive experience
- **Responsive Design**: Fully responsive across all devices
- **Admin Panel**: Complete content management system with authentication
- **Product Showcase**: Dedicated sections for bathrooms, kitchens, office, and hospitality
- **Gallery Management**: Dynamic project gallery with drag-and-drop ordering
- **Content Management**: Easy editing of site content through admin interface
- **Media Management**: Upload and manage images and videos
- **Authentication**: Secure admin access with Supabase authentication

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Backend**: Supabase (Database, Authentication, Storage)
- **UI Components**: Radix UI primitives with shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd porcelain-motion-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
porcelain-motion-showcase/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── admin/          # Admin panel components
│   │   ├── about/          # About page components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Other component categories
│   ├── pages/              # Page components
│   │   ├── products/       # Product-specific pages
│   │   └── ...             # Main pages
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # External service integrations
│   │   └── supabase/       # Supabase client and types
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
│   └── images/             # Image assets
├── supabase/               # Database migrations and config
└── ...                     # Configuration files
```

## 🎨 Key Components

### Pages
- **Home**: Video hero with category showcase
- **About**: Company information and portfolio
- **Products**: Bathroom fixtures, kitchens, office, hospitality
- **Gallery**: Project showcase with filtering
- **Contact**: Contact form and information
- **Admin**: Content management panel

### Admin Features
- **Content Management**: Edit site text and descriptions
- **Project Management**: Add, edit, and delete gallery projects
- **Media Management**: Upload and organize images/videos
- **Page Management**: Manage content for different pages
- **Video Management**: Handle video content

## 🗄️ Database Schema

The project uses Supabase with the following main tables:
- `site_content`: Dynamic content for different pages
- `gallery_projects`: Project showcase items
- `user_profiles`: User authentication and roles
- `page_sections`: Page-specific content sections

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **Supabase Edge Functions**: For serverless deployment
- **Traditional hosting**: Upload the `dist` folder to your web server

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 Key Features Explained

### Motion Effects
- **Curtain Scroll**: Main content slides up over hero section
- **Parallax Effects**: Subtle depth on scroll
- **Fade Animations**: Smooth page transitions
- **Intersection Observer**: Trigger animations on scroll

### Admin Panel
- **Authentication**: Secure admin access
- **Real-time Updates**: Instant content changes
- **Media Upload**: Drag-and-drop file management
- **Content Organization**: Tabbed interface for different sections

### Responsive Design
- **Mobile-first**: Optimized for all screen sizes
- **Touch-friendly**: Gesture support for mobile devices
- **Performance**: Optimized images and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation in the `/docs` folder

## 🔄 Updates

Stay updated with the latest changes by:
- Watching the repository
- Checking the releases page
- Following the changelog

---

Built with ❤️ using modern web technologies
