---
repo: "blockscout/frontend"
name: "frontend"
description: "Front-end application for Blockscout chain explorer"
url: "https://github.com/blockscout/frontend"
homepage: "https://eth.blockscout.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["blockchain", "ethereum", "explorer"]
stars: 287
forks: 719
openIssues: 64
closedIssues: 1563
watchers: 10
contributors: 53
recentReleases: 0
createdAt: "2022-05-31T17:52:50Z"
lastCommitAt: "2026-07-03T06:23:28Z"
lastReleaseAt: "2023-04-27T16:20:33Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 48
maintainers: ["tom2drum", "Copilot", "maxaleks"]
openGraphImageUrl: "https://opengraph.githubassets.com/108c1463bc7f1f61b54783d74c3bbccf1f271a1cbff7e648c145b92c4a70f1f0/blockscout/frontend"
discussionCount: 14
---

<h1 align="center">Blockscout frontend</h1>

</p>

## Running and configuring the app

App is distributed as a docker image. Here you can find information about the [package](https://github.com/blockscout/frontend/pkgs/container/frontend) and its recent [releases](https://github.com/blockscout/frontend/releases).

You can configure your app by passing necessary environment variables when starting the container. See full list of ENVs and their description [here](./docs/ENVS.md).

```sh
docker run -p 3000:3000 --env-file <path-to-your-env-file> ghcr.io/blockscout/frontend:latest
```

Alternatively, you can build your own docker image and run your app from that. Please follow this [guide](./docs/CUSTOM_BUILD.md).

For more information on migrating from the previous frontend, please see the [frontend migration docs](https://docs.blockscout.com/setup/deployment/frontend-migration).

## Contributing

See our [Contribution guide](./docs/CONTRIBUTING.md) for pull request protocol. We expect contributors to follow our [code of conduct](./CODE_OF_CONDUCT.md) when submitting code or comments.

## Resources
- [App ENVs list](./docs/ENVS.md)
- [Contribution guide](./docs/CONTRIBUTING.md)
-…
