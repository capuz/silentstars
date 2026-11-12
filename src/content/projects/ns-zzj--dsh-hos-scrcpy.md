---
repo: "ns-zzj/dsh-hos-scrcpy"
name: "dsh-hos-scrcpy"
description: "DSH's HarmonyOS screen-casting provider. It connects a HarmonyOS phone or tablet to the conversation via `hdc` (USB or wireless via `hdc tconn`), with real-time multi-device screen mirroring, mouse tap and swipe, system keys, and text injection. It works on retail devices and needs no root or system partition changes. Rotation and page-switch pausing never cause a black screen. The UI and AI tools live in dsh-scrcpy-core, and multiple platforms can be mirrored at the same time."
originalDescription: "DSH 的鸿蒙投屏 provider —— 通过 hdc（USB 或 hdc tconn 无线）把鸿蒙手机/平板接进对话： 多设备实时投屏、鼠标点按滑动、系统按键、文字注入；零售设备可用，不需要 root、不改系统分区； 转屏与切页暂停都不黑屏。界面与 AI 工具在 dsh-scrcpy-core，多个平台可同时投屏。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ns-zzj/dsh-hos-scrcpy"
language: "JavaScript"
languages: ["JavaScript", "Java"]
languagePcts: [61, 39]
topics: ["deepseek-harness", "developer-tools", "dsh-plugin", "harmonyos", "scrcpy", "vision", "mirror", "phone-control", "screen-mirroring"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-08-18T02:01:32Z"
lastCommitAt: "2026-11-12T11:43:01Z"
lastReleaseAt: "2026-11-07T02:26:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 71
undervaluedScore: 29
maintainers: ["ns-zzj"]
openGraphImageUrl: "https://opengraph.githubassets.com/93385eb701a12493973b64178339eaa4c14140cdc30d41d7ed3f7e18443d7e11/ns-zzj/dsh-hos-scrcpy"
---

# dsh-hos-scrcpy

**DSH's HarmonyOS screen-casting provider**: it lets DSH connect to HarmonyOS devices through `hdc`, so you can view the screen, tap and swipe, press keys, input text, and let the AI see the display.

The UI, AI tools, device and focus handling, routing, and gating are **all in core**. This package only handles **how the device connects, how taps are sent, and how the picture is output**.

> **Maintenance note**: I have limited bandwidth lately, so maintenance and replies may be slow. I do read issues and PRs, but I can't commit to a timeline right now. Thanks for your patience.

## What is this

| | |
|---|---|
| Role | dsh-scrcpy **provider** (HarmonyOS platform) |
| Dependency | Requires **`dsh-scrcpy-core`**. Without it this package won't activate. This package **does not declare** a package dependency on core. The two packages are **installed independently** and don't pull each other in automatically |
| Transport | `hdc`: USB debugging, or wireless via `hdc tconn` |
| Sidecar | One **Java process** per device (the compiled output of `Dev/src/Main.java` ships with the package), started by this package via `spawn`: `java -cp <jar>;<out> Main --sn … --hdc ……
