---
repo: "Filhao2019/Roblox-Obsidian-Vault"
name: "Roblox-Obsidian-Vault"
description: "Obsidian Vault optimized for Roblox Studio. Give AI multiple references of famous games, animations, models, UI and GUI, coding vfx, sfx. Helps AI get an example of what famous games in Roblox have in common and have that are different from failing games and implement it in your game as well! I also combined several other famous vaults to this one!"
readmeQualityOk: true
url: "https://github.com/Filhao2019/Roblox-Obsidian-Vault"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-11-02T09:46:05Z"
lastCommitAt: "2026-11-20T12:22:20Z"
lastReleaseAt: "2026-11-20T12:23:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 29
maintainers: ["Filhao2019"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e1ca754993ae4d28059826c5f869d02c20e2ab7f36392abbeecbf5815045cf0/Filhao2019/Roblox-Obsidian-Vault"
---

# Roblox-Obsidian-Vault

An [Obsidian](https://obsidian.md) vault of references for building Roblox games with AI. It studies what the most-played Roblox games do — game design, 3D assets, UI/GUI, animation and cutscenes, SFX, VFX and code — and links every claim back to its source.

## How to use it

1. Clone the repo and open the folder as a vault in Obsidian (*Open folder as vault*).
2. Start at `00 Home.md`.
3. Point your AI agent (Claude Code, Codex, Cursor…) at the folder. `AGENTS.md` / `CLAUDE.md` tell it how to read and extend the vault.

## Install as Claude Code plugins

Each topic ships as its own plugin with one skill, so Claude loads only the notes for that topic. Asking for "cartoony UI" uses the `cartoony-ui` skill instead of searching the whole vault.

```
/plugin marketplace add Filhao2019/Roblox-Obsidian-Vault
/plugin install cartoony-ui@roblox-obsidian-vault
```

Plugins: `cartoony-ui`, `horror-ui`, `roblox-ui`, `roblox-top-games`, `roblox-game-design`, `roblox-3d-models`, `roblox-animation`, `roblox-audio`, `roblox-vfx`, `roblox-coding`.
