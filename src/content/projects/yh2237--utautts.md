---
repo: "yh2237/UtauTTS"
name: "UtauTTS"
description: "UTAUボイスバンクの原音接続に、学習ベースのイントネーション調整を加えた日本語TTS"
readmeQualityOk: true
url: "https://github.com/yh2237/UtauTTS"
language: "Go"
languages: ["Go"]
languagePcts: [57]
topics: ["utau", "tts"]
stars: 40
forks: 2
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-05-24T19:18:52Z"
lastCommitAt: "2026-09-12T08:03:57Z"
lastReleaseAt: "2026-08-22T05:32:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 38
maintainers: ["yh2237"]
openGraphImageUrl: "https://opengraph.githubassets.com/85f1c9aa083aa841d4ac89fe47fcbe2b1b1e8222a4c228ed73318bea1babc5d1/yh2237/UtauTTS"
---

# UtauTTS

UTAUボイスバンクの原音接続に学習ベースのイントネーション調整を加えた日本語TTS

> ボイスバンクを使う前に、各音源の利用規約を確認してください。UtauTTSと作者は、ボイスバンクの利用で生じた問題について責任を負いません。

## インストール

[GitHub Releases](https://github.com/yh2237/UtauTTS/releases)から環境と用途に合うZIPをダウンロードします。

| パッケージ | 用途 |
| --- | --- |
| `UtauTTS-win-x64.zip` | Windows x64向けGUIとCLI |
| `UtauTTS-linux-x64.zip` | Linux x64向けGUIとCLI |
| `UtauTTS-mac-arm64.zip` | Apple Silicon Mac向けGUIとCLI |
| `UtauTTS-Server-win-x64.zip` | Windows x64向けHTTP Server |
| `UtauTTS-Server-linux-x64.zip` | Linux x64向けHTTP Server |
| `UtauTTS-Server-mac-arm64.zip` | Apple Silicon Mac向けHTTP Server |

Windows版はZIPを展開して`utautts.exe`を実行します。

Linux版はQt 6.5以降、Qt Quick、Qt Multimedia、日本語フォントが必要です。ZIPを展開し実行権限を付けて起動します。

```bash
chmod +x utautts tools/* runtime/utautts-openjtalk-features runtime/utautts-worldline-bridge
./utautts
```

macOS版はApple Silicon（arm64）向けです。署名・公証を行っていないため、初回起動時の隔離属性解除が必要になる場合があります。手順は[インストール](https://github.com/yh2237/UtauTTS/blob/HEAD/docs/installation.md)を確認してください。

詳しくは[インストール](https://github.com/yh2237/UtauTTS/blob/HEAD/docs/installation.md)にあります。

GUI版には「足立レイ…
