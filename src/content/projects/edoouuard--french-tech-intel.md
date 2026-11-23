---
repo: "Edoouuard/french-tech-intel"
name: "french-tech-intel"
description: "French startup fundraising & M&A intelligence dashboard "
readmeQualityOk: true
url: "https://github.com/Edoouuard/french-tech-intel"
homepage: "https://www.insights-french-tech.com/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [77, 23]
stars: 26
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-18T18:49:25Z"
lastCommitAt: "2026-11-23T12:24:02Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 39
maintainers: ["claude", "Edoouuard", "EdouardGB"]
openGraphImageUrl: "https://opengraph.githubassets.com/0522d155c9252e53c3d45d1d62dafa9dee076efc83f601c1b21b1f6cec4e4135/Edoouuard/french-tech-intel"
---

# Insights French Tech

Intelligence de marché sur la French Tech : levées de fonds, exits & M&A, fonds VC (dont les fonds en cours de déploiement), PE Watch, comparables et acquéreurs. Site : https://www.insights-french-tech.com

## Structure

| Chemin | Rôle |
|---|---|
| `index.html` | Page publiée. Contient les données `var XX_BASE=[…];` (une ligne par jeu), mises à jour chaque semaine. |
| `assets/app.js` | Interface (vues, graphiques, fiches, recherche ⌘K, page MCP). |
| `assets/insights-lib.js` | Normalisation des données `*_BASE`, partagée avec le serveur MCP. |
| `assets/vehicles.js`, `assets/logos.js` | Fonds VC européens en déploiement (vue « Fonds européens ») et logos des investisseurs. |
| `src/shell.html` | Gabarit HTML/CSS d'`index.html`. |
| `api/mcp.js`, `lib/` | Serveur MCP hébergé sur `/mcp` (fonction Vercel). |
