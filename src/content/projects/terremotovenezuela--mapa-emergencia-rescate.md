---
repo: "terremotovenezuela/mapa-emergencia-rescate"
name: "mapa-emergencia-rescate"
description: "Mapa de emergencia y rescate: reportes ciudadanos en tiempo real para coordinar ayuda humanitaria (Next.js + Leaflet + Upstash Redis)"
url: "https://github.com/terremotovenezuela/mapa-emergencia-rescate"
homepage: "https://landing-bay-sigma-83.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 24
forks: 21
openIssues: 44
closedIssues: 6
watchers: 0
contributors: 20
recentReleases: 0
createdAt: "2026-06-25T02:18:10Z"
lastCommitAt: "2026-06-28T03:08:04Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 77
undervaluedScore: 46
maintainers: ["osmarbetancourt", "marsidev", "andresg747"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b564699c58b2548d3d45462b6dcbfd24f90e34b8e0765b0215cf3b0c4166c43/terremotovenezuela/mapa-emergencia-rescate"
---

# Mapa de Emergencia y Rescate: Terremoto en Venezuela

Plataforma de reporte ciudadano en tiempo real para coordinar rescates,
identificar daños estructurales y organizar la entrega de ayuda humanitaria.

Construida con **Next.js (App Router)**, **Leaflet + OpenStreetMap** (sin API key)
y **Neon Postgres**. Pensada para alto tráfico y para funcionar bien en móvil.

## Funcionalidad

- Mapa interactivo: toca/clic en un punto para abrir el formulario de reporte.
- 3 tipos de marcadores: 🔴 Emergencia crítica, 🟡 Suministros, 🟢 Centro de acopio.
- Panel lateral con lista de reportes, contadores y filtro por tipo.
- Botón "Atendido" para limpiar reportes ya resueltos.
- Refresco automático cada 5 s (polling), pausado cuando la pestaña no está visible.

## Diseño

El sistema visual vive en [`design/DESIGN.md`](design/DESIGN.md). Sigue el
formato DESIGN.md de Google para combinar tokens de diseño con criterios
humanos de uso, y debe revisarse antes de cambios visuales en la interfaz
pública.

## Optimizaciones para alto flujo de uso

- **Caché de CDN** en `GET /api/reports` (`s-maxage=4, stale-while-revalidate=30`):
  miles de usuarios haciendo polling se sirven desde el edge de…
