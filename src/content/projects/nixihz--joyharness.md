---
repo: "nixihz/JoyHarness"
name: "JoyHarness"
description: "Control Codex Desktop on macOS with a game controller, RP2040-powered Codex Micro input, haptics, mouse controls, and push-to-talk."
readmeQualityOk: true
url: "https://github.com/nixihz/JoyHarness"
language: "Swift"
languages: ["Swift"]
languagePcts: [84]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-08-23T05:56:59Z"
lastCommitAt: "2026-08-28T14:31:37Z"
lastReleaseAt: "2026-08-25T16:47:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 37
maintainers: ["nixihz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6021b6dd746cff824f9beaa1a701e5e6c1ad5cde9a956ee71d6df14fc4e58b1b/nixihz/JoyHarness"
---

</p>

<h1 align="center">Joy Harness</h1>

</p>

</p>

Joy Harness is a physical control system for Codex Desktop on macOS. It connects a PS5 DualSense, Xbox controller, or another extended gamepad recognized by macOS to mouse controls, system shortcuts, six Codex Micro task slots, permission approvals, push-to-talk, haptic confirmation, and a local diagnostics dashboard.

The system has two parts:

1. **Joy Harness for macOS** reads controller input, controls the mouse, plays haptic feedback, and provides a six-slot dashboard.
2. **RP2040 firmware** turns a Raspberry Pi Pico-compatible board into a `Codex Micro` device recognized by Codex Desktop and receives controller actions from Joy Harness over serial.

Both the controller and RP2040 connect to the Mac; no wiring is required between them. Joy Harness starts a read-only Codex app-server subprocess to retrieve task names and ordering. It does not proxy Codex actions or emulate Codex Micro with keyboard events. Slot selection, approvals, and push-to-talk reach Codex Desktop through the RP2040's native Vendor HID interface. Mouse actions and system shortcuts are sent directly to the foreground macOS application.

## Download…
