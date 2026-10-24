---
repo: "QUD-Technologies/quranic-universal-audio"
name: "quranic-universal-audio"
description: "Unified audio and timing (word + letter) for Quran apps, developers, and researchers. A timestamps visualizer, editing tool and community-verified recitations dataset"
readmeQualityOk: true
url: "https://github.com/QUD-Technologies/quranic-universal-audio"
homepage: "https://audio.qud.dev"
language: "Python"
languages: ["Python", "TypeScript", "Svelte"]
languagePcts: [51, 25, 22]
topics: ["asr", "audio-player", "audio-visualizer", "dataset", "quran", "quran-audio", "quran-json", "segmentation", "timestamp-tool", "timestamps"]
stars: 52
forks: 6
openIssues: 1
closedIssues: 41
watchers: 2
contributors: 5
recentReleases: 4
createdAt: "2026-03-09T13:26:39Z"
lastCommitAt: "2026-10-24T08:20:17Z"
lastReleaseAt: "2026-09-26T20:36:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["Hetchy", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1176880859/4c422cd1-1353-4c0e-a4c8-72ab56fc7f20"
---

## Highlights

- **Unified Qur'anic audio hub:** A single consistent schema with comprehensive metadata for reciters and recitations instead of scattered websites, CDN APIs, YouTube playlists, and raw files with different formats.

- **Large-scale, multi-riwayah, multi-style:** Full Qur'an coverage across many recitations and hours of audio, spanning mujawwad, murattal, muallim, taraweeh and children repeat styles.

- **Phoneme-based alignment:** 20ms phoneme-level precision yields maximum accuracy, eliminates ambiguity at word boundaries and disambiguates tajweed effects where sounds merge across words.

- **Repetition-aware, gap-free timestamps:** The pipeline transcribes each silence-based segment independently, so repeated words are detected and timestamped correctly. See the [comparison with QUL timestamps](https://github.com/QUD-Technologies/quranic-universal-audio/blob/HEAD/docs/qul_timestamp_comparison.md).

- **Community-driven validation:** No trusting a black-box pipeline. Every stage is automatically checked by dedicated validators and human-correctable through an interactive editing UI. Review flagged errors like missing words or misaligned boundaries, fix them…
