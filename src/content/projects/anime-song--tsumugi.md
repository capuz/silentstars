---
repo: "anime-song/tsumugi"
name: "tsumugi"
description: "Tsumugi — Audio-to-MIDI Transcription"
readmeQualityOk: true
url: "https://github.com/anime-song/tsumugi"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["amt", "automatic-music-transcription", "music", "music-transcription"]
stars: 106
forks: 7
openIssues: 7
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-03T08:11:28Z"
lastCommitAt: "2026-11-23T12:22:58Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 24
maintainers: ["anime-song", "ntamotsu", "haveyouwantto"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1227828845/d329ab11-26e1-4c7a-afbe-6d7906ffdd29"
discussionCount: 0
---

# tsumugi

**Transcribe any instrument to MIDI.** One instrument-agnostic model powered by a Neural Semi-CRF.

[日本語版 README](https://github.com/anime-song/tsumugi/blob/HEAD/README_ja.md) | [](https://colab.research.google.com/github/anime-song/tsumugi/blob/main/Colab_Inference.ipynb) | [MIT License](https://github.com/anime-song/tsumugi/blob/HEAD/LICENSE)

| [](https://youtu.be/3pCAjQuhzDA)<br>**Transcription example** | [](https://www.youtube.com/watch?v=JuVu-AoC5M0)<br>**Original video** |
| --- | --- |

Click either image to open the video on YouTube.

---

## Latest update (2026-11-23)

Added audio-feedback MIDI post-processing and upgraded [SheetSage2-Refined](https://github.com/anime-song/SheetSage2-Refined) to 0.5.2 (all enabled by default in `Colab_Inference.ipynb`). The pipeline renders candidate MIDI with FluidSynth and compares it against the separated stems and original mix to clean up instruments, timing, and mix balance:
