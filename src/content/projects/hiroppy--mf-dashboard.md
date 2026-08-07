---
repo: "hiroppy/mf-dashboard"
name: "mf-dashboard"
description: "マネーフォワードMeを自動化、保有資産の可視化を行います"
readmeQualityOk: true
url: "https://github.com/hiroppy/mf-dashboard"
homepage: "https://mf-dashboard-demo.vercel.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 357
forks: 41
openIssues: 3
closedIssues: 4
watchers: 0
contributors: 7
recentReleases: 4
createdAt: "2026-02-02T11:34:14Z"
lastCommitAt: "2026-08-07T05:16:31Z"
lastReleaseAt: "2026-08-04T13:42:52Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 29
maintainers: ["renovate[bot]", "hiroppy", "atsushikaneko"]
openGraphImageUrl: "https://opengraph.githubassets.com/13f5ea095b47aa9e82a5330a8687daba8f2eb7a3edc7593195d817874f506845/hiroppy/mf-dashboard"
---

<h1>MoneyForward Me Dashboard</h1>
  <p>Money Forward MEのデータ取得・更新・可視化を自動化するダッシュボード</p>
</div>

Money Forward MEの家計・資産・投資データを定期的に取得し、Webダッシュボードで確認できる。更新結果の通知、取引カテゴリの自動決定、AIアシスタントからのデータ照会にも対応する。

[デモを見る](https://mf-dashboard-demo.vercel.app/) · [本番環境をセットアップする](https://github.com/hiroppy/mf-dashboard/blob/HEAD/docs/setup.md)

## 主な機能

### 金融機関の情報を自動更新

crawlerコンテナ内のsupercronicが、登録金融機関の「一括更新」を定期的に実行して完了を監視する。既定の実行時刻は毎日6:30と15:30。

### 更新結果をSlackやDiscordへ通知

通知先を設定すると、更新結果や前日との差分をSlackまたはDiscordへ投稿できる。

### 家計・資産情報を可視化

予算機能を除くダッシュボードの表示を、[公開デモ](https://mf-dashboard-demo.vercel.app/)で確認できる。

| 月次画面                                                                     | ダッシュボード                                                                             |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <img src="./.github/assets/demo-month.png" alt="月次収支画面" width="600" /> | <img src="./.github/assets/demo-dashboard.png" alt="資産ダッシュボード画面" width="600" /> |

### スクレイピング処理をフックで拡張

スクレイピング中に独自のスクリプトを実行できる。MoneyForward Meでなにか処理を挟み込みたいときに利用する。

### 未分類取引のカテゴリを自動決定…
