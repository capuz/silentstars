---
repo: "nechodom/hyperion"
name: "hyperion"
description: "Rust hosting control panel for Debian. Multi-node clustering, kernel-enforced quotas, tamper-evident audit log, and live progress bars on every operation. The Cloudpanel / HestiaCP alternative that doesn't shell-template PHP at root."
readmeQualityOk: true
url: "https://github.com/nechodom/hyperion"
homepage: "https://hyperion.nechodom.cz/"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["axum", "debian", "hosting-control-panel", "hosting-panel", "htmx", "nginx", "php-fpm", "rust", "self-hosted", "self-hosting"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-01T10:26:22Z"
lastCommitAt: "2026-08-29T17:26:36Z"
lastReleaseAt: "2026-07-03T07:21:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 51
maintainers: ["nechodom"]
openGraphImageUrl: "https://opengraph.githubassets.com/846a2cd75b2e8d4122d101dbc2513a61e556adb50530349447bb256e86c1ed29/nechodom/hyperion"
---

# 🦅 Hyperion

**Self-hosted, multi-node hosting control panel written in Rust.**

One binary per server, one web UI on the master. It provisions
PHP / static / Node.js sites end-to-end — Linux user, nginx vhost,
FPM pool, database, TLS, WordPress — in one transaction that rolls
back cleanly if any step trips, so you never inherit a half-built
site at 2am. Runs a fleet of VPSes from one screen, drives it all
from a **scriptable HTTP API + CLI**, and **imports what you've
already got on HestiaCP or CloudPanel**.

[**Install**](#install) · [**Features**](#features) · [**Remote API**](#remote-api) ·
[**Migrate in**](#migrate-in-panel-import) · [**Multi-node**](#multi-node-cluster) ·
[**Architecture**](#architecture) · [**Status**](#project-status)

</div>

---

> [!WARNING]
> ### 🧪 Young project — not yet battle-tested in production
>
> Hyperion is a free-time project. It compiles, 700+ tests are green, and it's
> been driven end-to-end across throwaway VMs — and it has **never once seen real
> production traffic.** Schrödinger's hosting panel: probably fine, definitely
> unobserved. **Run it on boxes you'd be happy to `dd` into oblivion, keep
> backups, and don't point anything you…
