---
repo: "opengovsg/plumber"
name: "plumber"
description: "Automate your pipelines, streamline your workflows."
readmeQualityOk: true
url: "https://github.com/opengovsg/plumber"
homepage: "https://plumber.gov.sg"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 27
forks: 15
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2023-01-16T06:09:27Z"
lastCommitAt: "2026-09-07T08:34:16Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 88
undervaluedScore: 63
maintainers: ["kevinkim-ogp", "ogp-weeloong", "m0nggh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/589446840/d9f33b39-539d-41bc-be9c-df9530236789"
---

# Plumber

_Automate your pipelines and streamline your workflows._

Plumber is a no-code solution that helps public officers automate their repetitive tasks and eliminate human error, so they can focus on their more important work. It supports a growing list of both government and commercial apps and services.

## Local dev

1. Install Docker and make sure it's running
2. Install code dependencies by running `npm i`
3. Install global dependencies:
   1. [Codegraph](https://github.com/colbymchenry/codegraph)
4. Create a `.env` in `packages/backend` based on `.env-example`
5. Setup services `npm run setup`
6. Run DB migrations `npm run migrate` (only for first time setup)
7. Start the server `npm run dev`

### On Windows?

Plumber doesn't officially support Windows as a dev environment, but some contributors have managed to get it working.

See [WINDOWS_DEV.md](https://github.com/opengovsg/plumber/blob/HEAD/docs/WINDOWS_DEV.md) for their windows-specific setup steps and known issues.

## Acknowledgements

Plumber is a fork of the open source project [Automatisch](https://github.com/automatisch/automatisch). We would like to thank the team for their contributions to the open source…
