---
repo: "DDDMUC/dsh-delete-session"
name: "dsh-delete-session"
description: "DeepSeek Harness delete-session plugin: moves to the system trash by default, with a switch to permanent deletion; supports drag and batch deletion, safe deletion of active sessions, and cleanup of sub-agent sessions without touching independent forks; output files can be isolated and Git repositories skipped by default; logs and caches are fully cleared, leaving no ghost records."
originalDescription: "DeepSeek Harness 删除插件：默认移入系统回收站，可切换永久删除；支持拖拽/批量删除、活跃会话安全删除、子代理会话连带清理且不触及独立 fork；产出文件可隔离并默认跳过 Git 仓库；彻底清理日志与缓存，不留幽灵记录。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/DDDMUC/dsh-delete-session"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dsh-plugin", "dsh-session", "delete"]
stars: 26
forks: 4
openIssues: 1
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-09-13T15:27:02Z"
lastCommitAt: "2026-11-20T12:17:56Z"
lastReleaseAt: "2026-10-19T15:40:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 43
maintainers: ["DDDMUC", "aleXela17"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea2bc5c8e10cfac6abcaf2916e245e09dbc1c2fd451b20c8889b51a1b81f41e8/DDDMUC/dsh-delete-session"
---

# dsh-delete-session
- **Drag to footer to delete** — Drag a conversation from the sidebar directly onto the footer bar. The whole bar turns red and shows “Release to delete「Title」”. On release it follows the “Ask when deleting” setting: if enabled, a confirmation dialog appears; if disabled, the session is deleted immediately. In multi-select mode, dragging still performs the host's row reordering and is not intercepted.

**DeepSeek Harness session deletion plugin — delete sessions directly from the session menu in the sidebar.**

Adds “Delete session” to the session `...` menu (Rename / Fork / Archive) in the DSH Web sidebar, and optionally removes the files produced by that conversation as well.
Deletion goes to the **system trash** by default, so mistakes can be restored. To erase a session permanently, turn off that switch in settings.

[中文](#中文) · [English](#english)

---
