---
repo: "open-gsd/gsd-path"
name: "gsd-path"
description: " Disk-backed pipeline that takes AI coding agents from raw idea to shipped code — gated phases, orchestrated subagent builds, and crash-proof state, from a single milestone to a full multi-milestone program."
readmeQualityOk: true
url: "https://github.com/open-gsd/gsd-path"
homepage: "https://www.opengsd.net"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 34
forks: 11
openIssues: 22
closedIssues: 145
watchers: 1
contributors: 8
recentReleases: 10
createdAt: "2026-08-01T14:48:37Z"
lastCommitAt: "2026-10-25T02:47:07Z"
lastReleaseAt: "2026-10-09T01:38:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["jeremymcs", "shai-kappel"]
openGraphImageUrl: "https://opengraph.githubassets.com/494e28035b39bd8d82a40f5234167a8571bfde755ee9f2b2e67830247784e846/open-gsd/gsd-path"
discussionCount: 0
---

# GSD Path

A disk-backed project pipeline for AI coding agents. It turns a raw idea into
shipped code through gated phases — inspect, define, research, decide,
roadmap, plan, build, and ship — with every handoff written to `.project/`
so any session can resume from disk alone. A single milestone or a full
multi-milestone program: program flow adds a charter and roadmap above the
milestone loop. While a milestone builds, the next one can be planned in
parallel under `.project/next/` (lookahead); a building milestone can also be
abandoned on an explicit ruling, archiving its partial work for a re-slice.

**Hosts with a passing full live milestone for release 1.6.2:** Codex, Claude
Code, Grok, OpenCode, Antigravity CLI, Cursor, and Kimi Code.

**Hosts with an installer and a dispatch contract, but no live milestone for
release 1.6.2:** GitHub Copilot CLI (account quota exhausted), Qwen Code, Zed,
and Kiro (API credits), and Muse Code (no live release evidence recorded yet).
These hosts are excluded from the release evaluation. Exclusion is not a pass.

With guard hooks installed, only Claude Code and Cursor get a fail-closed
native guard; every other host relies on Git hooks. The…
