---
repo: "AOS-Agent/aos"
name: "aos"
description: "AOS — Agentic Operating System"
readmeQualityOk: true
url: "https://github.com/AOS-Agent/aos"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 22]
stars: 6
forks: 0
openIssues: 836
closedIssues: 29
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-21T21:02:27Z"
lastCommitAt: "2026-07-21T06:09:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 38
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8191030e8cda02d8a057425ee4214540214d3b407771252562ce1b6810a008ea/AOS-Agent/aos"
discussionCount: 3
---

</p>

<h1 align="center">AOS</h1>
  Turn a Mac Mini into an autonomous workstation.<br/>
  AI agents manage your work, run tasks, compound knowledge, and improve over time.
</p>

---

## Quick Start

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/hishamalhadi/aos/main/bootstrap.sh)"
```

Idempotent. Safe to re-run. Takes ~5 minutes. When it finishes, type `claude` and Chief will guide you through onboarding.

---

## What is AOS?

AOS is an operating system layer for macOS. It doesn't build an agent framework — it configures **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)** as its runtime with structured context, agent definitions, skills, and hooks.

The filesystem is persistent memory. CLAUDE.md files are the kernel. Agents are markdown with frontmatter. Everything is files.

<table>
<tr>
<td width="50%">

**For a solo person** (teacher, chef, freelancer)
> One machine, one place for everything. Add a task, see your tasks. That's it.

</td>
<td width="50%">

**For multi-project operators**
> 3 businesses, 7 projects. Visibility across all of them. Agents handling the routine.

</td>
</tr>
</table>

---

## The Stack

```
INTERFACE ──── Telegram…
