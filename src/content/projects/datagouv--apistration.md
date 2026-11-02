---
repo: "datagouv/apistration"
name: "apistration"
description: "API Entreprise & API Particulier : Site (APIM, documentation) et API"
readmeQualityOk: true
url: "https://github.com/datagouv/apistration"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [70]
stars: 14
forks: 9
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 34
recentReleases: 0
createdAt: "2026-04-02T13:49:42Z"
lastCommitAt: "2026-11-02T13:38:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 57
maintainers: ["skelz0r", "dependabot[bot]", "Un3x"]
openGraphImageUrl: "https://opengraph.githubassets.com/974da4e584f9ec0d9257700f54289ffd1524f0e8137a82302db1b736c657ce80/datagouv/apistration"
---

# APIstration

API and site (APIM + documentation) for [API Entreprise](https://entreprise.api.gouv.fr) and [API Particulier](https://particulier.api.gouv.fr) — French government APIs providing certified data about companies and individuals.

Built and maintained by [DINUM](https://www.numerique.gouv.fr/) (Direction Interministérielle du Numérique).

## Structure

- [`siade/`](https://github.com/datagouv/apistration/blob/HEAD/siade/) — API application (Système d'Information des API de l'État)
- [`site/`](https://github.com/datagouv/apistration/blob/HEAD/site/) — Admin / APIM / documentation (formerly [`etalab/admin_api_entreprise`](https://github.com/etalab/admin_api_entreprise))
- [`mocks/`](https://github.com/datagouv/apistration/blob/HEAD/mocks/) — Test data and sandbox mock server for API Entreprise (v3+) and API Particulier staging environments
- [`clients/`](https://github.com/datagouv/apistration/blob/HEAD/clients/) — SDKs officiels construits sur les specs OpenAPI versionnées dans [`commons/swagger/`](https://github.com/datagouv/apistration/blob/HEAD/commons/swagger). Implémentation de référence en Ruby dans…
