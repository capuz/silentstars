---
repo: "Yumegipsu/lltcgweb"
name: "lltcgweb"
description: "A web version of a certain idol card game."
readmeQualityOk: true
url: "https://github.com/Yumegipsu/lltcgweb"
language: "PHP"
languages: ["PHP", "HTML"]
languagePcts: [47, 41]
stars: 9
forks: 1
openIssues: 6
closedIssues: 44
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-06-22T13:05:36Z"
lastCommitAt: "2026-07-11T05:56:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 49
maintainers: ["Yumegipsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ab6cee15f212862f3a039ebdb9d5e4adc06f377d8e513caffd266bec829e991/Yumegipsu/lltcgweb"
discussionCount: 0
---

# lltcgweb

An English web version of a certain idol tabletop game.

- English translated.
- Interactive UI and animations
- 2000+ cards
- Unique skills fully implemented.
- Deck builder w/ autobuild
- Expand your starter deck with more cards from daily booster packs
- Play in Ranked and Unranked online PvP Lobbies
- Play against a CPU with 3 difficulty settings.
- How-to-play Tutorial

Playable at [https://loveliveradio.ca/tcg](https://loveliveradio.ca/tcg)

## Debugging tools

Launching the website with the `?debug` parameter ([loveliveradio.ca/tcg/?debug](https://loveliveradio.ca/tcg/?debug)) has some additional tools that may help with identifying issues and bug reporting.

- **Card Effect Test** mode is available when logged out. It lets you choose a specific card by ID and jump into a game scenario with you or the CPU having that card in hand in order to test its skill. It tries to start you with the conditions for a skill met (ex: have 1 or more Aqours members on the stage). Though it doesn't always work, so some gameplay may be required to activate the relevant skill.
- **Save replay** — during a match, use **Save replay** in the sidebar to download a `.json` file of the…
