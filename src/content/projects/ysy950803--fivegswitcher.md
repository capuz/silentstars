---
repo: "ysy950803/FiveGSwitcher"
name: "FiveGSwitcher"
description: "Develop a 5G quick switch for MIUI."
originalDescription: "给MIUI开发一个5G快捷开关。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ysy950803/FiveGSwitcher"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 145
forks: 16
openIssues: 4
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-06-12T11:50:27Z"
lastCommitAt: "2026-07-22T06:10:43Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 19
maintainers: ["ysy950803"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ecd847c4d00db704dceaea7296a5aaa9cad873705a2f1f14c80d259d09b554f/ysy950803/FiveGSwitcher"
---

# FiveGSwitcher

### Download

### Add quick switch to MIUI notification center

Enter the edit mode of the notification center, you can find the "5G switch" in the bottom "Unadded switches". After adding, long press to open detailed settings.

### Support ADB Shell commands

Convenient for devices with ROOT permissions to run automation scripts: [issue#2](https://github.com/ysy950803/FiveGSwitcher/issues/2)

```shell
# true means enable 5G, false means disable
am start -n com.ysy.switcherfiveg/.MainActivity --ez enable_5g true
```

### FAQ

**0. Can this tool be used on ROMs from other manufacturers?**

This tool can only be used on MIUI systems, thank you all for your support.

**1. I am already on MIUI, but the switch is unavailable (gray status) after adding?**

Currently, there may be this issue on some models of the new stable version of MIUI, the shortcut TileService is killed and restarted by the system (I tried MIUI developer version and stock Android and it works fine), there is no 100% solution for now. You can try enabling the auto-start permission for this app (generally not recommended), and re-add the quick switch to the first page of your notification center (the…
