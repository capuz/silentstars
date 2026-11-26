---
repo: "nicolvus/a6000-fw-decomp"
name: "a6000-fw-decomp"
description: "Ingeniería inversa del firmware Sony A6000: hallazgos, trazas REA/Ghidra, código de análisis y reglas de agentes"
readmeQualityOk: true
url: "https://github.com/nicolvus/a6000-fw-decomp"
language: "C"
languages: ["C"]
languagePcts: [72]
stars: 51
forks: 1
openIssues: 1
closedIssues: 2
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2026-10-20T00:17:30Z"
lastCommitAt: "2026-11-26T12:58:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 32
maintainers: ["nicolvus"]
openGraphImageUrl: "https://opengraph.githubassets.com/d602899cda3482ff4f2135fc472a492efcd4470bcd49d5411389a58089e47747/nicolvus/a6000-fw-decomp"
---

# Sony A6000 — obturador electrónico y CFW

Ingeniería inversa del firmware **3.21** de la Sony A6000 (ILCE-6000: BIONZ + microcontrolador Darwin) para
conseguir **obturación electrónica** y añadir funciones que la cámara no tiene. El repositorio contiene análisis,
parches, scripts y documentación; el firmware de Sony no se versiona aquí (lo descarga
`scripts/agent/bootstrap.sh` desde el servidor de Sony).

## Estado ahora (25-11-2026)

| Área | Cómo está | Evidencia |
|---|---|---|
