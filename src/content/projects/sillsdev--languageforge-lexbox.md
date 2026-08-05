---
repo: "sillsdev/languageforge-lexbox"
name: "languageforge-lexbox"
description: "Lexbox, SIL linguistic data hub"
readmeQualityOk: true
url: "https://github.com/sillsdev/languageforge-lexbox"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [49, 33]
stars: 7
forks: 6
openIssues: 209
closedIssues: 899
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2023-02-16T04:50:40Z"
lastCommitAt: "2026-08-05T06:07:06Z"
lastReleaseAt: "2024-08-01T04:21:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 82
maintainers: ["myieye", "hahn-kev", "hahn-kev-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd1c8da9c4cc4144e1699ebf7674bea786b188875c27bcdab8bff53b1871eb35/sillsdev/languageforge-lexbox"
fundingLinks: ["CUSTOM:https://www.givedirect.org/donate/?cid=13536&n=&dd1=Language%20Software"]
---

# Lexbox (formerly Language Depot)
Looking for [FieldWorks Lite](https://github.com/sillsdev/languageforge-lexbox/blob/HEAD/backend/FwLite/README.md)?

## Repo Structure

* [backend](https://github.com/sillsdev/languageforge-lexbox/blob/HEAD/backend/README.md) - dotnet API
* [backend/FwLite](https://github.com/sillsdev/languageforge-lexbox/blob/HEAD/backend/FwLite/README.md) - FieldWorks Lite application
* [deployment](https://github.com/sillsdev/languageforge-lexbox/blob/HEAD/deployment/README.md) - k8s config for production, staging, develop and local development environments
* [frontend](https://github.com/sillsdev/languageforge-lexbox/blob/HEAD/frontend/README.md) - SvelteKit app
* hgweb - hgweb Dockerfile and config
* otel - Open Telemetry collector config
* [platform.bible-extension](https://github.com/sillsdev/languageforge-lexbox/blob/HEAD/platform.bible-extension/README.md) - Platform.Bible extension

files related to a specific service should be in a folder named after the service.
There are some exceptions:
* `LexBox.slnx` visual studio expects the solution to be at the root of the repo and can make things difficult otherwise

## Development

Summary of setup steps…
