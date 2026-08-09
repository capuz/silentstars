---
repo: "Dicklesworthstone/eidetic_engine_cli"
name: "eidetic_engine_cli"
description: "Durable, local-first, explainable memory for coding agents. A Rust CLI memory substrate built on the franken-stack (Asupersync, FrankenSQLite, Frankensearch, FrankenNetworkX)."
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/eidetic_engine_cli"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 41
forks: 3
openIssues: 2
closedIssues: 24
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-04-29T08:51:51Z"
lastCommitAt: "2026-08-09T04:47:36Z"
lastReleaseAt: "2026-06-08T17:58:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 43
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1224408143/9d3c112a-9b44-4d3e-9552-a2c69ead7bc7"
---

# Eidetic Engine (`ee`)

**Durable, local-first, explainable memory for coding agents.**

**Install**

```bash
curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/eidetic_engine_cli/main/install.sh?$(date +%s)" | bash -s -- --easy-mode --verify
```

Always verifies the release binary's SHA-256 checksum, verifies its Sigstore
bundle when one is published and `cosign` is available, drops `ee` into
`~/.local/bin`, repairs `PATH`, installs shell completions, runs a self-test,
and prints guidance for detected agent harnesses; settings remain untouched. Pass
`--require-provenance` for fail-closed signature and SLSA provenance
verification. Pass `--help` (e.g. `bash install.sh --help`) for offline
tarballs, proxy options, `--no-gum`, and `--force` reinstall.

</div>

---

## TL;DR

### Why This Exists

Coding agents forget.

A fresh session re-discovers project conventions, re-reads the same files, and
walks into traps another agent already hit. Bad assumptions become "facts"
because the harness has no durable place to look for decisions, failures,
rules, and evidence from prior runs.

The agent harness owns the loop. `ee` handles the memory layer.

### What `ee` Does

`ee`…
