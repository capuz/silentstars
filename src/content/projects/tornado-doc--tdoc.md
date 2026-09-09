---
repo: "tornado-doc/tdoc"
name: "tdoc"
description: "Prompt-native interactive HTML docs — bdocs. Generate, comment on, and publish docs from inside codex, Claude Code, and any agent"
readmeQualityOk: true
url: "https://github.com/tornado-doc/tdoc"
homepage: "https://tdoc.dev/"
language: "HTML"
languages: ["HTML"]
languagePcts: [83]
stars: 103
forks: 9
openIssues: 12
closedIssues: 162
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-05-13T06:26:43Z"
lastCommitAt: "2026-09-09T08:18:40Z"
lastReleaseAt: "2026-05-13T09:55:02Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 34
maintainers: ["serenakeyitan", "yayashuxue"]
openGraphImageUrl: "https://opengraph.githubassets.com/512601a28658028b7daf540bf521618d6011b3e7ecb535f00d13df873f073f0c/tornado-doc/tdoc"
discussionCount: 0
---

# tdoc — agent-native document review

**Turn a prompt into a commentable HTML document, share it as a live URL, and
bring anchored comments back into your agent workflow.**

tdoc is a prompt-native document surface for agent-assisted writing and review.
It creates versioned HTML snapshots, adds Google-Docs-style comments on text
and artifacts, and lets an agent pull those comments to generate the next
version with per-comment status replies.

**Source of truth (see [AGENTS.md](https://github.com/tornado-doc/tdoc/blob/HEAD/AGENTS.md)):** remote storage is source of
truth; local HTML is disposable; the local skill is authoring/scaffold.

It runs in two modes:

- **Local Studio** — temporary authoring/preview on `localhost`. Not the
  product source of truth; safe to discard.
- **Published Reader** — remote snapshots on hosted tdoc.dev or on your
  Cloudflare Worker / Vercel project. This is the durable document surface.

tdoc is a first-class **Claude Code** skill and also runs under **Codex**. The
skill auto-detects the host and falls back to plain-text prompts where
Claude-specific tools are unavailable. See [Using tdoc with Codex](#using-tdoc-with-codex).

```
You:  /tdoc new…
