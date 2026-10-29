---
repo: "DNUM-SocialGouv/aides-jeunes"
name: "aides-jeunes"
description: "Un simulateur global des prestations sociales françaises pour les jeunes."
readmeQualityOk: true
url: "https://github.com/DNUM-SocialGouv/aides-jeunes"
homepage: "https://mes-aides.1jeune1solution.beta.gouv.fr/"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [59, 32]
topics: ["openfisca", "openfisca-server", "mes-aides"]
stars: 84
forks: 48
openIssues: 131
closedIssues: 683
watchers: 13
contributors: 48
recentReleases: 0
createdAt: "2014-04-03T10:42:21Z"
lastCommitAt: "2026-10-29T14:06:27Z"
lastReleaseAt: "2016-12-14T13:46:20Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 53
maintainers: ["jenovateurs", "Shamzic", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f46edc714a5fa775c694a065536d42847a2ea85d52e04039bc5b222be93fcda/DNUM-SocialGouv/aides-jeunes"
discussionCount: 0
---

## Cette documentation est technique. Pour plus d'informations sur le [simulateur d'aides pour les jeunes](https://mes-aides.1jeune1solution.beta.gouv.fr), regardez notre [wiki](https://github.com/DNUM-SocialGouv/aides-jeunes/wiki).

> L'interface utilisateur (et le serveur principal) du [simulateur d'aides et de prestations sociales pour les jeunes](https://mes-aides.1jeune1solution.beta.gouv.fr). Il est basé sur simulateur socio-fiscal libre [Openfisca](https://www.openfisca.fr/).

# Setup

## Stack

- VueJS
- NodeJS
- MongoDB
- OpenFisca (Python, numpy)
- NetlifyCMS ([config](https://github.com/DNUM-SocialGouv/aides-jeunes/blob/main/contribuer/public/admin/config.yml))
  - [website](https://contribuer-aides-jeunes.netlify.app)
- Ansible ([aides-jeunes-ops](https://github.com/DNUM-SocialGouv/aides-jeunes-ops))

## 3rd parties

- Github Actions ([config](https://github.com/DNUM-SocialGouv/aides-jeunes/blob/main/.github/workflows/))
  - Continuous integration and deployment
- Netlify
  - Deloy previews
- SMTP server
- Matomo ([stats.beta.gouv.fr](https://stats.beta.gouv.fr/index.php?module=CoreHome&action=index&idSite=63&period=range&date=previous30))
  - [Dedicated site for usage…
