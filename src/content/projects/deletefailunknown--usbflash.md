---
repo: "deleteFAILunknown/usbFlash"
name: "usbFlash"
description: "Use Fastboot, ADB, and Shell without root."
readmeQualityOk: true
url: "https://github.com/deleteFAILunknown/usbFlash"
homepage: "https://p.dpdns.org/main-user"
language: "C"
languages: ["C"]
languagePcts: [96]
topics: ["adb", "android-application", "fastboot-android", "usb-devices", "usb-host", "webview-android"]
stars: 28
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-04-27T20:33:34Z"
lastCommitAt: "2026-09-05T07:48:25Z"
lastReleaseAt: "2026-07-14T02:23:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d5d9d6b029c2ad27b697242acef8f4f937f29b4e6f10f22debe393ac4db57a7f/deleteFAILunknown/usbFlash"
discussionCount: 14
---

# Version
- [android-release-version-app](https://github.com/deleteFAILunknown/usbFlash/releases)
- [android-beta-version-app](https://github.com/deleteFAILunknown/usbFlash/actions)

# apk support range
- Android 17 - Android 7.0
- Android TV、Android

# Root-free flash scheme
- This project allows you to perform Fastboot flashing in a root-free environment and connect to adbd

# Local Shell solution
- For the Shell executor, we may need to migrate to the foreground service to fully use all the instructions that come with Android 14+. The background process daemon service solution may no longer be a recommended solution for Android 14+ systems.
- For the existing local shell service, I would refactor it in V4.2 or V4.3

# Android Shell actuator
- How to use shell script to call internal instructions of the application
- For example, calling the root-free fastboot command implemented inside the application
```shell
#!/system/bin/sh

# The prerequisite for using the fastboot instruction is isFastbootMode = true
fastboot() {
#  am broadcast -a com.adb.kitty.MY_CMD --es "args" "$*" > /dev/null
    am broadcast -a com.adb.kitty.MY_CMD --es "cmd" "$*" > /dev/null
}

fastboot getvar…
