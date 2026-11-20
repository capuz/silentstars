---
repo: "MythicalLTD/PeltyCMS"
name: "PeltyCMS"
description: "Self-hosted billing and automation for hosting companies (Rust + React)."
readmeQualityOk: true
url: "https://github.com/MythicalLTD/PeltyCMS"
homepage: "https://peltycms.com"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 28]
topics: ["mythicalsystems", "billing", "blesta", "whmcs", "automation", "cms", "hosting", "react", "rust", "self-hosted"]
stars: 233
forks: 37
openIssues: 0
closedIssues: 206
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2023-03-07T09:39:12Z"
lastCommitAt: "2026-11-19T11:55:36Z"
lastReleaseAt: "2023-11-19T10:52:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 43
maintainers: ["NaysKutzu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/610692272/34dee0ab-d6a5-472f-a952-ba3b1095686a"
discussionCount: 0
---

# PeltyCMS

Self-hosted billing and automation for hosting companies.

Rust API (axum, SQLx, wasmtime) and React admin/client UI (Vite, shadcn/ui).
Payment gateways, provisioning, registrars, captcha, and SSO ship as WASM
addons from **Admin → Addons**.

**Status:** under active development. Not a public release yet.

Release tags are **v-prefixed SemVer** (`v1.0.0`, `v1.0.0-rc.1`) — not bare
`1.0.0` like older MythicalDash cuts. Nightlies publish every day from
`develop` as `v0.1.0-nightly.YYYYMMDD` (plus a floating `nightly` release /
image). In **Admin → Updates** pick the Stable or Nightly channel; Docker
hosts get a pull command, binary hosts get `pelty-server update`.

```text
ghcr.io/mythicalltd/peltycms:v1.0.0
ghcr.io/mythicalltd/peltycms:latest      # stable only
ghcr.io/mythicalltd/peltycms:nightly
```

Release archives (also what `pelty-server update` downloads):

| Platform | Archive |
|----------|---------|
| Linux x64 / ARM64 | `pelty-server-<v>-{x86_64,aarch64}-unknown-linux-{gnu,musl}.tar.gz` |
| Windows x64 / ARM64 | `pelty-server-<v>-{x86_64,aarch64}-pc-windows-msvc.zip` |
| macOS Intel / Apple Silicon | `pelty-server-<v>-{x86_64,aarch64}-apple-darwin.tar.gz` |
