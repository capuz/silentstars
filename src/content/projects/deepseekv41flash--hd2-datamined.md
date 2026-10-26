---
repo: "deepseekv41flash/hd2-datamined"
name: "hd2-datamined"
description: "Helldivers 2 offline datatable reverse-engineering notes and tools (cross-build): dl_bin unsealing, hash-preserving byte editing, full-table field dictionary, row naming and localized names, explosion warhead reference chain. Verified on build 26088801. Contains no keys and no game assets."
originalDescription: "Helldivers 2 离线数据表逆向笔记与工具（跨 build）：dl_bin 解封、保哈希改字节、全表字段字典、行命名/本地化名、爆炸弹头引用链。当前验证 build 26088801；不含密钥与游戏资产"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/deepseekv41flash/hd2-datamined"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["data-tables", "hd2", "helldivers2", "modding", "reverse-engineering"]
stars: 13
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-10-22T05:26:14Z"
lastCommitAt: "2026-10-26T03:02:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 35
maintainers: ["deepseekv41flash"]
openGraphImageUrl: "https://opengraph.githubassets.com/6de1e556efccb33c25a80738e3c9bf8b3ff118b94db5749e6fda98bb1c8c420c/deepseekv41flash/hd2-datamined"
---

# Helldivers 2 · Offline Datatable Reverse-Engineering Notes and Tools

> Currently verified build **`26088801`** ｜ Historical baselines `25480438` → `25988413`
> This repository is not bound to a single build. **Structural-layer** findings (sealed box, content hash, `LDLD`, entity block layout, localization IDs) hold across builds. **Offset and address-type** findings must be re-verified for each build, which is why every factual document carries its build number.

## What this is

A set of **offline** research notes and tools for Helldivers 2 datatables. It **modifies data files on disk**. It does not touch in-process memory and requires no Lua, FFI, injection, or DLL.

Core milestones: decrypt `data/game/*.dl_bin`, rewrite bytes while preserving the engine's MurmurHash64A content hash, reseal, read back from disk, run tiered in-game verification, and roll back if needed.
Verified in-game coverage: stratagems (cooldown, call-in, uses, barrage rounds and shell count, **Eagle recall**); explosions (damage, radius, shrapnel, **whole-row appearance clone + `+0xA8` cross-package loading**); warhead swapping; weapon values, optional ammo types, and independent ammo pools; entity…
