---
repo: "PyMCU/PyMCU"
name: "PyMCU"
description: "A Python to ASM AOT compiler for microcontrollers"
readmeQualityOk: true
url: "https://github.com/PyMCU/PyMCU"
homepage: "https://docs.pymcu.org/pymcu"
language: "C#"
languages: ["C#", "Python"]
languagePcts: [65, 26]
topics: ["aot-compilation", "microcontrollers", "python"]
stars: 11
forks: 0
openIssues: 93
closedIssues: 392
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-04-16T15:12:10Z"
lastCommitAt: "2026-10-09T10:51:05Z"
lastReleaseAt: "2026-08-17T06:49:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 58
maintainers: ["begeistert"]
openGraphImageUrl: "https://opengraph.githubassets.com/6770b987e037941ee88c7bd929e40028ae67f6b92c4109f65349a95a7024cefc/PyMCU/PyMCU"
fundingLinks: ["GITHUB:https://github.com/begeistert"]
---

Python to bare-metal firmware — no runtime, no interpreter, no VM.
    ·
    ·

---

> [!IMPORTANT]
> **Alpha 10 is out — [v0.1.0a10 release notes](https://github.com/PyMCU/PyMCU/releases/tag/v0.1.0a10).**
> The hardware-validation release. It came out of a sustained bug hunt on a real Arduino
> Uno with a logic analyzer, plus a sweep of the official MicroPython quickref and
> CircuitPython Essentials examples — 63 projects, 53 of which compile; the rest fail on
> purpose with a clear diagnostic.
>
> What that hunt found was a class of **silent miscompiles**: `uint32(float_var)` emitting
> raw float bits, a global shadowing a function parameter (which had been driving the DHT
> start pulse for 250 ms instead of 18), `millis()` counting 1024 ms per second, and a
> timer's second PWM channel disconnecting the first. Each fix shipped with a regression
> test. Suites at that release: **517 unit, 508 driver, 1549 AVR integration**.
>
> **Alpha 10 still has bugs, and the hunt did not stop.** 145 more fixes have landed since
> it shipped, most of them turning a case the compiler used to answer blindly into a
> diagnostic that names what it cannot do. That work is heading for **beta 1**;…
