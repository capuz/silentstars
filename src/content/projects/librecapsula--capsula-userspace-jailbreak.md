---
repo: "librecapsula/capsula-userspace-jailbreak"
name: "capsula-userspace-jailbreak"
description: "Tool for jailbreaking Capsula devices via Userdata"
originalDescription: "Tool for jailbreaking Capsula devices via Userdata"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/librecapsula/capsula-userspace-jailbreak"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-10-25T15:11:58Z"
lastCommitAt: "2026-10-29T21:25:00Z"
lastReleaseAt: "2026-10-29T16:31:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 48
maintainers: ["roman901"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ed5c9d47bad37ad908fad0dce91cf9808bd7ce15352d1e2b2e5d44f694adfa8/librecapsula/capsula-userspace-jailbreak"
---

# capsula-jb — root on VK Capsula speakers via userspace overwrite

Jailbreak of VK Capsula (Rockchip RK3308) by overwriting userspace: the **userdata partition is not signed** and can be freely overwritten by the user. We place an overlay with the factory `adbd` into it, and after a reboot the speaker shows up as an ADB device (`2207:0006`): `adb shell` gives **root without authorization**. Other partitions are not modified, and the stock firmware keeps working as is.

Supported boards: **Capsule-14, Capsule-15**, and **first-generation speakers** ("gift" ones). The loader for Capsule-14/15 is the same: the signed usbplug from the Capsule-14 OTA (this is the same build in all current rk3308 firmwares). It is **embedded in the binary** (`resources/loader/loader.bin` in the repository), so the tool does not need network access. First-generation speakers are signed with a different key: their BootROM rejects our usbplug, so a full backup cannot be made on them. The tool detects them on its own (by the serial number of the stock u-boot: on regular speakers it starts with four digits, on first-generation ones with arbitrary hex characters) and offers to flash a freshly built userdata…
