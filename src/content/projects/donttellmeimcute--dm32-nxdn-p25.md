---
repo: "donttellmeimcute/DM32-nxdn-p25"
name: "DM32-nxdn-p25"
description: "Open25-DM32 multimode firmware (FM, DMR, P25, NXDN, ysf) for the Baofeng DM-32UV — Motorola talk permit, pink theme, APRS"
readmeQualityOk: true
url: "https://github.com/donttellmeimcute/DM32-nxdn-p25"
language: "C"
languages: ["C", "Python"]
languagePcts: [59, 32]
stars: 75
forks: 21
openIssues: 1
closedIssues: 87
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2026-11-14T18:16:28Z"
lastCommitAt: "2026-11-26T23:36:08Z"
lastReleaseAt: "2026-11-16T21:41:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 41
maintainers: ["donttellmeimcute", "HallelPlancarte"]
openGraphImageUrl: "https://opengraph.githubassets.com/1592d86dfdeadd357095c42c6b82c412221eab24f9386808d718c4bd20d6a638/donttellmeimcute/DM32-nxdn-p25"
fundingLinks: ["KO_FI:https://ko-fi.com/lyraarsgoetia", "CUSTOM:https://throne.com/lyraarsgoetia"]
discussionCount: 2
---

# DM32-nxdn-p25 — NXDN-P25-DM32 multimodo para el Baofeng DM-32UV

**¿Quieres firmware para tu radio?** Regálamelo desde mi lista de deseos y lo porto: **<https://throne.com/lyraarsgoetia>** · *Want firmware for your radio? Gift it from my wishlist and I'll port it.*

Unete a mi grupo de telegram <https://t.me/+fGNVb8mR-eliYmMx>

Firmware abierto para el **Baofeng DM-32UV** con **DMR, P25, NXDN48, NXDN96, M17, YSF y D-STAR**.
El VFO recibe **FM comercial** por encima de 88 MHz y por debajo de 108 MHz. Para escuchar **105.7 MHz**,
teclea **1 0 5 7** y pulsa **OK**. Funciona con **RX past bands** desactivado. A 108 MHz comienza la recepción AM.
De **66 a 88 MHz** inclusive se puede recibir FM analógica con ancho de 12.5 o 25 kHz en VFO y canales guardados. Su sensibilidad requiere pruebas en el DM-32UV. Desde el 17 de noviembre de 2026 se compila sobre
[RadioFoundry](https://github.com/RadioFoundry/RadioFoundry) actual (commit `e89121e9`), que ya trae P25 y NXDN, más
los cambios de esta rama en [`integration/current/base.patch`](https://github.com/donttellmeimcute/DM32-nxdn-p25/blob/HEAD/integration/current/base.patch).
