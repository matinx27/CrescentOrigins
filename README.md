# CrescentOrigins

Crescent Origins health supplements.

## Environment setup

This project is a static website and does not require dependency installation.

### Requirements
- Node.js and npm (to run npm scripts)
- Python 3 (for the local static server)

## Run locally

### Option 1: npm script (recommended)
```bash
npm start
```

This serves the site at:
- `http://localhost:4173`

You can override the port:
```bash
PORT=3000 npm start
```

### Option 2: Python directly
```bash
python3 -m http.server 4173
```

## Project files
- `index.html` - page structure
- `styles.css` - visual design and layout
- `script.js` - slide-down interactions
