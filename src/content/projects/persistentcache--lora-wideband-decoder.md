---
repo: "persistentcache/Lora-Wideband-Decoder"
name: "Lora-Wideband-Decoder"
description: "Self-hosted wideband intercept receiver for LoRa traffic. Decodes Meshtastic / LoRaWAN / MeshCore near-real-time from SDR IQ in software with a local web UI."
readmeQualityOk: true
url: "https://github.com/persistentcache/Lora-Wideband-Decoder"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 72
forks: 6
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-26T19:45:31Z"
lastCommitAt: "2026-10-26T20:59:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 18
maintainers: ["persistentcache"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f48bc71ce5cf9726f2458ba7d9de7db7b661921a73f974c2272c1d4d82b1bc9/persistentcache/Lora-Wideband-Decoder"
---

# LoRa Wideband Decoder

**One SDR, the whole band, every LoRa conversation on it - live.**

Point a software-defined radio at a chunk of spectrum and this decodes
what's flying around in it: Meshtastic, MeshCore, and LoRaWAN, at every
spreading factor and bandwidth, on standard *and* non-standard
frequencies, all at the same time. No channel hopping, no preset
guessing, no scan mode - it watches up to 28 MHz at once and pulls out
every frame it can hear, in near-real-time, on a normal multi-core PC.

- **Wideband, not channelized** - one capture covers every channel in
  the in-band width at once; frequency lists are not a thing here.
- **Three protocols, zero configuration** - Meshtastic, MeshCore, and
  LoRaWAN are recognized and decoded automatically, including node
  identities and channel labeling.
- **All spreading factors, all bandwidths** - SF7 through SF12 at
  41.7 / 62.5 / 125 / 250 / 500 kHz, concurrently.
- **Live web UI** - decoded packets, node identities, and a spectrum
  waterfall stream into a local Flask app as they happen.
- **Unknown-protocol forensics** - frames that decode but do not match
  a known protocol are surfaced with raw bytes + PHY parameters so…
