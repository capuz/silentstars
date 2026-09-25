---
repo: "deleteFAILunknown/nekoStudio"
name: "nekoStudio"
description: "Use Fastboot, ADB, and Shell without root."
readmeQualityOk: true
url: "https://github.com/deleteFAILunknown/nekoStudio"
homepage: "https://p.dpdns.org/main-user"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["adb", "android-application", "fastboot-android", "usb-devices", "usb-host", "webview-android"]
stars: 39
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-04-27T20:33:34Z"
lastCommitAt: "2026-09-25T09:01:46Z"
lastReleaseAt: "2026-09-14T16:47:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/e3cdd4828947cf40a8f91e3a4412b129c1da67c040dc61119ea94105e3e3423c/deleteFAILunknown/nekoStudio"
discussionCount: 2
---

# Version
- [android-release-version-app](https://github.com/deleteFAILunknown/nekoStudio/releases)
- [android-beta-version-app](https://github.com/deleteFAILunknown/nekoStudio/actions)

## System Support
- Android 17 - Android 7.0
- Android TV

## Shell solution
- For the Shell executor, we may need to migrate to the foreground service to fully use all the instructions that come with Android 14+. The background process daemon service solution may no longer be a recommended solution for Android 14+ systems.

## Shell
- How to use shell script to call internal instructions of the application
- This dynamic broadcast receiver is a non-system type, so no matter how other applications call it, there will be no reaction.
- For example, calling the root-free fastboot command implemented inside the application
```shell
#!/system/bin/sh

# The prerequisite for using the fastboot instruction is isFastbootMode = true
fastboot() {
#  am broadcast -a com.adb.kitty.MY_CMD --es "args" "$*" > /dev/null
    am broadcast -a com.adb.kitty.MY_CMD --es "cmd" "$*" > /dev/null
}

fastboot getvar unlocked
fastboot oem device-info
```

## su
- KernelSU、SukiSU、Magisk
```shell
# Flashing non-vab devices
$…
