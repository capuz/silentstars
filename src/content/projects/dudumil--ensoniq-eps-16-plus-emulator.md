---
repo: "dudumil/Ensoniq-EPS-16-Plus-Emulator"
name: "Ensoniq-EPS-16-Plus-Emulator"
description: "Emulator of the Ensoniq EPS-16 Plus sampler, running the original OS, with the ESP effects processor and the OTIS sample playback chip. Settings menu for MIDI and audio (ASIO). Windows."
readmeQualityOk: true
url: "https://github.com/dudumil/Ensoniq-EPS-16-Plus-Emulator"
language: "C"
languages: ["C", "C++"]
languagePcts: [51, 47]
stars: 8
forks: 4
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 4
createdAt: "2026-11-07T17:58:47Z"
lastCommitAt: "2026-11-17T14:44:37Z"
lastReleaseAt: "2026-11-13T19:54:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 46
maintainers: ["dudumil"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c01f95c37cc58212c3e62f6bca994f45312eb16d4d1c37b6aaf2228160ae15d/dudumil/Ensoniq-EPS-16-Plus-Emulator"
---

# Ensoniq EPS-16 Plus Emulator

A hardware-level emulator of the **Ensoniq EPS-16 Plus** (rack) sampler. It runs the original ROM and
boots the original operating system from a floppy image, on an emulated 68000 CPU, ES5505 (OTIS)
sound chip, ES5510 (ESP) effects DSP, DMA controller, floppy controller and SCSI. Nothing of the OS is
faked, so it behaves like the real instrument.

Available as an app for **Windows** and **macOS** (Apple Silicon and Intel), and as a **VST3 instrument plug-in**
for both.

## What works

- Boot from the OS floppy (tested with OS 1.30), loading and saving instruments, banks and sequences.
- 20-voice sound engine with the ESP effects.
- Sampling from your audio interface (or a WAV file) at 44.6 / 29.8 / 22.3 / 17.9 kHz, with the input
  level meter.
- Sequencer with correct tempo, MIDI In/Out.
- SCSI option (ZuluSCSI-style images): detection at boot, CHANGE STORAGE DEVICE, FORMAT SCSI DRIVE.
- **FB-2 Flash Bank** (1 MB of flash for the OS and instruments): format, save, instant loads, boot
  from the flash.
- Import of **Ensoniq Mirage** sounds from Mirage disk images (440 KB `.img`): Command › System/MIDI ›
  LOAD MIRAGE-DSK SOUND.
- OEX-6 Output…
