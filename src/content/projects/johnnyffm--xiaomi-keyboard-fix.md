---
repo: "JohnnyFFM/xiaomi-keyboard-fix"
name: "xiaomi-keyboard-fix"
description: "Fix the Xiaomi Pad 7 Pro (muyu) keyboard on crDroid/AOSP by completing MiAuth with the device's own TrustZone key"
readmeQualityOk: true
url: "https://github.com/JohnnyFFM/xiaomi-keyboard-fix"
language: "Shell"
languages: ["Shell", "C++"]
languagePcts: [69, 31]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-04-02T19:26:03Z"
lastCommitAt: "2026-10-09T18:56:05Z"
lastReleaseAt: "2026-10-09T18:56:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 23
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/120a46d77ac67ff9ee837b5e4682b8b3c9dc98b1e978db5a55c5d7a080a2ba44/JohnnyFFM/xiaomi-keyboard-fix"
---

# Xiaomi Pad 7 Pro keyboard fix (custom ROMs) - v3

Make the **Xiaomi Pad 7 / 7 Pro** magnetic keyboard fully work on **crDroid /
AOSP custom ROMs**: no dropouts, it actually types at boot, correct arrow-key
orientation, working **Caps Lock LED**, and a **keyboard-backlight** shortcut.

> Codename `muyu` (Pad 7 Pro) / `uke` (Pad 7). **Root required** (Magisk or
> KernelSU) - but **no Magisk module**: it's all `/data/adb` boot scripts that
> the root manager runs at startup. v2 (auth only) is on the `v2-backup` branch.

## What it fixes

| Problem on a custom ROM | Fix |
| --- | --- |
| Keyboard "connected" but **types nothing** at boot | `xiaomi_kbd_service.sh` - rebinds the HID so Android enables the input |
| Keyboard **stops after a while** (drops keys) | `kbd_auth.sh` + `midevauthd` - completes Xiaomi MiAuth with the device's own TrustZone key |
| **Arrow keys rotated** 90 degrees | IDC `device.internal = 0` (via `post-fs-data`) |
| **Caps Lock LED** dead | `kbd_leds.sh` - driven from the Caps key |
| **Keyboard backlight** dead | `kbd_leds.sh` - **Ctrl+Alt+4 brighter / Ctrl+Alt+3 dimmer** (0 = off) |

Nothing contacts Xiaomi servers and no keys are extracted: the token is…
