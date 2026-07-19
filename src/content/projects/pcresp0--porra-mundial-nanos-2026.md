---
repo: "pCresp0/porra-mundial-nanos-2026"
name: "porra-mundial-nanos-2026"
description: "Web Porra Mundial 2026 — Competencia de predicciones con standings en vivo,  puntuación automática desde API, resúmenes DAZN integrados y control  desde Excel privado. Frontend estático en GitHub Pages, backend Python."
readmeQualityOk: true
url: "https://github.com/pCresp0/porra-mundial-nanos-2026"
homepage: "https://pcresp0.github.io/porra-mundial-nanos-2026/"
language: "Python"
languages: ["Python", "CSS"]
languagePcts: [53, 35]
topics: ["football", "futbol", "mundial", "mundial2026", "porra", "quiniela", "soccer", "worldcup", "worldcup2026", "worldcup26"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-12T00:33:06Z"
lastCommitAt: "2026-07-19T06:16:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b219578e32ec218bbacd2c54bdfb73094d08548d11329f8d1b6b6b128afb19db/pCresp0/porra-mundial-nanos-2026"
---

</p>

<h1 align="center">Porra Mundial «Los Nanos» 2026</h1>

  <strong>Dashboard web interactivo para seguir una porra privada del Mundial FIFA 2026</strong><br>
  &nbsp;·&nbsp;
</p>

</p>

---

## ¿Qué es esto?

Un dashboard web construido **a mano** (sin frameworks de frontend) para seguir una porra de 6 participantes del Mundial FIFA 2026. Lee los pronósticos de un Excel ADMIN, obtiene resultados reales de una API pública y actualiza la web automáticamente tras cada partido mediante GitHub Actions.

**Dos modos de ejecución que comparten la misma interfaz:**
- **Local (dev):** Flask sirve los datos en caliente desde el Excel en `localhost:5050`
- **Producción:** GitHub Pages sirve `index.html` + `data.json` estático — sin servidor

---

## Demo

🔗 **[https://pcresp0.github.io/porra-mundial-nanos-2026/](https://pcresp0.github.io/porra-mundial-nanos-2026/)**

---

## Dos modos de acceso

La misma web se sirve en dos «modos» según el enlace con el que se entre. El modo elegido se recuerda en el navegador (`localStorage`).

| Modo | Enlace | Qué se ve |
|------|--------|-----------|
| 🟡 **Porra** | `…/?porra=1312` | Todo: pronósticos por jugador, puntos, clasificación de la…
