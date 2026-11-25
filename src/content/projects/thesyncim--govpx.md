---
repo: "thesyncim/govpx"
name: "govpx"
description: "VP8 & VP9 codec in pure Go — byte-exact with libvpx, no cgo. Realtime encoder/decoder with RTP/WebRTC packetization, SVC, and multithreading."
readmeQualityOk: true
url: "https://github.com/thesyncim/govpx"
homepage: "https://pkg.go.dev/github.com/thesyncim/govpx"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["codec", "go", "golang", "libvpx", "realtime", "rtp", "video-codec", "video-decoder", "video-encoder", "vp8"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-05-06T18:41:19Z"
lastCommitAt: "2026-11-25T13:19:20Z"
lastReleaseAt: "2026-11-25T13:19:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 40
maintainers: ["thesyncim"]
openGraphImageUrl: "https://opengraph.githubassets.com/15ba283f9f6a6aa540b8bf30018db6fc3006daf02b61ad681424e6a3cc4c858a/thesyncim/govpx"
---

# govpx — VP8 & VP9 in pure Go

**A memory-safe VP8 and VP9 Profile 0 encoder + decoder written in pure Go —
zero `cgo`, zero `unsafe`, zero hand-written assembly, and competitive with
`libvpx`.**

govpx targets Go applications that need production VP8/VP9 support — WebRTC
senders, SFUs, media servers, transcoders, and recorders — without linking C.
It produces and consumes raw VP8 frame payloads and raw VP9 Profile 0 packets
with CBR/VBR/CQ/two-pass rate control, frame dropping, temporal denoising,
temporal and spatial SVC, ROI/active maps, and multithreaded encode/decode.
