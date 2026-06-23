---
repo: "ferenci-tamas/vonat-keses"
name: "vonat-keses"
description: "Vonatkésési statisztika"
url: "https://github.com/ferenci-tamas/vonat-keses"
homepage: "https://vonat-keses.hu/"
language: "R"
languages: ["R"]
languagePcts: [86]
topics: ["railway"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-07-01T00:47:48Z"
lastCommitAt: "2026-06-23T23:17:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 56
maintainers: ["actions-user", "ferenci-tamas"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1011524944/0b02f488-c924-41a7-a30c-8512c8bb4554"
---

Vonatkésési statisztika
================
Ferenci Tamás (<https://medstat.hu>)
<br>2025-07-18

A weboldal elérhető a következő címen: <https://www.vonat-keses.hu/>.

## Felhasználói leírás

Ide jön a felhasználói leírás.

## Forráskód

A teljes projekt [R
programnyelven](https://www.youtube.com/c/FerenciTam%C3%A1s/playlists?view=50&sort=dd&shelf_id=2)
készült, beleértve a weboldalt is, ami [R
Shiny](https://shiny.posit.co/) környezetet használ.

A teljes transzparencia jegyében közzéteszem a weboldal mögött lévő
adatgyűjtő és adatfeldolgozó oldalnak, sőt, magának a weboldalnak is a
teljes forráskódját:

- Az adatokat leszedő szkript:
  [vonat-keses-scraper.R](https://github.com/ferenci-tamas/vonat-keses/blob/main/vonat-keses-scraper.R)
- Az adatokat előfeldolgozó szkript:
  [vonat-keses-preprocess.R](https://github.com/ferenci-tamas/vonat-keses/blob/main/vonat-keses-preprocess.R)
- A weboldal:
  [app.R](https://github.com/ferenci-tamas/vonat-keses/blob/main/app.R)

## Ismert hibák és hiányosságok

- Az adatok letöltése naponta egyetlen egyszer, 23 óra környékén
  történik. (Egyrészt, hogy még a legnagyobb rosszindulattal se lehessen
  azt mondani, hogy az adatgyűjtésem…
