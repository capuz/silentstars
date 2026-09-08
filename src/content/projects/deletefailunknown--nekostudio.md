---
repo: "deleteFAILunknown/nekoStudio"
name: "nekoStudio"
description: "Use Fastboot, ADB, and Shell without root."
readmeQualityOk: true
url: "https://github.com/deleteFAILunknown/nekoStudio"
homepage: "https://p.dpdns.org/main-user"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["adb", "android-application", "fastboot-android", "usb-devices", "usb-host", "webview-android"]
stars: 30
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-04-27T20:33:34Z"
lastCommitAt: "2026-09-08T08:16:16Z"
lastReleaseAt: "2026-07-14T02:23:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/411b9dcbfd77bb63413a2b6124e86028e4f318391dca8e7faaa9c90969428e7e/deleteFAILunknown/nekoStudio"
discussionCount: 14
---

# Version
- [android-release-version-app](https://github.com/deleteFAILunknown/nekoStudio/releases)
- [android-beta-version-app](https://github.com/deleteFAILunknown/nekoStudio/actions)

# apk support range
- This feature is implemented in V4.1
- Android 17 - Android 7.0
- Android TV、Android

# Root-free flash scheme
- This project allows you to perform Fastboot flashing in a root-free environment and connect to adbd

# Local Shell solution
- For the Shell executor, we may need to migrate to the foreground service to fully use all the instructions that come with Android 14+. The background process daemon service solution may no longer be a recommended solution for Android 14+ systems.
- For the existing local shell service, I would refactor it in V4.2

# Shell actuator
- This feature is implemented in V4.2
- How to use shell script to call internal instructions of the application
- For example, calling the root-free fastboot command implemented inside the application
```shell
#!/system/bin/sh

# The prerequisite for using the fastboot instruction is isFastbootMode = true
fastboot() {
#  am broadcast -a com.adb.kitty.MY_CMD --es "args" "$*" > /dev/null
    am broadcast -a…
