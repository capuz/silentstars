---
repo: "Till0196/ZeroWave"
name: "ZeroWave"
description: "Cross-platform TV player for live/recorded streams. Supports MPEG-2 TS & MMT/TLV in a unified Win/Mac/Linux UI."
originalDescription: "Cross-platform TV player for live/recorded streams. Supports MPEG-2 TS & MMT/TLV in a unified Win/Mac/Linux UI."
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/Till0196/ZeroWave"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["dtv", "egui", "isdb", "mmt", "rust", "wasm", "amf", "audiotoolbox", "nvdec", "qsv"]
stars: 55
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-10-13T14:35:16Z"
lastCommitAt: "2026-11-05T11:25:08Z"
lastReleaseAt: "2026-11-05T11:12:48Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 31
maintainers: ["Till0196", "renovate[bot]", "minegakiri"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2122644fdabbac61ed2efd455b7356f62ecbf062d6bcc52d5e2d3ad930b26a0/Till0196/ZeroWave"
---

# ZeroWave

A viewing program for digital broadcasting. It performs demuxing of MPEG-2 TS and MMT/TLV, decoding, deinterlacing, and display.

| Crate | Contents |
| --- | --- |
| `mediadecoder` | ES header parsing, decoding of MPEG-2 / H.264 / HEVC / AAC / MPEG Audio / AIFF, and management of reference pictures defined by the specification. |
| `core` (`zwcore`) | The main body. Container formats, clock and synchronization, eight hardware decoding paths (VA-API, V4L2, NVDEC, D3D12, VideoToolbox, Android, AMF, QSV), audio paths (devices, passthrough, resampling), wgpu and GLES 2.0 rendering, deinterlacing, the program guide, and the player (subtitles, data broadcasting, layers, plugin loading; feature `plugins`). |
| `sdk` (`zwsdk`) | The plugin SDK. Plugin side (`plug`), host side (`host`, feature), message types (`layer`, `video`), font lookup (`fonts`), host-side canvas 2D (`draw`, feature `host`), communication (`net`), UI (`ui`), remote control (`control`), and settings (`config`). `javy/` and `ts/` are the Javy plugin and SDK for TypeScript. |
| `deck` | The desktop implementation of ZeroWave. Window (winit, egui), wgpu surface, and audio output (on Linux, libasound is opened…
