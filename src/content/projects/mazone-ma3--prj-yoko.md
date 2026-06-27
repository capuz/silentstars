---
repo: "mazone-ma3/PRJ_YOKO"
name: "PRJ_YOKO"
description: "横スクロールシューティング(Side-scrolling shooting game) test MSX1 X68000 FM TOWNS V9968(MSX2++) MSX2 Direct2D(Windows)  Pyxel etc."
url: "https://github.com/mazone-ma3/PRJ_YOKO"
homepage: "https://mazone-ma3.github.io/github.io/py/yokosht_plus.html"
language: "C"
languages: ["C"]
languagePcts: [58]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-04T18:34:48Z"
lastCommitAt: "2026-06-27T00:35:31Z"
lastReleaseAt: "2026-05-26T16:16:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 57
maintainers: ["mazone-ma3"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c3fb08455c480dc15e4f8a8f56877cc5470462acaed2a1006cc04369ad5d2c8/mazone-ma3/PRJ_YOKO"
---

This software includes code generated with the assistance of [Gemini & Grok], an AI developed by [Google & xAI].

PyxelでGrokに作成させた横スクロールシューティングをレトロパソコン及び各言語に移植しようとする実験。実機での動作は未保証です。

キーボード操作の場合 X68K/TOWNS/Windows ZショットXボム MSX1/V9968/MSX2 XショットCボム

MSX1 z88dkで作成。→部分アセンブラ化しました。(2026/5/5)

X68K_MPY　Pyxel版を整数化してmicroPythonにテスト移植。(MPUノーウェイト推奨)。放棄。

X68K クラス化をやめて、elf2x68kへ移植。

TOWNS FM TOWNS-gccクロスコンパイル開発環境+DJGPP12.2.0への移植。横長画面にしてるため、実機で液晶だと縞が出ます。CRTの場合は不明です。

PYXEL 逆にグラフィックを寄せた物。

V9968 (MSX2++)X68K版のz88dk(2025/1/26以前の版)縮小移植。改造OpenMSX用。

BMP 旧版の画像データファイル

MSX2 MSX1版の移植。

MSX2ROM MSX2版をROM化。

Direct2D Windows(x64)版。VS2022→2026で作成。(XInputのみ対応) F11でフルスクリーン F12でFPS表示 Bボタン/Xキー開始でライフ付きモード

raylib gcc(MINGW)+raylibによるWindows(x64)版およびEmscriptenによるWeb版。F11でフルスクリーン。

raylibcs VC#+raylib-csによるWindows(x64)版。gcc版の移植。(要.NET SDK 10 & raylib.dll) 

raylibpy Pyxel版をraylib-python-cffiに移植。

raylibgo gcc版をGo+raylib-goに移植。

raylibrust raylib-rsへの移植/環境変数INCLUDEにVS2026のINCLUDEパスを追加してください。

raylibphp php-raylib(composerで入れてください)への移植/exe化の予定なし

JavaScript 試作

各.png/.mp3/.wavが無い物は他フォルダからコピーしてください。

↓Pyxel版を実行

https://mazone-ma3.github.io/github.io/py/yokosht_plus.html

↓WebMSXでMSX1版を実行…
