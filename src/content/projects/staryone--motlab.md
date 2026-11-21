---
repo: "staryone/motlab"
name: "motlab"
description: "Video as code: canvas scenes rendered with WebCodecs in headless Chrome, a review viewer, and agent skills that build the video from your references."
readmeQualityOk: true
url: "https://github.com/staryone/motlab"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [50, 34]
topics: ["agent-skills", "canvas", "claude-code", "headless-chrome", "motion-graphics", "video", "webcodecs"]
stars: 325
forks: 43
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-11-16T13:45:47Z"
lastCommitAt: "2026-11-21T13:26:32Z"
lastReleaseAt: "2026-11-18T14:02:45Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 31
maintainers: ["staryone", "Urdemonlord", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/583404873f3b05861f2f47b482cd2797f091136b6903d44ba96d0e05e55be473/staryone/motlab"
fundingLinks: ["GITHUB:https://github.com/staryone", "KO_FI:https://ko-fi.com/motlab", "CUSTOM:https://saweria.co/motlab"]
---

# motlab

A video engine where every scene is code, and an agent skill that writes the scenes for you.

[Demo](#watch-the-demo) · [Install](#install) · [Quick start](#quick-start) · [Speed](#speed) · [How it works](#how-it-works) · [Docs](#documentation) · [FAQ](#faq) · [Roadmap](https://github.com/staryone/motlab/blob/HEAD/ROADMAP.md)

---

Every scene is a canvas page with one function, `renderAt(t)`, that draws the frame at time `t`. motlab plays the pages in a web viewer where you step through them frame by frame, and renders them to MP4 in headless Chrome. You hand your agent a folder of references (logos, screenshots, footage, fonts, music, voice) and a direction, and it builds every scene, opens the viewer and revises from your notes. No AI image or video model is involved.

The ad above (19 seconds, 7 scenes) was made with motlab and its skill, reviewed in the viewer and exported at 4K. The preview is silent; [watch it with sound](https://github.com/user-attachments/assets/5e2ff219-697c-459f-a273-f36cb11db1d1).
