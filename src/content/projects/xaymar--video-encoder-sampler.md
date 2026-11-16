---
repo: "Xaymar/video-encoder-sampler"
name: "video-encoder-sampler"
description: "An attempt at an automated tool for finding the best possible media quality an encoder and codec can give."
readmeQualityOk: true
url: "https://github.com/Xaymar/video-encoder-sampler"
homepage: "https://ves.xaymar.com/"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["ffmpeg", "video", "nvenc", "amf", "qsv", "x264", "x265"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2020-10-26T08:54:49Z"
lastCommitAt: "2026-11-16T04:03:13Z"
lastReleaseAt: "2026-11-04T16:50:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 83
maintainers: ["claude", "Xaymar"]
openGraphImageUrl: "https://opengraph.githubassets.com/82365aea05c4b643b95c3c3f40b66c787cd0b6f3ac2eeaccedd369e8dfe253e5/Xaymar/video-encoder-sampler"
fundingLinks: ["PATREON:https://patreon.com/xaymar", "CUSTOM:https://paypal.me/xaymar", "CUSTOM:https://s.xaymar.com/discord"]
---

# Video Encoding Samples (VES)

VES finds the best settings for a video encoder by measuring them. You give it source videos and lists of encoder options; it encodes every combination, decodes the result again, scores every frame with [VMAF](https://github.com/Netflix/vmaf) and tells you which configurations are best. Supported encoders: NVENC, AMF and QuickSync (H.264, HEVC, AV1), x264, x265 and SVT-AV1.

How it works:

* **One decode, many encodes.** A source is decoded once and fed to all encoders at the same time; each result is scored while it is still being encoded, from that same decode: the decoded frames (true score) and the frames each encoder got (distorted score) are kept until its scorer has used them, and the decode waits when a busy scorer falls more than 48 frames behind, so encoders stay close to their scoring. FFmpeg only reads and decodes video, everything else is native.
* **Rank-weighted ranking.** For each input, bitrate and key frame interval, configurations are ranked by the rank-weighted mean of their per-frame VMAF: the frames are sorted from worst to best and the worst weighs about 2, the median 1, the best about 0. Every frame counts and bad frames…
