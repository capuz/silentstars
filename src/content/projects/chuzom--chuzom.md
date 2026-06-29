---
repo: "Chuzom/Chuzom"
name: "Chuzom"
description: "Lightweight signal-driven LLM router for Claude Code, Cursor, Codex, Gemini CLI, and Codex CLI"
url: "https://github.com/Chuzom/Chuzom"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 14
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-05T15:09:06Z"
lastCommitAt: "2026-06-29T07:23:22Z"
lastReleaseAt: "2026-06-24T12:32:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 41
maintainers: ["ypollak2"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2c0a8bde890b5ad473cf2267a927ff99cfe18e9fff9a910a51035632d8e2302/Chuzom/Chuzom"
---

# Chuzom — Extend Your Claude Quota. 3× Longer Sessions.

---

</p>

  <strong>⭐ Star on GitHub if Chuzom saves your quota ⭐</strong><br/>
  <em>Help other developers discover automatic LLM routing</em>
</p>

---

## The Problem

You're on **Claude Pro ($20/mo), Max ($100/mo), or Max ($200/mo)** — a flat subscription, not pay-per-token.

But Claude Code routes **every request** through your quota: file reads, quick questions, routine edits, and complex reasoning all burn the same limited budget. Claude throttles after roughly 40–50 messages in a 5-hour rolling window.

**The result: your session hits the wall in under 2 hours, and you wait.**

| Prompt | Quota burned | Actually needs Claude? |
|---|---|---|
| *"What does this function return?"* | ✗ Yes | No |
| *"List files matching \*.test.ts"* | ✗ Yes | No |
| *"Write a test for this function"* | ✗ Yes | Probably not |
| *"Re-architect this auth system"* | ✓ Yes | **Yes** |

Simple questions and complex reasoning cost the same quota. That's the inefficiency Chuzom fixes.

---

## The Solution

**Chuzom** routes each prompt to the cheapest capable model *before* spending Claude quota.

```
Your IDE (Claude Code, Cursor, etc)…
