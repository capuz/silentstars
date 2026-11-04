---
repo: "QuakedK/xHCI-IMOD-Disabler"
name: "xHCI-IMOD-Disabler"
description: "xHCI IMOD Disabler: The Simple xHCI IMOD Disabler, that doesn't require RWEverything. 😎"
readmeQualityOk: true
url: "https://github.com/QuakedK/xHCI-IMOD-Disabler"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-17T16:58:23Z"
lastCommitAt: "2026-11-04T02:56:22Z"
lastReleaseAt: "2026-09-28T05:04:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 32
maintainers: ["QuakedK"]
openGraphImageUrl: "https://opengraph.githubassets.com/40c20628c89b91bad42086a975d4654c9afe7c41a15e3f31f2212138680ddfb3/QuakedK/xHCI-IMOD-Disabler"
---

# xHCI IMOD Disabler
**xHCI IMOD Disabler**: Is a menued tool that allows the user to backup current IMOD Values, restore backed up IMOD Values, tests IMOD by setting it to `0xFA00` **(16 ms / 62.5 Hz)**, Disable (IMOD) on every selected USB Host Controller, Add **xHCI IMOD Disabler** to startup, etc.

**Disable Option**: Disables xHCI Interrupt Moderation **(IMOD)** on every selected USB Host Controller detected on your system by modifying each interrupter's IMOD register to **`0`** via PCI/MMIO access using the **WinRing0** and **InpOutX64** drivers. The default xHCI controller specification IMOD interval is `0xFA0` **(4000 decimal / 1,000 µs)**, while Windows commonly uses `0xC8` **(200 decimal / 50 µs)**. Disabling IMOD sets the interval to **`0 µs`**, effectively eliminating the intentional interrupt moderation delay.

# Why disable IMOD?
**Interrupt Moderation **(IMOD)** controls the amount of time the **USB xHCI controller** waits before generating an **interrupt** for USB events.** A higher **IMOD** value means the controller waits **longer** before generating the interrupt, while a lower value means it waits for **less** time. The IMOD interval is specified in `250 ns`…
