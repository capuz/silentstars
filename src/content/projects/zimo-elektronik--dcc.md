---
repo: "ZIMO-Elektronik/DCC"
name: "DCC"
description: "DCC protocol for controlling digital model railways"
readmeQualityOk: true
url: "https://github.com/ZIMO-Elektronik/DCC"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 28
forks: 10
openIssues: 11
closedIssues: 87
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-06-15T15:16:24Z"
lastCommitAt: "2026-10-27T12:39:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 50
maintainers: ["higaski"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e012dbcbf19b9ec9cdf15d886315e8a994e4ab60fb70c62f37e25fb911ee82b/ZIMO-Elektronik/DCC"
---

# DCC

DCC is an acronym for [Digital Command Control](https://en.wikipedia.org/wiki/Digital_Command_Control), a standardized protocol for controlling digital model railways. This C++ library of the same name contains **platform-independent** code to either decode (decoder) or generate (command station) a DCC signal on the track. For both cases, a typical microcontroller timer with microsecond precision is sufficient for implementing a receiver or transmitter class. Also included, but not platform-independent, is an encoder for the [ESP32 RMT](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/rmt.html) peripherals.

The implementation provided here is used in the following products:
- Command stations
  - [ZIMO KLUG](https://www.zimo.at/web2010/products/KLUG_EN.htm)
  - [Open|Remise S3Main](https://openremise.at)
- Decoders
  - [ZIMO small-](https://www.zimo.at/web2010/products/ms-sound-decoder_EN.htm) and [large-scale MS decoders](https://www.zimo.at/web2010/products/ms-sound-decoder-grossbahn_EN.htm)
  - [ZIMO MN decoders](https://www.zimo.at/web2010/products/mn-nicht-sound-decoder_EN.htm)
  - [ZIMO FS…
