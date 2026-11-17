---
repo: "sliday/tamp"
name: "tamp"
description: "Token compression proxy for Claude Code. 50% fewer tokens, zero behavior change."
readmeQualityOk: true
url: "https://github.com/sliday/tamp"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
stars: 99
forks: 8
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-18T13:37:05Z"
lastCommitAt: "2026-11-17T14:37:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 19
maintainers: ["sliday", "jajanet"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e64f004c69ab9bb87069dc752eaf496b2d5d113a76de30d3e0977fa80dce294/sliday/tamp"
---

# Tamp

**Token compression proxy for coding agents.** 52.6% fewer input tokens, 60-70% combined with output compression. Zero code changes. Works with Claude Code, Codex CLI, opencode, Aider, Cursor, Cline, Windsurf, 🦞 [OpenClaw](https://openclaw.app), and any OpenAI-compatible agent.

```
npx @sliday/tamp
```

### Claude Code

```bash
# Install the plugin (auto-starts Tamp each session)
claude plugin marketplace add sliday/claude-plugins
claude plugin install tamp@sliday
```

The plugin adds `/tamp:status` and `/tamp:config` commands. It auto-starts Tamp but does not route traffic. Point Claude Code at Tamp once by adding to `~/.claude/settings.json`:

```json
{ "env": { "ANTHROPIC_BASE_URL": "http://localhost:7778" } }
```

That line makes Claude Code depend on Tamp. Run `tamp install-service` in the same sitting so the proxy is up at every login, and keep `~/.claude/settings.json.backup` until you trust the setup. To undo, delete the `ANTHROPIC_BASE_URL` key.

### 🦞 OpenClaw

```bash
TAMP_STAGES=minify,toon,strip-lines,whitespace,dedup,diff,prune tamp -y
```

Set provider to `http://localhost:7778` → done. Full guide:…
