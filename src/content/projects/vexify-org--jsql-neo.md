---
repo: "vexify-org/JSQL-neo"
name: "JSQL-neo"
description: "JSQL-NEO - One engine to rule them all: MySQL + PostgreSQL + MongoDB + Redis + SQL. Zero-dependency embedded database for Node.js, WASM, and browser."
readmeQualityOk: true
url: "https://github.com/vexify-org/JSQL-neo"
homepage: "https://jsql.vexify.top"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 8
forks: 4
openIssues: 4
closedIssues: 213
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-07-21T11:08:13Z"
lastCommitAt: "2026-11-22T02:03:18Z"
lastReleaseAt: "2026-10-01T08:45:59Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 71
maintainers: ["vexify-build", "vexify-root", "vexify-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ac92cbc38cef8c4a5630d26b0511b9faf1822c30bfd190f936b80919739bbbe/vexify-org/JSQL-neo"
---

# JSQL-NEO

> **One engine to rule them all** — a Rust-powered embedded database that speaks your language:
> MySQL, PostgreSQL, MongoDB, Redis, SQL, TypeScript, **and the browser**.

> **v6.8.6** — stable release · [github.com/vexify-org/JSQL-neo](https://github.com/vexify-org/JSQL-neo) · [jsql.vexify.top](https://jsql.vexify.top)

---

## Demo

A real `jsql tui` session (v6.5.25): 64-bit integer precision, joins, NULL semantics,
and savepoint rollback — all in one in-memory engine, rendered on a dark background.

[MP4 version](https://github.com/vexify-org/JSQL-neo/blob/HEAD/doc/demo.mp4) · [asciinema recording](https://github.com/vexify-org/JSQL-neo/blob/HEAD/doc/demo.cast)

---

## 🚀 Quick Start

### One-line install

```bash
curl -fsSL jsql.vexify.top/setup | bash
```

Or in PowerShell (Windows):

```powershell
irm jsql.vexify.top/setup | iex
```

### npm install

```bash
npm install jsql-neo
```

**JSQL-NEO** is a Rust-powered embedded database with a **single runtime dependency** (`@vexify-org/yaggs`, used only by the `jsql` CLI argument parser) — no native libs to compile, no system deps to install. It runs in Node.js, CLI, Web UI, and the browser (WASM).
