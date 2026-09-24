---
repo: "redhat-developer/rhdh-plugins"
name: "rhdh-plugins"
description: "Red Hat Developer Hub plugins"
readmeQualityOk: true
url: "https://github.com/redhat-developer/rhdh-plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["rhdh"]
stars: 50
forks: 120
openIssues: 66
closedIssues: 188
watchers: 17
contributors: 167
recentReleases: 0
createdAt: "2024-10-03T18:03:31Z"
lastCommitAt: "2026-09-24T08:41:28Z"
lastReleaseAt: "2026-05-04T11:58:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 58
maintainers: ["rhdh-bot", "renovate[bot]", "fullsend-ai-coder[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a29a3f6621d30dddb1c4ac50526f2bc7a43514103b1f1cf907d094c1420fad98/redhat-developer/rhdh-plugins"
---

# Red Hat Developer Hub Plugins Repository

## What is this repository?

This repository hosts plugins developed by Red Hat. The processes, tooling, and workflows are based on those in [backstage/community-plugins](https://github.com/backstage/community-plugins).

Plugins in this repository will be published to the `@red-hat-developer-hub` public npm namespace.

## Contributing a plugin

Contributions are welcome! To contribute a plugin, please follow the guidelines outlined in [CONTRIBUTING.md](https://github.com/redhat-developer/rhdh-plugins/blob/main/CONTRIBUTING.md). You can choose to either contribute to the shared repository or self-host your plugin for full autonomy.

## Plugins Workflow

The `rhdh-plugins` repository is organized into multiple workspaces, with each workspace containing a plugin or a set of related plugins. Each workspace operates independently, with its own release cycle and dependencies managed via npm. When a new changeset is added (each workspace has its own `.changesets` directory), a "Version packages ($workspace_name)" PR is automatically generated. Merging this PR triggers the release of all plugins in the workspace and updates the corresponding…
