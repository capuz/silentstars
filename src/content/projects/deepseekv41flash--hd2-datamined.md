---
repo: "deepseekv41flash/hd2-datamined"
name: "hd2-datamined"
description: "Helldivers 2 offline datatable reverse-engineering notes and tools (cross-build): dl_bin unpacking, byte modification with the content hash preserved, a full table field dictionary, row naming and localized names, and the explosive warhead reference chain. Currently verified on build 26251122; contains no keys or game assets."
originalDescription: "Helldivers 2 离线数据表逆向笔记与工具（跨 build）：dl_bin 解封、保哈希改字节、全表字段字典、行命名/本地化名、爆炸弹头引用链。当前验证 build 26251122；不含密钥与游戏资产"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/deepseekv41flash/hd2-datamined"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["data-tables", "hd2", "helldivers2", "modding", "reverse-engineering"]
stars: 17
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T05:26:14Z"
lastCommitAt: "2026-11-03T10:51:41Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 33
maintainers: ["deepseekv41flash"]
openGraphImageUrl: "https://opengraph.githubassets.com/27a19c74e846bb4e9a8a2c41ab7af27321e82fdfee41af8dbd94555ebaf19c7c/deepseekv41flash/hd2-datamined"
discussionCount: 0
---

> Currently verified build **`26251122`** ｜ Historical baselines `25480438` → `25988413` → `26088801` ｜ Most recent change: [BUILD-26251122-DIFF](https://github.com/deepseekv41flash/hd2-datamined/blob/HEAD/docs/builds/BUILD-26251122-DIFF.md)
> This repository is not tied to a single build: **structural-layer** conclusions (sealed box, content hash, `LDLD`, entity block layout, localization IDs) are valid across builds;
> **offset / address-type** conclusions must be re-verified for each build, so factual documents all carry a build number.

## What this is

An **offline** set of Helldivers 2 datatable research notes and tools. It **modifies the data files on disk**. It does not touch process memory and requires no Lua, FFI, injection, or DLL.

Core milestones: decrypt `data/game/*.dl_bin` → rewrite bytes while preserving the engine's MurmurHash64A content hash → reseal → read back from disk → tiered in-game validation → rollback.
Verified in-game coverage: stratagems (cooldown / call-in / uses / barrage rounds and shell counts / **Eagle resupply**) · explosions (damage / radius / fragments / **full row appearance clone + `+0xA8` cross-package loading**) · warhead swapping · weapon…
