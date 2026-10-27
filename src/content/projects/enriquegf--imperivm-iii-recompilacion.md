---
repo: "EnriqueGF/imperivm-iii-recompilacion"
name: "imperivm-iii-recompilacion"
description: "Reconstrucción verificable de Imperivm III con mapa de progreso"
readmeQualityOk: true
url: "https://github.com/EnriqueGF/imperivm-iii-recompilacion"
language: "C++"
languages: ["C++"]
languagePcts: [71]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-26T09:19:54Z"
lastCommitAt: "2026-10-27T12:41:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 41
maintainers: ["EnriqueGF"]
openGraphImageUrl: "https://opengraph.githubassets.com/a59c6bb3363b087f6dbbe125e9e2f70d721115af1717ba9e27c6226995f73843/EnriqueGF/imperivm-iii-recompilacion"
---

# Imperivm III: reconstrucción de `gbr.exe`

Objetivo: obtener código fuente que compile un ejecutable idéntico byte a byte al `gbr.exe` instalado. El criterio de éxito es SHA-256 **F8B9518FFE31CBBB1C2C4236426DB866295AC9BE4C13794537B999B05AA647F7** para un archivo de 4 456 448 bytes. El lanzador `Inicio del juego.exe` es otro ejecutable y no forma parte de esta reconstrucción por ahora.

## Progreso visual

Los ocho rangos de `.text` muestran el porcentaje de bytes clasificados como código por IDA que ya tienen una coincidencia exacta. Cada cuadradito corresponde a un rango de direcciones y su parte verde indica la fracción verificada. La cabecera PE, `.rdata`, `.data`, `.tls` y `.rsrc` también coinciden byte a byte. El mapa se regenera con `python tools/generate_progress_image.py` después de actualizar `notes/coverage.json` y `notes/recovered_text_layout.json`.

El porcentaje general cuenta únicamente bytes que IDA clasifica como código. Incluye funciones recompiladas y rangos conservados explícitamente como bytes de ensamblador; **100 % de coincidencia binaria no significa 100 % de descompilación a C/C++ de alto nivel**. Algunos tramos de función incluyen datos intercalados;…
