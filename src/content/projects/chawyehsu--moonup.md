---
repo: "chawyehsu/moonup"
name: "moonup"
description: "Manage multiple MoonBit installations with ease"
readmeQualityOk: true
url: "https://github.com/chawyehsu/moonup"
homepage: "https://moonup.csu.moe"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["command-line-tool", "version-manager", "moonbit", "toolchain-manager"]
stars: 27
forks: 1
openIssues: 2
closedIssues: 26
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-04T17:22:10Z"
lastCommitAt: "2026-11-13T05:40:08Z"
lastReleaseAt: "2024-12-26T10:46:15Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 63
maintainers: ["chawyehsu", "dependabot[bot]", "release-maid[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8d563ca076f39ba63347747e40bc1e264493f2d83a872559a982ff438652bf0/chawyehsu/moonup"
fundingLinks: ["GITHUB:https://github.com/chawyehsu", "CUSTOM:https://github.com/chawyehsu/sponsors"]
---

# moonup

> Manage multiple [MoonBit] installations

## Getting Started

### Install

The recommended way to install moonup is via the universal installer:

#### Unix

```sh
curl -fsSL https://moonup.csu.moe/install | sh
```

#### Windows

```pwsh
irm https://moonup.csu.moe/install | iex
```

The universal installer will detect your platform and install moonup accordingly.
Optionally, you can also install moonup via other methods described in the [Installation Guide](https://github.com/chawyehsu/moonup/blob/HEAD/docs/guide/installation.md).

### For AI Agents

If you are an AI agent (Claude, Copilot, Cursor, etc.), you can learn how to
install and use moonup via the skill:

```sh
npx skills add chawyehsu/moonup
```

### Moonup in GitHub Actions

With the [setup-moonup] action, It's super easy to use Moonup to set up a
MoonBit environment in GitHub CI. Here is an example workflow:

```yaml
- name: Setup MoonBit
  uses: chawyehsu/setup-moonup@v2
  run: moon version --all
```

### Usage

After installation, run `moonup help` to see the available commands.

```sh
$ moonup help
Moonup is a tool to manage multiple MoonBit installations.

If you find any bugs or have a feature request,…
