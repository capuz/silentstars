---
repo: "kuangxing6367/zcbot"
name: "zcbot"
description: "A Python-based bot framework"
originalDescription: "一个基于python的机器人框架"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/kuangxing6367/zcbot"
homepage: "http://bot.zgric.top/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-27T16:00:47Z"
lastCommitAt: "2026-11-02T11:37:05Z"
lastReleaseAt: "2026-08-08T14:31:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 58
maintainers: ["kuangxing6367"]
openGraphImageUrl: "https://opengraph.githubassets.com/288198ba4e12d7fb7479011eede9643ae85ea0b657fb445f3f249a150b005250/kuangxing6367/zcbot"
---

# ZCBOT

**A generalized IM platform: a protocol-agnostic, event-driven bot framework**

Minimal kernel · extension-point contracts · official plugin set · business logic lives in your own plugins

[Gitee (China)](https://gitee.com/liquanfeng123/zcbot) ｜
[GitHub (International)](https://github.com/kuangxing6367/zcbot) ｜
[PyPI](https://pypi.org/project/zcbot/) ｜
[Changelog](https://gitee.com/liquanfeng123/zcbot/blob/main/CHANGELOG.md) ｜
[LLM Index](https://gitee.com/liquanfeng123/zcbot/blob/main/LLM.md)

---

ZCBOT is a bot framework that is **not bound to any chat protocol**. The kernel only handles event dispatch, plugin loading, permissions, and persistence; protocol adapters, the Web admin console, multi-turn sessions, scheduled tasks, and LLM capabilities are all optional plugins. Swap in a different adapter to connect another IM, or connect to no platform at all and only run scheduled tasks or receive HTTP events.

It goes beyond "it runs" to "it runs stably over the long term": a single-instance lock, crash guard, safe mode, platform-level dependency diagnostics, and security reminders in the Web admin console are all there to back production deployments, not just to provide…
