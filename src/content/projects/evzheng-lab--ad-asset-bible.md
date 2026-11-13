---
repo: "EVZheng-Lab/ad-asset-bible"
name: "ad-asset-bible"
description: "Script → asset inventory: three tables for scenes / characters·costumes / key props, upstream input for Lira (Claude Code skill)"
originalDescription: "剧本 → 资产盘点：场景 / 角色·服装 / 关键道具三张表，Lira 的上游输入（Claude Code skill）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/EVZheng-Lab/ad-asset-bible"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [63, 37]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-29T14:21:06Z"
lastCommitAt: "2026-11-13T04:26:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 21
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/37e4930b554051060d84d3df087a3d40fd5d26af8bdd4fd6a590f1a659a8f75a/EVZheng-Lab/ad-asset-bible"
---

# ad-asset-bible (Assistant Director: Asset Inventory)

Claude Code Skill: turns a script into an **asset inventory**. It answers how many locations the script has, how many people and outfits, and how many cross-scene props, how many variants each needs, and which variant each scene uses. The output is the upstream input for [Lira](https://github.com/higgsfield-ai) (Higgsfield's official image-prompt skill).

## Changelog

- **2026-11-13**: Added **effects** (`effects[]`, the fifth tab). It only collects effects that recur and need visual consistency (a portal, a particular character's shockwave, a whirlwind from a certain skill). It locks the look only and does not write motion rhythm. `from` records who emits the effect. Boundaries: a prop that glows after being activated counts as a state variant of the prop; monsters and creatures count as characters; effects that appear only once are left to the video prompt. See `references/how-to-write-vfx.md` for details. Same-day addition: the effect description is split into **static** (`brief`, for the image model to draw the effect itself, without writing where it is emitted from or how it changes) and **dynamic** (`motion`, required,…
