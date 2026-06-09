# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static HTML website for Motheo TVET College, deployed via GitHub Pages to `www.motheotvet.edu.za` (CNAME). No build step, no package manager, no framework — all pages are plain `.html` files served directly.

## Development

Open any `.html` file in a browser directly, or run a local server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

There are no build, lint, or test commands.

## Deployment

Push to `main` on `git@github.com:MotheoTVET/MotheoTVET.github.io.git`. GitHub Pages serves the repo root automatically.

## Architecture

Every page is a self-contained `.html` file. There is no templating engine — header, nav, and footer are copy-pasted into every page.

### Shared assets
| Path | Purpose |
|---|---|
| `css/main.min.css` + `css/default.css` | Base styles (Astra theme, originally from WordPress) |
| `js/jquery.min.js` | jQuery, used by inline scripts |
| `js/default.js` | WordPress emoji support script (do not modify) |
| `js/nav-highlight.js` | Auto-highlights the active nav link based on `window.location.pathname` |
| `imgs/motheo-logo.png` | Header logo used on all pages |
| `favicon.ico` | Site favicon (root-level) |
| `files/` | Downloadable PDFs (vacancy adverts, etc.) |

Tailwind CSS is loaded from CDN (`https://cdn.tailwindcss.com`) on every page. All layout and component styling uses Tailwind utility classes.

### Navigation structure
The nav is duplicated in every file with two variants:
- **Desktop** (`hidden md:flex` nav inside `<header>`) — hover dropdowns via `group-hover`
- **Mobile** (`#mobileMenu` div) — toggled by `#menuBtn`, with `toggleDropdown()` / `toggleDropdown2()` for sub-menus

Nav items: Home → About ▾ (Profile, Broad Management, Activities, Gallery) → Registration ▾ (Prospectus) → Campuses → Academic Support → Partnerships → Vacancies → Contact

### Campus detail pages
`campus_*.html` files (one per campus) are linked from `campuses.html`. Each follows the same layout: full-width hero image, contact info card, location card, "← Back to Campuses" link. `nav-highlight.js` maps any `campus_*.html` filename to the "Campuses" nav entry.

### Page title convention
`Page Name – Motheo TVET College` (en-dash, not hyphen).

## When adding or editing pages

- Copy the header/nav/footer block from an existing page like `contact.html` — it is the canonical template.
- Include `<script src="js/nav-highlight.js"></script>` before `</body>` so the active nav item is highlighted.
- Favicon links use `favicon.ico` (root-relative), not the `imgs/` folder.
- The mobile menu `#mobileMenu` div must sit **inside** the `<header>` element so the fixed-position header contains it correctly.
