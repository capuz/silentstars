---
repo: "vivid-planet/dextinity-starter"
name: "dextinity-starter"
description: "Blueprint for a new Dextinity project"
readmeQualityOk: true
url: "https://github.com/vivid-planet/dextinity-starter"
homepage: "https://cms-docs.dextinity.com/docs/getting-started/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 18
forks: 0
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 39
recentReleases: 0
createdAt: "2021-12-02T09:50:18Z"
lastCommitAt: "2026-11-02T11:36:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 54
maintainers: ["renovate[bot]", "VPS-Obi", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/491836f87a2c344b2b307c04f3203a4611b7a645df60791ff7c55795c006635e/vivid-planet/dextinity-starter"
---

# Dextinity Starter

In use by `@dextinity/create-app` to create new Dextinity projects. Find more information in the [Dextinity documentation](https://cms-docs.dextinity.com).

## Development

### Requirements

- [nvm](https://github.com/nvm-sh/nvm)
- [docker & docker-compose](https://docs.docker.com/compose/)

### Installation

    // Optionally set domain to use instead of localhost (add to ~/.bashrc)
    export DEV_DOMAIN=my-name.dev.vivid-planet.cloud // Vivid Planet network

    // Execute following script
    ./install.sh

### Run Services

    // use correct npm version https://github.com/nvm-sh/nvm#deeper-shell-integration
    nvm use

    // All services
    npm run dev

    npx dev-pm status [--interval]
    npx dev-pm logs <service>
    npx dev-pm restart <service>
    npx dev-pm shutdown

    // import fixtures
    npm run --prefix api fixtures

    // start repl
    npm run --prefix api repl
