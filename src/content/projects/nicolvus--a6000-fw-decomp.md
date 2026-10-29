---
repo: "nicolvus/a6000-fw-decomp"
name: "a6000-fw-decomp"
description: "Ingeniería inversa del firmware Sony A6000: hallazgos, trazas REA/Ghidra, código de análisis y reglas de agentes"
readmeQualityOk: true
url: "https://github.com/nicolvus/a6000-fw-decomp"
language: "C"
languages: ["C"]
languagePcts: [73]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-20T00:17:30Z"
lastCommitAt: "2026-10-29T21:24:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 45
maintainers: ["nicolvus"]
openGraphImageUrl: "https://opengraph.githubassets.com/99e7ba68dbf7fa5633f9cdb3601996fbb02562a4c2ada0eb79978bff522d8dc3/nicolvus/a6000-fw-decomp"
---

# Sony A6000 — Silent Shutter

**Hito alcanzado: la Sony A6000 (ILCE-6000) dispara en silencio.** Con el firmware modificado **3.23** instalado en la cámara
real, el obturador mecánico deja de accionarse en la captura normal y la cámara hace fotos sin error. Es el resultado de la
ingeniería inversa del firmware 3.21 de la A6000 (BIONZ + microcontrolador Darwin) y de un parche de **2 bytes** sobre Darwin.

> **Estado:** funcional en una cámara real, confirmado por el usuario tras instalar la 3.23 (T040, 27-10-2026). Las capturas y
> medidas de esa validación aún no están archivadas en el repositorio (ver [Límites](#límites-y-riesgos)).
> Instalar firmware modificado puede dejar la cámara inservible. **No hay recuperación independiente demostrada.** Úsalo bajo tu
> responsabilidad y solo tras leer [Riesgos](#límites-y-riesgos).

## Cómo funciona

El obturador de la A6000 lo gobierna **Darwin**, un microcontrolador aparte (`darwin_core`), que mueve las cortinillas mecánicas
y las rearma tras cada foto. La solución actúa sobre Darwin en dos pasos, apilados:

| Paso | Cambio en `darwin_core.bin` (3.21) | Efecto |
|---|---|---|
| **Tipo 0** | `0x20c78..0x20c7f` → `b 0x20c8e; nop; nop;…
