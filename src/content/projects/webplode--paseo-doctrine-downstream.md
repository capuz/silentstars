---
repo: "webplode/paseo-doctrine-downstream"
name: "paseo-doctrine-downstream"
description: "Private upstream-tracking mirror for Paseo doctrine and role-tool projection changes"
readmeQualityOk: true
url: "https://github.com/webplode/paseo-doctrine-downstream"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 14
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 49
recentReleases: 10
createdAt: "2026-08-04T08:43:49Z"
lastCommitAt: "2026-08-25T04:09:23Z"
lastReleaseAt: "2026-08-17T12:11:38Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["boudra", "paseo-bot[bot]", "BrianAguilarWasco"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e5b10c8bf27ca5610733bb6f246db4ea5d9913e0c3ffaa1dbf82cab39fe23ff/webplode/paseo-doctrine-downstream"
fundingLinks: ["GITHUB:https://github.com/boudra"]
---

# Paseo Foundation Downstream

This is the Paseo downstream distribution for role- and skill-bound Paseo Foundation workflows. It
packages the WebUI, CLI, Node.js runtime, and Foundation into self-contained host-native artifacts. It is
**not** an official installer from `getpaseo/paseo`; installable artifacts are published only from
[`webplode/paseo-doctrine-downstream`](https://github.com/webplode/paseo-doctrine-downstream).

Host-native artifacts are published for macOS (`arm64`, `x64`), Linux (`x64`), and Windows (`x64`).
Every artifact bundles the same downstream version and is built, installed, and smoke-tested on its
target operating system before publication.

## Install

At least one provider CLI, such as Claude Code or Codex, must already be installed and authenticated.
The installer preserves provider configuration and all user data under `~/.paseo`.

### macOS

Requirements:

- macOS on Apple Silicon (`arm64`) or Intel (`x64`);
- the system-provided `curl`, `tar`, and `shasum` commands;
- a normal interactive user account with `launchd`.

Install the latest published downstream release:

```bash
curl -fsSL…
