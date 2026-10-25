---
repo: "SPxMM3R1/lista-m3u"
name: "lista-m3u"
description: "Lista M3U para Android TV con actualizacion automatica cada tres horas"
readmeQualityOk: true
url: "https://github.com/SPxMM3R1/lista-m3u"
language: "Python"
languages: ["Python"]
languagePcts: [81]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-08-01T22:06:50Z"
lastCommitAt: "2026-10-25T22:10:37Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 37
maintainers: ["SPxMM3R1", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d06e7bf8ef4f1c31511947f6eb07ba6c773cafe0ecf93eeea2a24331936f26c4/SPxMM3R1/lista-m3u"
---

# Lista M3U para Android TV

Repositorio publico de la lista M3U principal para Android TV. El mantenimiento
esta separado en dos procesos independientes: uno actualiza canales,
resolutores y salud; el otro construye la EPG sobre el catalogo completo. Ambos
usan ventanas fijas de seis horas y publican sus salidas sin sobrescribirse.

El icono del proyecto se conserva como un recurso independiente de los logos de
canales y no participa en la generación de las listas ni de la EPG.

## URLs para el reproductor

Lista M3U:

`https://raw.githubusercontent.com/SPxMM3R1/lista-m3u/main/m3u.m3u`

Lista M3U externa (candidatos del catalogo aún no promovidos manualmente):

`https://raw.githubusercontent.com/SPxMM3R1/lista-m3u/main/m3u-externa.m3u`

Alias cortos oficiales para el reproductor (sin acortador externo):

- Principal: `https://raw.githubusercontent.com/SPxMM3R1/lista-m3u/main/1.m3u`
- Externa: `https://raw.githubusercontent.com/SPxMM3R1/lista-m3u/main/2.m3u`

`1.m3u` y `2.m3u` son copias sincronizadas automáticamente de las dos listas
canónicas. Al estar dentro del repositorio público, usan HTTPS y no tienen un
TTL de acortador; seguirán disponibles mientras se conserve este…
