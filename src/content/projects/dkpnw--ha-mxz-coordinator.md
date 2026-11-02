---
repo: "dkpnw/ha-mxz-coordinator"
name: "ha-mxz-coordinator"
description: "Home Assistant coordinator for Mitsubishi MXZ multi-zone mini-splits — fixes the AUTO idle-head deadlock; one explicit shared mode + a single target per room."
readmeQualityOk: true
url: "https://github.com/dkpnw/ha-mxz-coordinator"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["heat-pump", "home-assistant", "hvac", "mini-split", "minisplit", "mitsubishi", "mxz"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-06-15T06:34:36Z"
lastCommitAt: "2026-11-02T15:17:31Z"
lastReleaseAt: "2026-07-15T01:10:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["dkpnw"]
openGraphImageUrl: "https://opengraph.githubassets.com/e33d551050611456c0935c3e50a756c568e2346b4be4b584ba85ad98fd654e7f/dkpnw/ha-mxz-coordinator"
---

### Tesla-style Auto for your Mitsubishi multi-split

**Set a temperature in each room and forget it.** Like a Tesla's cabin climate in Auto,
MXZ Coordinator decides heat or cool, runs the fan hard when a room is far off and eases
it down as the room gets close, and has a room that's done step aside so the others get
served. One outdoor unit still means one mode at a time; MXZ just makes that call for you,
and makes it well.

- **No more stranded rooms.** Stock AUTO can leave a head waiting in standby for an hour
  while the other one runs. MXZ picks one mode for the whole system, and a room that has
  reached its target idles so the room that needs it gets served.
- **Heat or cool, chosen for you.** Stock heads each decide from their own reading, and
  they can disagree. With MXZ you only set temperatures. When rooms want opposite modes,
  the room you ranked first wins, and the mode won't flip back and forth.
- **A fan that works like a Tesla's.** The further a room is from target, the faster the
  fan runs, up to the top speed you allow, and it slows step by step as the room closes
  in. Pick a speed yourself and it stays put until you hand it back.
- **Reads the room, not the…
