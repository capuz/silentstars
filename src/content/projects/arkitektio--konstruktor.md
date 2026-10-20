---
repo: "arkitektio/konstruktor"
name: "konstruktor"
description: "The installation and admin interface for the Arkitekt platform"
readmeQualityOk: true
url: "https://github.com/arkitektio/konstruktor"
homepage: "https://arkitekt.live"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [72, 23]
topics: ["docker-compose", "installer"]
stars: 5
forks: 2
openIssues: 9
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2023-02-09T13:50:58Z"
lastCommitAt: "2026-10-20T08:48:56Z"
lastReleaseAt: "2026-09-19T17:44:19Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 73
undervaluedScore: 84
maintainers: ["jhnnsrs", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/afeb8c5135935b8d0780dc5c6fb8529d1eb83de9252d36d31517ca6680a71aa0/arkitektio/konstruktor"
---

# Konstruktor

This is the repository for the Konstruktor project, which primarily serves as an entrypoint and installer for
the [Arkitekt](http://arkitekt.live) platform.

Konstruktor is one product with two front ends: a desktop app and a `konstruktor` command
line. Both link the same core, so neither can drift from the other.

rebuilt. The terminal below is current.</sub>

# About Docker!

Konstruktor writes the deployment itself and hands it to Docker Compose to run, so a
Docker-compatible container engine has to be on the machine, in any form.

If you don't have one, the wizard can install one for you. The recommended engines are:

| OS      | Recommended                                  | Also works                                    |
| ------- | -------------------------------------------- | --------------------------------------------- |
| macOS   | **Colima** — one click if Homebrew is there  | OrbStack, Podman Desktop, Docker Desktop      |
| Windows | **Rancher Desktop** — one click via `winget` | Podman Desktop, Docker Desktop                |
| Linux   | **Docker Engine** from your distribution     | Podman (`podman-docker` + `podman-compose`)   |

On macOS and…
