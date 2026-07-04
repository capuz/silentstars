---
repo: "Yumegipsu/lltcgweb"
name: "lltcgweb"
description: "A web version of a certain idol card game."
readmeQualityOk: true
url: "https://github.com/Yumegipsu/lltcgweb"
language: "PHP"
languages: ["PHP", "HTML"]
languagePcts: [48, 43]
stars: 9
forks: 1
openIssues: 2
closedIssues: 38
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-06-22T13:05:36Z"
lastCommitAt: "2026-07-04T23:13:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["Yumegipsu", "cursoragent", "xtsusaku"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c8d1861a95bd692905aa56c89580b032b9ef78a969605cd756299d7cb8aa1ca/Yumegipsu/lltcgweb"
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
