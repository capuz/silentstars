---
repo: "duplicati/ngclient"
name: "ngclient"
description: "Angular Client for Duplicati"
readmeQualityOk: true
url: "https://github.com/duplicati/ngclient"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [62, 32]
stars: 16
forks: 9
openIssues: 26
closedIssues: 373
watchers: 4
contributors: 21
recentReleases: 0
createdAt: "2024-10-02T08:09:18Z"
lastCommitAt: "2026-08-29T10:22:34Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["kenkendk", "JamBalaya56562", "sp90"]
openGraphImageUrl: "https://opengraph.githubassets.com/73b11f08e2ecf778a7df7e95d0d2807ce7259477a12511823d1ec894d79a0fdf/duplicati/ngclient"
---

# DuplicatiClient

### Prerequisites

- Node.js 22 - https://formulae.brew.sh/formula/node
- bun latest - https://bun.sh/docs/installation (Could be removed as a dependency requires changing a few commands in the package.json scripts)

### Dependencies

- ShipUI - https://shipui.com/ - ([Docs](https://docs.shipui.com/), [GitHub](https://github.com/shipuicom/core))
- Angular 21 - https://angular.dev
- Dayjs - https://day.js.org/en/
- Phosphor Icons - https://phosphoricons.com/

### Run the project

### Testing the client on windows

- Open windows on parallels then run backend on port 8200
  - `cd [BACKEND_PATH]\Executables\Duplicati.Server`
  - `dotnet run -- --webservice-password=helloworld --webservice-interface=any` (insert your test password)
- `npm run start:windows`
- Debug on your mac in `localhost:4200`
