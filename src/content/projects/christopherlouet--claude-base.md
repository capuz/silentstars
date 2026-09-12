---
repo: "christopherlouet/claude-base"
name: "claude-base"
description: "Opinionated Claude Code foundation — Explore → TDD → Audit workflow, auto-detected stack presets (nextjs, fastapi, astro, ...), curl | bash install. MIT."
readmeQualityOk: true
url: "https://github.com/christopherlouet/claude-base"
homepage: "https://christopherlouet.github.io/claude-base/"
language: "Shell"
languages: ["Shell"]
languagePcts: [90]
topics: ["agentic-ai", "ai-coding", "anthropic", "claude-ai", "claude-code", "cli-tool", "developer-experience", "markdown", "prompt-engineering", "slash-commands"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 14
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-15T20:54:01Z"
lastCommitAt: "2026-09-12T08:04:08Z"
lastReleaseAt: "2026-05-08T08:15:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 63
maintainers: ["christopherlouet", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e88b077e3e312c043469298d43fa4bb30c832976927ce212ba29693ae33bdb84/christopherlouet/claude-base"
discussionCount: 0
---

# claude-base

> **Make Claude Code follow a real engineering workflow** — Explore → Specify → Plan → TDD → Audit → Commit — with guardrails that test-first, audit to a quality score, and block secrets + destructive commands automatically.

Most Claude Code setups add more agents. claude-base adds **discipline and safety**: per-file rules, hooks, and an anti-drift CI gate. One install, auto-detects your stack — and it **learns from your mistakes across every project** so you stop repeating them.

**What it takes off your plate, every session:**
- **re-explaining your standards** — a human-gated lessons store carries them across *all* your projects, so a mistake fixed once doesn't come back;
- **the agent "passing" its own checks** with a hollow test, a stub, or a quietly-weakened linter — the anti-gaming layer blocks that;
- **finding it in review** — a hardcoded secret, a commit over failing tests, or a `--no-verify` bypass is stopped at the hook, before it lands.

_A real `curl | bash` install + `claude-base init` scaffolding the foundation into a project — start to finish._

## Try it (30 seconds)

**Requires:** `bash` **4.0 or newer**, `git` and `jq` on your PATH —…
