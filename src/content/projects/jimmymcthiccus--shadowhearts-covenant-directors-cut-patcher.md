---
repo: "JimmyMcThiccus/ShadowHearts-Covenant-Directors-Cut-Patcher"
name: "ShadowHearts-Covenant-Directors-Cut-Patcher"
description: "This uses tools in order to patch your pre-exisitng iso's into a fully working Shadow Hearts: Covenant Directors Cut copy in either UnDub or Regular editions."
readmeQualityOk: true
url: "https://github.com/JimmyMcThiccus/ShadowHearts-Covenant-Directors-Cut-Patcher"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-10-25T23:39:52Z"
lastCommitAt: "2026-10-26T20:59:58Z"
lastReleaseAt: "2026-10-25T23:53:16Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 13
maintainers: ["JimmyMcThiccus"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea0cda979142501cef86e7beda6cbbe90ab4f03030a44ae0ee6fb9adf06f93c0/JimmyMcThiccus/ShadowHearts-Covenant-Directors-Cut-Patcher"
---

# Shadow Hearts: Covenant: Director's Cut content port (v0.3)

This patcher builds a copy of the US *Shadow Hearts: Covenant* with the content that was only in the Japanese *Shadow Hearts II Director's Cut*, translated into English. See `CHANGELOG.md` for the full list.

Ported by JamieTheAnything.

There are two editions:

- **regular**: English, with the Director's Cut content added and the Director's Cut opening movie.
- **undub**: the same, but every cutscene uses the Japanese voices from the Director's Cut. The English subtitles stay on.

## What you need

- Your own disc images (ISO) of:
  - *Shadow Hearts: Covenant* (USA), discs 1 and 2
  - *Shadow Hearts II Director's Cut* (Japan), discs 1 and 2
- Python 3.8 or newer.
- For the **undub** edition only: `numpy` (`pip install numpy`). `scipy` is optional and gives slightly better resampling. Two cutscenes have Japanese audio stored at a different sample rate, so the patcher converts them with the bundled `pcmscodec.exe`. Without numpy, those two scenes keep their English audio and the rest of the build is unaffected.

The patch contains no game files. It rebuilds everything from your discs and checks each one, so a bad or…
