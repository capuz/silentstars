---
repo: "kiyohken2000/5ch-browser-template"
name: "5ch-browser-template"
description: "5ちゃん専用ブラウザ「Ember」"
readmeQualityOk: true
url: "https://github.com/kiyohken2000/5ch-browser-template"
homepage: "https://ember-5ch.pages.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [48]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-06T17:10:36Z"
lastCommitAt: "2026-08-29T10:22:22Z"
lastReleaseAt: "2026-03-23T13:40:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["kiyohken2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/36c25b9139c363809032d2aea8b1a40151ff4cb5e397a4e14765ca4ebd4a7a67/kiyohken2000/5ch-browser-template"
---

# Ember

5ch.io 専用ブラウザ（Tauri + React デスクトップアプリ）。

## ダウンロード

[GitHub Releases](https://github.com/kiyohken2000/5ch-browser-template/releases) から最新版のZIPをダウンロードして展開するだけで使えます。

- **Windows**: `ember-win-x64.zip`
- **macOS**: `ember-mac-arm64.zip`
- **Linux**: AppImage / deb / rpm（x86_64 / AArch64）

公式サイト: https://ember-5ch.pages.dev

## 主な機能

### 閲覧

- 板一覧（カテゴリツリー / 検索フィルタ / Boards・Fav タブ切替）
- 板ボタンバー（お気に入り板をワンクリック、ドラッグ並べ替え）
- スレ一覧（ソート / 検索 / 検索履歴 / NG / 未読管理 / 新着数 / 勢いバー / 経過時間色分け / dat 番号カラム / 新着スレ ★ マーク / カラム表示・順序切替）
- レスビューア（ブロック表示 / アンカーポップアップ / ID 色分け / 被参照表示 / 新着マーカー / 自分のレス強調 / 自分への返信ハイライト / AA レス自動最適化）
- アンカー解析（`>>N` / `>>N-M` 範囲 / `>>N,M` カンマ区切り / ID 連鎖ホバー / ポップアップ内アンカークリックでジャンプ / ID ポップアップに被返信数バッジ）
- OGP カード（本文中リンクをタイトル・画像付きカードで表示、ホバーで説明文全文・リンク先 URL 表示、トグル・既定 OFF）
- X（Twitter）ポストカード（本文中の X リンクを投稿者アイコン・本文・画像付きで表示、動画つきポストはカード内でインライン再生、トグル・既定 OFF、取得不可時は OGP カードにフォールバック）
- レス分類（キーワード単位でレス本文をハイライト / 絞込 / ヒット数表示、ドラッグ移動可能なパネル）
- スレ本文フィルタ（自分のレスのみ抽出 など）
- タブ式スレ閲覧（ドラッグ並べ替え / 右クリックメニュー / レス数バッジ / Ctrl+Shift+T で閉じたタブ復元 / ホイールクリックで閉じる）
- 過去ログ倉庫スレ対応（read.cgi HTML フォールバック / Shift_JIS 自動デコード）
- 「ここまで読んだ」マーカー（区切り線 + 続きへジャンプ）
- 次スレ検索（950 レス超えで同板から類似タイトル新スレを検索）
- 最近開いたスレ / 最近書き込んだスレ / お気に入りスレ…
