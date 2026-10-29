---
repo: "pass-culture/pass-culture-main"
name: "pass-culture-main"
description: "Applications du pass Culture"
readmeQualityOk: true
url: "https://github.com/pass-culture/pass-culture-main"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [67, 21]
stars: 194
forks: 57
openIssues: 0
closedIssues: 15
watchers: 10
contributors: 167
recentReleases: 0
createdAt: "2018-01-08T14:12:34Z"
lastCommitAt: "2026-10-29T10:20:42Z"
lastReleaseAt: "2025-12-18T11:01:18Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 100
undervaluedScore: 43
maintainers: ["dependabot[bot]", "jclery-pass", "rchaffal-pass"]
openGraphImageUrl: "https://opengraph.githubassets.com/104ca115e365d0bb430882643ee6f44be6874b167f18370c3faef7aed1b53c93/pass-culture/pass-culture-main"
---

---

Le repo `main` contient les 4 projets suivants :

- Le backend : [api](https://github.com/pass-culture/pass-culture-main/blob/HEAD/api) (Flask)
- L'espace partenaire : [pro](https://github.com/pass-culture/pass-culture-main/blob/HEAD/pro) (React)
- La documentation de l'API publique pour les partenaires techniques du pass Culture : [doc](https://github.com/pass-culture/pass-culture-main/blob/HEAD/api/documentation)
- La page de maintenance (HTML): [maintenance-site](https://github.com/pass-culture/pass-culture-main/blob/HEAD/maintenance-site)

## Installation

### Installer les dépendances communes entre le front pro et le backend

- [safe-chain](https://www.npmjs.com/package/@aikidosec/safe-chain) # TODO: tester l'installation avec safe-chain
  - `npm i -g @aikidosec/safe-chain`
  - `safe-chain setup`
  - Redémarrer le terminal

- [Commitizen](https://commitizen-tools.github.io/commitizen/#installation) (CLI pour écrire des commits au bon format)
  - `brew install commitizen`

- [gitleaks](https://github.com/gitleaks/gitleaks)
  - `brew install gitleaks`

- [semgrep](https://semgrep.dev/)
  - `brew install semgrep`

### Installer l'ensemble des projets

Il vous faudra une…
