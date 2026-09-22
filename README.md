# Rocilin & Jobin — Love, Precisely Engineered 💍⚙️

A luxury, interactive single-page wedding invitation website engineered with React, Vite, CSS, and lightweight SVG drafting elements.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have **Node.js** (v18+) installed on your system.

### 2. Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### 3. Start Local Development Server
Launch the local dev server:
```bash
npm run dev
```

Your terminal will display:
```
  VITE v8.3.0  ready in 290 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

## 🔗 Guest Views (Dynamic Routing)

The application dynamically adapts based on URL query parameters:

| Audience | URL | Content Shown |
|---|---|---|
| **General Guests & Groom's Family** | `http://localhost:5173/` | **Holy Matrimony** ceremony only; hides all engagement details; RSVP submits for Matrimony. |
| **Bride's Guests & Engagement Invitees** | `http://localhost:5173/?view=engagement` | **Phase 01: Betrothal & Engagement** card, St. Mary's venue map, and expanded RSVP options. |

> 💡 **Quick Switcher**: You can also switch between views at any time by clicking the **"VIEW: DEFAULT" / "VIEW: ENGAGEMENT"** badge in the top navigation bar.

---

## 🛠️ Additional Commands

### Build for Production
To create an optimized production bundle:
```bash
npm run build
```
The output will be placed in the `dist/` directory ready for deployment (e.g. GitHub Pages, Vercel, Netlify, Cloudflare Pages).

### Preview Production Build Locally
```bash
npm run preview
```

---

## 🎨 Customization

- **Couple Hero Image**: Replace `public/couple-hero.jpg` with any high-resolution photo, or test dynamically with `http://localhost:5173/?hero=https://your-image-url.com`.
- **Event Dates & Content**: All ceremony dates, locations, parent names, and scripture references are configured in `src/components/`.
