---
repo: "Playgama/bridge-godot"
name: "bridge-godot"
description: "One SDK for cross-platform publishing HTML5 games"
readmeQualityOk: true
url: "https://github.com/Playgama/bridge-godot"
homepage: "https://playgama.com/developers"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [95]
topics: ["ads", "game-sdk", "gamedev", "games", "godot", "godot-engine", "html5", "html5-games", "instant-games", "playgama"]
stars: 31
forks: 3
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-10-02T12:15:05Z"
lastCommitAt: "2026-09-30T09:47:59Z"
lastReleaseAt: "2025-07-31T11:48:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 47
maintainers: ["sergei-playgama", "davitsedrakian"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/866520943/a3cedf99-2df3-4d84-8f66-80cd74af5346"
---

</p>

</p>

    ·
    ·
</p>

## Quick start

1. Download `playgama_bridge.zip` from the [latest release](https://github.com/Playgama/bridge-godot/releases/latest) and unzip it into `res://addons`
2. Enable the plugin in `Project Settings` → `Plugins`
3. Move `Bridge` to the top of the `AutoLoad` list
4. In the HTML5 export preset, set `Custom HTML Shell` to:
   ```
   res://addons/playgama_bridge/template/index.html
   ```

Config file: `addons/playgama_bridge/template/playgama-bridge-config.json`. Create it with the [config editor](https://playgama.github.io/bridge-config-editor/). Bridge initializes automatically while the game loads.

Using Godot 4? See [bridge-godot-4](https://github.com/Playgama/bridge-godot-4).

### Next steps

Full API — ads, saves, payments, leaderboards and more: [wiki.playgama.com](https://wiki.playgama.com/playgama/bridge-sdk/api?utm_source=github&utm_medium=bridge).

## Developer tools

### Bridge DevTools for Chrome

[Playgama Bridge DevTools](https://chromewebstore.google.com/detail/playgama-bridge-devtools/mldhijegcmagkcchjmenafiipkhjlppo) adds a `Bridge` panel to Chrome DevTools: SDK detection, module state, config, events and analytics calls of…
