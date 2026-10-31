---
repo: "Ju571nK/sigil"
name: "sigil"
description: "Fleet AI Security Posture Management (AI-SPM): client agents on each developer machine score their AI coding agents' guard surfaces (Claude Code, Cursor, Codex, Gemini CLI — permissions, hooks, sandboxes, mcp.json) and ship hash-anchored events to a central server + your SIEM. Fleet-wide posture; measures, doesn't block. Rust."
readmeQualityOk: true
url: "https://github.com/Ju571nK/sigil"
homepage: "https://sigilworks.net"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["ai-security", "rust", "siem", "ai-agent", "ai-coding-agent", "ai-spm", "claude-code", "codex", "cursor", "developer-security"]
stars: 15
forks: 0
openIssues: 16
closedIssues: 143
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-09T03:24:48Z"
lastCommitAt: "2026-10-31T02:00:25Z"
lastReleaseAt: "2026-06-11T23:00:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["Ju571nK"]
openGraphImageUrl: "https://opengraph.githubassets.com/251279cb12d508d99f560c87c73e76daadc9cca4e64d0f9ead64da8ce4fbd037/Ju571nK/sigil"
discussionCount: 0
---

# Sigil

**Your Claude Code, Codex, and Cursor can run whatever their config allows. Sigil scores what that is — in one command, before something does.**

A coding agent doesn't ask before it runs a hook, launches an MCP server, or
skips its sandbox. Those decisions live in config files you never open. Sigil
reads them and tells you how exposed you are.

```sh
curl --proto '=https' --tlsv1.2 -fsSL https://raw.githubusercontent.com/Ju571nK/sigil/main/install.sh | sh
sigil scan
```

```
overall  CRITICAL 7.5 · 7 tools · 14 findings

TOOL          SCOPE         SCORE  BUCKET     TOP FINDINGS
claude-code   user-global    7.5   critical   no_sandbox · broad_matcher (.* PreToolUse) · destructive_in_inline_command
codex         user-global    5.6   high       no_sandbox · mcp_server_local_command
cursor        application    2.5   medium     mcp_server_local_command
antigravity   user-global    0.0   low        clean

not configured: continue-dev, gemini      ·      run `sigil scan --json` for every finding
```

> Your EDR sees the command that ran. Sigil sees the permission that let it run.

Runs on your machine · no account · nothing leaves the box · macOS / Linux / Windows · Rust ·…
