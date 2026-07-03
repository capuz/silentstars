---
repo: "Rauks/Minecraft-RCON-Console"
name: "Minecraft-RCON-Console"
description: "A simple RCON console for Minecraft servers, with a REST API."
url: "https://github.com/Rauks/Minecraft-RCON-Console"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [50, 40]
topics: ["minecraft", "rcon"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-08T10:59:44Z"
lastCommitAt: "2026-07-03T12:38:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 66
maintainers: ["Rauks"]
openGraphImageUrl: "https://opengraph.githubassets.com/f64c4cd5ed8ba340858c21007edd5376dfcd9c4b8e52f5d952a3fa938bc0a463/Rauks/Minecraft-RCON-Console"
---

> This is a **mirror** of a private GitLab project.
>
> The code is open source and Docker images are available on [Docker Hub](https://hub.docker.com/r/rauks/minecraft-rcon).
> Issues and PRs are welcome as feedback; feel free to **fork** the project.
>
> More info: [CONTRIBUTING.md](./CONTRIBUTING.md).

# Minecraft-RCON

A simple RCON console for Minecraft servers, with a REST API.

## Usage

### Warnings

* Provided as it is, **this console has no authentication check**, so anybody with access to this console can run any commands on the Minecraft server.

* Please **do not expose this console to the internet without any security measures**.

* Please consider setting up a reverse proxy with an authentication layer in front of this console, or any other security measures, in order to restrict the access.
  The following links can help you to find and set up a reverse proxy:
  * [Awesome list of reverse proxies](https://awesome-selfhosted.net/tags/web-servers.html)
  * [Awesome list of identity management](https://github.com/awesome-foss/awesome-sysadmin?tab=readme-ov-file#identity-management---single-sign-on-sso)

* Use a strong custom random RCON password for more security.…
