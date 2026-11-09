---
repo: "tamer-hassan/xigmatek-connect-lcd"
name: "xigmatek-connect-lcd"
description: "Unofficial Linux counterpart of the ALPHA app for the 480x480 LCD in Xigmatek Connect AIO coolers: the USB serial protocol, measured on real hardware"
readmeQualityOk: true
url: "https://github.com/tamer-hassan/xigmatek-connect-lcd"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [71, 29]
topics: ["xigmatek", "aio-cooler-software", "debian", "lcd", "lcd-panel", "lcd-screen", "linux-app", "pyqt6-gui", "python3", "ubuntu"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-07T01:28:10Z"
lastCommitAt: "2026-11-09T03:30:40Z"
lastReleaseAt: "2026-11-08T00:07:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["tamer-hassan"]
openGraphImageUrl: "https://opengraph.githubassets.com/f724e34b98d9013e41f997ae93574dc20f477750cf62ac3af13000939ab2df21/tamer-hassan/xigmatek-connect-lcd"
---

# xigmalcd — system stats on the Xigmatek Connect AIO's built-in LCD

penguin standing in front of a Connect AIO water block, whose LCD reads 39°C">

Linux counterpart of the Windows `ALPHA` app that ships with Xigmatek **Connect**
series AIO coolers. Those coolers have a 480×480 LCD in a USB port header on the
water block; on Windows the vendor app draws CPU/GPU temps, clocks and fan speeds on
it. On Linux the panel shows up as a plain CDC-ACM serial port (`/dev/ttyACM0`) and
nothing talks the protocol — until now.

This repo draws the same information from Linux sensors and pushes it to the panel as
PNG frames. Verified on real hardware (Connect 360, firmware `V1.2.3`): handshake,
metrics blob and picture upload all work from Kubuntu — the drawn frame is what the
display shows.

**Unofficial, and it says so.** Nothing here is affiliated with, endorsed by or
approved by XIGMATEK; `Xigmatek`, `Connect` and `ALPHA` are their owner's names. The
code — `xigmalcd/`, `xigmaui/`, `tools/`, `install/` — is GPL-3.0-or-later (`LICENSE`),
and the vendor's own files this repo carries as evidence and test assets are labelled
as such wherever they appear ("Licence", at the end).

## What it…
