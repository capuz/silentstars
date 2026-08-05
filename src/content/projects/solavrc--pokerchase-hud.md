---
repo: "solavrc/pokerchase-hud"
name: "pokerchase-hud"
description: "An unofficial Chrome extension providing real-time Texas Hold'em statistics and hand history tracking."
readmeQualityOk: true
url: "https://github.com/solavrc/pokerchase-hud"
homepage: "https://chromewebstore.google.com/detail/pokerchase-hud/ffkgffhokobiegbodhhbfannffpgakhi?authuser=0&hl=ja"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 1
openIssues: 4
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2024-04-08T17:36:40Z"
lastCommitAt: "2026-08-05T06:08:04Z"
lastReleaseAt: "2026-06-18T10:26:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 80
maintainers: ["solavrc", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/af87b10b75caf936ff7bad4b60ae510effb3440d6df1da4927a4fd66a00a6db0/solavrc/pokerchase-hud"
---

# PokerChase HUD

PokerChaseの対戦画面に、プレイヤー統計とハンド履歴をリアルタイム表示する非公式Chrome拡張機能です。

## 概要

PokerChase HUDは、ゲーム中に受信したイベントから各プレイヤーの傾向、ポットオッズ、SPRなどを計算し、Unity WebGLの対戦画面上へ重ねて表示します。ハンド履歴の記録、PokerStars形式での出力、ローカルデータのバックアップ、任意のクラウド同期にも対応しています。

## 主な機能

- **リアルタイムHUD**: 17種類のポーカー統計（初期状態では14種類）を表示します。標準のコンパクト表示から詳細グリッドへ展開でき、分母が20以上の統計では値の閾値に応じた色分けを、20未満では低信頼度を示すグレー表示を利用できます。各統計にはツールチップも表示されます。
- **プレイヤータイプ判定**: 対戦相手を統計に基づいて🦈 TAG、💣 LAG、🪨 ニット、🐟 フィッシュ、🐳 ホエールに分類します。
- **プレイヤー別の詳細表示**: ポジション別統計と、最近のハンドをHUDから確認できます。直近ハンドは表示件数を10・25・50・100件から選べ、「参加のみ」（既定ON）でブラインドを取られただけのハンドを隠せます（どちらの選択も端末ごとに保存されます）。そのプレイヤーが実際に配られたハンドだけを、ホールカード（ランクのみ表示・スートは4色で判別、正確な表記はマウスオーバー。自分のハンドはショーダウンに関わらず常に表示、相手はショーダウンで公開されたもの）・プリフロップのライン（`OR2.2`=2.2BBへオープンレイズ、`3B9`=9BBへ3bet、`CC2.2`/`3CC9`=オープン/3betへのコールドコールのように、一般的なHUDの短縮表記でBB単位の額つき）・ボード・フロップ以降のアクション（ベット／レイズはポットに対する比率つき。`XC/B33` のように表示し、実額はマウスオーバーで確認できます）・BB単位の損益とあわせて一覧します。
- **ゲーム開始前の自分の統計**: プレイヤー情報が保存済みなら、最初のハンドが配られる前から自分の通算統計を表示します。
- **離席プレイヤーの表示保持**: バストなどで席を離れたプレイヤーの統計を席が交代するまで薄く表示し、セッション終了後も統計や直近ハンドを振り返れます。
- **リアルタイム計算**: 全プレイヤーのポットオッズとSPR、自分のハンド改善確率をアクションごとに更新します。
- **ハンド履歴**: PokerStars形式のハンドログをリアルタイムに表示・出力します。表示位置や大きさも調整できます。
- **フィルター**:…
