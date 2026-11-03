---
repo: "athombv/node-homey-lib"
name: "node-homey-lib"
description: "Shared code between Homey, Developer Tools and Documentation"
readmeQualityOk: true
url: "https://github.com/athombv/node-homey-lib"
homepage: "https://homey.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 24
forks: 25
openIssues: 7
closedIssues: 27
watchers: 12
contributors: 31
recentReleases: 0
createdAt: "2015-07-13T10:35:14Z"
lastCommitAt: "2026-11-03T10:51:59Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 70
maintainers: ["hmeerlo", "jeroenwienk", "RobinBol"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7edef4d874a7d93c32accb40fe353bf09d42ec92667e7a344a79b4b46648ae8/athombv/node-homey-lib"
---

# Homey Library

This library contains shared code between Homey, Homey Apps, Athom CLI, Athom Developer and others.

This library can, among other things:

- Validate a Homey App
- Validate a Capability
- Validate a Signal
- Return supported device classes
- Return supported device capabilities
- Return supported media codecs
- Return supported app permissions
- Return supported app store categories

See `/examples/` for how-to usage. 

## Translations

This library contains translations in the following files:

- `./assets/app/permissions.json`
- `./assets/capability/capabilities/<capability_id>.json`
- `./assets/device/classes/<device_class_id>.json`

These files are automatically parsed to language specific locale files in `./generated_locales`. The generated locales should not be edited manually, always edit the original files as listed above. Commits to master or develop with changes to the files above will trigger a [GitHub Action](https://github.com/athombv/node-homey-lib/blob/HEAD/.github/workflows/generate_locales.yml) that [re-generates](https://github.com/athombv/node-homey-lib/blob/HEAD/scripts/generate-locale-files.js) the locales and commits the result. Incoming PRs…
