---
repo: "QUD-Technologies/quranic-universal-audio"
name: "quranic-universal-audio"
description: "Unified Quranic audio and timing - a timestamps visualizer, editing tool and community-verified recitations dataset"
readmeQualityOk: true
url: "https://github.com/QUD-Technologies/quranic-universal-audio"
homepage: "https://audio.qud.dev"
language: "Python"
languages: ["Python", "TypeScript", "Svelte"]
languagePcts: [51, 25, 21]
topics: ["asr", "audio-player", "audio-visualizer", "dataset", "quran", "quran-audio", "segmentation", "timestamp-tool", "timestamps", "timing-analysis"]
stars: 56
forks: 7
openIssues: 1
closedIssues: 43
watchers: 2
contributors: 7
recentReleases: 2
createdAt: "2026-03-09T13:26:39Z"
lastCommitAt: "2026-11-13T05:38:13Z"
lastReleaseAt: "2026-11-13T05:37:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["Hetchy", "github-actions[bot]", "qud-admin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1176880859/4c422cd1-1353-4c0e-a4c8-72ab56fc7f20"
---

## Highlights

- **Unified Qur'anic audio hub:** A single consistent schema with comprehensive metadata for reciters and recitations instead of scattered websites, CDNs, YouTube playlists, and raw files with different formats.

- **Large-scale, multi-riwayah, multi-style:** Full Qur'an coverage across many recitations and hours of audio, spanning mujawwad, murattal, muallim and taraweeh styles.

- **Precise alignment:** 20ms timing precision yields maximum accuracy, eliminates ambiguity at word boundaries and disambiguates tajweed effects where sounds merge across words.

- **Repetition-aware, gap-free timestamps:** The pipeline transcribes each silence-based segment independently, so repeated words are detected and timestamped correctly. See the [comparison with QUL timestamps](https://github.com/QUD-Technologies/quranic-universal-audio/blob/HEAD/docs/qul_timestamp_comparison.md).

- **Community-driven validation:** No trusting a black-box pipeline. Every stage is automatically checked by dedicated validators and human-correctable through an interactive editing UI. Review flagged errors like missing words or misaligned boundaries, fix them visually, and feed corrections back into…
