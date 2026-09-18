---
repo: "kyu1204/oh-my-harness"
name: "oh-my-harness"
description: "Tame your AI coding agents with natural language. Generate enforced guardrails (CLAUDE.md, hooks, settings) from a single command."
readmeQualityOk: true
url: "https://github.com/kyu1204/oh-my-harness"
homepage: "https://www.npmjs.com/package/oh-my-harness"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai-agents", "claude-code", "cli", "code-quality", "developer-tools", "guardrails", "hooks", "tdd", "typescript", "claude"]
stars: 16
forks: 2
openIssues: 6
closedIssues: 17
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-16T00:43:43Z"
lastCommitAt: "2026-09-18T08:28:23Z"
lastReleaseAt: "2026-03-17T22:58:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["kyu1204"]
openGraphImageUrl: "https://opengraph.githubassets.com/3147341a81e5d5c6eac4fd06c27d931ae9ed0d279ffcce7ba6763e79f03224f7/kyu1204/oh-my-harness"
discussionCount: 0
---

# 🐴 oh-my-harness

**CLAUDE.md is a request. oh-my-harness is enforcement.**

One command turns "TDD enforced, block dangerous commands" into hooks that actually **block** your AI coding agent — for Claude Code, Codex and Pi at once.

</div>

```bash
npx oh-my-harness init "React + FastAPI, TDD enforced, lint on save"
```

That is the whole setup. Your agent now hits a wall when it tries to:

| Agent tries to... | Result |
|---|---|
| `git commit` while tests fail | ⛔ **Blocked** |
| edit `src/foo.ts` before touching `foo.test.ts` | ⛔ **Blocked** (TDD guard) |
| run `rm -rf /`, `chmod -R 777`, or any pattern you list | ⛔ **Blocked** |
| write into `node_modules/`, `.next/`, `dist/` | ⛔ **Blocked** |
| commit on a branch already merged to main | ⛔ **Blocked** |
| `git commit --no-verify`, `git push --force origin main` | ⛔ **Blocked** |
| edit its own hooks or `.claude/settings.json` to switch the guardrails off | ⛔ **Blocked** |
| save a file | ✅ auto-lint |
| push a branch | ✅ auto-PR |

Every decision is logged to `.omh/state/events.jsonl` — `omh stats` shows what your agent tried and what got stopped, and `omh explain` tells you in plain language why the last few calls were…
