# VoltSense Marketing Website

A modern, responsive marketing website for VoltSense - a smart home energy monitoring system. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── features/             # Features page
│   ├── contact/              # Contact page
│   ├── layout.tsx            # Root layout with Header/Footer
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles & design system
├── components/
│   ├── Header.tsx            # Navigation header
│   └── Footer.tsx            # Site footer
├── public/
│   └── favicon.svg           # Site favicon
└── tailwind.config.ts        # Tailwind & design system config
```

## 🎨 Design System

### Color Palette

**Primary (Blue)**
- Used for primary actions, links, and brand identity
- Shades: 50-900 (`primary-*`)
- Main: `primary-600` (#0ea5e9)

**Accent (Purple)**
- Used for highlights and secondary elements
- Shades: 50-900 (`accent-*`)
- Main: `accent-600` (#c026d3)

**Neutral (Gray)**
- Used for text, backgrounds, and borders
- Shades: 50-900 (`neutral-*`)

### Typography

- **Font Family**: System font stack for optimal performance
- **Scale**: From `text-xs` (0.75rem) to `text-6xl` (3.75rem)
- **Line Heights**: Optimized for readability at each size

### Spacing

- Follows Tailwind's default spacing scale (0.25rem increments)
- Extended with custom values: `18` (4.5rem), `88` (22rem), `128` (32rem)

### Components

All components are defined in `globals.css` using Tailwind's `@layer components`:

**Buttons**
- `.btn` - Base button styles
- `.btn-primary` - Primary action button (blue background)
- `.btn-secondary` - Secondary button (gray background)
- `.btn-outline` - Outlined button (blue border)

**Cards**
- `.card` - Base card with rounded corners and border
- `.card-hover` - Card with hover shadow effect

**Forms**
- `.input` - Text input and textarea styles

**Layout**
- `.container-custom` - Responsive container with max-width
- `.section-padding` - Consistent vertical padding for sections

## 🏗️ Design System → Code Mapping

| Design Token | CSS Class | Tailwind Config | Usage |
|--------------|-----------|-----------------|-------|
| Primary Blue | `bg-primary-600` | `colors.primary` | CTAs, links, brand |
| Accent Purple | `bg-accent-600` | `colors.accent` | Highlights, gradients |
| Heading XL | `text-5xl` | `fontSize['5xl']` | Page titles |
| Heading L | `text-4xl` | `fontSize['4xl']` | Section titles |
| Body | `text-base` | `fontSize.base` | Paragraph text |
| Button | `.btn-primary` | Custom component | Primary actions |
| Card | `.card` | Custom component | Content containers |
| Input | `.input` | Custom component | Form fields |

## 📄 Pages

### 1. Home (`/`)

**Sections:**
- Hero with headline, subheading, and dual CTAs
- Social proof strip with 3 partner logos (SVG)
- "How It Works" 3-step process
- Feature highlight with image placeholder and bullet benefits
- CTA section with gradient background
- Footer with links

**Key Features:**
- Responsive gradient backgrounds
- Custom SVG icons for social proof
- Numbered step indicators

### 2. Features (`/features`)

**Sections:**
- Hero section
- 6 feature cards grid (icon + title + description)
- Comparison table: VoltSense vs Generic Monitor X
- Technical section with MQTT payload example
- CTA section

**Key Features:**
- Responsive grid layout
- Interactive comparison table
- Syntax-highlighted code block
- Custom feature icons (SVG)

### 3. Contact (`/contact`)

**Sections:**
- Hero section
- Contact info cards (email, phone, response time)
- Contact form with validation
- FAQ section with 4 questions

**Form Fields:**
- Name (required)
- Email (required)
- Company (optional)
- Message (required)

**Features:**
- Client-side React form handling
- Real-time validation
- Success/error states
- API integration

## 🔌 API Endpoint

### POST `/api/contact`

Contact form submission endpoint with validation.

**Request Body:**
```json
{
  "name": "string (2-100 chars)",
  "email": "string (valid email)",
  "company": "string (optional, max 100 chars)",
  "message": "string (10-5000 chars)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your message...",
  "submissionId": "sub_1234567890_abc123"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Validation error message"
}
```

**Validation Rules:**
- Name: 2-100 characters
- Email: Valid format
- Company: Optional, max 100 characters
- Message: 10-5000 characters

**Current Implementation:**
- Logs submissions to console (JSON format)
- Returns success response
- In production: Would save to database or trigger email

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast ratios meeting WCAG AA standards
- Responsive font sizing
- Form labels and validation messages

See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for detailed checklist.

## ⚡ Performance Optimizations

- Next.js 14 App Router for optimal performance
- Automatic code splitting
- Image optimization ready
- Minimal JavaScript bundle
- CSS optimization via Tailwind
- Static generation where possible

See [LIGHTHOUSE.md](./LIGHTHOUSE.md) for performance scores.

## 🚢 Deployment

### Vercel (Recommended)

```bash
vercel deploy --prod
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Icons**: Custom SVG
- **Deployment**: Vercel-ready

## 📝 Design Decisions

1. **Next.js App Router**: Modern React features, performance, easy deployment
2. **Tailwind CSS**: Rapid development with consistent design system
3. **TypeScript**: Type safety and better DX
4. **Custom SVG Icons**: Lightweight, no external dependencies
5. **Client-Side Form**: Better UX with real-time validation
6. **Responsive-First**: Mobile-first approach
7. **Minimal Dependencies**: Faster builds, smaller bundle

---

**Built with ⚡ by Claude Code**
