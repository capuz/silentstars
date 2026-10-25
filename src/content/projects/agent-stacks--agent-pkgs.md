---
repo: "agent-stacks/agent-pkgs"
name: "agent-pkgs"
description: "A Nix package collection of AI tools / plugins / skills / mcp / ..."
readmeQualityOk: true
url: "https://github.com/agent-stacks/agent-pkgs"
homepage: "https://agent-stacks.org"
language: "Nix"
languages: ["Nix"]
languagePcts: [83]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-08-26T10:11:57Z"
lastCommitAt: "2026-10-25T08:32:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["agent-stacks-updater[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ee0b95a8b67231b893836f446ec7801049623e8666160c8dc008ee6fe80d315/agent-stacks/agent-pkgs"
---

# agent-pkgs

An agent is a stack of interchangeable components: a harness, skills,
MCP servers, configuration, and runtimes. These stacks are traditionally
assembled by hand, so no two machines run quite the same agent.

`agent-pkgs` packages those pieces with Nix. We use the
[Agent Plugins](https://agent-plugins.org) standard to package your
skills and MCP server configurations, then compose these packages with an
agent harness into an [Agent Stack](https://agent-stacks.org). Once an
agent stack is defined, it is fully reproducible and can run anywhere.

## Prerequisites

You need [Nix](https://nixos.org/download/) installed, with flakes enabled.
If you see `experimental Nix feature 'nix-command' is disabled` errors,
enable flakes with:

```sh
mkdir -p ~/.config/nix
echo 'experimental-features = nix-command flakes' >> ~/.config/nix/nix.conf
```

## Quick start

Most people already have a harness installed. Let's create an agent stack
which adds the [caveman](https://github.com/JuliusBrussee/caveman) plugin
to a machine that already has Claude Code installed:

```sh
mkdir agent-stacks-demo && cd agent-stacks-demo
nix build github:agent-stacks/agent-pkgs#agent-plugin-caveman
```…
