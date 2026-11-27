---
repo: "PREreview/prereview.org"
name: "prereview.org"
description: "The source code for prereview.org."
readmeQualityOk: true
url: "https://github.com/PREreview/prereview.org"
homepage: "https://prereview.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 16
forks: 2
openIssues: 13
closedIssues: 323
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2022-05-06T08:59:40Z"
lastCommitAt: "2026-11-27T16:32:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 70
maintainers: ["thewilkybarkid", "erkannt"]
openGraphImageUrl: "https://opengraph.githubassets.com/a47fead52345d3949c445d95ceb88ad97b1812189c782ed4ad8f99c58d02ec38/PREreview/prereview.org"
---

# prereview.org

The source code for [prereview.org].

## Development

- [Bash]
- [Docker]
- [Docker Compose]
- [watchexec]
- [GNU Make]
- [intlc]
- [mkcert]
- [Node.js]
- [pnpm]
- [Git LFS]
- Unix-like operating system

### Running the app

To build and run the app for development, execute:

```shell
make start
```

You can now access the app at <https://localhost>.

You will also have a `.env` file. This file contains environment variables controlling specific behaviors, including credentials for accessing external services.

## Operations

Once it passes CI, we deploy every commit on the `main` branch to [prereview.org], [sandbox.prereview.org] and [translate.prereview.org], which [Fly.io] hosts.
