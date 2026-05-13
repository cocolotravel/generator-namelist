# Cocolo NameList Generator

A single-file, offline-capable web tool for building hotel name lists for tour groups. Built for Cocolo Travel.

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
- Fully offline — no backend, no build step required

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

## File Size

`index.html` is approximately 3.1 MB, primarily due to the embedded NotoSansJP font required for offline Japanese text rendering in PDFs.
