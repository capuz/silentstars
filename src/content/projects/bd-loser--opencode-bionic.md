---
repo: "bd-loser/opencode-bionic"
name: "opencode-bionic"
description: "Run opencode (open-source AI coding agent) natively on Android via Termux. aarch64/Bionic build with a patched Bun runtime — one-command install."
readmeQualityOk: true
url: "https://github.com/bd-loser/opencode-bionic"
homepage: "https://github.com/bd-loser/opencode-bionic#install"
language: "Shell"
languages: ["Shell"]
languagePcts: [81]
topics: ["aarch64", "ai-agent", "ai-coding-assistant", "android", "arm64", "bionic", "bun", "claude-code-alternative", "cli", "llm"]
stars: 18
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-16T11:28:45Z"
lastCommitAt: "2026-10-11T10:16:11Z"
lastReleaseAt: "2026-08-05T00:48:43Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 58
maintainers: ["bd-loser", "github-actions[bot]", "bdloser404"]
openGraphImageUrl: "https://opengraph.githubassets.com/22e03077c467b639fd2788b602a57a6cb6c55eae3fc51ad0ec20c7a545788850/bd-loser/opencode-bionic"
---

# opencode-bionic — opencode for Android / Termux (aarch64)

> **Run [opencode](https://opencode.ai) — the open-source AI coding agent —
> natively on your Android phone.** No proot, no chroot, no Linux VM. This
> repo ships a Bionic-libc aarch64 build of opencode as a Termux `.deb`,
> installable with one `curl | bash`.

**Keywords:** opencode android · opencode termux · opencode aarch64 ·
AI coding agent android · Claude Code alternative on phone · LLM CLI
termux · sst opencode android port.

---

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/bd-loser/opencode-bionic/main/install.sh | bash
```

Grabs the latest **stable** `.deb` from [Releases](https://github.com/bd-loser/opencode-bionic/releases),
verifies its SHA256 checksum, and installs via `dpkg`.

### Channels

Stable builds come from an upstream opencode release tag. Prereleases are
built from upstream's `dev` branch and are tagged `v<version>-dev.<short-sha>`
— newer, but not something upstream has blessed.

```bash
# newest stable (the default)
curl -fsSL https://raw.githubusercontent.com/bd-loser/opencode-bionic/main/install.sh | bash

# newest dev build
curl -fsSL .../install.sh |…
