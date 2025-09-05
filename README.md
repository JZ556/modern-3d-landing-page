# SparkAI - AI Chat Landing Page

A modern, responsive landing page for an AI chat application built with React and Tailwind CSS. Features smooth scrolling navigation, interactive components, and a sleek dark theme design.

## 🎬 Preview

![SparkAI Demo](demo.gif)

*Smooth scrolling navigation and interactive components*

## ✨ Features

- **Modern Design** - Clean, professional UI with gradient effects
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Smooth Navigation** - Anchor-based scrolling between sections
- **Interactive Components** - Hover effects and animations
- **Performance Optimized** - Fast loading with Vite build tool
- **Accessible** - Built with accessibility best practices


## 📋 Sections

- **Hero** - Eye-catching landing section with call-to-action
- **Features** - Showcase of AI capabilities and benefits
- **Services** - Detailed service offerings
- **Collaboration** - Team collaboration features
- **Pricing** - Flexible pricing plans
- **Roadmap** - Future development plans

## 🛠️ Built With

- [React 19](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Just Parallax](https://github.com/mmazzarolo/react-just-parallax) - Parallax effects

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sparkai-landing.git
   cd sparkai-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the project

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, and static files
├── components/      # Reusable React components
├── constants/       # Application constants and data
├── design/          # Design-specific components
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles and Tailwind config
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `src/index.css`. You can modify the color scheme by updating the CSS custom properties:

```css
--color-n-1: #FFFFFF;    /* Primary text */
--color-n-8: #0E0C15;    /* Background */
--color-color-1: #AC6AFF; /* Accent purple */
/* ... more colors */
```

### Content
Update the content by modifying the constants in `src/constants/index.js`:

```javascript
export const navigation = [
  { id: "0", title: "Features", url: "#features" },
  { id: "1", title: "Pricing", url: "#pricing" },
  // ... add or modify navigation items
];
```

## 📱 Responsive Design

The project is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px



⭐ **Star this repo if you found it helpful!**