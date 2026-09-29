---
repo: "HeyOkay/HaloBattery"
name: "HaloBattery"
description: "Unified battery level indicators for 2.4GHz mice, headsets and Bluetooth devices in the Windows tray"
readmeQualityOk: true
url: "https://github.com/HeyOkay/HaloBattery"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 246
forks: 21
openIssues: 40
closedIssues: 35
watchers: 0
contributors: 5
recentReleases: 7
createdAt: "2026-09-25T06:05:56Z"
lastCommitAt: "2026-09-29T08:10:57Z"
lastReleaseAt: "2026-09-27T19:26:28Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 81
undervaluedScore: 27
maintainers: ["HeyOkay", "ahmedkhursheed23", "casparas123"]
openGraphImageUrl: "https://opengraph.githubassets.com/830c3556086331d6492a20f3ac6023a0c918fd2e884f69f9617d54cd98672076/HeyOkay/HaloBattery"
---

# Halo Battery

Shows the battery level of wireless devices in the Windows system tray. Each device gets its own icon: a battery ring with the device pictogram in the middle. No Synapse or other vendor software required.

While charging, the arc slowly "breathes":

## Supported devices

Tested on real hardware:

| Device | Connection | How the battery is read |
|---|---|---|
| Razer Barracuda Pro (2.4 GHz) | 2.4 GHz dongle (1532:053a) | Its receiver publishes two collections and neither answers the standard Razer mouse request this app sends. The headset speaks the "PA" protocol instead: 64-byte vendor frames, `P`,`A` out and `P`,`I` back, battery command `0x21` with the level in the reply's data byte, charging `0x2A`. Decoded from a USBPcap capture of Razer Synapse on a real unit (it read 34%), then confirmed on hardware with @phl23's own Barracuda Pro: the level tracks (27% at the test), charging follows the charger, and a switched-off headset reports "no link" rather than a stale value. Over Bluetooth Windows reports the level itself. |
| Razer BlackShark V2 Pro (2023) | 2.4 GHz receiver (1532:0555) | The headset's own "PA" protocol: output reports 0x02 on the vendor interface…
