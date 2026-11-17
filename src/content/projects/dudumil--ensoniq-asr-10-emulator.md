---
repo: "dudumil/Ensoniq-ASR-10-Emulator"
name: "Ensoniq-ASR-10-Emulator"
description: "Emulator of the Ensoniq ASR-10 sampler, running the original OS, with the ESP effects processor and the OTIS sample playback chip. Settings menu for MIDI and audio (ASIO). Windows."
readmeQualityOk: true
url: "https://github.com/dudumil/Ensoniq-ASR-10-Emulator"
language: "C++"
languages: ["C++", "C"]
languagePcts: [50, 48]
stars: 27
forks: 5
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-11-07T17:58:00Z"
lastCommitAt: "2026-11-17T14:44:34Z"
lastReleaseAt: "2026-11-13T19:51:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 42
maintainers: ["dudumil"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e3b1533e820c38859947ce4d05bd5870d2d502999238dfaa7a805d85d118245/dudumil/Ensoniq-ASR-10-Emulator"
---

# Ensoniq ASR-10 Emulator

*Choose between the original VFD (above) and a purple graphic LCD, like the LCD replacement modules (below), in Options.*

A hardware-level emulator of the **Ensoniq ASR-10** (rack) sampler. It runs the original ROM and boots the
original operating system from a floppy image, on an emulated 68000 CPU, ES5506 (OTTO) sound chip,
ES5510 (ESP) effects DSP, floppy controller and SCSI. Nothing of the OS is faked, so it behaves like
the real instrument: sampling, effects, sequencer, Audio Tracks, disks.

Available as an app for **Windows** and **macOS** (Apple Silicon and Intel), and as a **VST3 instrument plug-in**
for both.

## What works

- Boot from the OS floppy (tested with OS 3.53), loading and saving instruments, banks and songs.
- 32-voice sound engine and all 50 ROM effects plus the effects stored in banks.
- Sequencer with correct tempo, MIDI In/Out.
- Sampling from your audio interface (or a WAV file).
- Audio Tracks, in RAM or on a SCSI disk (DiskTracks).
- SCSI drives (ZuluSCSI-style images): hard disks and CD-ROMs, booting the OS from SCSI.
- Import of **AKAI** (S1000/S1100) and **Roland** sample libraries from CD-ROM images on the SCSI bus…
