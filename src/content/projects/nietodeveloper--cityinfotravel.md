---
repo: "NietoDeveloper/CityInfoTravel"
name: "CityInfoTravel"
description: "City Info Travel ✈️ — a vanilla JavaScript travel sales app displaying tourist city info and pricing (Barcelona, Rome, Paris, London). Dynamic content swapping on click, no frameworks or dependencies. A tutorial-style project hosted on GitHub Pages. By Manuel Nieto (NietoDeveloper). 🇨🇴"
readmeQualityOk: true
url: "https://github.com/NietoDeveloper/CityInfoTravel"
homepage: "https://nietodeveloper.github.io/CityInfoTravel/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [60, 23]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-12T09:30:43Z"
lastCommitAt: "2026-08-22T04:07:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 63
maintainers: ["NietoDeveloper"]
openGraphImageUrl: "https://opengraph.githubassets.com/e466fb06c332c2b7f67d00944442627e2cc1f78f771d544f629804582cc9b290/NietoDeveloper/CityInfoTravel"
---

<br/>

  </a>
  </a>
  </a>
  </a>
  </a>
</p>

  </a>
  </a>
</p>

</div>

---

## 📋 Overview

**City Info Travel** is a travel sales application built with vanilla JavaScript. This tutorial-style project walks through building an app that displays information about different tourist cities and their associated prices. No frameworks or dependencies required.

---

## 🗂️ Project Structure

```text
CityInfoTravel/
└── assets/
    ├── css/          # Stylesheets
    ├── img/            # City images
    └── js/               # JavaScript logic (app.js, ciudades.js)
```

---

## 🔄 City Selection Flow

```mermaid
flowchart LR
    A([👤 Visitor]) -->|Clicks City Link| B[Click Event Listener]
    B -->|Toggle 'active' Class| C[Update Nav State]
    B -->|Look Up City| D[obtenerContenido]
    D -->|Reads| E[ciudades.js\nBarcelona / Rome / Paris / London]
    E -->|Data| F[Update DOM]
    F --> G([📄 Title · Subtitle · Description · Price])

    style A fill:#FFD700,color:#000,stroke:#FFD700
    style D fill:#F7DF1E,color:#000,stroke:#F7DF1E
    style G fill:#000,color:#FFD700,stroke:#FFD700
```

---

## 🛠️ Technologies Used

| Layer | Technologies |
|:------|:-------------|
| 🎨…
