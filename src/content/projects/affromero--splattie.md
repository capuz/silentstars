---
repo: "affromero/splattie"
name: "splattie"
description: "Generate rigged interactive 3D Gaussian assets for the web."
readmeQualityOk: true
url: "https://github.com/affromero/splattie"
homepage: "https://splattie.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["3dgs", "avatar", "flame", "gaussian-splatting", "interactive", "typescript", "web-component"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-05-26T22:54:26Z"
lastCommitAt: "2026-08-28T15:32:38Z"
lastReleaseAt: "2026-08-28T14:01:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 55
maintainers: ["affromero", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3db417e94bc7d0d183dd1c33f549647b4f1d2640bac806a6e9d26a1d1785d2ea/affromero/splattie"
---

# Splattie

**Interactive rigged 3D Gaussian assets from one image.**

*Heads, bodies, and objects that follow the cursor, pose on hover, and run at 60fps in any browser.*

</div>

---

</p>

Splattie turns one image into an **interactive rigged 3D Gaussian Splatting asset** — a **head**, **full body**, or **object** — that lives on your website. Eyes follow the cursor, heads and torsos turn toward visitors, bodies add cursor-driven arm IK, and objects expose skeleton handles for pose editing. Hover and click trigger smooth state transitions. Rendered client-side. One file, one tag.

```html
<splattie-widget src="asset.splattie"></splattie-widget>
<script src="https://unpkg.com/@afromero/splattie-widget"></script>
```

This repo contains the **landing page**, the **GPU generation pipeline**, and the **`.splattie` format spec**. The web component itself lives in a separate repo: [**affromero/splattie-widget**](https://github.com/affromero/splattie-widget) (published as [`@afromero/splattie-widget`](https://www.npmjs.com/package/@afromero/splattie-widget) on npm). If you only want to embed a `.splattie` asset on your site, you don't need this repo.

<details>…
