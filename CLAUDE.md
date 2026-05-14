# Michael Mayerfeld Website — Claude Instructions

## Project structure

```
michoel/   — React front end (Vite + TypeScript)
infra/     — AWS CDK infrastructure (TypeScript)
```

## Front end (`michoel/`)

- **Framework:** React 18 + TypeScript, Vite
- **Routing:** React Router v6 — routes defined in `src/App.tsx`
- **Styles:** SCSS per-component; shared tokens in `src/styles/`
- **Navigation constants:** `src/constants/Navigation.ts` — drives header nav links

### Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/Home/Home.tsx` | |
| `/your-therapist` | `src/pages/AboutMe/index.tsx` | |
| `/where-we-can-meet` | `src/pages/WhereWeCanMeet/index.tsx` | |
| `/next-steps` | `src/pages/NextSteps/index.tsx` | Includes contact form and booking |
| `/privacy-policy` | `src/pages/PrivacyPolicy/index.tsx` | UK GDPR — footer link only, not in main nav |

### Adding a new page

1. Create `src/pages/<PageName>/index.tsx` and `<page-name>.scss`
2. Add a `<Route>` in `src/App.tsx` (before the `*` wildcard)
3. Add to `navigationData` in `src/constants/Navigation.ts` **only** if it should appear in the header nav
4. Add a `<url>` entry to `michoel/public/sitemap.xml`
5. Update this file and `michoel/README.md`

### Components

- `FadeInSection` — wraps content for scroll-triggered fade-in animations
- `ContactForm` — reusable contact/enquiry form
- `Header` / `Footer` — sitewide layout; Footer contains quick links including Privacy Policy

## Domain

`michaelmayerfeld.co.uk`
