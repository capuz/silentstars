---
repo: "currentbits/solenta"
name: "solenta"
description: "Solenta - local-first desktop control surface for coding agents (Claude Code, Codex, Kimi, Grok, OpenCode)"
readmeQualityOk: true
url: "https://github.com/currentbits/solenta"
homepage: "https://solenta.app"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [56, 39]
stars: 7
forks: 0
openIssues: 127
closedIssues: 1050
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-13T12:48:33Z"
lastCommitAt: "2026-10-11T10:15:16Z"
lastReleaseAt: "2026-08-21T20:03:18Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 63
maintainers: ["currentbits"]
openGraphImageUrl: "https://opengraph.githubassets.com/8aac1c29965276cd18765c8610697b80c981c42035dd098578de05c2de91fb67/currentbits/solenta"
---

Shared local memory across Claude Code, Codex, Cursor, Kimi, Grok, and OpenCode.<br/>
  Session ten does not re-learn what session one already ruled out.

## The problem

New coding-agent sessions start blank. Context gets re-pasted across Claude Code,
Codex, and Grok. The tenth thread is not smarter than the first — just more
expensive.

## What Solenta remembers

A local memory server is auto-injected into every session. SQLite on disk, FTS +
vector search, HTTP + MCP, localhost-only, bearer-token gated. No per-agent
wiring.

```text
Claude Code · thread 1
  Ruled out a rewrite of auth. Cookie session stays.
  Refresh lives in src/lib/auth.ts.

Codex · thread 3
  The 401 retry is in src/lib/api.ts.
  Moving it breaks the refresh path.

Grok · thread 6
  Starts knowing both. Adds the expiry skew
  and leaves the rest alone.
```

- **Hypothesis ledger** — the next thread inherits what the last one already
  ruled out.
- **Provenance and trust score** — every entry tracks which agent wrote it and
  how reliable that agent has been.
- **File:line / thread / commit citations** — before a fact is injected, its
  file citations are checked against the current worktree; contradicted…
