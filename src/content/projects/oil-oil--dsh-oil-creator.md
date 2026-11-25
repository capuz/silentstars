---
repo: "oil-oil/dsh-oil-creator"
name: "dsh-oil-creator"
description: "AI-assisted local creator workbench for DeepSeek Harness"
originalDescription: "AI-assisted local creator workbench for DeepSeek Harness"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/oil-oil/dsh-oil-creator"
homepage: "https://www.oiloil.org"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [50, 47]
topics: ["creator", "deepseek-harness", "dsh-plugin"]
stars: 216
forks: 39
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-08-19T05:02:00Z"
lastCommitAt: "2026-11-25T03:19:11Z"
lastReleaseAt: "2026-10-10T03:14:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 7
maintainers: ["oil-oil"]
openGraphImageUrl: "https://opengraph.githubassets.com/3060dda2692270c1b21ee711aa4f270f2fccacb819ca080fd6f962015cd917a1/oil-oil/dsh-oil-creator"
---

From topic selection, scripts, and screen-recording projects through subtitles, covers, and publishing status, each video always corresponds to one local folder.

> **Note**
>
> The current development target is Node.js 22.19+ and the Harness `0.2.0-rc.2` bundled with DSH Desktop `0.11.0`. It requires Desktop's `desktopWorkbenches` service and does not apply to standalone Harness Web. The core library can be used on its own. Screen Studio, subtitles, covers, WeChat Official Account, and publishing features can be installed as needed.

## One video, one folder

The plugin does not build a closed content database. The text and outputs remain ordinary files that any editor or AI file tool can read:

```text
~/Movies/视频项目/
└── 2026-08-19_DeepSeek Harness 上手/
    ├── topic.md
    ├── script.md
    ├── DeepSeek Harness 上手.mp4
    ├── DeepSeek Harness 上手.srt
    ├── DeepSeek Harness 上手_subtitled.mp4
    ├── DeepSeek Harness 上手_3x4.png
    ├── DeepSeek Harness 上手_4x3.png
    ├── DeepSeek Harness 上手_16x9.png
    ├── visual-review.json
    ├── visual-review.md
    ├── publish-package.json
    └── 公众号文章/
```
