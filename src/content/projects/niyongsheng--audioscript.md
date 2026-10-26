---
repo: "niyongsheng/AudioScript"
name: "AudioScript"
description: "[iFlytek Simultaneous Interpretation] Free alternative: real-time transcription of local system audio for international conferences, English podcasts, and raw (untranslated) films and TV shows. Features a floating on-screen window, live subtitles, and offline recognition."
originalDescription: "[讯飞同传]免费平替——本地系统语音实时转写，国际会议、英文播客、生肉影视，屏幕浮窗、实时字幕、离线识别。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/niyongsheng/AudioScript"
homepage: "https://audioscript.looplooptech.com/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [57, 35]
topics: ["audio-transcription", "audio2text", "cross-platform", "offline-first", "rust", "speech-to-text", "speech-to-text-app", "srt", "tauri", "transcription"]
stars: 225
forks: 45
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-10-14T09:18:40Z"
lastCommitAt: "2026-10-26T03:02:37Z"
lastReleaseAt: "2026-10-23T03:02:45Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 30
maintainers: ["niyongsheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f094b403f488e8d548953b16ef2eeb42707129d41507874b882ce73c357275a/niyongsheng/AudioScript"
---

https://github.com/user-attachments/assets/10649363-0b68-45f5-aa0b-97a9135dab53

## Features

- **Capture**: system audio / microphone / both mixed.
- **Real-time offline**: sherpa-onnx streaming recognition + CTranslate2 opus-mt translation (en ↔ zh)
- **Floating subtitle window**: bilingual side-by-side display, with adjustable font size, opacity, and line count
- **Resident**: tray icon, stays running when the window is closed, single instance, launches at startup.

## Privacy

* Speech recognition and translation are fully performed on the local machine and work offline.
* Anonymous usage statistics via Aptabase, which can be disabled under 'General → Privacy'.

## Build

```bash
pnpm install          # dependencies + ASR model (≈ 58 MB)
pnpm fetch:mt         # fetch models
pnpm tauri dev        # development mode
pnpm tauri build      # package
```

## Contact Me

- X: [@niyongsheng](https://x.com/niyongsheng)
- E‑mail: niyongsheng@Outlook.com

## License

- [MIT](https://github.com/niyongsheng/AudioScript/blob/HEAD/LICENSE)  

- [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) Apache-2.0, [CTranslate2](https://github.com/OpenNMT/CTranslate2) MIT,…
