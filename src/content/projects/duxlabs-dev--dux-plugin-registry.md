---
repo: "duxlabs-dev/dux-plugin-registry"
name: "dux-plugin-registry"
description: "Official and third party plugins and themes for Dux Shell"
readmeQualityOk: true
url: "https://github.com/duxlabs-dev/dux-plugin-registry"
homepage: "https://duxlabs.dev/plugins"
language: "CSS"
languages: ["CSS", "HTML"]
languagePcts: [56, 28]
stars: 105
forks: 317
openIssues: 414
closedIssues: 53
watchers: 3
contributors: 265
recentReleases: 0
createdAt: "2025-10-04T11:03:17Z"
lastCommitAt: "2026-11-09T00:53:08Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 82
undervaluedScore: 49
maintainers: ["dux-ci[bot]", "bbedward", "KadirJeager"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a357df845da90c4a675af0ddb5968b668aca5daa96e5e44c37f324f0baf9ac6/duxlabs-dev/dux-plugin-registry"
---

# Dux Shell Plugins

This repository contains a collection of plugins for [Dux Shell](https://github.com/duxlabs-dev/dux-shell)

[https://plugins.duxlabs.dev/](https://plugins.duxlabs.dev/)

## Contributing

To add your Plugin to the list please read the [contribution guidelines](https://github.com/duxlabs-dev/dux-plugin-registry/blob/HEAD/CONTRIBUTING.md) and create a pull request.

## Installing Plugins

### Via DMS Settings UI

On DMS open the settings <kbd>Mod + ,</kbd> go to **Plugins** tab and click on **Browse** button.

### Via dms CLI

On your teminal run `dms` then navigate to the **plugins** option or run `dms plugins install {plugin-name}` directly.

### Manually

Clone the plugin repository into your `~/.config/dms/plugins/` folder and restart your dms session with `dms restart`. NOTE: Some plugins may have additional dependencies that need to be installed manually, please refer to the plugin documentation for more information, some plugins are part of a monorepo and need to be installed by copying the relevant path to the plugins folder.

### With Nix

Follow the [Nix usage documentation](https://github.com/duxlabs-dev/dux-plugin-registry/blob/HEAD/nix/README.md)

##…
