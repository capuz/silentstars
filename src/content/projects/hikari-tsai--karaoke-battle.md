---
repo: "Hikari-Tsai/karaoke-battle"
name: "karaoke-battle"
description: "A karaoke scoring system that runs locally, a modern singing practice tool built on native C++ and multiple ONNX models"
originalDescription: "卡拉OK評分系統，基於原生C++與多種ONNX模型的現代化練唱工具"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Hikari-Tsai/karaoke-battle"
homepage: "https://hikari-tsai.github.io/karaoke-battle/"
language: "Dart"
languages: ["Dart"]
languagePcts: [66]
topics: ["music", "audio", "audio-processing", "cpp", "dart", "flutter", "karaoke", "macos", "melody-transcription", "music-information-retrieval"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-28T15:18:02Z"
lastCommitAt: "2026-11-17T14:35:19Z"
lastReleaseAt: "2026-11-03T15:24:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["Hikari-Tsai"]
openGraphImageUrl: "https://opengraph.githubassets.com/d91b9ea34611c9639bda19d554e2ddba380d53094d997931a42d520dac7bbebb/Hikari-Tsai/karaoke-battle"
---

A karaoke scoring system that runs locally. Paste a YouTube link or drag in an audio/video file, and the app completes vocal separation, melody transcription, and reference pitch extraction on your machine. While you sing, a scrolling piano-roll display shows the reference melody and a real-time F0 curve. When you finish, it gives quantified scores for pitch accuracy, rhythm, stability, vibrato, expressiveness, and sustained notes.

* macOS (Universal, Apple Silicon + Intel) and Windows x64, with a Flutter desktop app and a C++ native engine.
* All models are downloaded from Hugging Face `aaatmy/*` on first run and verified with SHA-256. The installer does not include models. Each launch checks that the models are complete. If any are missing or corrupted, they must be downloaded again before you can enter the song library.
* On Windows, CUDA is the main acceleration path (detected automatically; if it is missing, the app prompts you to install drivers and downloads the CUDA runtime). The fallbacks are DirectML and CPU. On macOS, CPU is used (some models try CoreML). The fallbacks do not affect scoring accuracy, only how quickly songs are prepared.

## Download

  &nbsp;

##…
