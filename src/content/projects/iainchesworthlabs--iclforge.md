---
repo: "iainchesworthlabs/iclforge"
name: "iclforge"
description: "A clean-room AC-3, E-AC-3 and AC-4 encoder and decoder in C++23, implemented from the published standards. It turns PCM into AC-3, E-AC-3 or AC-4 streams, turns mono sources placed and moved in 3D space into E-AC-3 with Joint Object Coding, and reads those streams back."
readmeQualityOk: true
url: "https://github.com/iainchesworthlabs/iclforge"
homepage: "https://iainchesworthlabs.github.io/iclforge/"
language: "C++"
languages: ["C++"]
languagePcts: [73]
topics: ["ac-3", "ac-4", "audio-codec", "cpp23", "dolby-atmos", "e-ac-3", "esp32", "sendspin"]
stars: 5
forks: 1
openIssues: 5
closedIssues: 87
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-09T06:35:05Z"
lastCommitAt: "2026-10-25T07:54:07Z"
lastReleaseAt: "2026-09-01T09:43:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 70
maintainers: ["iainchesworth", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/04e6787c01200d52a7d7a3afd53a323bc00663b7c08053123ead00655ae5302c/iainchesworthlabs/iclforge"
---

# ICL Forge

ICL Forge is a clean-room AC-3, E-AC-3, AC-4 and Dolby Atmos codec, written from the published
standards in C++23, and the applications built on it.

| Component | What it is | Docs |
|---|---|---|
| **The library** — `iclforge::<library>` | Encodes and decodes AC-3 and E-AC-3, including Atmos objects through JOC, and decodes and encodes AC-4. Includes container, metadata, quality, and platform-audio libraries, with C, Python, Rust, and WebAssembly interfaces that decode and encode AC-4 as well as AC-3 and E-AC-3. | [Library](https://github.com/iainchesworthlabs/iclforge/blob/HEAD/docs/library/index.md), [capabilities](https://github.com/iainchesworthlabs/iclforge/blob/HEAD/docs/library/capabilities.md) |
| **Forge** — `forge` + `forge-gui` | CLI and GUI for encoding, decoding, inspection, quality checks, and live audio. `forge` reads and writes AC-4, and so does the GUI: its QC, player, and object pages read it, and its encoder page and Objects tab write it, objects included; substreams, presentations, and the other layouts stay with the command line. Both build AC-3 and E-AC-3 karaoke streams, the GUI in a Karaoke flow. |…
