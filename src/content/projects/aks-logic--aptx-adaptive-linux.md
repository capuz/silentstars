---
repo: "AKS-Logic/aptx-adaptive-linux"
name: "aptx-adaptive-linux"
description: "AI assisted clean room port of aptX Adaptive on Linux: native Rust encoder with library patches (Auto +LL + HQ)"
readmeQualityOk: true
url: "https://github.com/AKS-Logic/aptx-adaptive-linux"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["aptx", "audio", "bluetooth", "bluez", "pipewire", "rust", "aptx-adaptive"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-18T10:41:07Z"
lastCommitAt: "2026-10-31T09:53:55Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 57
maintainers: ["theacrat", "AKS-Logic", "baizhu945"]
openGraphImageUrl: "https://opengraph.githubassets.com/0381db3fc3127446e4b1c152b2377cf0aca46b68ebd3130f9704a370495e43fc/AKS-Logic/aptx-adaptive-linux"
discussionCount: 1
---

# aptx-adaptive-for-linux

This is a research project which shows that AI is capable of integrating audio and
Bluetooth technologies and demonstrates the AI's ability to do a clean room 
implementation of Bluetooth codecs.

AptX Adaptive for Linux contains a Rust encoder and a Bluetooth codec plugin 
for PipeWire.

It streams audio from a Linux desktop to aptX Adaptive headphones over stock
BlueZ and PipeWire, with no USB dongle and no external codec files. 
This project was tested with Bose Quiet Comfort Ultra (gen 1).
It may or may not work directly with other headphones; some simple tweaks
made by an AI agent may allow it to work with other headphones and machines,
demonstrating AI's capability to integrate even more.

**Clean-room notice:** this is an independent clean-room reimplementation. No
vendor source code, SDK, headers, NDA material, or vendor binary is included
or redistributed in this repository; all original code was written by the
project. See [`LEGAL.md`](https://github.com/AKS-Logic/aptx-adaptive-linux/blob/HEAD/LEGAL.md) for the full statement.

This falls under fair use as the objective is to research AI capabilities and
introduce compatibility with other…
