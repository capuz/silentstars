---
repo: "Thorwegian/noaidi-fpga-synth"
name: "noaidi-fpga-synth"
description: "FPGA massive polyphonic synthesizer on Tang Nano 20K and ESP32"
readmeQualityOk: true
url: "https://github.com/Thorwegian/noaidi-fpga-synth"
language: "C++"
languages: ["C++", "SystemVerilog", "Python"]
languagePcts: [42, 27, 20]
stars: 6
forks: 0
openIssues: 82
closedIssues: 344
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-06-25T09:25:27Z"
lastCommitAt: "2026-11-24T13:10:46Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 48
maintainers: ["HermesOracle", "Thorwegian"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d1f4babd21e6a4475713032c8ae96eb0503770cccfcdf33ed95bf58fcc0ee96/Thorwegian/noaidi-fpga-synth"
---

# Noaidi — FPGA Polyphonic Synthesizer

A hardware **virtual analog synthesizer with a massive sound**, built
from a [Sipeed Tang Nano 20K](https://wiki.sipeed.com/tang-nano-20k)
FPGA (GW2AR-18C) doing all audio synthesis and an ESP32 doing all
musical thinking, on a
[circuit board](https://github.com/Thorwegian/noaidi-fpga-synth-kicad)
of their own. Playable today: 32-voice polyphony, 8 detuned
unison partials per voice, per-voice ADSR amp envelopes in gateware,
96 kHz synthesis, out on 96 kHz SPDIF and 96 kHz I2S (primary outputs),
plus 48 kHz TOSLINK (for automated lab tests).

## Architecture

```
MIDI in ──► ESP32-S3 ──SPI master──► Tang Nano 20K (GW2AR-18C)
            (MIDI parse, voice        └─ 256 time-multiplexed
             allocation, CC/SysEx        partials: osc → 2× SVF →
             mapping — "firmware")       stereo gain, behind the CSP:
                                         a processor that computes
                                         every control signal
                                         ("gateware")
                                         ──► SPDIF/TOSLINK @ 96/48 kHz + I2S @ 96 kHz
```
