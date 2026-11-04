---
repo: "ratomirjovanovic/pandaward"
name: "pandaward"
description: "Local, evidence-based application security assessment engine and Claude Code plugin"
readmeQualityOk: true
url: "https://github.com/ratomirjovanovic/pandaward"
homepage: "https://pandaward.dev"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["claudecode", "claudecode-plugin", "claudecode-skill", "claudecode-skills", "go", "golang", "appsec", "devsecops", "mcp", "sast"]
stars: 99
forks: 0
openIssues: 4
closedIssues: 130
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-27T11:48:43Z"
lastCommitAt: "2026-11-04T13:05:06Z"
lastReleaseAt: "2026-10-29T12:52:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 39
maintainers: ["ratomirjovanovic", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bb8c51b7b09a788a7646ab6a712fb6270cbc91ad186ee4f94d66b365828965d/ratomirjovanovic/pandaward"
---

A standalone Go CLI and a Claude Code plugin. Passive by default. Honest about what it did not test.

---

Most scanners print a list of alerts and stop. PandaWard keeps a **ledger**: every control it could check, how it checked it, the redacted evidence, and every control it could *not* decide. Findings are fingerprinted across runs, so a fix becomes `REMEDIATED` only when the check runs again and no longer sees the problem, and a moved or renamed file keeps its findings, their IDs and your triage instead of reading as fixed.

## Why PandaWard

| | |
|---|---|
| **Safe by default** | The default profile only reads the repository. It never runs install scripts, Makefiles or builds, never follows symlinks, and sends no traffic to any target. |
| **Human-authorized network tests** | Anything that sends a request needs a scope manifest that a person filled in and approved from an interactive terminal. An AI agent cannot approve it. |
| **No false "all clear"** | Only `PASS` and `FAIL` are decisive. A missing scanner is `BLOCKED`, a crash is `ERROR`, a heuristic hit is `SUSPECTED`. None of them count as secure. |
| **Evidence, not opinions** | Each finding links to a redacted, SHA-256…
