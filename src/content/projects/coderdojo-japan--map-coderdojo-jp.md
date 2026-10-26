---
repo: "coderdojo-japan/map.coderdojo.jp"
name: "map.coderdojo.jp"
description: "🗾 地図から探す CoderDojo『DojoMap』 - A map for visitors to find out a CoderDojo nearby."
readmeQualityOk: true
url: "https://github.com/coderdojo-japan/map.coderdojo.jp"
homepage: "https://map.coderdojo.jp"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [85]
topics: ["coderdojo", "geolocation", "map", "openstreetmap", "openstreetmap-data", "ruby"]
stars: 9
forks: 3
openIssues: 5
closedIssues: 1
watchers: 8
contributors: 7
recentReleases: 0
createdAt: "2022-11-28T23:36:47Z"
lastCommitAt: "2026-10-26T21:00:22Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 83
undervaluedScore: 63
maintainers: ["yasulab"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/571809176/19753ba1-31ec-43c4-aa0a-9865254ec774"
fundingLinks: ["GITHUB:https://github.com/coderdojo-japan"]
---

# :japan: DojoMap - 地図で CoderDojo を探す

CoderDojo の地図『**[DojoMap](https://map.coderdojo.jp/)**』で、
最寄りの CoderDojo を探してみよう！ :mag: :dash: 
https://map.coderdojo.jp/

## :beginner: DojoMap の使い方

1. **:japan: [coderdojo.jp](https://coderdojo.jp/#dojos) の「地図情報から探す」をクリック**

2. **:world_map: 地図情報が表示されたら気になる CoderDojo マーカーをクリック**

3. **:yin_yang: CoderDojo の連絡先情報などが表示されるので、そこから詳細へ GO!**

スライド: [2022年度 CoderDojo Japan 活動報告 - SpeakerDeck](https://speakerdeck.com/coderdojojapan/coderdojo-japan-in-2022)<br>
解説動画: [2022年度 CoderDojo Japan 活動報告 - YouTube](https://youtu.be/m1eoqFy0BW8?t=2575)

## :gem: DojoMap のセットアップ方法（開発者向け）

1. ローカル環境で Ruby が実行できることを確認する
   ```
   $ ruby --version
   ```   

1. 利用する Ruby ライブラリをインストールする
   ```
   $ bundle install
   ```

1. [Clubs API](https://clubs-api.raspberrypi.org/) から Dojo 情報一覧を取得する（[`dojos_earth.json`](https://github.com/coderdojo-japan/map.coderdojo.jp/blob/main/_data/dojos_earth.json)が更新されます）
   ```
   $ bundle exec rake get_data_from_earth
   ```

1. [CoderDojo Japan](https://coderdojo.jp/dojos.json) から Dojo 情報一覧を取得する（[`dojos_japan.json`](https://github.com/coderdojo-japan/map.coderdojo.jp/blob/main/_data/dojos_japan.json)が更新されます）
   ```
   $ bundle…
