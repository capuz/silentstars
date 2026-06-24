---
repo: "lando/notarize-action"
name: "notarize-action"
description: "A GitHub action to Apple notarize files. Originally adapted from https://github.com/devbotsxyz/xcode-notarize"
url: "https://github.com/lando/notarize-action"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["actions", "github-actions", "lando"]
stars: 11
forks: 5
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-04-27T13:16:16Z"
lastCommitAt: "2026-06-24T00:24:38Z"
lastReleaseAt: "2023-06-18T14:17:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 39
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b5628ded1339ea080bc0bb75d2c325a9902e0e1bc17c30854fa545487228777/lando/notarize-action"
fundingLinks: ["GITHUB:https://github.com/lando", "GITHUB:https://github.com/pirog", "PATREON:https://patreon.com/devwithlando", "OPEN_COLLECTIVE:https://opencollective.com/devwithlando", "CUSTOM:https://lando.dev/join"]
---

# Notarize Action

This action Apple-notarizes macOS applications or plug-ins. It does this by submitting your built `.app` (or non-app bundle) to Apple's notarization service.

It uses `notarytool` by default but can be configured to use `altool`. In the case of the latter it will poll the notarization service until it times out or receives a success response.

> **NOTE:** Originally forked from https://github.com/devbotsxyz/xcode-notarize

## Required Inputs

These keys must be set correctly for the action to work.

| Name | Description | Example Value |
|---|---|---|
| `product-path` | The path to the product to notarize.  | `/dist/MyApp.app` |
| `appstore-connect-username` | The AppStore Connect username. | `${{ secrets.NOTARIZATION_USERNAME }}` |
| `appstore-connect-password` | The AppStore Connect password. | `${{ secrets.NOTARIZATION_PASSWORD }}` |
| `appstore-connect-team-id` | The AppStore Connect team id. Only required when using `notarytool`. | `FY8GAUX283` |

## Optional Inputs

These keys are set to sane defaults but can be modified as needed.

| Name | Description | Default | Example |
|---|---|---|---|
| `appstore-connect-api-key` | The AppStore Connect API Key. |…
