---
repo: "Osso/wow-ui-sim"
name: "wow-ui-sim"
description: "WoW UI Simulator - Load and render WoW addons outside the game"
readmeQualityOk: true
url: "https://github.com/Osso/wow-ui-sim"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
stars: 42
forks: 5
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-02T21:58:57Z"
lastCommitAt: "2026-10-27T09:16:59Z"
lastReleaseAt: "2026-05-09T03:51:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 35
maintainers: ["Osso"]
openGraphImageUrl: "https://opengraph.githubassets.com/0783c31a8cb1192420ade97da804724d0b5679f3616bbca26188a959e2f9e7d5/Osso/wow-ui-sim"
---

# WoW UI Simulator

A World of Warcraft UI simulator for addon testing and UI rendering. Supports headless test workflows plus frame-tree and screenshot output — no WoW client required.

## Community

Join the wowless Discord: <https://discord.gg/rTwWcfJXuz> — we have a `#wow-ui-sim` channel there.

## UI Gallery

| Main Screen | Spellbook |
|---|---|
|  |  |

| Character Panel | Reputations Panel |
|---|---|
|  |  |

| Blacksmithing | Guild Panel |
|---|---|
|  |  |

| Store | Achievements Panel |
|---|---|
|  |  |

| World Map | Housing Panel |
|---|---|
|  |  |

| Talents Panel | Damage Meter |
|---|---|
|  |  |

| Game Menu |
|---|
|  |

## GitHub Action

Run your addon's test suite in CI:

```yaml
- uses: osso/wow-ui-sim@12.0.5
  with:
    addon: MyAddon
```

The action ref matches the WoW interface version it ships against
(e.g. `@12.0.5`). Use `@master` to track unreleased changes.

Tests live in `Interface/AddOns/MyAddon/tests/*.lua`:

```lua
test("frame name matches", function()
    local f = CreateFrame("Frame", "MyFrame")
    assertEquals("MyFrame", f:GetName())
end)
```

A minimal end-to-end example is at
[Osso/test-wow-addon](https://github.com/Osso/test-wow-addon) —…
