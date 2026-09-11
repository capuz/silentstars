---
repo: "yelmuratoff/agent_sync"
name: "agent_sync"
description: "Write AI rules once → sync to Claude, Cursor, Copilot, Gemini and more tools automatically"
readmeQualityOk: true
url: "https://github.com/yelmuratoff/agent_sync"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["agents", "agentskills", "ai-agents"]
stars: 15
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-03T11:09:28Z"
lastCommitAt: "2026-09-11T08:14:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 55
maintainers: ["yelmuratoff", "brad-git4work"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7356789131a026edf6224c7a8f44046577b8f50cf6f2816f92e285dba72f296/yelmuratoff/agent_sync"
---

<h3>One source → 13 AI tools. Stop copy-pasting rules.</h3>

  <p>
    </a>
    </a>
    </a>
  </p>
</div>

## The problem

Every AI coding tool wants instructions in its own format and directory: `.claude/CLAUDE.md`, `.cursor/rules/*.mdc`, `.github/instructions/*.instructions.md`, `AGENTS.md`, `.windsurf/rules/`...

Use more than one tool — or work on a team where different people use different tools? You end up maintaining the same rules in 5+ formats. They drift. They go stale. You copy-paste forever.

## The solution

AgentSync syncs from a single source (`.ai/src/`) into **13 AI tools**: Claude Code, GitHub Copilot, Cursor, Gemini CLI, OpenAI Codex, Kimi Code, OpenCode, Windsurf, JetBrains Junie, Cline, Amazon Q, Zed, Google Antigravity.

Write once → `agentsync sync` → every tool gets instructions in its native format.

```
.ai/src/rules/testing.md
    ↓ agentsync sync
├── .claude/rules/testing.md              # + @rules/testing.md import in CLAUDE.md
├── .cursor/rules/testing.mdc             # + globs/alwaysApply frontmatter
├── .github/instructions/testing.instructions.md  # + applyTo frontmatter
├── .windsurf/rules/testing.md            # + trigger: always_on frontmatter…
