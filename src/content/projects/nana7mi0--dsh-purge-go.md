---
repo: "NANA7MI0/dsh-purge-go"
name: "dsh-purge-go"
description: "Port dsh-purge to dsh-go (Android + proot): keep only the core armor-breaking capability, which is the prompt injection layer plus 86 engine source patches (probe/apply/rollback). The desktop version's Electron adaptation, asar unpacking, Windows scheduled tasks, and similar parts are all dropped, because a phone has no Electron, no asar archives, and no schtasks, so that code has no place on Android. To match the original's armor-breaking effect, approval and sandbox are both relaxed."
originalDescription: "把 dsh-purge 移植适配到 dsh-go（Android + proot）：只保留核心破甲能力——提示词注入层 + 86 条引擎源码补丁（探测/应用/回滚）。桌面版的 Electron 适配、asar 解包、Windows 计划任务等全部抛弃——手机上没有 Electron、没有 asar 归档、也没有 schtasks，这些代码在 Android 上没有落点。为达到原版破甲效果，审批与沙箱一并放开。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/NANA7MI0/dsh-purge-go"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [96]
topics: ["android", "cordis", "deepseek-harness", "dsh", "dsh-go", "patch", "prompt-injection", "proot"]
stars: 74
forks: 9
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-11T09:01:30Z"
lastCommitAt: "2026-11-19T12:02:47Z"
lastReleaseAt: "2026-11-14T06:15:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 35
maintainers: ["NANA7MI0"]
openGraphImageUrl: "https://opengraph.githubassets.com/20375065556d56b2b3dbd4f84e7d9842d2836864f82dbf251010f91e3ec26900/NANA7MI0/dsh-purge-go"
---

# dsh-purge-go

Port **dsh-purge** to **dsh-go** (the DSH engine inside Android + proot).

**This repository does only one thing: armor-breaking**, meaning prompt injection plus engine patches. After installation, an "armor-breaking status" capsule appears above the input box. **Tapping it opens the armor-breaking status screen directly** (the two-layer status, the to-do details, and the four action buttons are all on that one screen). If something goes wrong, a red status bar also appears above the input box, and tapping it opens the same screen.

*Tapping the capsule opens this screen (the screenshot shows normal working state)*

**The red team package (target asset library / attack chains / 63 tools / 41 skills) is a separate, independent package.** Not installing it has no effect on armor-breaking. If you want it, see [17. Companion red team plugin](#17-配套红队插件).

> **Adapted for DeepSeek only.** Using other models won't cause errors, but the armor-breaking effect will be weaker, because the injected text is written in DeepSeek's format. If the original project adds multi-model support someday, this will follow. See [12.1](#121-换用别的模型api会怎样).
