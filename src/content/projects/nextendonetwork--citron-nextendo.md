---
repo: "NextendoNetwork/citron-nextendo"
name: "citron-nextendo"
description: "The Nextendo Network emulator: a Citron build with the Nextendo account system and online play built in. Windows, Linux."
readmeQualityOk: true
url: "https://github.com/NextendoNetwork/citron-nextendo"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 19
forks: 5
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 369
recentReleases: 1
createdAt: "2026-08-24T10:10:21Z"
lastCommitAt: "2026-09-26T08:47:26Z"
lastReleaseAt: "2026-09-26T08:47:25Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 50
maintainers: ["CollectingW", "github-actions[bot]", "Kazuals"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c844fb4720182869aa0fad8850c8ac089dd1bf224e24d5d7a911dddc26b7477/NextendoNetwork/citron-nextendo"
---

# Citron Neo — Nextendo Network / NZ:P Edition

A fork of the [Citron Neo](https://github.com/citron-neo/emulator) with two
purposes:

1. **Nextendo Network online play** — connect a Nextendo Network account and play supported titles
   online from Citron, without hosts-file edits, external DNS, or manual SSL bypass.
2. **Nazi Zombies: Portable (Emulator Edition)** — the emulator-side fixes this fork was
   originally created for, and still carries.

> [!WARNING]
> **This is a work in progress. Expect bugs.**
>
> Online support is new, incomplete, and only lightly tested — largely by one person, on one
> machine, against multiple games. Things will break. If you hit a problem, please
> **[open an issue](https://github.com/NextendoNetwork/citron-nextendo/blob/HEAD/../../issues)** and include:
>
> - your `citron_log.txt` (Linux: `~/.local/share/citron/log/citron_log.txt`)
> - the exact error code the game showed, if any (e.g. `2306-0802`)
> - the game, its version, and what you were doing when it failed
>
> A log makes the difference between a fixable report and a guess. For network problems, set the
> log filter to `*:Info Service:Debug Service.SSL:Debug WebService:Debug` before…
