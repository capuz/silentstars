---
repo: "dongyuwei/Hallelujah-Android"
name: "Hallelujah-Android"
description: "Hallelujah keyboard for Android 安卓版哈利路亚输入法"
readmeQualityOk: true
url: "https://github.com/dongyuwei/Hallelujah-Android"
language: "Java"
languages: ["Java"]
languagePcts: [90]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2024-02-02T14:10:28Z"
lastCommitAt: "2026-08-30T09:23:42Z"
lastReleaseAt: "2026-08-30T08:22:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: ["dongyuwei"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fa73d60211d5ca15c05959bd68bead63bb7a6b51d4c98ed375ad7830f9cadbd/dongyuwei/Hallelujah-Android"
---

# Hallelujah-Android, 哈利路亚输入法 Android 版

基于 [Tiny Keyboard](https://github.com/rkkr/tiny-keyboard) 移植 [hallelujahIM](https://github.com/dongyuwei/hallelujahIM) 到 Android 平台。

目前已经完成功能：
- 英语单词自动补全；
- 英语单词拼写纠错建议：无匹配单词时，先按 Norvig 式编辑距离（增/删/换/相邻对调一字符）查 `words` 频率表给出候选，再经词典 Trie + Levenshtein DP 剪枝搜索最多 3 个编辑距离的词（覆盖双重/三重打字错误，按距离与词频排序），最后辅以 [Phonex](https://github.com/Yomguithereal/talisman) 音近词建议（与 macOS 版 hallelujahIM 相同机制）；
- 拼音输入模式改用 [librime](https://github.com/rime/librime) 引擎（明月拼音·简体 `luna_pinyin_simp` 方案，OpenCC 简化字输出）：librime 以静态库方式随 APK 编译打包（目前仅 arm64-v8a），Rime 数据（方案、词库、OpenCC 数据）打包在 assets 中，首次启动复制到应用目录并自动完成部署（部署期间候选栏会提示「正在部署词库…」）；
- 输入拼音（全拼），显示英语候选词列表（英文模式下无匹配单词时的回退）；
- 切换到拼音输入模式（使用Google 拼音词库）以输出汉字；

词典数据与 macOS 版 [hallelujahIM](https://github.com/dongyuwei/hallelujahIM)、Windows 版 [Hallelujah-Windows](https://github.com/dongyuwei/Hallelujah-Windows) 共用同一套 SQLite 数据库：
- `words_with_frequency_and_translation_and_ipa.sqlite3`：英语单词频率表（`words` 表），首次启动时从 assets 复制到设备保护存储后只读查询；
- `cedict.json` 仍保留在内存中，用于英文模式下无匹配单词时的拼音回退候选；
- 拼音引擎与词库：[librime](https://github.com/rime/librime)（BSD-3-Clause，git submodule）+…
