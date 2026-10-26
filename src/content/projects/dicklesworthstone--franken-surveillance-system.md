---
repo: "Dicklesworthstone/franken_surveillance_system"
name: "franken_surveillance_system"
description: "Pure-Rust, evidence-native, local-first sensor fabric and semantic control plane for owner-authorized cameras and capture drones"
readmeQualityOk: true
url: "https://github.com/Dicklesworthstone/franken_surveillance_system"
homepage: "https://github.com/Dicklesworthstone/franken_surveillance_system"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["computer-vision", "local-first", "multimodal", "rust", "security", "sensor-fusion", "surveillance", "drone-capture", "evidence-native"]
stars: 73
forks: 5
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-31T20:07:34Z"
lastCommitAt: "2026-10-26T18:08:36Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/357302248c186cbc88817e31ed0cbeb0e575711d1675ab55b98cac54e1f6de25/Dicklesworthstone/franken_surveillance_system"
---

# Franken Surveillance System (`fss`)

**A pure-Rust, evidence-native, local-first sensor fabric for owner-authorized cameras and manually piloted capture drones.**

*Cheap consumer hardware. One version universe. Certified graph intelligence. Pure-Rust media and models. Crash-safe evidence. No ambient authority.*

> [!IMPORTANT]
> FSS is an **unqualified reference implementation**. It can import recorded media with custody,
> capture RTSP (interleaved TCP) and HTTP MJPEG streams into local archives, decode baseline
> JPEG/MJPEG, H.264 (Baseline, Main and High; progressive 4:2:0) and H.265 (Main, 8-bit 4:2:0), run small models on a scalar executor, detect, track
> and publish event candidates (including a model-free `fss-event watch` pipeline), and keep a
> crash-safe local ledger. It ships one trained detector package (YOLOX-Nano, COCO-80,
> conformance-checked against its upstream ONNX graph; `fss-infer package-detect`), but does **not**
> yet decode 10-bit or interlaced video, measure detection quality on real footage, expose more of
> the agent protocol than `fss session orient`/`fss explain`/`fss session follow` and durable
> `fss session open`/`fss handoff`/`fss session…
