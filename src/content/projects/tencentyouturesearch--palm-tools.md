---
repo: "TencentYoutuResearch/Palm-Tools"
name: "Palm-Tools"
description: "Palm tools collection — skills, MCP, SDK, documentation, utilities, etc."
readmeQualityOk: true
url: "https://github.com/TencentYoutuResearch/Palm-Tools"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [35, 25]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 9
recentReleases: 7
createdAt: "2026-07-13T12:42:35Z"
lastCommitAt: "2026-11-04T11:27:27Z"
lastReleaseAt: "2026-09-22T09:10:22Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["gnoxia", "Paradixes", "guoxiaoqian"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eef39654b4fdf32f2ba58443b9c050eea4eaa6e6ececc3516f9aff8e2aca3ef/TencentYoutuResearch/Palm-Tools"
---

A multi-backend terminal workspace for AI coding agents.<br />
  Run CodeBuddy, Claude, Codex, Gemini, and more in one native app; share memory across sessions; keep local and remote agents in sync over SSH.

---

## One app, every agent.

`codebuddy`, `claude`, `codex`, `gemini`, `opencode`, `amp`, `cursor`, `copilot`, `grok`, `antigravity`, `kimi`, `kiro`, `droid`, `pi` — fifteen built-in backends, data-driven from `~/.config/kode/config.toml`. Pick one per tab, or add your own. Each tab is a real PTY running the real CLI, not a wrapper.

The backend chooser is a cold snapshot at startup; manage backends from `Settings → Backends` and restart to pick up new ones. The `codebuddy` / `claude` / `codex` defaults ship with no positional args — positional first tokens get treated as initial prompts by the CLI, so this is regression-tested.

No accounts, no telemetry, no cloud sync. Your code, tokens, and conversations stay on your machine.

Every backend gets an icon in the chooser and sidebar. Drop in any PNG in `Settings → Backends` to create a custom backend avatar, or build a small animated avatar gallery from your own generated image sequence:

```text
# macOS…
