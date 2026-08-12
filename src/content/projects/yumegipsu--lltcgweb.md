---
repo: "Yumegipsu/lltcgweb"
name: "lltcgweb"
description: "A web version of a certain idol card game."
readmeQualityOk: true
url: "https://github.com/Yumegipsu/lltcgweb"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [48, 25]
stars: 11
forks: 1
openIssues: 7
closedIssues: 99
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-06-22T13:05:36Z"
lastCommitAt: "2026-08-12T05:15:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["Yumegipsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bf4bb88df1e7bf8034fba44502662b3733b82c06797742be07e1d7f836de4c2/Yumegipsu/lltcgweb"
discussionCount: 0
---

# lltcgweb

An English web version of a certain idol tabletop game.

- English and Japanese UI (`i18n.js`, `tutorial_ja.json`)
- Interactive UI and animations
- 2000+ cards
- Unique skills fully implemented
- Deck builder with autobuild
- Expand your starter deck with more cards from daily booster packs
- Ranked and unranked online PvP
- CPU opponent with three difficulty settings
- Interactive how-to-play tutorial

Playable at [https://loveliveradio.ca/tcg](https://loveliveradio.ca/tcg)

## Debugging tools

Launch with `?debug` ([loveliveradio.ca/tcg/?debug](https://loveliveradio.ca/tcg/?debug)) for extra QA tooling:

- **Card Effect Test** — pick a card by ID and jump into a CPU scenario with that card seeded (conditions are best-effort).
- **Replay** — save a match replay from the sidebar or win screen; open **Replay Viewer** from the hub (signed-in library) or import a `.json` file on the replay screen. Step through actions, then take control as the saver vs CPU at the end if desired.
- **Debug log** — save the full match log as `.txt` or copy the last 200 lines from the in-game debug row.

---

# Repository guide

What lives in **git** (source + card data). Runtime state,…
