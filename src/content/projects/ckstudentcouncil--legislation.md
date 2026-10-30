---
repo: "CKStudentCouncil/Legislation"
name: "Legislation"
description: "CKHS Student Council Legislation and Official Document System"
originalDescription: "建中班聯會法律與公文系統"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/CKStudentCouncil/Legislation"
homepage: "https://law.cksc.tw/"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [51, 46]
stars: 11
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2024-09-13T05:58:45Z"
lastCommitAt: "2026-10-30T11:03:33Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 80
maintainers: ["RobotHanzo", "dependabot[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a1d8a452d16c43f976bf08ac6ec053fadb02599a8d26841110617c8d0567cee/CKStudentCouncil/Legislation"
---

# CKSC Legislation (cksc-legislation)

A platform for organizing and displaying laws, orders and documents of the student council of CKHS

Note: There are two sites configured in Firebase Hosting, the one named `cksc-legislation` is a legacy domain, and was set to 301 redirect all routes to `cksc-law` over the `law.cksc.tw` domain.
The active site is `cksc-law`, and all deployments should target that site instead.

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
