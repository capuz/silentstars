---
repo: "opengovsg/plumber"
name: "plumber"
description: "Automate your pipelines, streamline your workflows."
readmeQualityOk: true
url: "https://github.com/opengovsg/plumber"
homepage: "https://plumber.gov.sg"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 28
forks: 13
openIssues: 4
closedIssues: 5
watchers: 2
contributors: 25
recentReleases: 10
createdAt: "2023-01-16T06:09:27Z"
lastCommitAt: "2026-11-19T05:08:27Z"
lastReleaseAt: "2026-10-26T05:36:17Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 69
maintainers: ["kevinkim-ogp", "ogp-weeloong", "seaerchin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/589446840/d9f33b39-539d-41bc-be9c-df9530236789"
---

# Plumber

_Automate your pipelines and streamline your workflows._

Plumber is a no-code solution that helps public officers automate their repetitive tasks and eliminate human error, so they can focus on their more important work. It supports a growing list of both government and commercial apps and services.

## Local dev

1. Install Docker and make sure it's running
2. Install code dependencies by running `pnpm install`
3. Install global dependencies:
   1. [Codegraph](https://github.com/colbymchenry/codegraph)
4. Install the [1Password desktop app](https://1password.com/downloads) and sign in
5. In 1Password, turn on Settings > Developer > Integrate with other apps. Turn on Touch ID (or Windows Hello) under Settings > Security so you can answer the prompt
6. Copy `op-dev.example.json` to `op-dev.json`, then fill in your account name and your environment ids. The `e2e` id is the shared E2E environment, needed only for E2E tests. Copy an id from Developer > View Environments > View environment > Manage environment > Copy environment ID
   - `inheritedEnvironments` is optional. List environment ids there to load common team-level env vars before your own.
