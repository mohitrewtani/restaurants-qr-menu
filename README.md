# 🍽 Restaurant Menu App

A clean, mobile-first React app for displaying your restaurant menu via QR code.

## Features
- Browse menu by category (Starters, Mains, Breads, Desserts, Drinks)
- Search dishes by name or description
- Veg / Non-veg indicators on every item
- "Popular" badge for highlighted dishes
- `/qr` route generates a printable QR code pointing to your live menu
- Fully responsive — works perfectly on any phone

## Project Structure

```
restaurant-menu/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx        ← Restaurant name, address, hours
│   │   ├── CategoryTabs.jsx  ← Filter tabs
│   │   ├── SearchBar.jsx     ← Live search
│   │   ├── MenuSection.jsx   ← Groups items by category
│   │   ├── MenuCard.jsx      ← Individual dish card
│   │   └── QRPage.jsx        ← Printable QR code (/qr route)
│   ├── data/
│   │   └── menuData.js       ← ⭐ Edit this to update your menu
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open http://localhost:3000
```

## Updating Your Menu

Open `src/data/menuData.js` and edit:

- **`restaurant`** — name, tagline, address, phone, hours, currency
- **`categories`** — add or remove menu sections
- **`menuItems`** — add dishes with `name`, `description`, `price`, `veg`, `popular`, `category`

## Deploying

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://YOUR_USERNAME.github.io/restaurant-menu",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

### Vercel (easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the /build folder to https://app.netlify.com/drop
```

## Generating the QR Code

Once your app is live at a public URL, visit `/qr` (e.g. `https://your-app.vercel.app/qr`) to see a printable QR code card. Print and place on tables!

---

Made with React · [qrcode.react](https://github.com/zpao/qrcode.react)
