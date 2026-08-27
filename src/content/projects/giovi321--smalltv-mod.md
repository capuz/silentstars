---
repo: "giovi321/smalltv-mod"
name: "smalltv-mod"
description: "Custom firmware for the GeekMagic SmallTV that replaces the stock apps with four modes: a stock/crypto ticker, a Claude usage meter, a live plane radar and a Home Assistant driven display. Web UI, WiFi OTA updates, one codebase for ESP8266, SmallTV-ultra, ESP32-C2, and classic ESP32 (NM-TV-154)."
readmeQualityOk: true
url: "https://github.com/giovi321/smalltv-mod"
homepage: "https://giovi321.github.io/smalltv-mod/"
language: "C"
languages: ["C", "C++"]
languagePcts: [48, 39]
stars: 79
forks: 12
openIssues: 2
closedIssues: 2
watchers: 4
contributors: 3
recentReleases: 10
createdAt: "2026-06-10T21:27:19Z"
lastCommitAt: "2026-08-27T14:20:22Z"
lastReleaseAt: "2026-07-11T15:03:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 37
maintainers: ["giovi321", "LynchzDEV", "sweetlilmre"]
openGraphImageUrl: "https://opengraph.githubassets.com/264576d03be56f726a48adacc2aad6a29d035820136456453aaa2f53c0ce5a7a/giovi321/smalltv-mod"
---

</p>

<h1 align="center">smalltv-mod</h1>

</p>

</p>

> Not affiliated with GeekMagic or Anthropic. This firmware replaces the stock firmware entirely.

The GeekMagic SmallTV is a cheap desk gadget: a little cube with a 1.54" colour screen, an ESP inside, and a USB-C port. This firmware throws away the stock apps and turns it into three things you actually watch. It shows a **stock and crypto ticker** with prices, change, and a sparkline. It flips into a **Claude usage meter** with an animated mascot and your 5-hour and 7-day usage bars. And it becomes a **live plane radar** centred on your location, pulled from a free public feed. One image carries all three; you switch between them in a built-in web UI, and you update over WiFi.

This firmware builds four images from one codebase, covering five devices. The original SmallTV runs an **ESP8266**; the **SmallTV-ultra** is the same ESP-12F hardware and screen, but its stock "Ultra" firmware and flash partitions block a normal OTA of this image, so it takes a two-step loader install (see [Flashing](#flashing)); a second version sold under the same "smart weather clock" look uses an **ESP32-C2 (ESP8684)** instead. A third build…
