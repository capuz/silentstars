---
repo: "Rabbit-Company/RabbitEncoder"
name: "RabbitEncoder"
description: "Automated AV1 video transcoding pipeline powered by Auto-Boost-Essential and Opus audio encoding, with a real-time web dashboard."
readmeQualityOk: true
url: "https://github.com/Rabbit-Company/RabbitEncoder"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 23
forks: 2
openIssues: 2
closedIssues: 6
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-03-17T16:31:43Z"
lastCommitAt: "2026-11-20T12:03:16Z"
lastReleaseAt: "2026-04-01T07:40:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 46
maintainers: ["zigazajc007"]
openGraphImageUrl: "https://opengraph.githubassets.com/59f1ae79bab61dd307fefd2c04f92ebc604ed5634522d9d823f53608b101c3f6/Rabbit-Company/RabbitEncoder"
---

# Rabbit Encoder

Automated AV1 video transcoding pipeline powered by **Auto-Boost-Essential** and **Opus** audio encoding, with a real-time web dashboard.

Drop media files into the `input` folder and get optimally encoded MKV files in the `output` folder, or browse your media library directly from the dashboard and encode entire series in-place.

## Features

- **Auto-Boost-Essential** integration for optimal per-scene CRF zones
- **Opus** audio encoding with configurable per-channel bitrates
- **HDR10 metadata** preservation (PQ, BT.2020, mastering display, content light)
- **HDR10+ metadata** measured for every PQ source with [retone](https://github.com/Rabbit-Company/retone) and written into the AV1 encode, with the scenes of a Dolby Vision source's shots
- **HDR Metadata tool** to inspect, add, measure, import, change and remove HDR10+, HDR10 and Dolby Vision metadata in existing AV1 MKVs, one file or a whole folder, without re-encoding
- **Film Grain tool** to inspect, add, replace and remove AV1 film grain synthesis in existing AV1 MKVs, one file or a whole folder, without re-encoding
- **VapourSynth filter chain** stackable per-job filters (FineDehalo, DehaloAlpha...)…
