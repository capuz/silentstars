---
repo: "Ian-Lusule/Proxies-GUI"
name: "Proxies-GUI"
description: "​Live and interactive public proxy list with a dashboard UI. Automatically scrapes, tests, and updates a list of working proxies for public use."
readmeQualityOk: true
url: "https://github.com/Ian-Lusule/Proxies-GUI"
homepage: "https://ian-lusule.github.io/Proxies-GUI/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [56, 25]
topics: ["freeproxies", "http-proxy", "proxies", "proxy", "proxy-checker", "proxy-server", "socks5", "web-scraping"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-20T08:53:44Z"
lastCommitAt: "2026-08-19T04:09:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 72
maintainers: ["Ian-Lusule"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a384a3e4fff545c577fcb21560ba76e07905ffe681a01a0b78a5b622e483462/Ian-Lusule/Proxies-GUI"
---

# 🌐 Proxies GUI

An **interactive proxy list interface** built with **HTML, CSS, and JavaScript**. It dynamically loads a JSON file of tested proxies and provides:

✅ Filters by Country, Protocol, and Speed  
✅ Search by IP  
✅ Dark Mode Toggle (persistent via `localStorage`)  
✅ Sorting by column (IP, Protocol, Country, Latency)  
✅ Pagination (20 items per page)  
✅ Copy to Clipboard button for each proxy  
✅ Auto-Refresh (default: every 30 seconds, without losing current page)  
✅ Loading Spinner for better UX  

---

## 📂 Project Structure
```
Proxies-GUI/
│   index.html          # Main HTML page
│   .nojekyll           # Disables Jekyll for GitHub Pages
├── styles/
│   └── styles.css      # Stylesheet
├── scripts/
│   └── proxyLogic.js   # Frontend logic
└── assets/
    └── tested_proxies.json # Proxies list (dynamically generated)
```

---

## ✅ Features
- **Responsive Design**: Works on desktop and mobile.
- **Dark Mode**: Toggle persists between sessions.
- **Live Data**: Proxies auto-refresh every 30s.
- **Filtering & Search**: Find proxies by IP, country, protocol, or speed.
- **Sorting**: Click on headers to sort.
- **Pagination**: Handles large lists efficiently.
-…
