# MBS — Multi Business Services (Coming Soon Landing Page)

Modern, high-conversion pre-launch landing page for **MBS (Multi Business Services)** built with React, TypeScript, Tailwind CSS, Lucide icons, and Canvas interactive particles.

## 🌟 Key Features
- **Brand Geometry & Aesthetics**: Custom Midnight Navy (`#061322` / `#0B2A4A`), Electric Cyan (`#13B5CE`), and Slate Steel (`#647687`) color scheme.
- **Interactive Node Circuit Network**: Canvas-driven floating circuit particle system mirroring the MBS emblem.
- **30-Day Live Countdown Timer**: Synced with local storage for consistent countdown across reloads.
- **VIP Early Access Form**: Lead capture input with email validation, localStorage persistence, and celebratory confetti burst.
- **Four Core Pillars of MBS**:
  1. Digital & Cloud Transformation
  2. Operational Excellence & Process Automation
  3. Strategic Corporate Advisory
  4. Integrated Multi-Business Services Ecosystem
- **Development Roadmap Tracker**: 85% readiness progress bar with milestone statuses.
- **Direct Founder Contact Modal**: Quick copy-to-clipboard for `mahmoudelsaramegy@gmail.com` and integrated mailto launch.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates production-optimized static files in the `dist/` directory ready to be hosted on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any web server.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure
```
mbs_website/
├── public/
│   ├── mbs_logo_dark_theme.svg    # White & cyan logo for dark mode
│   ├── mbs_logo_transparent.svg   # Original colors with transparent bg
│   └── mbs_logo_vector.svg        # Original vector logo
├── src/
│   ├── components/
│   │   ├── BackgroundNodes.tsx    # Interactive canvas circuit nodes
│   │   ├── Navbar.tsx             # Header navigation & logo
│   │   ├── Hero.tsx               # Main hero section & headline
│   │   ├── Countdown.tsx          # 30-day live countdown timer
│   │   ├── LeadCapture.tsx        # VIP email signup & confetti
│   │   ├── CorePillars.tsx        # 4 service pillar preview cards
│   │   ├── ReadinessRoadmap.tsx   # 85% development progress bar
│   │   ├── ContactModal.tsx       # Founder contact modal
│   │   └── Footer.tsx             # Footer links & copyright
│   ├── App.tsx                    # Main app composition
│   ├── index.css                  # Tailwind styles & glassmorphic utilities
│   └── main.tsx                   # React root entry
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

