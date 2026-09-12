---
repo: "SurefireStudios/tldr"
name: "tldr"
description: "Too long; didn't read — for AI coding agents. A skill that makes Claude Code, Cursor, Codex, Gemini CLI and 13 more lead with a 3-line TL;DR and fold the detail instead of burying the answer. 16% fewer output tokens on Sonnet, measured, with every run published. Demote, don't delete."
readmeQualityOk: true
url: "https://github.com/SurefireStudios/tldr"
homepage: "https://github.com/SurefireStudios/tldr#install"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["claude-code", "claude-skills", "claude-code-plugin", "cursor", "codex", "ai-agents", "agent-skills", "llm", "tldr", "summarization"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-11T17:27:56Z"
lastCommitAt: "2026-09-12T08:06:00Z"
lastReleaseAt: "2026-09-12T00:56:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1366497667/0ba534d7-d265-44db-8cb7-b23e2f31f6f7"
discussionCount: 0
---

</p>

<h1 align="center">tldr</h1>

  <strong>Too long; didn't read — for AI coding agents.</strong>
</p>

  Your coding agent buries the answer in four paragraphs.<br/>
  This makes it lead with three lines and fold the rest.<br/>
  <em>Demote, don't delete.</em>
</p>

</p>

  <strong title="English">🇬🇧 English</strong> ·
</p>

---

## Install

Paste this into your agent. It works in Claude Code, Cursor, Codex, Gemini CLI, and the 20 agents in the table below.

```text
Install the tldr skill from https://github.com/SurefireStudios/tldr — read the repo's AGENTS.md for instructions.
```

Prefer a real command? Claude Code:

```bash
claude plugin marketplace add SurefireStudios/tldr
claude plugin install tldr@tldr
```

Every other agent: 🔗 **[INSTALL.md](https://github.com/SurefireStudios/tldr/blob/HEAD/INSTALL.md)**

Then type `/tldr`.

</p>

  <sub>Real output from the eval suite, not a mockup — both halves are in <a href="evals/results/run6-pass/">evals/results/run6-pass/</a>.</sub>
</p>

## The problem

Two problems, actually.

**Your agent talks too much.** You asked a yes/no question. You got four paragraphs, a numbered plan, a caveat about edge cases, and "Hope this…
