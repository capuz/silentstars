---
repo: "terremotovenezuela/mapa-emergencia-rescate"
name: "mapa-emergencia-rescate"
description: "Mapa de emergencia y rescate: reportes ciudadanos en tiempo real para coordinar ayuda humanitaria (Next.js + Leaflet + Upstash Redis)"
url: "https://github.com/terremotovenezuela/mapa-emergencia-rescate"
homepage: "https://landing-bay-sigma-83.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 22
forks: 20
openIssues: 44
closedIssues: 6
watchers: 0
contributors: 19
recentReleases: 0
createdAt: "2026-06-25T02:18:10Z"
lastCommitAt: "2026-06-28T01:46:38Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 77
undervaluedScore: 47
maintainers: ["osmarbetancourt", "marsidev", "andresg747"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c8bf8a7094a169fc7bff95f1975e7c047e49390965874577faf34c328afdc55/terremotovenezuela/mapa-emergencia-rescate"
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

## Optimizaciones para alto flujo de uso

- **Caché de CDN** en `GET /api/reports` (`s-maxage=4, stale-while-revalidate=30`):
  miles de usuarios haciendo polling se sirven desde el edge de Vercel y no
  golpean la base de datos en cada petición.
- **Actualizaciones optimistas**: el reporte propio aparece al instante aunque el
  CDN sirva una versión cacheada de la lista durante unos segundos.
- **Rate limiting** por IP en `POST` y…
