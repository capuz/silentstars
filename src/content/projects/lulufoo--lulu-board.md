---
repo: "lulufoo/lulu-board"
name: "lulu-board"
description: "One text protocol — AI writes it, you edit on the canvas, both stay in sync."
readmeQualityOk: true
url: "https://github.com/lulufoo/lulu-board"
homepage: "https://luluboard.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
topics: ["agent-skills", "ai", "canvas", "cursor", "diagram", "javascript", "llm", "typescript", "visualization", "whiteboard"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-12T17:00:41Z"
lastCommitAt: "2026-11-01T10:44:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 56
maintainers: ["lulufoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b0ce820c7a1844aa142b342da44d5cbb55107e49d184f4e1cc196604a5bf82f/lulufoo/lulu-board"
---

&nbsp;

---

One text protocol — the AI agent writes it, Lulu Board draws it, you work on the canvas; both stay in sync. A local loop.

## Why

Diagrams go stale when only one side can edit them. Lulu Board keeps one text protocol as the source of truth: the agent writes it, you refine it on the canvas (or in Source), and both stay in sync.

## Quick start

Chat entry is [`/boxes`](https://github.com/lulufoo/lulu-board/blob/HEAD/skills/boxes/SKILL.md):

```text
/boxes
```

The Drawer opens on a built-in template — the onboarding diagram — so you can see the loop right away:

**Source** (`<>`) → **History** to browse the built-in templates. New files are stored there too.

## Draw from a prompt

Describe what you want after `/boxes`:

```text
/boxes Draw an Android MVI architecture diagram for me.
```

The agent authors the source and opens the Drawer. From there you can drag and edit on the canvas, change Source by hand, or ask again — same document, shared with the agent.

A signed-in owner can share a saved cloud diagram from the Share dock. The first audience is All, with View or Edit. Anyone with the `#s:` link can open the current diagram; Edit lets a signed-in visitor change…
