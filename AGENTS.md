# AGENTS.md - Project Guide for AI Coding Agents

This file provides essential information for AI coding agents working on this project.

## Project Overview

This is **He Ze Resume** (`he-ze-resume`) - a personal resume web application designed for a Foreign Trade Salesman position. It's a single-page React application that generates a professional, printable resume with PDF export capabilities.

- **Primary Language**: Chinese (zh-CN)
- **Purpose**: Interactive resume with print-friendly layout and PDF export
- **Target**: Job application for foreign trade / international sales positions

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | React 19.2.4 |
| Language | TypeScript 5.8.2 |
| Build Tool | Vite 6.2.0 |
| Styling | Tailwind CSS (via CDN) |
| Icons | Lucide React |
| PDF Export | html2pdf.js |
| Fonts | Inter, Noto Sans SC (Google Fonts) |

## Project Structure

```
├── components/           # React components
│   ├── Resume.tsx        # Main resume layout component (A4 format)
│   ├── PhotoUpload.tsx   # Photo upload with drag positioning
│   └── SectionHeader.tsx # Reusable section header with icon
├── App.tsx               # Root component with print/PDF controls
├── index.tsx             # Application entry point
├── index.html            # HTML template with Tailwind CDN
├── types.ts              # TypeScript interfaces for resume data
├── constants.ts          # Resume data (RESUME_DATA constant)
├── html2pdf.d.ts         # Type declarations for html2pdf.js
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
└── metadata.json         # App metadata for AI Studio
```

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Configuration Details

### Vite Configuration (vite.config.ts)
- **Development Port**: 3000
- **Host**: 0.0.0.0 (accessible from network)
- **Path Alias**: `@/` maps to project root
- **Environment Variables**: 
  - `GEMINI_API_KEY` is loaded from `.env.local` and exposed as `process.env.GEMINI_API_KEY`
  - Used for AI Studio integration

### TypeScript Configuration (tsconfig.json)
- **Target**: ES2022
- **Module**: ESNext
- **JSX**: react-jsx
- **Path Mapping**: `@/*` → `./*`
- **No emit**: Type checking only (Vite handles compilation)

## Code Style Guidelines

### Naming Conventions
- **Components**: PascalCase (e.g., `PhotoUpload.tsx`)
- **Interfaces**: PascalCase (e.g., `ContactInfo`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `RESUME_DATA`)
- **Files**: PascalCase for components, camelCase for others

### Styling Conventions
- Uses **Tailwind CSS** utility classes
- Color scheme: Slate palette (`slate-100` to `slate-900`)
- Print-specific classes defined in `index.html`:
  - `.no-print` - Hidden when printing
  - `.print-shadow-none` - Removes shadows when printing
  - `.print-full-width` - Full width when printing

### Component Structure
- Functional components with TypeScript
- Props interfaces defined inline or in `types.ts`
- Lucide icons imported individually for tree-shaking

## Key Features

### 1. Photo Upload Component (`PhotoUpload.tsx`)
- Click to upload image (JPG/PNG)
- Drag to adjust photo position within frame
- Position constrained to 30% of container bounds
- Displays only in browser (hidden when printing)

### 2. Resume Layout (`Resume.tsx`)
- A4 paper size: 210mm × 297mm
- Two-column layout (7:5 ratio on desktop)
- Responsive: Single column on mobile
- Sections: Header, Work Experience, Projects, Education, Skills, Self-Evaluation

### 3. Print & PDF Export (`App.tsx`)
- **Print Button**: Uses browser `window.print()` with print media queries
- **PDF Export**: Uses `html2pdf.js` library
  - A4 format, portrait orientation
  - High-quality rendering (scale: 2)
  - Hides `.no-print` elements during export
  - Filename: `贺泽_求职简历.pdf`

## Data Structure

Resume content is stored in `constants.ts` as `RESUME_DATA` with the following structure:

```typescript
interface ResumeData {
  basicInfo: BasicInfo;      // Name, age, gender, degree, job target, salary, availability
  contactInfo: ContactInfo;  // Phone, email, wechat, location
  education: Education[];    // School, major, degree, period, achievements
  workExperience: Experience[];  // Role, company, period, description bullet points
  projectExperience: Project[];  // Name, period, role, details
  skills: SkillCategory[];   // Category name + items array
  selfEvaluation: string[];  // Evaluation bullet points
}
```

## Development Workflow

### Environment Setup
1. Ensure Node.js is installed
2. Create `.env.local` file with `GEMINI_API_KEY=your_key_here`
3. Run `npm install`
4. Run `npm run dev`

### Modifying Resume Content
Edit `constants.ts` to update:
- Personal information
- Work experience
- Education
- Skills
- Self-evaluation

### Styling Changes
- Most styling uses Tailwind utility classes in component files
- Global styles (fonts, print styles) are in `index.html` `<style>` block
- Color scheme is consistently using slate palette

## Deployment

The project is designed for deployment through **Google AI Studio**:
- AI Studio URL: https://ai.studio/apps/drive/1vidHQ8hHWCpEG_6JHPYV_XEt66fBDoAh
- Build output goes to `dist/` directory
- Static hosting compatible (no server-side rendering)

## Important Notes

1. **No Test Suite**: This project does not include automated tests
2. **CDN Dependencies**: Tailwind CSS is loaded from CDN, not npm
3. **Chinese Language**: All UI text is in Chinese (zh-CN)
4. **A4 Format**: Resume is designed specifically for A4 paper size
5. **Photo Storage**: Uploaded photos are stored in browser memory (base64) only, not persisted
