---
repo: "chadac-me/scooter"
name: "scooter"
description: "Nix-based agent platform. Kubenix + goose + assistant-ui + some extra fun stuff"
readmeQualityOk: true
url: "https://github.com/chadac-me/scooter"
homepage: "https://chadac-me.github.io/scooter/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [53, 27]
stars: 7
forks: 2
openIssues: 39
closedIssues: 83
watchers: 0
contributors: 7
recentReleases: 6
createdAt: "2026-06-24T13:22:56Z"
lastCommitAt: "2026-11-09T00:43:13Z"
lastReleaseAt: "2026-11-08T17:05:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 64
maintainers: ["scooter-chadac-me[bot]", "chadac-bot", "scooterdcraw[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca3b3dbd00f943c16105ba5ba15f8a988682dbc6daf99563a9c2e915a5cf5f7b/chadac-me/scooter"
---

# Scooter

Scooter is a self-hosted, open source, Kubernetes-based, agent chat platform. Scooter agents are superpowered developers with full power over their dev environment while being fully locked down and under your control. Agents can install tools, spawn web services, collaborate via [VS Code in the browser](https://github.com/coder/code-server), check out, build and contribute back to your software projects.

The key distinguishing feature of Scooter is that it is designed to be **extensible from the ground up**: You can customize everything Scooter can do, from the skills available to it, the services and tools that each agent has access to, its integrations with other services and permission-controlled access, and any custom Scooter chat UI components that you would ever need.

It is managed through a declarative configuration using the same module system as [NixOS](https://wiki.nixos.org/wiki/NixOS_system_configuration), which means you can override ANY of Scooter's defaults with your own preferences and extend it endlessly.

## Architecture

The core of Scooter is five services:

* **The UI**, where your users can start new conversations, approve tasks, access any…
