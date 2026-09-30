---
repo: "Playgama/bridge-godot-4"
name: "bridge-godot-4"
description: "One SDK for cross-platform publishing HTML5 games"
readmeQualityOk: true
url: "https://github.com/Playgama/bridge-godot-4"
homepage: "https://playgama.com/developers"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [93]
topics: ["ads", "cross-platform", "game-sdk", "games", "godot", "godot4", "html5-games", "instant-games", "playgama"]
stars: 44
forks: 4
openIssues: 2
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2024-10-31T07:22:58Z"
lastCommitAt: "2026-09-30T09:48:19Z"
lastReleaseAt: "2025-10-14T12:32:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["sergei-playgama", "davitsedrakian"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/881245336/bcfa6533-7385-4c6b-a58a-4f816f3db0d8"
---

</p>

</p>

    ·
    ·
</p>

## Quick start

1. Download `playgama_bridge.zip` from the [latest release](https://github.com/Playgama/bridge-godot-4/releases/latest) and unzip it into `res://addons`
2. Enable the plugin in `Project Settings` → `Plugins`
3. Move `Bridge` to the top of the `AutoLoad` list
4. In the Web export preset, set `Custom HTML Shell` to:
   ```
   res://addons/playgama_bridge/template/index.html
   ```

Config file: `addons/playgama_bridge/template/playgama-bridge-config.json`. Create it with the [config editor](https://playgama.github.io/bridge-config-editor/). Bridge initializes automatically while the game loads.

Using Godot 3? See [bridge-godot](https://github.com/Playgama/bridge-godot).

### Next steps

Full API — ads, saves, payments, leaderboards and more: [wiki.playgama.com](https://wiki.playgama.com/playgama/bridge-sdk/api?utm_source=github&utm_medium=bridge).

## Developer tools

### Bridge DevTools for Chrome

[Playgama Bridge DevTools](https://chromewebstore.google.com/detail/playgama-bridge-devtools/mldhijegcmagkcchjmenafiipkhjlppo) adds a `Bridge` panel to Chrome DevTools: SDK detection, module state, config, events and analytics calls of the…
