---
repo: "sam0402/ArchQ"
name: "ArchQ"
description: "ArchQ Linux for Audiophiles"
readmeQualityOk: true
url: "https://github.com/sam0402/ArchQ"
language: "Shell"
languages: ["Shell"]
languagePcts: [96]
stars: 25
forks: 6
openIssues: 7
closedIssues: 6
watchers: 9
contributors: 1
recentReleases: 0
createdAt: "2022-01-14T14:37:47Z"
lastCommitAt: "2026-09-27T09:29:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 54
maintainers: ["sam0402"]
openGraphImageUrl: "https://opengraph.githubassets.com/84ed9a8e00f72516170f24428c24c71185fc853e2b690dae07cf26db91a0f124/sam0402/ArchQ"
---

# ArchQ　[](https://paypal.me/sam402shu)

ArchQ is a headless Arch Linux-based high-quality music server and player designed for audiophiles.

Powered by an optimized real-time kernel (EVL), the system operates at a high tick rate (441 / 396.9 / 352.8 kHz).
As a result, you’ll experience sound quality similar to upsampling from a 44.1 kHz sample rate.

ArchQ includes LMS, Roon (Bridge), MPD (with CD playback), as well as optimized versions of Squeezelite, AirPlay, and a CD ripper (abcde). It is easy to install and configure.
If the CPU has more than 4 cores, MPD, LMS, and Squeezelite will run on isolated cores.

Install step:
1. Download the [ArchQ Linux install 202603.iso](https://drive.google.com/file/d/1YE0sG4GRX-3sJIUWOX1tgnhRMvrk20-t/view?usp=share_link), [mirror](https://miya.teracloud.jp/share/11d11c7bd85018e9)

2. Flash ISO image to USB drive by [Etcher](https://www.balena.io/etcher/?).

3. Boot up with USB drive with UEFI mode, than use `install` command. (Use `ip addr` to check if conneted on the network or not.)

4. After reboot, the monitor will not show any message only 'linux-Q352 ...'

5. Enter URL `http://name@archq.local:9000` or `http://ip.address:9000` in browser…
