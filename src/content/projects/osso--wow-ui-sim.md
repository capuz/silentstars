---
repo: "Osso/wow-ui-sim"
name: "wow-ui-sim"
description: "WoW UI Simulator - Load and render WoW addons outside the game"
readmeQualityOk: true
url: "https://github.com/Osso/wow-ui-sim"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 46
forks: 8
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-02-02T21:58:57Z"
lastCommitAt: "2026-11-07T11:40:22Z"
lastReleaseAt: "2026-05-09T03:51:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 45
maintainers: ["Osso", "lasse-tech"]
openGraphImageUrl: "https://opengraph.githubassets.com/79dfefb8728b512939bac9e0ded32914c38470491feb705c626b1d21d40a7f8e/Osso/wow-ui-sim"
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
