---
repo: "diggsweden/rest-api-profil-lint-processor"
name: "rest-api-profil-lint-processor"
description: "RAP-LP ( REST API-profil Lint Processor ) är ett verktyg som granskar en OpenAPI-specifikation mot den nationella REST API-profilen. Verktyget identifierar syntaxfel och avvikelser från riktlinjer, vilket gör det enklare att snabbt hitta och rätta till problem."
readmeQualityOk: true
url: "https://github.com/diggsweden/rest-api-profil-lint-processor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 10
forks: 4
openIssues: 16
closedIssues: 239
watchers: 7
contributors: 13
recentReleases: 1
createdAt: "2023-10-04T11:29:38Z"
lastCommitAt: "2026-11-27T13:00:10Z"
lastReleaseAt: "2026-10-28T12:45:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 73
maintainers: ["mmjohansson", "renovate[bot]", "fredriknordlander"]
openGraphImageUrl: "https://opengraph.githubassets.com/f004e94ff8cf1c9064f8f829b53dc70b833d45ea66496a9ec6a818b83ab68a5d/diggsweden/rest-api-profil-lint-processor"
---

# REST API-profil - Lint Processor (RAP-LP)

## Beskrivning

RAP-LP är ett verktyg för att validera OpenAPI v3-specifikationer mot den svenska REST API-profilen med hjälp av [Spectral](https://github.com/stoplightio/spectral).<br>

Det är specifikt utvecklat för att validera OpenAPI-definitioner enligt den svenska REST API-profilens [specifikation](https://dev.dataportal.se/rest-api-profil).

RAP-LP kan användas lokalt i CLI-läge eller API-läge, eller via [webbgränssnittet](https://raplp.digg.se).

### Språkstöd

Svenska är standardspråk i RAP-LP. Engelska kan väljas med `--lang en` eller miljövariabeln `RAP_LP_LANG=en`. Om båda anges har `--lang` företräde.

Språkvalet gäller CLI-hjälp, användningsinformation och vissa generella felmeddelanden. För API-anrop används Accept-Language, med svenska som standardspråk.

Regel-ID, regelbeskrivningar, valideringsmeddelanden och innehåll från den nationella REST API-profilen förblir på svenska, även när engelska har valts.

Översättningar finns i `locales/<locale>/translation.json`. Språkfilerna inkluderas i npm-paketet och kan läsas oavsett vilken arbetskatalog RAP-LP körs från.
