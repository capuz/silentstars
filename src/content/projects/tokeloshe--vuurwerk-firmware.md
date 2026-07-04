---
repo: "Tokeloshe/vuurwerk-firmware"
name: "vuurwerk-firmware"
description: "Custom firmware for the Quansheng UV-K5. Voice-seeking spectrum, adaptive squelch, TX compressor, bandscope, and 41 features built on Egzumer."
readmeQualityOk: true
url: "https://github.com/Tokeloshe/vuurwerk-firmware"
language: "C"
languages: ["C"]
languagePcts: [92]
stars: 57
forks: 1
openIssues: 4
closedIssues: 2
watchers: 7
contributors: 2
recentReleases: 3
createdAt: "2026-02-22T02:45:26Z"
lastCommitAt: "2026-07-04T22:18:15Z"
lastReleaseAt: "2026-07-04T21:34:59Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 77
undervaluedScore: 11
maintainers: ["Tokeloshe"]
openGraphImageUrl: "https://opengraph.githubassets.com/3efa9204d40b8f3749634328fe0ed85d6637a36ef9b3871090e7280cc5ce31f7/Tokeloshe/vuurwerk-firmware"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/Tokeloshe", "CUSTOM:https://github.com/Tokeloshe/vuurwerk-firmware/blob/main/DONATE.md"]
---

# VUURWERK

**Custom firmware that turns a $30 Quansheng UV-K5 into a radio that listens,
adapts, and responds like equipment ten times its price.**

VUURWERK is Afrikaans for *fireworks*.

---

## See It In Action

Power on a VUURWERK radio and, after the boot banner, this is your home screen:

```
+--------------------------------+
| [Q|||]           [F]  [BATT##] |  <- status bar: signal quality, F key,
|                                |     battery (live even during TX)
| A  146.520.00       FM   H  N  |  <- VFO A: frequency, modulation,
|                                |     TX power, narrow/wide
| .:|.||:..|,.:|||,.:.|..:||:.,  |  <- bandscope: live RF activity
|                                |     on your frequency (F+7)
| B  446.000.00       FM   M     |  <- VFO B
|                                |
| 12.5kHz N FM                   |  <- context line: step, bandwidth, mode
+--------------------------------+
```

Stock firmware shows two frequencies and a battery icon. VUURWERK adds a live
bandscope showing who is transmitting nearby, a signal-quality meter, and a
context-aware bottom line that changes with what the radio is doing. When a
signal comes in:

```
| RX S7…
