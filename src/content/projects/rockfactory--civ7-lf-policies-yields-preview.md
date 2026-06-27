---
repo: "rockfactory/civ7-lf-policies-yields-preview"
name: "civ7-lf-policies-yields-preview"
description: "Civ7 Mod to show policies Yields in the policy selection screen "
url: "https://github.com/rockfactory/civ7-lf-policies-yields-preview"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 12
forks: 2
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-02-25T23:58:01Z"
lastCommitAt: "2026-06-27T00:36:27Z"
lastReleaseAt: "2025-03-08T01:44:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 65
maintainers: ["rockfactory"]
openGraphImageUrl: "https://opengraph.githubassets.com/e11b70e6d61172c5bac112fb535aa276cc10cc1b5e0d3f9c82a9dc573b9d4903/rockfactory/civ7-lf-policies-yields-preview"
---

# civ7-lf-policies-yields-preview
 Civ7 Mod to show policies Yields in the policy selection screen 

## Debugging yields with FireTuner

When the preview total doesn't match what the game actually applies, dump the recursive yield tree from a live game before/after activating the policy and diff the two trees to find which leaves changed.

1. Launch **FireTuner** from Steam → *Sid Meier's Civilization VII SDK*, then open the *Scripting Console* tab
2. In the FireTuner console, paste the snippet below to return the full yield breakdown tree for one yield (e.g. `YIELD_CULTURE`):
   ```js
   (function(){
     const p = Players.get(GameContext.localPlayerID);
     const ay = p?.Stats?.getYields?.();
     if (!ay) return null;
     for (let i = 0; i < GameInfo.Yields.length; i++) {
       if (GameInfo.Yields[i].YieldType === "YIELD_CULTURE") return JSON.stringify(ay[i]);
     }
   })()
   ```
   Or, as a **one-liner**: FireTuner's input is single-line, so copy-paste this verbatim:
   ```js
   (function(){const p=Players.get(GameContext.localPlayerID),ay=p?.Stats?.getYields?.();if(!ay)return null;for(let…
