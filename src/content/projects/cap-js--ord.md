---
repo: "cap-js/ord"
name: "ord"
description: "Open Resource Discovery (ORD) is a protocol that allows applications and services to self-describe their exposed resources and capabilities. This plugin enables generation of ORD document for CAP based applications."
readmeQualityOk: true
url: "https://github.com/cap-js/ord"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["plugin"]
stars: 5
forks: 13
openIssues: 4
closedIssues: 161
watchers: 6
contributors: 34
recentReleases: 0
createdAt: "2024-01-09T09:01:07Z"
lastCommitAt: "2026-11-09T11:59:15Z"
lastReleaseAt: "2025-06-25T15:44:57Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 87
maintainers: ["renovate[bot]", "mlakov", "zongqichen"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e8e09d4359e95ba9a12920559daa89e00b45c3817801643f5f82a56728f85a0/cap-js/ord"
---

# CDS Plugin for ORD

## About this project

This plugin adds support for the [Open Resource Discovery](https://open-resource-discovery.github.io/specification/) (ORD) protocol for CAP based applications.
When you add the ORD plugin, your application gains a single entry point, which allows to discover and gather machine-readable information or metadata about the application.
You can use this information to construct a static metadata catalog or to perform a detailed runtime inspection of your actual system instances / system landscapes.

For more information, have a look at the [Open Resource Discovery](https://open-resource-discovery.github.io/specification/) page.

> ⚠ By installing this plugin, the metadata describing your CAP application will be made openly accessible. If you want to secure your CAP application's metadata, configure `basic` authentication by setting the environment variables or updating the `.cdsrc.json` file. The plugin prioritizes environment variables, then checks `.cdsrc.json`. If neither is configured, metadata remains publicly accessible.

### AI Coding Agent Skills

This project ships two [Claude Code…
