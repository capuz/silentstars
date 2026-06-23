---
repo: "amd/node-scraper"
name: "node-scraper"
description: "Automated data collection and analysis for the purposes of system debug."
url: "https://github.com/amd/node-scraper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 4
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 31
recentReleases: 4
createdAt: "2025-06-05T16:12:11Z"
lastCommitAt: "2026-06-23T23:27:45Z"
lastReleaseAt: "2026-06-02T20:42:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 71
maintainers: ["alexandraBara", "amd-keonlee2", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/76c46775dcac4880976085c7bef682d8212c5bfa66348466463d11d1e2e1f959/amd/node-scraper"
---

# Node Scraper
Node Scraper is a tool which performs automated data collection and analysis for the purposes of
system debug. For details on what data is collected and analyzed, see the [plugin reference table](docs/PLUGIN_DOC.md).

## Table of Contents
- [Installation](#installation)
  - [Install from PyPI](#install-from-pypi)
  - [Install from Source](#install-from-source)
- [CLI Usage](#cli-usage)
  - [Execution Methods](#execution-methods)
    - [Example: Remote Execution](#example-remote-execution)
    - [Example: connection_config.json](#example-connection_configjson)
  - [Subcommands](#subcommands)
    - ['describe' subcommand](#describe-subcommand)
    - ['run-plugins' sub command](#run-plugins-sub-command)
    - ['gen-plugin-config' sub command](#gen-plugin-config-sub-command)
    - ['compare-runs' subcommand](#compare-runs-subcommand)
    - ['summary' sub command](#summary-sub-command)
- [Configs](#configs)
  - [Global args](#global-args)
  - [Plugin config: `--plugin-configs` command](#plugin-config---plugin-configs-command)
  - [Reference config: `gen-reference-config` command](#reference-config-gen-reference-config-command)
- **Extending Node Scraper (integration &…
