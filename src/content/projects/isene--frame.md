---
repo: "isene/frame"
name: "frame"
description: "Pure-asm X11 display server for the CHasm desktop. No libc, no Mesa, no Xlib — just NASM, syscalls, and the X11 wire protocol."
readmeQualityOk: true
url: "https://github.com/isene/frame"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [100]
stars: 226
forks: 12
openIssues: 1
closedIssues: 0
watchers: 10
contributors: 2
recentReleases: 10
createdAt: "2026-06-21T08:52:30Z"
lastCommitAt: "2026-08-27T14:25:51Z"
lastReleaseAt: "2026-06-22T13:54:36Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 59
undervaluedScore: 23
maintainers: ["isene"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a0b3269ca9655353c2ef2b2cb13a461cab98ef539d278db41a21391ef1aae13/isene/frame"
---

# frame - Pure Assembly X11 Display Server

X11 display server written in x86_64 Linux assembly. No libc, no
toolkits, no FreeType, no Mesa, no Xlib. Just NASM source, direct
syscalls, the X11 wire protocol on a Unix socket, and the kernel's
DRM/KMS + evdev interfaces.

Long-range goal: serve enough of the X11 wire protocol (core + SHAPE +
RENDER + XKB + COMPOSITE + DAMAGE + RANDR + MIT-SHM + XInput2 + XVideo) to host
the whole [CHasm](https://github.com/isene/chasm) desktop plus
arbitrary X clients — Firefox, VS Code, GIMP, Inkscape — all
software-rendered, all on a stack written end-to-end in asm.

<br clear="left"/>

*The whole stack, end to end in assembly: [pointer](https://github.com/isene/pointer)
(a Rust TUI file manager) running inside [glass](https://github.com/isene/glass)
(the asm terminal) on **frame** (the asm X server), shown on the laptop's
panel via DRM/KMS — two-pane layout, syntax-highlighted preview, colour,
keyboard-driven. No libc, no Xlib, no Mesa anywhere in the path.*

## Status: phase 4 of 14 (core protocol + compositor + drawing)

| # | Phase | Status |
|---|-------|--------|
| 1 | Connection setup + Unix socket bind | ✓ shipped |
| 2 | DRM/KMS probe…
