---
repo: "EL4CTEO/godot-skills"
name: "godot-skills"
description: "Godot 4.7 Agent Skills for AI coding agents, based on Godot 4.7.2: GDScript and C#/.NET, exact API lookup, safe scene editing, compile checks."
readmeQualityOk: true
url: "https://github.com/EL4CTEO/godot-skills"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["agent-skills", "ai-agents", "claude-code", "codex", "csharp", "cursor", "dotnet", "gamedev", "gdscript", "gemini-cli"]
stars: 52
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-11-19T11:20:38Z"
lastCommitAt: "2026-11-27T16:27:02Z"
lastReleaseAt: "2026-11-21T15:01:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 78
undervaluedScore: 17
maintainers: ["EL4CTEO"]
openGraphImageUrl: "https://opengraph.githubassets.com/b71d26bd7bb2e16f2fa3d53c3e7b8032860c81e66c17896388bd32dd9c6165c1/EL4CTEO/godot-skills"
fundingLinks: ["GITHUB:https://github.com/EL4CTEO"]
---

# Godot Agent Skills

27 Godot **4.7** skills for AI coding agents (Claude Code, Codex, OpenCode, Gemini CLI, Copilot, Cursor), GDScript and C#/.NET.

Agents look up exact APIs from **your installed engine**, edit scenes safely through Godot itself, and verify with real compile, test and export runs. Every code example is compiled on Godot 4.7.2 by the test suite.

**Tip:** use Godot .NET with C# if you can: models know C# better and the compiler catches mistakes early. Pick GDScript if you need web export (not supported for C# in 4.x).

## Install

**Claude Code** (plugin):
```
/plugin marketplace add EL4CTEO/godot-skills
/plugin install godot-agent-skills@godot-agent-skills
```

**Any agent** (clone, then run the installer):
```bash
git clone https://github.com/EL4CTEO/godot-skills
./godot-skills/install/install.sh          # macOS / Linux
.\godot-skills\install\install.ps1         # Windows
```
Installs to `~/.claude/skills` and `~/.agents/skills` (read by Codex, OpenCode, Gemini CLI, Copilot, Cursor). Options: `--agent claude|codex|opencode|gemini|copilot|cursor|all`, `--project DIR`, `--skills a,b`, `--uninstall` (PowerShell: `-Agent`, `-Project`, `-Skills`, `-Uninstall`).
