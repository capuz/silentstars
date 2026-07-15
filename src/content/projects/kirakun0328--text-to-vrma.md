---
repo: "Kirakun0328/text-to-vrma"
name: "text-to-vrma"
description: "Text-To-VRMA — VRM特化型Text-To-Motionツール"
readmeQualityOk: true
url: "https://github.com/Kirakun0328/text-to-vrma"
homepage: "https://x.com/Kiratchi0328"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
topics: ["openai", "text-to-motion", "threejs", "vrm", "vrma", "vtuber"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-14T17:31:23Z"
lastCommitAt: "2026-07-15T05:52:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["Kirakun0328"]
openGraphImageUrl: "https://opengraph.githubassets.com/98e59a98c98ba67ea01c64ede9b1e4b75a26dceacbf1f0a228b01a4fbafeef46/Kirakun0328/text-to-vrma"
---

# Text-To-VRMA — VRM特化型Text-To-Motionツール

テキストを入力すると、OpenAI API がキーフレームを設計し、
**VRMA (VRM Animation / `.vrma`)** ファイルをブラウザ内で生成して、
その場で VRM キャラクターを動かす Web アプリです。
生成した `.vrma` はファイルとして保存でき、VRMA 対応アプリでそのまま利用できます。

例:「その場で歩く」「喜んでジャンプする」「手を振る」「悲しそうにうつむく」

モーションと同時に**表情** (笑顔・悲しみ・驚き・まばたき等) も生成されます。
`.vrma` 保存時に「表情を含める / 含めない (ボーンモーションのみ)」を選択できます。

## 必要なもの

- Node.js 20+
- OpenAI API キー ([platform.openai.com](https://platform.openai.com/) で取得)

VRM モデルは [VRoid 公式サンプルモデル (AvatarSample)](https://hub.vroid.com/characters/2843975675147313744/models/5644550979324015604)
の VRM1.0 版・VRM0.0 版を同梱しており、起動時に VRM1.0 版が読み込まれます。
手持ちの `.vrm` への差し替えも可能です。

VRM **0.x / 1.0 の両形式に対応**しています (three-vrm が自動判別し、向きも正規化)。

## セットアップ & 起動

```sh
git clone https://github.com/Kirakun0328/text-to-vrma.git
cd text-to-vrma
npm install
npm run dev
# → http://localhost:5173 をブラウザで開く
```

## 使い方

1. 起動するとサンプルモデル (AvatarSample VRM1.0版) が読み込まれます。
   「VRMファイルを開く」または 3D ビューへのドラッグ&ドロップで手持ちの VRM に差し替え可能
2. OpenAI API キーを入力し、モデル (gpt-5.6 系) を選択
   - キーはブラウザの localStorage にのみ保存され、OpenAI 以外には送信されません
3. テキストを入力して「▶ モーション生成 & 再生」 (Ctrl+Enter でも可)
   - 「🔍 自己修正」ON (デフォルト) では生成後にもう1パス、可動域・軌道・緩急の
     セルフレビューを行い品質を上げます…
