---
repo: "rhetorica/ARES-SDK"
name: "ARES-SDK"
description: "Software development kit for the ARES operating system"
url: "https://github.com/rhetorica/ARES-SDK"
homepage: "http://support.nanite-systems.com/"
language: "LSL"
languages: ["LSL"]
languagePcts: [100]
stars: 12
forks: 4
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2024-06-28T22:43:02Z"
lastCommitAt: "2026-07-04T06:13:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 52
maintainers: ["rhetorica", "AlinaNova21", "aogummy"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3abdfa56e3560c9b36b35c4356cd046add6be9744b648cee2621e019b1946c1/rhetorica/ARES-SDK"
---

# ARES Software Development Kit

ARES is a small nanokernel operating system written in the [Second Life](https://secondlife.com/) [Linden Scripting Language](https://wiki.secondlife.com/wiki/LSL_Portal). It is normally used to power immersive HUD attachments for roleplaying as a robot, but in principle can be adapted as a general-purpose platform through the addition and removal of system components.

ARES provides a robust API which is quite dissimilar to normal LSL programming. Here are the highlights:
- Many common "`ll`"-prefixed LSL functions are renamed for brevity and convenience. This was optional in Companion but highly encouraged in ARES. These definitions come from the `utils.lsl` file in the SDK root.
- No `default {}` state—the program's entry point for command-line use is the `SIGNAL_INVOKE` block inside a `main()` function. Timers and events like `on_rez` are emulated through kernel signals, but can still be implemented for programs that need high performance.
- A basic stream API is used for text input and output, similar to Unix pipes. `llSay(0, "Hello World!");` is now `print(outs, user, "Hello World!");` — pipes can be chained together to automatically pass…
