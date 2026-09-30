---
repo: "cab1120/AIDesktopPetty"
name: "AIDesktopPetty"
description: "AI Desktop Pet"
originalDescription: "AI桌宠"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cab1120/AIDesktopPetty"
language: "C#"
languages: ["C#", "ShaderLab"]
languagePcts: [62, 35]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-11T07:38:48Z"
lastCommitAt: "2026-09-30T09:56:11Z"
lastReleaseAt: "2026-09-05T18:20:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 38
maintainers: ["cab1120"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5c1978034ea81d372c62ace24b09ffb14a78bca2b2c3f3dde4e206a5d00a9b5/cab1120/AIDesktopPetty"
---

# AIDesktopPetty · AI Desktop Pet

A Windows desktop AI companion project based on Unity 2021.3, featuring desktop chat, foreground window awareness, local relationship/emotion data, and an independent Sakuracho 3D scene. Users have confirmed the continuation with a Unity client portfolio as the main line, with the near-term goal of "desktop pet → platform → interaction → return to desktop pet".

Verification date: 2026-09-30. "Existing" refers to source code or serialized resources that can be verified; session reconstruction has passed C# static compilation without executing Unity Editor/Player, online chat, or listening perception tests.

## Current Status

| Capability | Verification Result |
| --- | --- |
| Desktop Chat and Management | SampleScene mounts login, chat, history, user/role management, proactive bubbles; regular chat has snapshots and serial queues, runtime regression testing pending |
| AI and Search | SiliconFlow chat + Bocha search; coroutines, non-streaming; model name written in AIChat |
| Local Data | SQLite six business tables, runtime library in persistentDataPath; relationships, emotions, interaction events implemented |
| Windows Window | IWindowService…
