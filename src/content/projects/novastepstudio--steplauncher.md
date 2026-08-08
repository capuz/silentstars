---
repo: "NovaStepStudio/StepLauncher"
name: "StepLauncher"
description: "¡El launcher definitivo de Minecraft creado con Wails v2.13.0, Rapido, Eficiente, y Multiplataforma!"
readmeQualityOk: true
url: "https://github.com/NovaStepStudio/StepLauncher"
homepage: "https://steplauncher.pages.dev"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [41, 40]
topics: ["fabric", "forge", "legacyfabric", "minecraft", "minecraft-launcher-core", "minecraft-node", "neoforge", "novastepstudios", "open-source", "optifine"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2025-11-07T01:32:17Z"
lastCommitAt: "2026-08-08T04:32:23Z"
lastReleaseAt: "2026-08-07T16:39:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 42
maintainers: ["Stepnicka012"]
openGraphImageUrl: "https://opengraph.githubassets.com/56df763b37c30142eb65045eb287e217fb6319a954b8f4f240eb67193c83326e/NovaStepStudio/StepLauncher"
---

# StepLauncher

**El launcher no premium para Minecraft: Java Edition, creado por NovaStepStudio**

Impulsado por **Wails v2** + **Go** + **Vue 3** &nbsp;·&nbsp; <img src="frontend/web/assets/logo-wails.png" alt="Wails" width="64" align="center">

</div>

---

## 📖 Sobre

**StepLauncher** es un launcher de **Minecraft: Java Edition** no premium, desarrollado por **NovaStepStudio** y construido sobre **Wails v2** (Go + WebView2) con un frontend en **Vue 3 + TypeScript** altamente personalizable. Detrás de la interfaz funciona el motor del launcher (`internal/Handlers/Engine`), integrado en el programa: descargas, lanzamiento, modloaders, cuentas, caché, historial y actualizaciones con soporte multi-SO (Windows, Linux y macOS).

## ✨ Funcionalidades

### 🎮 Juego

- **Descarga de versiones**: gestor de descargas concurrente (1–16 hilos) con pausa, reanudación, cancelación, límite de velocidad, reintentos automáticos, detección de descargas estancadas y verificación **SHA1**.
- **Lanzamiento de Minecraft**: detección de Java (auto, sistema, oficial o custom), construcción de classpath/natives, argumentos JVM y del juego, proceso en segundo plano y **streaming de logs** con parseo en…
