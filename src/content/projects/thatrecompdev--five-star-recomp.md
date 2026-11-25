---
repo: "ThatRecompDev/five-star-recomp"
name: "five-star-recomp"
description: "Pre-work for a PC port of the Xbox Series GTA VI release: formats, shader translation and an offline console runtime"
readmeQualityOk: true
url: "https://github.com/ThatRecompDev/five-star-recomp"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 202
forks: 12
openIssues: 5
closedIssues: 3
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2026-11-23T09:57:42Z"
lastCommitAt: "2026-11-25T03:13:25Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 23
maintainers: ["ThatRecompDev", "davutsimsekk"]
openGraphImageUrl: "https://opengraph.githubassets.com/538fd31e7e8dcfb8a2600d2db8f06b307f027a52ed70da30c1c9c06c208d2bb2/ThatRecompDev/five-star-recomp"
discussionCount: 0
---

Five Star Recomp is an effort to run the Xbox Series version of **Grand Theft Auto VI** natively on a Windows PC,
from a copy of the game you own. It targets the Xbox Series release, version 1.0.2.1 (title ID `7952987A`).

The Xbox Series uses a regular x86-64 processor, so GTA VI's own code can run on a PC as it is. What does not
carry over is everything around it: the console's operating system services, its graphics API, its GPU shaders and
its data formats. This project rebuilds those pieces:

- **Shaders.** The game ships its GPU programs only as native AMD RDNA machine code. A translator turns each one
  into HLSL, which the standard DirectX compiler builds for any PC graphics card.
- **Platform.** A loader maps the game's modules on Windows and answers their calls to console-only system
  libraries with PC implementations.
- **Assets.** Readers for the game's archives, textures and metadata, so the data can be inspected and used.

No game files, keys or extracted data are part of this repository. Every tool runs on your own console dump.
