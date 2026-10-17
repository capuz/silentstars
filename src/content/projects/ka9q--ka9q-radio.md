---
repo: "ka9q/ka9q-radio"
name: "ka9q-radio"
description: "Multichannel SDR based on fast convolution and IP multicasting"
readmeQualityOk: true
url: "https://github.com/ka9q/ka9q-radio"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 351
forks: 80
openIssues: 5
closedIssues: 101
watchers: 44
contributors: 19
recentReleases: 0
createdAt: "2022-04-13T04:26:17Z"
lastCommitAt: "2026-10-17T07:59:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 38
maintainers: ["ka9q", "ke5gdb"]
openGraphImageUrl: "https://opengraph.githubassets.com/a56668dea926ceac2d83f9583224048d28e68a2d9da4d893d37e0a9a6687659d/ka9q/ka9q-radio"
---

*ka9q-radio* is a software defined radio for Linux I've been working on
for a few years. It is very different from most other amateur SDRs in
several respects:

1. Efficient multichannel reception. A single Raspberry Pi 4 can
simultaneously demodulate, in real time, every NBFM channel on a
VHF/UHF band (i.e., several hundred) with plenty of real time left
over.

A mid-range x86 can handle the RX888 MkII at full sample rate
(129.6 MHz), receiving multiple channels simultaneously on all
LF/MF/HF ham bands (or anything else) plus 6 meters.

A Raspberry Pi 5 can handle the RX888 MkII at half sample rate (64.8
MHz), enough to receive up to 30 MHz. (An external hardware anti-alias
filter is required, and "FFTW Wisdom" must be generated for the Pi5 to
run this fast.)

2. All I/O (both signal and control/status) uses IP multicasting.
This makes it easy for more than one module, on the same computer or
on a LAN, to operate on the outputs of other modules, or for
individual modules to be restarted without restarting everything else.

If you want a user-friendly, interactive, graphics-laden SDR with a
simple learning curve, then *ka9q-radio* is NOT what you're looking
for! (At least not…
