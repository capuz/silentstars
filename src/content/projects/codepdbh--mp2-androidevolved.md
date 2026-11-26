---
repo: "codepdbh/mp2-androidevolved"
name: "mp2-androidevolved"
description: "Port nativo experimental de Max Payne 2 (PC) a Android ARM64 mediante recompilación estática"
readmeQualityOk: true
url: "https://github.com/codepdbh/mp2-androidevolved"
language: "C++"
languages: ["C++"]
languagePcts: [64]
stars: 12
forks: 1
openIssues: 24
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-10-27T15:21:39Z"
lastCommitAt: "2026-11-26T15:26:36Z"
lastReleaseAt: "2026-11-17T19:57:59Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 68
undervaluedScore: 33
maintainers: ["codepdbh"]
openGraphImageUrl: "https://opengraph.githubassets.com/641bb812b4607ea84febcbe113abe6890cf10d970bcfe2aa0e9f9287d927518a/codepdbh/mp2-androidevolved"
---

> **Important**
>
> **Este repositorio no incluye el juego.** Necesitas tu propia copia de la versión de PC. No contiene
> ejecutables, DLL, archivos `.ras`, vídeos, audio ni código recompilado del juego de PC. La APK incluye el
> código recompilado enlazado al runtime nativo, pero no los archivos de datos del juego.

## Qué es

El proyecto traduce el código x86 del juego de PC a C, lo compila para ARM64 y lo ejecuta en Android
sobre un runtime Win32 propio. No usa Wine, Box64, Winlator ni QEMU: la lógica, la física, los niveles y
el Bullet Time son los del juego original, no reimplementaciones.

```
Juego de PC x86 → PCRecomp → C → runtime Win32 propio → Android NDK ARM64 → DXVK/Vulkan → APK nativa
```

- **Gráficos:** Direct3D 8 → frontend D3D8 de DXVK → D3D9 de DXVK-native → Vulkan.
- **Sonido:** DirectSound → mezclador propio → AAudio.
- **Panorámico:** el WidescreenFix de ThirteenAG se ejecuta recompilado, como en PC.
