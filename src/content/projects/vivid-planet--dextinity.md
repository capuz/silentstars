---
repo: "vivid-planet/dextinity"
name: "dextinity"
description: "Dextinity CMS"
readmeQualityOk: true
url: "https://github.com/vivid-planet/dextinity"
homepage: "https://www.dextinity.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 52
forks: 8
openIssues: 1
closedIssues: 37
watchers: 3
contributors: 59
recentReleases: 0
createdAt: "2019-03-04T11:30:36Z"
lastCommitAt: "2026-10-16T08:26:20Z"
lastReleaseAt: "2021-01-12T09:16:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 57
maintainers: ["renovate[bot]", "VPS-Obi", "SebiVPS"]
openGraphImageUrl: "https://opengraph.githubassets.com/158c91e238b880545974a4589729150aca34c43884214543e4bbf02d6fa15cde/vivid-planet/dextinity"
---

# Dextinity

## Docs

Visit https://cms-docs.dextinity.com/ to view the documentation.

## Create a new Dextinity project

Use `@dextinity/create-app` to create a new Dextinity project. More information can be found in the [docs](https://cms-docs.dextinity.com/docs/getting-started/).

## Development

### Prerequisites

The following tools need to be installed on your local machine.

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [nvm](https://github.com/nvm-sh/nvm)

### Setup workspace

Run the `install.sh` script to install dependencies and setup needed symlinks.

```bash
# Optionally set domain to use instead of localhost (add to e.g. ~/.bashrc)
export DEV_DOMAIN=myname.dev.vivid-planet.cloud # Vivid Planet network

sh install.sh
```

_It is recommended to run `install.sh` every time you switch to the `main` branch._

### MUI X Data Grid Pro License

If you want to use features from `@mui/x-data-grid-pro`, you need to configure your MUI license key. Create a `.env.local` file in your project root and add your license key:

`.env.local`:

```
MUI_LICENSE_KEY=your_license_key_here
```

### Build packages

Before starting individual development processes,…
