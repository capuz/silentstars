---
repo: "matto49/hiro-gakumas-hero"
name: "hiro-gakumas-hero"
description: "An engineering framework that lets large language models play Gakuen Idolmaster's H.I.F mode on their own: data contracts, a replayable main loop, state bookkeeping and cross-checking, an LLM adapter, and per-turn review and annotation."
originalDescription: "让大模型自己玩学マス H.I.F 的工程框架：数据契约、可重放主循环、状态记账与互验、LLM 适配、逐回合复盘与标注"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/matto49/hiro-gakumas-hero"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 31
forks: 7
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-11-02T07:45:21Z"
lastCommitAt: "2026-11-23T12:23:16Z"
lastReleaseAt: "2026-11-23T12:07:00Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 37
maintainers: ["matto49", "bjan1234", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e961700f89df88b4aa530b75eb885c7d2fac77bda5c990e3a4b6f520808f96a/matto49/hiro-gakumas-hero"
---

# hiro-gakumas-hero · 数字小广

Lets an LLM play Gakuen Idolmaster (学マス) on its own. Everything is automated, from screenshot recognition, state inference, and decision-making to click execution and per-turn review.
The main focus is H.I.F mode (the character is Shinozawa Hiro from Campus mode). Since 2026-11, it can also handle 「初」, N.I.A, and the Idol Road (アイドルへの道). These three modes have only just been cleared, and a human often needs to step in partway through. It runs on macOS (the PlayCover fork with MaaTools), Windows with the MuMu emulator, and the Windows DMM version.

**No seed reading**: live play uses only information visible on screen. It does not read the deck order or the RNG from exam save data. This is a rule for the whole project (since 2026-11-12). Search that "knows the card order in advance" is used only as a reference upper bound in offline evaluation.
