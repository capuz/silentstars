---
repo: "Yumegipsu/lltcgweb"
name: "lltcgweb"
description: "A web version of a certain idol card game."
readmeQualityOk: true
url: "https://github.com/Yumegipsu/lltcgweb"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [46, 26]
stars: 12
forks: 1
openIssues: 6
closedIssues: 117
watchers: 2
contributors: 3
recentReleases: 3
createdAt: "2026-06-22T13:05:36Z"
lastCommitAt: "2026-08-30T00:42:26Z"
lastReleaseAt: "2026-08-24T01:16:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["Yumegipsu", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/777300b355bb7efb2e2c266d4ae7beb017635e0f3d49633b49ce753058984580/Yumegipsu/lltcgweb"
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
