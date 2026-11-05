---
repo: "elcajon/app-code-server"
name: "app-code-server"
description: "Advanced Studio Code Server - Home Assistant Add-ons"
readmeQualityOk: true
url: "https://github.com/elcajon/app-code-server"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [64, 26]
topics: ["addon", "addons", "home-assistant", "homeassistant", "code-server", "apps"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-09-09T06:35:49Z"
lastCommitAt: "2026-11-05T00:22:54Z"
lastReleaseAt: "2022-10-08T12:06:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 69
maintainers: ["renovate[bot]", "elcajon"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5dd7e2e4470fad4cf7dd77e2f7f83e776856c539cc759a0111e20935b359d40/elcajon/app-code-server"
---

# Home Assistant App: Advanced Code Server

[code-server][code-server] (VS Code in the browser) inside the Home Assistant
frontend, extended for system administration.

## About

This app is based on the community app
[Studio Code Server][hassio-addons] and keeps its core: VS Code in the Home
Assistant sidebar, with the Home Assistant, ESPHome, YAML and MDI extensions
pre-configured.

On top of that, it is built for managing the whole host, not just the
Home Assistant configuration. Compared to the original:

|                                                | Original | This app |
| ---------------------------------------------- | -------- | -------- |
| Docker CLI with host access                    | –        | ✓        |
| `reboot`, `shutdown`, `restart`                | –        | ✓        |
| Custom s6 services and cron                    | –        | ✓        |
| Tailscale, 1Password CLI, git-crypt, yq, PHP   | –        | ✓        |
| Extra extensions (Container Tools, GitHub PRs) | –        | ✓        |
| `packages`, `init_commands`, `config_path`     | ✓        | –        |

**Warning**: this app runs with the Supervisor `admin` role and can access
Docker. Used carelessly,…
