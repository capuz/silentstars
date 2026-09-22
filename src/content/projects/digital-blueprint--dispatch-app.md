---
repo: "digital-blueprint/dispatch-app"
name: "dispatch-app"
description: "Dispatch Application"
readmeQualityOk: true
url: "https://github.com/digital-blueprint/dispatch-app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["dbp", "digital-blueprint", "dispatch"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2023-01-20T11:26:52Z"
lastCommitAt: "2026-09-22T08:44:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 60
maintainers: ["renovate[bot]", "pbek", "lazka"]
openGraphImageUrl: "https://opengraph.githubassets.com/72e8200c20e652b5d5184e091f53c1489097def7ad666a3bc21c2bec9f27f3ec/digital-blueprint/dispatch-app"
---

# Dispatch Application

[GitHub Repository](https://github.com/digital-blueprint/dispatch-app) |
[npmjs package](https://www.npmjs.com/package/@digital-blueprint/dispatch-app) |
[Unpkg CDN](https://unpkg.com/browse/@digital-blueprint/dispatch-app/) |
[Dispatch Bundle](https://github.com/digital-blueprint/relay-dispatch-bundle)

This is an application for managing postal/electronic deliveries which get forwarded to an external "Dual Delivery" service provider.

## Prerequisites

- You need the [API server](https://github.com/digital-blueprint/relay-server-template) running
- You need the [DBP Dispatch Bundle](https://github.com/digital-blueprint/relay-dispatch-bundle)

## Local development

```bash
# get the source
git clone git@github.com:digital-blueprint/dispatch-app.git
cd dispatch-app
git submodule update --init

# install dependencies
npm install

# constantly build dist/bundle.js and run a local web-server on port 8001
npm run watch

# constantly build dist/bundle.js and run a local web-server on port 8001 using a custom assets directory assets_custom/
npm run watch-custom

# run tests
npm test
```

Jump to <http://localhost:8001>, and you should get a Single Sign On login…
