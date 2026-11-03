---
repo: "mrzhsz3210/astrbot_plugin_memory_diary"
name: "astrbot_plugin_memory_diary"
description: "AstrBot plugin: lets the AI write a diary for its future self (user profile, evaluations, reminders). The diary is read automatically in a new context. Includes a built-in context sentinel, day-archived tamper-resistant storage, multi-user isolation, and conflict prevention for multiple AIs."
originalDescription: "AstrBot 插件：让 AI 给未来的自己写日记（用户画像/评价/叮嘱），新上下文自动读取，内置上下文哨兵、按天归档防篡改存储、多用户隔离与多 AI 防冲突。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mrzhsz3210/astrbot_plugin_memory_diary"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 8
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-23T13:39:55Z"
lastCommitAt: "2026-11-03T12:47:57Z"
lastReleaseAt: "2026-10-30T14:47:16Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 40
maintainers: ["mrzhsz3210"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9794a69f821f19262e7dea2d76de3d1ba9eaa448bac25807902853ca414b880/mrzhsz3210/astrbot_plugin_memory_diary"
---

Connected to AstrBot, the AI writes a diary entry for “the next version of myself who will have lost its memory” when instructed.
After a new context is started (`/reset`), the first normal conversation message automatically reads the **last 7 days** of diaries (the range is adjustable), so it no longer starts with a blank slate.

Built-in **context sentinel**: before each request, it estimates the context's token usage. When the context is nearly full, it reminds you. If it fills up further, the AI writes the diary itself and asks you to `/reset`.

> Current plugin version **v0.6.1**. The diary data format is “per-day archive v3”. The plugin version and the data format version are not the same thing. Old formats are migrated automatically on upgrade.

> 📖 **Full documentation** (writing modes, command list, item-by-item configuration explanations, storage and backup, failure recovery, etc.) is on the official website:
> [astrbotmemorydiary.ok.kimi.link](https://astrbotmemorydiary.ok.kimi.link).

> 📝 **User survey**: If you have used “Memory Diary”, you are welcome to fill out [this questionnaire](https://v.wjx.cn/vm/YDNYun0.aspx#) (about 4–5 minutes).
> It asks about real usage…
