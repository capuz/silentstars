---
repo: "digital-blueprint/formalize-app"
name: "formalize-app"
description: "Management of form entries that have been created via external systems. - 🌎 Development: https://dbp-dev.tugraz.at/apps/formalize, 🌎 Demo: https://dbp-demo.tugraz.at/apps/formalize, 🌎 Production: https://formulare.tugraz.at"
readmeQualityOk: true
url: "https://github.com/digital-blueprint/formalize-app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["dbp", "digital-blueprint", "formalize"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2023-02-06T14:16:27Z"
lastCommitAt: "2026-09-30T09:56:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 60
maintainers: ["zsuffad", "Krautfleckerl", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/19b877c956a27492b18bfe4380c9bffbdf3e88a1401618d4a34f748b6cee0610/digital-blueprint/formalize-app"
---

# Formalize Application

[GitHub Repository](https://github.com/digital-blueprint/formalize-app) |
[npmjs package](https://www.npmjs.com/package/@digital-blueprint/formalize-app) |
[Unpkg CDN](https://unpkg.com/browse/@digital-blueprint/formalize-app/) |
[Formalize Bundle](https://github.com/digital-blueprint/relay-formalize-bundle)

Management of form entries that have been created via external systems.

## Prerequisites

- You need the [API server](https://gitlab.tugraz.at/dbp/relay/dbp-relay-server-template) running
- You need the [DbpRelayFormalizeBundle](https://github.com/digital-blueprint/relay-formalize-bundle) for the API server to persist and fetch submissions

## Local development

```bash
# get the source
git clone git@github.com:digital-blueprint/formalize-app.git
cd formalize-app
git submodule update --init

# install dependencies
npm install

# constantly build dist/bundle.js and run a local web-server on port 8001
npm run watch

# constantly build dist/bundle.js and run a local web-server on port 8001 using a custom assets directory assets_local/
npm run watch-local

# run tests
npm test
```

Jump to <https://localhost:8001>, and you should get a Single Sign On…
