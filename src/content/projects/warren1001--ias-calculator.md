---
repo: "Warren1001/IAS_Calculator"
name: "IAS_Calculator"
description: "new ias calc thats a little better to use than the current popular one"
readmeQualityOk: true
url: "https://github.com/Warren1001/IAS_Calculator"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 29
forks: 10
openIssues: 4
closedIssues: 39
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-12-12T02:15:52Z"
lastCommitAt: "2026-11-01T22:59:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 50
maintainers: ["Warren1001"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a89cb2bd94525f909f20ab2a23d40346c6cf87f0b4ad399a8df589aeb0d3dc5/Warren1001/IAS_Calculator"
---

## [IAS Calculator](https://warren1001.github.io/IAS_Calculator/)

- Credits to RuffnecKk for dumping the hardcoded player sequence animation table data for D2R 3.3.
- Credits to ChthonVII and ubeogesh for helping with the calculator.
- Credits to The Amazon Basin/similar D2 forums (mostly TitanSeal, onderduiker, and Hammerman) for information.
- Credits to Phrozen Keep for information.

### v1.2.6
- Fixed Assassin Kick (the auto skill/animation used for kicking barrels/urns) using A1 animation speed instead of KK animation speed.
  - This bug made the Kick animation table wrong when wielding claws. Again, not her finishing skills, just the table used for barrels and urns.

### v1.2.5
- Fixed Assassin in Werebear wielding a claw using the wrong animation speed with Standard skill.
  - Assassin uses different animation speeds depending on the animation (no other classes are like this). Standard attack has two separate animations for all characters, A1 and A2. They're all typically the same length, but Assassin's have different base lengths and different animation speeds. I hardcoded the lookup of the animation speed for A2 based on A2's base length. It also turns out that is the…
