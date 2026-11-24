---
repo: "pipetboy2001/retroAchievements-Download-games"
name: "retroAchievements-Download-games"
description: "CheevosRoms — find RetroAchievements-compatible ROMs on archive.org, hash-verified so achievements (cheevos) unlock. Python CLI plus a Flask + Next.js web catalog."
readmeQualityOk: true
url: "https://github.com/pipetboy2001/retroAchievements-Download-games"
homepage: "https://cheevosroms.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [46, 43]
topics: ["python", "retroachievements", "archive-org", "cli", "flask", "nextjs", "typescript", "vercel", "web-scraping", "cheevos"]
stars: 7
forks: 0
openIssues: 2
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2024-10-05T06:26:33Z"
lastCommitAt: "2026-11-24T13:10:20Z"
lastReleaseAt: "2026-11-10T03:08:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 83
maintainers: ["pipetboy2001", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/867975730/78466246-a111-4a99-bbc8-4aff96c56166"
---

# 🎮 CheevosRoms

**CheevosRoms** es una aplicación en **Python** que facilita la descarga de ROMs compatibles con los logros de **RetroAchievements** 🏆.

Permite explorar un catálogo de más de 8.400 juegos, buscar por nombre o por hash, armar un carrito y descargar en lote — además del modo tradicional de "Want to Play" por consola. Está disponible tanto en **versión web** como en **scripts de consola**.

## 🌐 Catálogo web

Grid con portada, logros y versiones por juego; filtros rápidos por consola (y acceso al resto desde "+N más"); carrito persistido en tu navegador (`localStorage`, nunca en el servidor).

Pegás un hash y te dice si es válido, si está reconocido por RetroAchievements y si el enlace de descarga responde — antes de agregarlo al carrito.

"Descargar todo" abre el enlace de cada juego del carrito. En desarrollo: espejos adicionales (CoolROM), exportar el carrito como ZIP con estructura de carpetas lista para RetroArch/OnionOS/Batocera, verificar el hash de un archivo local sin subirlo, y conectar tu cuenta de RetroAchievements para traer tu "Want to Play" directo al catálogo.
