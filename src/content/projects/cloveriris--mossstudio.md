---
repo: "CloverIris/MossStudio"
name: "MossStudio"
description: "Too much work done for MOSS-Image: select version, device, and launch like Minecraft Launcher; creation and terminal each have a separate window."
originalDescription: "为 MOSS-Image 做的工作太： 像 Minecraft Launcher 一样选版本、选设备、启动；创作和终端各有一个独立窗口。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/CloverIris/MossStudio"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 6
forks: 1
openIssues: 6
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-10-19T03:00:53Z"
lastCommitAt: "2026-10-23T09:32:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["CloverIris", "samyycX", "Aeka0"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc8d9485ff499cce0e18a50fe8b1a81624c22a5f25c3091b86e1544475729e3b/CloverIris/MossStudio"
---

**A desktop management and creation workbench for MOSS-Image**

A desktop launcher and workbench for MOSS-Image: manage instances, runtimes, models, and tasks. MossStudio is the end-user creation UI, planned in two forms: a desktop app and a LAN/mobile WebUI.
QQ group for discussion: 782833642

**Dev version 0.1.0** · Design doc v0.4 · Current focus: continuously implementing features; acceptance testing with real models, CUDA, and release environments in progress

## Project overview

MossStudio is a desktop orchestrator for MOSS-Image. Its goal is to let users manage code versions and Python environments, choose devices and workbenches, launch tasks, and view logs without having to do everyday operations in a terminal. It is not an inference engine itself, and it does not rewrite the trainer: inference is executed by the project runner / Clover backend, and training connects through the external KohakuMossTrainer. The official Gradio is being retired from the official product entry point.

The project is still in development. Feature status and reproducible verification evidence are authoritative in the [implementation…
