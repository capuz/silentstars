---
repo: "schizza/bakalari-ha"
name: "bakalari-ha"
description: "Custom integration of Bakalari API to Home Assistant"
readmeQualityOk: true
url: "https://github.com/schizza/bakalari-ha"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["homeassistant-custom-component", "lovelace-custom-card"]
stars: 8
forks: 2
openIssues: 10
closedIssues: 18
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-09-15T16:53:47Z"
lastCommitAt: "2026-11-24T14:08:12Z"
lastReleaseAt: "2025-11-29T17:24:47Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 38
maintainers: ["schizza"]
openGraphImageUrl: "https://opengraph.githubassets.com/475649f1625fa4d194d2297628bc896392bc6b6ae91e3bd0311c93cd1386ba31/schizza/bakalari-ha"
fundingLinks: ["GITHUB:https://github.com/schizza", "KO_FI:https://ko-fi.com/schizza", "BUY_ME_A_COFFEE:https://buymeacoffee.com/schizza"]
discussionCount: 2
---

# Bakaláři for HomeAssistant

Custom komponenta pro Home Assistant, založená na [async-bakalari-api3](https://github.com/schizza/async-bakalari-api3), která umožňuje načítání data ze serveru školního systému Bakalářů a integraci s Home Assistantem.

## Instalace (HACS)

1. V HACS → **Integrations** → menu (⋮) → **Custom repositories**
2. URL: `https://github.com/schizza/bakalari-ha`, Category: **Integration**
3. Nainstaluj, restartuj HA.
4. **Settings → Devices & Services → Add Integration → "Bakaláři"**, tím se komponenta nainstaluje a stáhne se do cahce seznam škol.
5. V nastavení integrace se pak přidavají jednotlivé děti.

## Senzor

- Zprávy
  - tento senzor stahuje zprávy za poslední měsíc
  - zprávy je možno podepisovat přímo ve Frontendu
  - TODO: všechny zprávy za školní rok - problém je v limitu pro `recorder`\
  v plánu je lokální cache, aby se "nezatěžoval" senzor
