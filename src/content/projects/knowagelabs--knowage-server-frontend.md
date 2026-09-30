---
repo: "KnowageLabs/Knowage-Server-Frontend"
name: "Knowage-Server-Frontend"
description: "The Open Source Advanced Analytics and Business Intelligence Suite - Vue Js Frontend"
readmeQualityOk: true
url: "https://github.com/KnowageLabs/Knowage-Server-Frontend"
homepage: "http://www.knowage-suite.com"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [78, 21]
topics: ["advanced-analytics", "business-intelligence", "dashboard"]
stars: 11
forks: 8
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2023-04-26T13:19:43Z"
lastCommitAt: "2026-09-30T09:56:43Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 76
maintainers: ["dbulatovicx32", "eng-dedalus", "davverna"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecdeafe2a319c2368fe304bfe23a19cd155fa081a452bb091d1e59063cd0a6e9/KnowageLabs/Knowage-Server-Frontend"
---

# KNOWAGE Server Frontend

## Project setup

```
npm install
```

### Local environment variables

Create an **.env.local** file in the project root and set the following properties depending on your environment:

-   VITE_API_URL=http://localhost:8080

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Jest Unit-tests

```
npm run test:unit
```

## Project Structure (src)

```
.
├── assets
│   └── ...
├── components
│   ├── knMenu
│   │   ├── KnMenu.spec.js
│   │   ├── KnMenu.vue
│   │   └── KnMenuItem.vue
│   └── ...
├── helpers
├── i18n
│   ├── en_BG.json
│   ├── it_IT.json
│   └── ...
├── modules
│   ├── managers
│   │   ├── galleryManagement
│   │   │   ├── GalleryManagement.routes.js
│   │   │   ├── GalleryManagement.spec.js
│   │   │   └── GalleryManagement.vue
│   │   └── managers.routes.js
│   └── ...
│   └── shared
│       ├── 404.vue
│       └── IframeRenderer.vue
├── App.i18n.js
├── App.routes.js
├── App.spec.js
├── App.store.js
├── App.vue
├── main.ts
```

## Translation contribution

If you are interested in translating KNOWAGE in one of the languages not available at the moment you…
