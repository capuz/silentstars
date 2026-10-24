---
repo: "CypherNoodle/FNV-nx"
name: "FNV-nx"
description: "Fallout: New Vegas Xbox 360 → Nintendo Switch. Experimental native port"
readmeQualityOk: true
url: "https://github.com/CypherNoodle/FNV-nx"
language: "C"
languages: ["C", "Python"]
languagePcts: [47, 41]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-12T21:28:49Z"
lastCommitAt: "2026-10-24T00:14:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 43
maintainers: ["CypherNoodle"]
openGraphImageUrl: "https://opengraph.githubassets.com/886e28c624231f7d874c8bc1a024e83ab6bd8615e7fb6074404097c69132dff2/CypherNoodle/FNV-nx"
---

# FNV-nx — rama PC nativa

El runtime incorpora un [heap de proceso guest32](https://github.com/CypherNoodle/FNV-nx/blob/HEAD/pc/docs/native-windows-heap.md)
con imports x86 traducidos, heaps privados y presupuesto explicito. Hilos guest, SEH y el
arranque completo del motor siguen pendientes.
Tambien hay [secciones criticas e Interlocked nativos](https://github.com/CypherNoodle/FNV-nx/blob/HEAD/pc/docs/native-windows-sync.md),
verificados mediante llamadas x86 sinteticas y comparaciones con Windows.
Los [eventos sin nombre](https://github.com/CypherNoodle/FNV-nx/blob/HEAD/pc/docs/native-windows-events.md) ya soportan Set/Reset,
handles de generacion y espera individual. Tambien hay [semaforos, mutex y esperas multiples](https://github.com/CypherNoodle/FNV-nx/blob/HEAD/pc/docs/native-windows-kernel-waits.md); hay [hilos guest administrados](https://github.com/CypherNoodle/FNV-nx/blob/HEAD/pc/docs/native-windows-workers.md) y [contadores de rendimiento](https://github.com/CypherNoodle/FNV-nx/blob/HEAD/pc/docs/native-windows-time.md). Tambien hay [inicializacion de TLS estatico PE32](https://github.com/CypherNoodle/FNV-nx/blob/HEAD/pc/docs/native-pe-tls.md) para un EXE sin…
