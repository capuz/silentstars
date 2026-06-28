---
repo: "diggsweden/rest-api-profil-lint-processor"
name: "rest-api-profil-lint-processor"
description: "RAP-LP ( REST API-profil Lint Processor ) är ett verktyg som granskar en OpenAPI-specifikation mot den nationella REST API-profilen. Verktyget identifierar syntaxfel och avvikelser från riktlinjer, vilket gör det enklare att snabbt hitta och rätta till problem."
url: "https://github.com/diggsweden/rest-api-profil-lint-processor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 6
forks: 2
openIssues: 26
closedIssues: 211
watchers: 7
contributors: 16
recentReleases: 1
createdAt: "2023-10-04T11:29:38Z"
lastCommitAt: "2026-06-28T01:45:21Z"
lastReleaseAt: "2026-06-16T16:09:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 75
maintainers: ["renovate[bot]", "mmjohansson", "fredriknordlander"]
openGraphImageUrl: "https://opengraph.githubassets.com/d657cad186f9eeb780dde2b489ec28259036b07a7860195768a0aa5c010bf6ab/diggsweden/rest-api-profil-lint-processor"
---

# REST API-profil - Lint Processor (RAP-LP)

## Beskrivning

RAP-LP är ett verktyg för att validera OpenAPI v3-specifikationer mot den svenska REST API-profilen med hjälp av [Spectral](https://github.com/stoplightio/spectral).<br>

Det är specifikt utvecklat för att validera OpenAPI-definitioner enligt den svenska REST API-profilens [specifikation](https://dev.dataportal.se/rest-api-profil).

RAP-LP kan användas lokalt i CLI-läge eller API-läge, eller via [webbgränssnittet](https://raplp.digg.se).

## Innehållsförteckning

<details>
<summary><strong>Installationsguide</strong></summary>

- [Installationsguide](#installationsguide)
  - [Installera via npm](#installera-via-npm)
    - [Installera globalt med NPM](#installera-globalt-med-npm)

    - [Installera lokalt som npm run script](#installera-lokalt-som-npm-run-script)

  - [Installera via NPX](#installera-via-npx)

  - [Installera via Podman](#installera-via-podman)

  - [Installera via Docker](#installera-via-docker)

  - [Alternativ - kör från containern med podman/docker](#alternativ---kör-från-containern-med-podmandocker)

  - [Bygg från källkod](#bygg-från-källkod)

</details>

<details>…
