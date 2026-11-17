---
repo: "0xrnp/lazymobile"
name: "lazymobile"
description: "Terminal dashboard for iOS simulators, Android emulators, phones, live logs and Expo builds"
readmeQualityOk: true
url: "https://github.com/0xrnp/lazymobile"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["android-emulator", "expo", "go", "ios-simulator", "mobile-development", "tui"]
stars: 13
forks: 2
openIssues: 9
closedIssues: 12
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-11-14T06:34:11Z"
lastCommitAt: "2026-11-17T12:20:56Z"
lastReleaseAt: "2026-11-17T11:35:23Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 91
undervaluedScore: 43
maintainers: ["0xrnp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1457462443/ae17301c-edf5-472d-88f1-dfa608df7d97"
fundingLinks: ["GITHUB:https://github.com/0xrnp"]
---

# lazymobile

A terminal dashboard for mobile development: iOS simulators, Android emulators, connected phones,
their logs, and Expo builds, in one screen. It works in any terminal, and inside Neovim or
another editor's terminal.

The device list:

The log of one app on an Android emulator, with its crash in red:

Every key, with `?`:

- One list for every simulator, emulator, iPhone and Android phone on the machine.
- Boot, cold boot, shut down, erase, create and delete simulators and emulators.
- Uninstall an app, with its data, from a simulator, emulator, iPhone or Android phone.
- Launch, restart or stop an app on a running device.
- Open a deep link, take a screenshot, and switch dark and light mode, on a simulator, emulator or Android phone.
- For an app in development on an Android emulator or phone: forward a port to this computer (Metro's 8081), open the app's developer menu and reload it, with `lazymobile dev`.
- Install an `.apk` or `.app` from the devices pane (`i`), offering the builds it finds in the folder and the ones you installed before. On an iPhone too.
- Run your project's own commands (`flutter run`, a Gradle task, anything) on the selected device, from…
