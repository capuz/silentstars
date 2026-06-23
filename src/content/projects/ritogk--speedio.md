---
repo: "ritogk/speedio"
name: "speedio"
description: "オープンデータからイニシャルDっぽい峠道を抽出するスクリプト"
url: "https://github.com/ritogk/speedio"
homepage: "https://zenn.dev/homing/articles/a1f4c292a469b8"
language: "HTML"
languages: ["HTML", "Python", "TypeScript"]
languagePcts: [29, 29, 21]
topics: ["osm", "pytyhon"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-06-30T06:25:22Z"
lastCommitAt: "2026-06-23T23:18:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 73
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/929dbaa7fdc1a0379568eec6d153f4d1a56f340eb1336bc95c611b0a4d39cabf/ritogk/speedio"
---

# speedio

峠道を抽出するスクリプト

## 抽出したワインディング

![image](https://github.com/user-attachments/assets/8798ffff-2cfc-4f02-8c32-f0050b1f1b5d)
![image](https://github.com/user-attachments/assets/3ba63bd5-7745-4d5a-a40f-edf74b11e8a8)

## directory

```
pipeline/   # 峠抽出パイプライン (run.py, analyzer, centerline, postprocess)
product/    # Webアプリ (app, lp)
infra/      # CDK (S3 + CloudFront)
data/       # 生成データ置き場 (gitignore)
tools/      # viewer(開発用ビュワー), rcc(道幅目視チェック), video_work
```

## app setup

```
cd pipeline
cp .base.env .env
conda env create -f environment.yml
```

## conda run

```
conda activate touge-searcher
```

## data setup

```
# 1. 基盤地図情報DLページから全国のdem10DL(gml)をDLする。
# 2. gmlはjpd2000とjpd2011が混じってる状態なのでスクリプトで仕分ける
```

grep -rl '<gml:Envelope srsName="fguuid:jgd2011.bl">' . | xargs -I {} mv {} ./jgd2011
grep -rl '<gml:Envelope srsName="fguuid:jgd2000.bl">' . | xargs -I {} mv {} ./jgd2000

```
# 3. 株式会社エコリスのソフトで全国のtifに変換する。
# 4. tifをepsg:4326に変換
```

python3 convert_tif_epsg_4326.py

```
# 5. tifをマージ
```

python3 merge_tif.py

```
# 6. elevation.tifにリネームして data/ におく
```

## run
```
cd pipeline
python3 run.py
```

## conda env update

```
conda env export -n touge-searcher >…
