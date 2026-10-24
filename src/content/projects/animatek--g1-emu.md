---
repo: "animatek/G1-Emu"
name: "G1-Emu"
description: "Nord Modular G1 emulator (68331 + DSP56303), playable from Animatek NME"
readmeQualityOk: true
url: "https://github.com/animatek/G1-Emu"
language: "C++"
languages: ["C++"]
languagePcts: [90]
stars: 116
forks: 7
openIssues: 13
closedIssues: 32
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-09-18T20:14:02Z"
lastCommitAt: "2026-10-24T08:07:41Z"
lastReleaseAt: "2026-09-28T09:02:06Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 33
maintainers: ["animatek", "MikeFiction", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/de9878d4ce05720fb18f337bf41488c0f797370e7b6655f7f3cbb3286272b2da/animatek/G1-Emu"
fundingLinks: ["PATREON:https://patreon.com/animatek", "CUSTOM:https://www.paypal.com/donate/?hosted_button_id=YATW56VC46ENE"]
---

# G1-Emu

**An emulator of the Nord Modular G1** (rack, OS 3.03) built on the
[Gearmulator](https://github.com/dsp56300/gearmulator) core: the hardware's original operating
system runs on an emulated Motorola 68331 and four emulated DSP56303s, and
[Animatek NME](https://github.com/animatek/Animatek-NME) edits it as if it were the real synth.

**Status: alpha.** The OS boots, editors connect over the PC Port and upload patches, and it
sounds clean in real time: oscillators, filters, envelopes, clocks, effects (chorus, overdrive…),
four outputs and two inputs. It has a window with the panel (display, knobs, buttons and LEDs), and
it is also a **VST3 and CLAP plugin**. **Runs on Linux, macOS and Windows**, tested on real
machines and in several DAWs. Builds in [Releases](https://github.com/animatek/G1-Emu/releases)
are free, unsigned and contain no ROM ([release notes](https://github.com/animatek/G1-Emu/blob/HEAD/docs/release-notes.md)): **to install one,
see [Getting started](#getting-started)**, and for common questions the [FAQ](#faq). Still
missing: module-by-module testing against a real G1. The technical details are in…
