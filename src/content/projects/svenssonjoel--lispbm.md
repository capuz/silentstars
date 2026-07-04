---
repo: "svenssonjoel/lispBM"
name: "lispBM"
description: "An interpreter for a concurrent lisp with message-passing and pattern-matching."
url: "https://github.com/svenssonjoel/lispBM"
homepage: "http://www.lispbm.com"
language: "C"
languages: ["C", "C++"]
languagePcts: [39, 32]
topics: ["lisp", "interpreter", "stm32f4", "chibios", "nrf52", "esp32", "zephyr", "concurrency", "repl", "quasiquotation"]
stars: 130
forks: 16
openIssues: 4
closedIssues: 10
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2018-10-14T07:32:37Z"
lastCommitAt: "2026-07-04T19:20:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 45
maintainers: ["svenssonjoel", "DovPearX", "chuyskywalker"]
openGraphImageUrl: "https://opengraph.githubassets.com/26ccedcb2fc3c396774f93fa32712cb3e3deb530da1ceadfdb66a26e9c534096/svenssonjoel/lispBM"
discussionCount: 7
---

# lispBM (LBM)

LispBM is a lisp or scheme like programming language for
microcontrollers.  LispBM also borrows a couple of ideas from Erlang
when it comes to concurrency, message passing, pattern matching and
process monitoring.  The LispBM runtime system can be compiled for
either 32 or 64 bit platforms and runs on a wide range of hardware
such as for example STM32, NRF52, ESP32 or X86.  When running the
LispBM runtime system on a microcontroller it can be built on top of
ChibiOS, FreeRTOS or ZephyrOS or, if you are adventurous, on bare-metal.
LispBM can also be built to run on top of a regular linux.

LispBM is an embeddable scripting language meant to be integrated into
a larger application. Our goal is that LispBM is a suitably sandboxed scripting
language to be used in just about any application domain.

The LispBM mascot, Lispy the llama, was created by
[PixiLadyArt](https://www.instagram.com/pixiladyart/). Thank you, Pixi! 

## Contribute to LispBM!
LispBM is an open source project and welcomes collaboration and contribution.
Do you want to get involved and help out?

 - Check out the [lispbm.com](http://www.lispbm.com) website.
 - Join the [discord…
