---
repo: "automic-vault/automic-vault"
name: "automic-vault"
description: "The missing command‐line security‐layer for Mac."
readmeQualityOk: true
url: "https://github.com/automic-vault/automic-vault"
homepage: "https://www.automicvault.com"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [78, 20]
topics: ["execution-control-plane", "secrets-manager", "security-layer"]
stars: 133
forks: 8
openIssues: 8
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-05-04T14:07:36Z"
lastCommitAt: "2026-07-28T14:56:58Z"
lastReleaseAt: "2026-05-15T19:57:39Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 34
maintainers: ["mxcl", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d3b1507be952326ffd5b01536a0442d09bb16b0cf8d399dbe290e881805b901/automic-vault/automic-vault"
---

# Automic Vault

> The missing command‐line security‐layer for Mac.

## Quickstart

- Direct download: https://github.com/automic-vault/automic-vault/releases/latest
- Homebrew:
  ```sh
  brew install --cask automic-vault/isotopes/automic-vault \
    && open /Applications/Automic\ Vault.app
  ```
- cURL one-liner:
  ```sh
  curl -fsSL https://www.automicvault.com/install.sh | bash && av open
  # ^^ read it first
  ```

> [!IMPORTANT]
>
> At this time Automic Vault *requires* Homebrew.
> We will loosen this restriction in future, we’re still a pretty new project.

&nbsp;

## What is Automic Vault?

Automic Vault runs in your menu bar detecting existing and emerging
vulnerabilities in your command line tool stacks.

We support (optional) “hardening” steps that typically:

- Moves plaintext secrets into the macOS keychain †
- Installs a `/usr/local/bin` stub as root that federates access to these secrets

> † Thus becoming encrypted at rest, only available to the tools we bless at
> runtime and with approval gates *under our control*.

Hardened tools gain granular controls for execution. You can configure them
to require human approval for specific code-signed application identities…
