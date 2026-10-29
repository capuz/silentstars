---
repo: "stevedat/VieLotus-IM"
name: "VieLotus-IM"
description: "Bộ gõ tiếng Việt Native cho macOS thuần Swift & Rust (InputMethodKit). Không gạch chân CJK, bảo toàn 100% Undo Cmd+Z, Zero-Logging."
readmeQualityOk: true
url: "https://github.com/stevedat/VieLotus-IM"
homepage: "https://stevedat.github.io/VieLotus-IM/"
language: "Swift"
languages: ["Swift", "C++"]
languagePcts: [45, 25]
topics: ["apple-silicon", "input-method", "inputmethodkit", "macos", "rust", "swift", "telex", "vietnamese", "vni"]
stars: 6
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-28T08:20:11Z"
lastCommitAt: "2026-10-29T21:23:46Z"
lastReleaseAt: "2026-10-29T13:06:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 18
maintainers: ["stevedat"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba4f107276fafb5a32a43e87a8ea3e4f234cded8646854b9a85acd448eee7a34/stevedat/VieLotus-IM"
discussionCount: 3
---

# VieLotusIM (Sen Việt)

A lightweight, memory-safe Vietnamese input method anchored in the **Apple ecosystem (macOS, iOS, iPadOS)** as its primary **Pure Swift 6** reference architecture, and compiled natively across **Windows**, **Linux**, and **Android** — operating strictly through official OS input protocols with **zero global keystroke hooks** and **100% offline privacy**.

📄 **[Technical Dossier & Interactive Specimen](https://stevedat.github.io/VieLotus-IM/)** · 📐 **[Architecture & Benchmark Monograph](https://stevedat.github.io/VieLotus-IM/research.html)**

---

## Core Highlights

- **Zero Global Hooks (`0 Accessibility / 0 Full Access / 0 Keyboard Hook`)**: Uses official OS input contracts (`InputMethodKit` on macOS, `UIInputViewController` on iOS/iPadOS, `Win32 TSF` on Windows, `IBus / Fcitx5` on Linux, `InputMethodService` on Android) rather than global event taps. Immune to macOS TCC permission breakage, Linux Wayland isolation issues, and operates 100% offline.
- **Lexical & Context-Aware Bilingual Typing (Telex & VNI)**: Rejects non-existent Vietnamese syllables (`turn` stays `turn`, never `"tủn"`) and mid-word English `-s-t` patterns (`last`, `best`, `cost`),…
