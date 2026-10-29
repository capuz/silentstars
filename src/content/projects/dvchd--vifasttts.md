---
repo: "dvchd/ViFastTts"
name: "ViFastTts"
description: "Ứng dụng đọc tiếng Việt cho Windows/macOS/Linux, Web, Android, iOS Simulator và Chrome Extension: tải về chạy ngay, model có sẵn, đọc văn bản dài, xuất WAV. Mã nguồn mở; model nghiên cứu phi thương mại."
readmeQualityOk: true
url: "https://github.com/dvchd/ViFastTts"
homepage: "https://vifasttts.hoctuthien.com/"
language: "Python"
languages: ["Python"]
languagePcts: [71]
topics: ["non-autoregressive", "onnx", "pytorch", "speech-synthesis", "text-to-speech", "tts", "vietnamese", "desktop", "windows", "android"]
stars: 58
forks: 36
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 7
createdAt: "2026-10-09T06:40:37Z"
lastCommitAt: "2026-10-29T21:23:50Z"
lastReleaseAt: "2026-10-29T21:18:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 45
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/2d5067f0af2dcabe552e90c49860fde737adf8435d7b9a064a83ce856a39e965/dvchd/ViFastTts"
---

# ViFastTts — Text-to-Speech tiếng Việt

## Tải và dùng trên Windows (không cần build)

**Cách nhanh nhất:** tải ZIP → giải nén → chạy `vifasttts-desktop.exe`.

1. Vào [Releases v0.3.3](https://github.com/dvchd/ViFastTts/releases/tag/v0.3.3) và tải
   [`vifasttts-desktop-windows-x64.zip`](https://github.com/dvchd/ViFastTts/releases/download/v0.3.3/vifasttts-desktop-windows-x64.zip)
   (~92 MB).
2. Chuột phải file ZIP → **Extract All** (đừng chạy trực tiếp trong file ZIP).
3. Mở thư mục vừa giải nén → chạy `vifasttts-desktop.exe`.
4. Nếu SmartScreen cảnh báo: **More info → Run anyway** (bản chưa ký số).
5. Gõ tiếng Việt → bấm **Đọc**. Model, vocoder, ONNX Runtime và web đã nằm trong gói.

Không cần Python, Node, GPU, tài khoản HuggingFace hay mạng. Cần Windows 10/11 x64;
nếu máy thiếu DLL hệ thống, cài **VC++ 2015–2022 x64**.

### Chọn file theo nhu cầu

| Nhu cầu | File tải |
|---|---|
| **Windows, dùng ngay** | `vifasttts-desktop-windows-x64.zip` |
| macOS Apple Silicon | `vifasttts-desktop-macos-arm64.zip` |
| Linux x64 | `vifasttts-desktop-linux-x64.tar.gz` |
| Android | `vifasttts-mobile-android.apk` |
| iOS Simulator | `vifasttts-mobile-ios-simulator.zip` |
| Chrome extension…
