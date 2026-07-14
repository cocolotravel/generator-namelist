# Cocolo NameList Generator

A single-file web tool for building hotel name lists for tour groups. Built for Cocolo Travel.

## Branding

The UI follows the COCOLO Travel brand system. All brand assets — the cloud logo, the design tokens (colors/type scale), and the Roslindale webfont — are pulled at runtime from `assets.cocolotravel.com`, never bundled into the repo:

| Asset | Source |
|---|---|
| Favicon / logo mark | `https://assets.cocolotravel.com/logos/png/cloud_logo_full_sumi.png`, `.../logos/svg/logo_cloud_logo_linear_washi.svg` |
| Design tokens (CSS custom properties) | `https://assets.cocolotravel.com/brand/tokens.css` |
| Roslindale (display typeface) | `https://assets.cocolotravel.com/fonts/RoslindaleVariable[...].woff2` |
| Inter (text typeface) | Google Fonts CDN (`fonts.googleapis.com`) — not hosted on the COCOLO asset host, so it's loaded from Google Fonts instead |

Because of this, the page needs network access to `assets.cocolotravel.com` and `fonts.googleapis.com` to render fully on-brand; functionality (name list building, PDF/Excel export) still works without it, just with fallback system fonts/colors.

## Features

### Guest Management
- Add guests with family name, first name, gender, date of birth, nationality, passport number, expiry date, and dietary requirements
- Drag guests from the pool into room cards
- Validation indicators (⚠️ warnings, ⛔ errors) for missing or invalid passport data, expiring passports, and missing fields

### Room Management
- Add Single, Twin, Double, or Triple rooms per hotel
- Drag-and-drop to reorder rooms
- Auto-create rooms: automatically assign all unassigned guests into rooms of a chosen type
- Duplicate rooms across hotels

### Multi-Hotel Support
- Manage multiple hotels per tour via tabs
- Each hotel has its own name, check-in/check-out dates, rooms, and arrival notes
- Duplicate or remove hotels as needed

### Export
- **PDF** — generates one PDF per hotel, with a bilingual table (English/Japanese headers), room-by-room guest list, and arrival notes. Uses an embedded NotoSansJP font so Japanese characters render correctly offline.
- **Excel** — exports all hotels to a single `.xlsx` file with one sheet per hotel

### Drafts
- Save up to 10 drafts in browser `localStorage`
- **Export drafts** — download all drafts as a JSON file (`namelist_drafts_YYYY-MM-DD.json`)
- **Import drafts** — load drafts from a JSON file (e.g. from another device), with duplicate detection

### Other
- Undo / Redo (Ctrl+Z / Ctrl+Y)
- Keyboard shortcuts for common actions
- No backend, no build step required (brand fonts/tokens load from `assets.cocolotravel.com` — see [Branding](#branding))

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `T` | Add Twin room |
| `S` | Add Single room |
| `D` | Add Double room |
| `R` | Add Triple room |
| `Ctrl+Z` | Undo |
| `Ctrl+Y` | Redo |
| `Ctrl+S` | Save draft |
| `Ctrl+I` | Open import modal |
| `?` | Show shortcuts modal |
| `Esc` | Close modal |

## Usage

Open `index.html` directly in a browser — no server or installation needed.

To deploy, copy `index.html` to any static hosting service (GitHub Pages, Netlify, etc.).

## Dependencies

All dependencies are either bundled inline or loaded from CDN:

| Library | Purpose |
|---------|---------|
| [jsPDF](https://github.com/parallax/jsPDF) | PDF generation |
| [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) | Table layout in PDF |
| [SheetJS (xlsx)](https://sheetjs.com/) | Excel export |
| NotoSansJP (TTF, base64) | Japanese character rendering in PDF |
| COCOLO brand tokens / Roslindale | Loaded from `assets.cocolotravel.com` (see [Branding](#branding)) |
| Inter | Loaded from Google Fonts |

## File Size

`index.html` is approximately 3.1 MB, primarily due to the embedded NotoSansJP font required for offline Japanese text rendering in PDFs.
