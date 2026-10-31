---
repo: "Funput/Funput"
name: "Funput"
description: "Vietnamese input method for macOS, Windows & Linux. Keyboard for iOS & Android. • Bộ gõ tiếng Việt đa nền tảng cho macOS, Windows & Linux. Bàn phím tiếng Việt cho iOS & Android."
readmeQualityOk: true
url: "https://github.com/Funput/Funput"
homepage: "https://funput.app"
language: "Kotlin"
languages: ["Kotlin", "Rust", "Swift"]
languagePcts: [33, 30, 29]
topics: ["ime", "input-method", "linux", "macos", "open-source", "rust", "rust-lang", "telex", "typing", "vietnamese"]
stars: 52
forks: 4
openIssues: 17
closedIssues: 117
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-06-14T08:02:03Z"
lastCommitAt: "2026-10-31T02:00:36Z"
lastReleaseAt: "2026-06-29T20:08:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 38
maintainers: ["pcodedynamics", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1269022599/59a0bbe6-46a2-414f-9c6a-ac2404842678"
fundingLinks: ["GITHUB:https://github.com/Funput"]
discussionCount: 5
---

<img
    src="assets/horizontal-lockup/gradient.png"
    width="520"
    alt="Funput"
  >

---

  Hỗ trợ Telex và VNI trên iOS, Android, macOS, Windows và Linux, mang lại trải nghiệm gõ tiếng Việt quen thuộc và nhất quán trên mọi thiết bị.

## Bắt đầu

## Cài đặt theo nền tảng

**Windows:** cài Funput miễn phí từ [Microsoft Store](https://apps.microsoft.com/store/detail/9NR3WL5PD4ZS) và nhận cập nhật qua Store. [Bản `.exe` portable](https://github.com/Funput/Funput/releases/latest) vẫn có trên GitHub. Xem [hướng dẫn Windows](https://docs.funput.app/docs/install/windows/) để chọn cách cài phù hợp.

## Giao diện

## Kiến trúc

Năm nền tảng dùng chung lõi Rust. Mỗi shell giao tiếp với core qua bridge phù hợp:
[`funput-ffi`](https://github.com/Funput/Funput/blob/HEAD/crates/funput-ffi) (C ABI) cho iOS, macOS và Linux;
[`funput-jni`](https://github.com/Funput/Funput/blob/HEAD/crates/funput-jni) cho Android; link trực tiếp
[`funput-engine`](https://github.com/Funput/Funput/blob/HEAD/crates/funput-engine) cho Windows.

    <img
      src="assets/design/architecture.png"
      width="960"
      alt="Kiến trúc Funput: iOS, macOS, Linux qua funput-ffi; Android qua funput-jni; Windows link…
