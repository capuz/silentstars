---
repo: "cyl-castillo/agent-console"
name: "agent-console"
description: "Minimalist AI-native console for directing agents inside a repository. Tauri + React + Claude CLI."
readmeQualityOk: true
url: "https://github.com/cyl-castillo/agent-console"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [53, 41]
topics: ["ai-agents", "claude-code", "codex", "coding-agents", "tauri"]
stars: 10
forks: 2
openIssues: 6
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-21T16:05:56Z"
lastCommitAt: "2026-11-13T18:34:57Z"
lastReleaseAt: "2026-05-26T18:22:49Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 37
maintainers: ["cyl-castillo"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c574828faf472d6e63dd7cf79095e9e7cfc3529f7b514cabdd259aec40b8620/cyl-castillo/agent-console"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/cylcastillo"]
discussionCount: 0
---

# Agent Console

A minimalist, AI-native console for directing agents inside a repository.
Home: [agent-console.dev](https://agent-console.dev) · for agents and LLMs:
[llms.txt](https://agent-console.dev/llms.txt). Not to be confused with
[buhuipao/agent-console](https://github.com/buhuipao/agent-console), a Rust TUI
that finds and resumes Codex and Claude Code sessions — different project,
same slug.

Not an IDE. Not a chat client. A small terminal-first desktop app that pairs the Claude Code CLI with an integrated shell, a git diff viewer, and per-turn snapshots — so you can drive an agent through real work without losing control.

Every session is witnessed: agent-console is the reference implementation of
[**Testigo**](https://github.com/cyl-castillo/testigo), an open intent-to-proof
protocol — prompts, human approvals, tool results and per-turn diffs land in a
hash-chained evidence ledger, exportable as signed proof packets anyone can
verify in a browser.

```
┌──────────────────────────────────────────────────────────────────────┐
│ my-repo · javascript · vite · /home/me/code/my-repo                  │
├──────────┬─────────────────────────────────────┬─────────────────────┤…
