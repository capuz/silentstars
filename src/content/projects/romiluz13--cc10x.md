---
repo: "romiluz13/cc10x"
name: "cc10x"
description: "Router-Owned Claude Code Harness"
readmeQualityOk: true
url: "https://github.com/romiluz13/cc10x"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
stars: 149
forks: 24
openIssues: 0
closedIssues: 15
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2025-10-22T11:54:14Z"
lastCommitAt: "2026-07-04T23:15:46Z"
lastReleaseAt: "2026-03-03T13:01:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 36
maintainers: ["romiluz13", "ChenReuven", "yuvalraz"]
openGraphImageUrl: "https://opengraph.githubassets.com/21c239d97893b69b92e8707bfe4fa32162b9d64e0fda1358a7e12f7cde7c3482/romiluz13/cc10x"
---

</p>

<h1 align="center">cc10x</h1>

  <em>The Claude Code harness you install when you're done babysitting.</em>
</p>

  <strong>1 router</strong> &nbsp;·&nbsp; <strong>9 specialist agents</strong> &nbsp;·&nbsp; <strong>16 skills</strong> &nbsp;·&nbsp; <strong>4 workflows</strong>
</p>

  Fail-closed gates &nbsp;·&nbsp; survives compaction &nbsp;·&nbsp; zero prompt spam &nbsp;·&nbsp; self-tested orchestration
</p>

**Current version:** 12.4.0

---

## Install

**Step 1 — Add the marketplace:**

```bash
/plugin marketplace add romiluz13/cc10x
```

**Step 2 — Install the plugin:**

```bash
/plugin install cc10x@cc10x
```

Then say **"set up cc10x for me"** in Claude Code and restart. Done.

---

## Why cc10x

Ask Claude for something complex. It works for a while. Then it declares **"Done!"** — tests still red, refactor half-finished, and by message 40 it's contradicting itself because the context is gone.

**cc10x fixes the loop, not the prompt.**

| The pain you know | How cc10x handles it |
| --- | --- |
| "Done!" on red tests | `integration-verifier` is independent of the builder. Phase-exit gates block advancement on partial evidence. |
| Silent failures nobody asked about |…
