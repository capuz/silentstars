---
repo: "0x11DFE/controld-hagezi-sync"
name: "controld-hagezi-sync"
description: "Automatically sync Hagezi DNS blocklists to ControlD profiles via API. TOML-driven, pure Bash, GitHub Actions ready."
url: "https://github.com/0x11DFE/controld-hagezi-sync"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 10
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-25T23:06:11Z"
lastCommitAt: "2026-06-29T07:22:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 42
maintainers: ["0x11DFE"]
openGraphImageUrl: "https://opengraph.githubassets.com/941a6ee1a1a0c735fa0c5321251e3e8e1c8ae9a5aaa8841c473cec53708482dc/0x11DFE/controld-hagezi-sync"
---

# ControlD HaGeZi Sync

> **Zero-dependency Bash with TOML power.** No Python virtualenvs, no Go binaries, no opaque profile IDs. Write human-readable profile names, mix-and-match folders per profile, dry-run before you push, and know exactly how fresh your blocklists are.

Automatically sync HaGeZi DNS blocklists to your ControlD profiles via the ControlD API.

---

## Why this one?

| Feature                              | **0x11DFE/controld-hagezi-sync** | **keksiqc/ctrld-sync** | **italorgama/ctrld-hagezi-sync** | **tupcakes/controld-updater** |
|--------------------------------------|------------------------------------------------|---------------------------------|----------------------------------------|-------------------------------------------------|
| **Language**                         | Bash (`curl` + `jq`)                           | Python 3 + httpx               | Go (single binary)                     | Python + Docker/Podman                          |
| **Config format**                    | TOML (with comments)                           | Hardcoded list + `.env`        | `lists.txt`                            | CLI args only                                   |…
