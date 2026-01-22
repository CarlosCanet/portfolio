---
description: 'Portfolio - Next.js 16 + Tailwind CSS v4 + shadcn/ui development standards'
applyTo: '**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css'
---

# Copilot Instructions for Portfolio

## Project Architecture

This is a personal portfolio website built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. It serves as a professional showcase focusing on the transition: *Telecom Engineer -> Tech Teacher (15y) -> Full Stack Developer*.

**Key Stack:**
- **Framework:** Next.js 16.1+ (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui (using `pnpm dlx shadcn@latest add`)
- **Animations:** `motion` (layout/transitional), `react-type-animation` (hero text)
- **Package Manager:** `pnpm` (Strictly enforced)
- **Deployment:** Vercel (CI/CD)
- **Icons:** `lucide-react`
- **Notifications:** `sonner`

## Development Rules (Strict)

1.  **Package Manager:** ALWAYS use `pnpm`. Never use npm or yarn.
2.  **UI Components:** Use **shadcn/ui** components.
    *   Import from `@/components/ui/...`
    *   Install new ones via terminal: `pnpm dlx shadcn@latest add [component-name]`
3.  **No Database:** All data (projects, bio, experience) must be **static** and strongly typed in `src/lib/data.ts`.
4.  **No Testing:** Do not generate unit tests (Vitest/Jest) for this project. Focus on visual polish and UX.
5.  **Clean Code:**
    *   Use `server components` by default.
    *   Add `'use client'` only when interactivity (hooks, motion) is required.
    *   Keep components small and composition-focused.

## Styling & UX Conventions

- **Visual Identity:** "Bleeding Edge" but Professional. Minimalist, clean typography, subtle animations. It should be differentiator with some touches of creativity
- **Theme:** Support Dark/Light mode using `next-themes` (built into shadcn).
- **Tailwind v4:** Use the new v4 syntax (no `tailwind.config.js` if possible, use CSS variables in `globals.css`).
- **Animations:**
    *   Use `motion` (previously known as `framer-motion`) for page transitions and scroll reveals.
    *   **Constraint:** Do not overuse. Animations must be purposeful (e.g., staggering list items), not distracting.
- **Responsiveness:** Mobile-first approach is mandatory.

## Specific Feature Implementation

### Data Structure (Hypothetical `src/lib/data.ts`)
Define data as constant objects/arrays to allow instant rendering (SSG).
```typescript
export const PROJECTS = [
  {
    title: "Advientea",
    tech: ["Next.js 16", "Vitest", "Zod"],
    description: "...",
    link: "..."
  }
] as const;
```

### Project Grid
Use CSS Grid with `motion` layout animations for filtering (if categories are added).

## File Structure
```
src/
├── app/
│   ├── layout.tsx        # Root layout (Fonts, ThemeProvider, Sonner)
│   ├── page.tsx          # Landing Page (One-page design preferred)
│   └── globals.css       # Tailwind v4 imports
├── components/
│   ├── ui/               # shadcn atoms (button, card, etc.)
│   ├── sections/         # Big page sections (Hero, About, Projects)
│   └── layout/           # Navbar, Footer
├── lib/
│   └── utils.ts          # cn() helper
|   └── data.ts           # Static content (Resume, Projects)
```
