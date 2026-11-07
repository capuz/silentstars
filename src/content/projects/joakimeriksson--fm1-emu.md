---
repo: "joakimeriksson/fm1-emu"
name: "fm1-emu"
description: "Emulator for the M-VAVE FM-1 pocket synth: runs its firmwares unchanged in the browser and natively"
readmeQualityOk: true
url: "https://github.com/joakimeriksson/fm1-emu"
homepage: "https://joakimeriksson.github.io/fm1-emu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["c64", "chiptune", "emulator", "fm-1", "fm-synthesis", "jit", "m-vave", "midi", "reverse-engineering", "rust"]
stars: 173
forks: 47
openIssues: 19
closedIssues: 12
watchers: 6
contributors: 8
recentReleases: 4
createdAt: "2026-10-12T15:57:42Z"
lastCommitAt: "2026-11-07T16:12:25Z"
lastReleaseAt: "2026-11-02T16:03:04Z"
status: "newborn"
tags: []
healthScore: 87
undervaluedScore: 32
maintainers: ["joakimeriksson", "jamminstein", "profikid"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1415821668/b2820e90-979b-4d92-b34f-852d99f8e39d"
discussionCount: 2
---

# FM-1 emulator

The **M-VAVE FM-1** is a pocket FM synthesizer, and a small community writes its own firmwares
for it: drum machines, grooveboxes, ambient generators, a chord harp. This project emulates the
FM-1 itself, its CPU, screen, keys, knobs and audio, so every one of those firmwares runs
unchanged in a browser, on a computer or as an instrument plugin in a DAW (AU, VST3). You can
try a firmware before you install it, write one without a synth on the desk, or just play.

**Play it: [joakimeriksson.github.io/fm1-emu](https://joakimeriksson.github.io/fm1-emu/)**:
pick a firmware, press Start, play with the computer keyboard, the mouse, a touch screen or
a MIDI keyboard.

With sound: nine of the firmwares in 50 seconds.

https://github.com/user-attachments/assets/6849316e-7239-497e-b617-be74317dc2b1

The browser keeps the firmware you run and automatically saves flash changes, including settings
and patches saved through the firmware's own controls. Each exact firmware version has its own
save. **Save & backup** offers a manual save, portable `.fm1save` backup export/import, reset,
and a check for firmware updates. This also works with locally opened packages and on the…
