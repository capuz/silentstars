---
repo: "BoatraceCSV/boatracecsv.github.io"
name: "boatracecsv.github.io"
description: "Boatrace data"
readmeQualityOk: true
url: "https://github.com/BoatraceCSV/boatracecsv.github.io"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [50, 48]
topics: ["boatrace", "dataset"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-19T04:58:57Z"
lastCommitAt: "2026-11-09T03:30:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 62
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f0355fdf960d16d0d86ed88580ab92ce4bc114fa55b1b15b5c607fc05b97af68/BoatraceCSV/boatracecsv.github.io"
---

# Boatrace Data Automation

ボートレースのデータは、独自フォーマットで分散しており、収集と整形に時間がかかります。
そこで、機械学習で利用しやすいように1レース1行のCSVファイルを作成しました。
HTTPS でダウンロードできるため、Agent からのアクセスにも利用しやすくなっています。
更新は1日1回(リアルタイム系は5分毎)です。
最新の情報が必要な場合、[Boatrace OpenAPI](https://github.com/BoatraceOpenAPI) などの別のソースをご利用ください。

## データダウンロード

すべて `https://boatracecsv.github.io/` をルートに、以下のパスでダウンロードできます。

- `data/programs/title/YYYY/MM/DD.csv` — per-race レース名
- `data/programs/race_cards/YYYY/MM/DD.csv` — 出走表詳細
- `data/programs/recent_national/YYYY/MM/DD.csv` — 全国近況5節
- `data/programs/recent_local/YYYY/MM/DD.csv` — 当地近況5節
- `data/programs/motor_stats/YYYY/MM/DD.csv` — モーター期成績
- `data/previews/{tkz,stt,sui,original_exhibition}/YYYY/MM/DD.csv` — 直前情報
- `data/results/realtime/YYYY/MM/DD.csv` — 締切後5〜30分の準リアルタイム結果
- `data/results/payouts/YYYY/MM/DD.csv` — 締切後5〜30分の払戻金
- `data/estimate/index/YYYY/MM/DD.csv` — 強さポイント(5要素偏差値+寄与+合計)

すべて `レースコード`(12桁、`YYYYMMDDjjrr`)を共通キーとして JOIN できます。

## ドキュメント

詳細なドキュメントは [`docs/`](https://github.com/BoatraceCSV/boatracecsv.github.io/blob/HEAD/docs/README.md) を参照してください。

- [データ仕様](https://github.com/BoatraceCSV/boatracecsv.github.io/blob/HEAD/docs/data/README.md) — 各 CSV のスキーマ・カラム定義・関係性図
-…
