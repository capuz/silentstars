---
repo: "posit-dev/vip"
name: "vip"
description: "extensible test suite for verifying installations of posit team"
url: "https://github.com/posit-dev/vip"
homepage: "https://posit-dev.github.io/vip/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 5
forks: 1
openIssues: 25
closedIssues: 107
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2026-02-03T17:06:20Z"
lastCommitAt: "2026-06-24T00:19:34Z"
lastReleaseAt: "2026-03-13T20:18:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 58
maintainers: ["ian-flores", "posit-vip-triage[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81940390e1618a981a694ef84ac8187e47ccf83366a46aa26bddf582cc1462bc/posit-dev/vip"
---

# VIP - Verified Installation of Posit

An open-source, extensible test suite that validates Posit Team deployments are
installed correctly and functioning properly.

VIP uses **BDD-style tests** (pytest-bdd + Playwright) to verify Connect,
Workbench, and Package Manager across standalone, Kubernetes, and Snowflake
Native App deployments.  Results are compiled into an **HTML report** that can
be published to a Connect server.

**Documentation:** https://posit-dev.github.io/vip/

## Quick start

```bash
uv venv
source .venv/bin/activate
uv pip install posit-vip
uv run vip install
vip verify --connect-url https://connect.example.com --interactive-auth
```

On a headless server (no display), use `--headless-auth` instead:

```bash
vip verify --config vip.toml --headless-auth
```

Run a specific test by name:

```bash
vip verify --connect-url https://connect.example.com --filter test_login
```

With a configuration file:

```bash
cp vip.toml.example vip.toml     # edit with your deployment details
vip verify --config vip.toml
```

## Uninstalling

To reverse what `vip install` (or `just setup`) did:

```bash
uv run vip uninstall        # dry run; prints the full plan including any…
