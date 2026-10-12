---
repo: "Andrea-lyz/ColorOS-Assistant-Restore"
name: "ColorOS-Assistant-Restore"
description: "Restore AOSP digital assistant gesture behavior on the ColorOS China edition"
originalDescription: "在 ColorOS 国内版上还原 AOSP 的数字助理手势行为"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Andrea-lyz/ColorOS-Assistant-Restore"
homepage: "https://github.com/Xposed-Modules-Repo/io.github.andrea_lyz.assistrestore"
language: "Java"
languages: ["Java", "Kotlin"]
languagePcts: [75, 25]
stars: 19
forks: 6
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-09-13T23:32:47Z"
lastCommitAt: "2026-10-12T11:15:48Z"
lastReleaseAt: "2026-10-12T11:15:58Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 75
undervaluedScore: 45
maintainers: ["Andrea-lyz", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff87a27ca9f1c998e2f833d043c791f97e6312be51c2c3c54967cc320bedfa71/Andrea-lyz/ColorOS-Assistant-Restore"
---

# ColorOS 唤语 · AssistRestore

Restores AOSP digital assistant behavior on the ColorOS China edition.

The domestic firmware rewrites the three entry points for "wake the digital assistant" to point to its own Xiaobu Assistant (小布助手), and makes these paths bypass AOSP's assistant dispatch. Long-pressing the power key always launches Xiaobu, long-pressing the gesture bar always triggers Xiaobu screen recognition (小布识屏), and swiping inward from a bottom corner of the screen dispatches no assistant at all. This module does not replace the system's assistant stack. It only hands the request back, at those rewritten dispatch points, to the default assistant app currently set in system settings (the app that `Settings.Secure.assistant` / `RoleManager.ROLE_ASSISTANT` points to), so that upper layers keep the same behavior as AOSP.

## Features

The three entry points use the same code on domestic and international firmware. The only differences are two regional gates and a few hardcoded component names, so each of the three paths can be taken over individually.

| Entry | Original behavior on domestic firmware | Behavior after takeover |
| --- | --- | --- |
| Long-press power key |…
