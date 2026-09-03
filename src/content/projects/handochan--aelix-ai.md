---
repo: "handochan/aelix-ai"
name: "aelix-ai"
description: "An agent runtime and extension platform in pure Python — self-hosted, auditable, and extensible on the model budgets you already pay for."
readmeQualityOk: true
url: "https://github.com/handochan/aelix-ai"
homepage: "https://handochan.github.io/aelix-ai/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-runtime", "ai-agent", "anthropic", "cli", "coding-agent", "developer-tools", "extensions", "llm", "python", "self-hosted"]
stars: 9
forks: 1
openIssues: 98
closedIssues: 101
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-16T16:08:41Z"
lastCommitAt: "2026-09-03T08:13:32Z"
lastReleaseAt: "2026-08-20T09:49:52Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 84
undervaluedScore: 51
maintainers: ["handochan"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1240827282/05fa0ddd-f17a-47f2-885a-de0b9df794ea"
discussionCount: 0
---

</p>

  <strong>Your own agent world — built on the Python ecosystem.</strong>
</p>

</p>

</p>

Aelix is a small core. The plugins and extensions are the ecosystem, and an extension is
just a Python function — so the stack you already work in becomes the agent's toolbox.
Self-hosted, auditable, and running on the model budgets you already pay for.

</p>

---

## What Aelix is

An agent runtime and extension platform in pure Python. It ships today as a terminal coding
agent — its first workload, not its boundary. Read every line it runs, keep it entirely
inside your own perimeter, and extend it with plain Python functions that import your
existing stack — DuckDB, an internal SDK, a warehouse client — directly, in-process.

It sends nothing about you anywhere; there is no telemetry. It does make a few requests for
itself, and they are the whole list: a once-a-day release check (interactive sessions only —
headless runs never check, and `/settings` turns it off), the first-use `ripgrep`/`fd`
download, and the extension-catalog fetch. `--offline` turns those off.

## Install

During the beta, Aelix installs from GitHub Releases through a checksum-verified installer.
It bootstraps…
