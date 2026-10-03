---
repo: "KillerPixelCrew/WSGM"
name: "WSGM"
description: "Windows Steam Game Mode - reconstructs the SteamOS Game Mode experience on Windows 11 gaming handhelds"
readmeQualityOk: true
url: "https://github.com/KillerPixelCrew/WSGM"
language: "C#"
languages: ["C#"]
languagePcts: [91]
stars: 9
forks: 0
openIssues: 14
closedIssues: 108
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-09-03T06:25:16Z"
lastCommitAt: "2026-10-03T22:04:08Z"
lastReleaseAt: "2026-09-29T19:12:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["NightHammer1000", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1355594840/25503eef-8229-4450-82a2-6e8564511295"
---

WSGM rebuilds the SteamOS Game Mode experience on Windows 11, on gaming handhelds, gaming PCs and
DIY Steam Machines. You sign in, you land in Steam Big Picture, you drive everything with the pad
and the touchscreen, and you only see the desktop when you ask for it. Explorer stays your Windows
shell the whole time.

> [!IMPORTANT]
>
> Game Mode ends Explorer while it runs. If you are ever left without a desktop, **Ctrl+Alt+Del**
> always gets it back. See [Recovery](#recovery-read-this-first) before your first boot.

## The overlay

One fullscreen sheet slides down from the top edge over whatever is running, with live glass behind
it and an opaque fallback. It is built for the pad and the touchscreen: LT and RT switch between
Quick access, Steam, Device, Tools and Power, each with its sections on the left and their controls
beside them. X pins any control or whole section to the Quick access home, next to plugin widgets
and your own actions.

The header is the status bar and the utility tray: Wi-Fi, Bluetooth, volume, brightness, Safe Eject
for SD cards and USB drives, the on-screen keyboard, battery and the clock. Each opens its own panel
inside the sheet, so you can join a…
