---
repo: "TheCommandCraft/Vanishpp"
name: "Vanishpp"
description: "A vanish plugin for Minecraft Java servers."
readmeQualityOk: true
url: "https://github.com/TheCommandCraft/Vanishpp"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 7
forks: 8
openIssues: 2
closedIssues: 16
watchers: 0
contributors: 7
recentReleases: 5
createdAt: "2026-04-06T18:25:36Z"
lastCommitAt: "2026-11-07T22:52:11Z"
lastReleaseAt: "2026-11-06T20:15:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 96
undervaluedScore: 79
maintainers: ["Marzionz", "TheCommandCraft"]
openGraphImageUrl: "https://opengraph.githubassets.com/359c3611259ecebe482ba8da63cee670308a61cc33ddbaf221144cc957da48c5/TheCommandCraft/Vanishpp"
---

# Vanish++

**The absolute standard for modern admin stealth on Paper/Folia servers.**

---

Vanish++ renders other vanish plugins obsolete. Built for modern **Paper** servers, it uses packet interception, native physics manipulation, and deep API hooks to make you **mathematically undetectable** — with first-class support for **Folia**, Purpur, Spigot, and Bukkit too.

Works out of the box with zero configuration required.

---

## Features

Most plugins just hide you visually. Vanish++ removes you physically.

- **Invincibility:** No damage, immune to all potion effects, cannot burn.
- **Smart Mob AI:** Mobs completely ignore vanished players. Targeting is cancelled via `EntityTargetEvent` before the mob ever commits to an attack path. Mobs that had already locked on before you vanished are force-detargeted immediately.
- **Projectile Pass-Through:** Arrows, tridents, and snowballs fly physically through your body via native Paper events — impossible to hit a vanished player.
- **Zero Collision:** You cannot push players, mobs, or boats, and they cannot push you.
- **No Physical Triggers:** Walk over Turtle Eggs, Crops, Pressure Plates, Tripwires, and Sculk Sensors without…
