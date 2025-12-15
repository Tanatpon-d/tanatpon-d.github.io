# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Tanatpon Duangta, built with React and TypeScript. It showcases professional experience, projects, skills, and contact information. The site is deployed to GitHub Pages and features a dark mode toggle.

## Common Commands

### Development
- `npm start` - Run development server at http://localhost:3000
- `npm run build` - Create production build in `/build` directory
- `npm test` - Run tests in watch mode

### Deployment
- `npm run deploy` - Build and deploy to GitHub Pages (gh-pages branch)
- `npm run predeploy` - Runs before deploy, automatically builds the project

### Build and Deployment Workflow
Since this repo serves as a GitHub Pages site from the main branch:
1. Edit source files in `src/` directory
2. Run `npm run build` to generate production files
3. Copy built files from `build/` to repository root: `cp -r build/* .`
4. Commit and push changes: `git add . && git commit -m "message" && git push`
5. Run `npm run deploy` to also push to gh-pages branch for backup

See `deploy-instructions.md` for detailed deployment guidance (includes Thai instructions).

## Architecture

### Component Structure
The app follows a modular component architecture with each section as a standalone component:

- **src/App.tsx** - Main app component that manages dark mode state via localStorage and renders all sections
- **src/components/** - Organized by feature/section:
  - `Hero/` - Hero section with profile image, name, title, and social links
  - `About/` - About section with professional description
  - `Experience/` - Experience section listing work history
  - `Projects/` - Projects section with portfolio items
  - `Skills/` - Technical skills breakdown
  - `Contact/` - Contact information and call-to-action
  - `ThemeToggle/` - Dark mode toggle button component

### Styling
- Uses CSS Modules for component-scoped styling (`.module.css` files)
- Global styles in `src/App.css` and `src/index.css`
- Dark mode implemented via `dark-mode` class on document body
- Theme preference persisted in localStorage

### Data Flow
App component:
1. Loads theme preference from localStorage on mount
2. Manages isDarkMode state and toggleTheme function
3. Passes toggleTheme to ThemeToggle component
4. Each section component is stateless and displays static portfolio content

## Key Configuration

**TypeScript Config** (`tsconfig.json`):
- Target: ES5
- JSX: react-jsx
- Strict mode enabled
- Module resolution: node

**Build Setup** (`package.json`):
- React 19.1.1
- TypeScript 4.9.5
- React Scripts 5.0.1 (Create React App)
- Testing: @testing-library/react and jest
- Deployment: gh-pages package

## Important Files to Know

- **src/App.tsx** - Entry point; manage global state and theme here
- **src/components/\*/\*.tsx** - Component implementations with content
- **src/components/\*/\*.module.css** - Component-specific styles
- **deploy-instructions.md** - Detailed guide for all deployment scenarios
- **public/DSC05522.jpg** - Profile image used in Hero section

## When Making Changes

### Editing Content
- Hero section (name, title, bio): Edit `src/components/Hero/Hero.tsx`
- About section: Edit `src/components/About/About.tsx`
- Experience: Edit `src/components/Experience/Experience.tsx`
- Projects: Edit `src/components/Projects/Projects.tsx`
- Skills: Edit `src/components/Skills/Skills.tsx`
- Contact: Edit `src/components/Contact/Contact.tsx`

All content changes require a build and deployment to be visible on the live site.

### Adding New Sections
1. Create new component in `src/components/[SectionName]/[SectionName].tsx`
2. Create CSS module in `src/components/[SectionName]/[SectionName].module.css`
3. Import and add to render chain in `src/App.tsx`
4. Build and deploy

### Styling
- Prefer CSS Modules for new components to avoid naming conflicts
- Dark mode styles should use CSS to detect body.dark-mode class or use media queries
- Component styles should be scoped within module CSS files
