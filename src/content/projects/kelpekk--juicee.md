---
repo: "Kelpekk/Juicee"
name: "Juicee"
description: "game-feel effects for Godot 4 with a visual graph editor. Inspired by FEEL."
readmeQualityOk: true
url: "https://github.com/Kelpekk/Juicee"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [92]
topics: ["addon", "feel", "game-feel", "gamedev", "gdscript", "godot", "godot-addon", "godot-engine", "godot4", "juice"]
stars: 86
forks: 7
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-06-10T16:12:10Z"
lastCommitAt: "2026-07-31T06:29:06Z"
lastReleaseAt: "2026-07-12T12:20:23Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 30
maintainers: ["Kelpekk", "FloatVip"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf831e3191fc1e70036bf2f6f986a683fc7179dcf0ee2a08b02dd0d03404849/Kelpekk/Juicee"
fundingLinks: ["GITHUB:https://github.com/Kelpekk"]
discussionCount: 2
---

</p>

# 🧃 Juicee

**Game-feel effects for Godot 4 — 99 effects, a visual graph editor, a custom inspector, and a one-line API. Free & MIT.**

## 🎬 Demo

**Same enemy hit — with and without Juicee.** One squashes, flashes, throws a particle burst and a crit number; the other just sits there.

</p>

<table>
  <tr>
    <td width="50%" align="center" valign="top">
      <sub><b>Inspector</b> — build a sequence with sliders</sub>
    </td>
    <td width="50%" align="center" valign="top">
      <sub><b>Graph editor</b> — wire effects visually</sub>
    </td>
  </tr>
</table>

```gdscript
# Drop-in presets — one line, done:
Juicee.preset_hit(enemy)
Juicee.preset_hit_crit(enemy)
Juicee.preset_explosion(self)
Juicee.preset_level_up(self)
Juicee.preset_damage_taken(player)
Juicee.preset_death(player)
Juicee.preset_combo(self)
Juicee.preset_dash(self, direction)
Juicee.preset_pickup(coin_node)
Juicee.preset_boss_intro(self)
Juicee.preset_low_health_pulse(player_sprite)
Juicee.preset_victory(self)

# Or individual effects:
Juicee.shake_camera(self, 12.0, 0.3)
Juicee.damage_number(enemy, 999, true)   # crit!
Juicee.bloom(self, 1.5)                  # WorldEnvironment glow…
