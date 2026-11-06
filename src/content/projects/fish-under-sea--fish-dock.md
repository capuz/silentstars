---
repo: "Fish-under-sea/FISH-Dock"
name: "FISH-Dock"
description: "Everything is a Plugin · Windows AI desktop host: taskbar / Dynamic Island, Agent sessions and approvals, email, standalone plugin center, full-repository backup, and full/lightweight dual-package updates. Based on Wakuwaku, Rust + Tauri."
originalDescription: "Everything is a Plugin · 一切皆插件｜Windows AI 桌面宿主：任务栏／灵动岛、Agent 会话与审批、邮件、独立插件中心、整仓备份及完整／精简双包更新。基于 Wakuwaku，Rust + Tauri。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fish-under-sea/FISH-Dock"
homepage: "https://github.com/Fish-under-sea/FISH-Dock#readme"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [58, 35]
topics: ["ai-assistant", "claude-code", "codex", "desktop-app", "dynamic-island", "nodejs", "rust", "taskbar", "tauri", "windows"]
stars: 31
forks: 3
openIssues: 1
closedIssues: 60
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-20T11:36:30Z"
lastCommitAt: "2026-11-06T12:17:14Z"
lastReleaseAt: "2026-10-31T18:45:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 51
maintainers: ["Fish-under-sea"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa76886f01a1d4661e97739ee247f3f023d2ea0dd937350bdd0bbc99d13a382c/Fish-under-sea/FISH-Dock"
---

FISH Dock is a session and model workbench on the Windows desktop. It handles windows, the desktop island, runtime lifecycle, plugin pages, and the local data boundary. Concrete business features are loaded as plugins, which keeps the host clear, replaceable, and recoverable.

The desktop island displays session and approval status, and the workbench hosts email and plugin pages. Notifications, proxies, the model gateway, and model channels are provided on demand by separate plugins. Installing, enabling/disabling, and uninstalling are all managed uniformly by the host.

Capabilities the host provides itself. Business-side content (email, models, notifications, proxies) is loaded as plugins. For entry points and operations, see the next section, 'Workspace'.

| Capability | Description |
| --- | --- |
| Settings page | Rearranged by spec into 5 pages (General / Agent / Appearance / Email / Plugins). The section order on each page is fixed. Regression tests compare directly against the spec file. |
| Plugin install & update | Verifies source, platform, and resource digest. Official plugins prefer npm (`@fish-under-sea/fish-dock-plugin-*`), then the npmmirror mirror, then GitHub…
