---
repo: "msonrm/quubee"
name: "quubee"
description: "QuuBee — PC-98 フリーソフトのブラウザプレイヤー (著作権クリーン: NEC BIOS/MS-DOS 不使用)"
url: "https://github.com/msonrm/quubee"
language: "JavaScript"
languages: ["JavaScript", "C"]
languagePcts: [56, 34]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-01T04:26:07Z"
lastCommitAt: "2026-06-28T02:00:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["msonrm"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ac38d3de40d9cca735ef054ec1e12026f8bd87fd6c5bfc6602c4a90099e7afb/msonrm/quubee"
---

# QuuBee

> 読み「きゅーびー」。PC-98 = **きゅうはち** → **Q + Bee**（蜂 = はち = 八）。コードネーム/略称は **QB**。

**PC-98 のフリーソフト・同人ソフト文化を継承するための、ブラウザで動くプレイヤー。**

NEC の BIOS も MS-DOS も使わない。DOS の振る舞いはブラウザ内で再実装し（HLE-DOS）、BIOS は
実物の動作を模倣する合成実装、画面のフォントはフリーフォント由来の代替ビットマップ、
ハードウェアの再現はオープンソースのエンジン NP2kai（Wasm）が担う。
**つまり、このプレイヤーはフリーなライセンスに基づくものだけで構成されている。**
そこで動くのは、あなたの手元にあるソフト、それだけ。

QuuBee はエミュレータではない。PC-98 文化を継承し、再発見するためのツールである。

→ 思想の全体: [docs/concept.md](docs/concept.md)

## できること

- フリーソフトの書庫（`.lzh` / `.zip`）をドロップ → readme を読みながら `.EXE`/`.COM` を選んで即実行
- 作者の起動 `.bat`（音源ドライバ常駐、errorlevel 分岐入りも）を「起動レシピ」として解釈して自動起動
- 複数書庫の重ね展開（HD インストール風・パッチ当て）、セーブ等の単体ファイル Save / 読み戻し
- FM 音源・BEEP・RS-MIDI、マウス、ゲームパッド
- `.M`（PMD）の FM 音楽をタップして再生（KAJA の PMD ドライバを HLE-DOS で常駐演奏。再起動なしの曲切り替え・一時停止・経過時間）
- readme/テキストビューア（SJIS・NEC 罫線・VZ 流 %X タグリンク対応）、`.MAG` 画像ビューア
- ディスクイメージ（`.d88`/`.fdi`/`.hdm` 等）は**ブートせず**、中の FAT ファイルだけを取り出す

対象は**フロッピーベース・2D・〜1998 年ごろの PC-98 同人/フリーソフト**。

## 意図的にやらないこと

- **市販ソフトの動作は目的ではない。** ディスクイメージからブートする機構を持たないため、
  ブートを前提とする市販ソフトは原理的に動かない
- NEC BIOS / MS-DOS / NEC フォント ROM の同梱・読み込み
- ゲームの同梱・配布（動かすソフトはユーザーが持ち込む）

## しくみ

| 層 | 実装 |
|---|---|
| DOS | 実 DOS 不使用。INT 21h ほかを C 側で HLE 実装（`native/dos_loader.c` /…
