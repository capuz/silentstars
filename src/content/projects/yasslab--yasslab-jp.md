---
repo: "yasslab/yasslab.jp"
name: "yasslab.jp"
description: "💎 RailsチュートリアルやRailsガイドを企画・運営・開発しているチームのWebサイトです。"
url: "https://github.com/yasslab/yasslab.jp"
homepage: "https://yasslab.jp/ja"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [79]
topics: ["ruby", "jekyll", "company", "website", "remote-work", "yasslab", "heroku"]
stars: 8
forks: 1
openIssues: 2
closedIssues: 75
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2014-07-27T22:48:01Z"
lastCommitAt: "2026-06-26T06:47:11Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 77
maintainers: ["yasulab", "dependabot[bot]", "rakuda-san-desu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/22324433/278d6e25-6609-4fca-8af3-97417b47d9e3"
fundingLinks: ["GITHUB:https://github.com/yasslab"]
---

# Website for YassLab Inc.

This repository includes source code to build [YassLab](https://yasslab.jp/)'s website.

YassLab Inc.   
Having a Good Life with OpenSource ;)     
https://yasslab.jp/

## お知らせ記事の追加

お知らせ記事の追加には **環境構築は不要** です。GitHub アカウントがあれば追記できます :blush:

~~多分これが一番簡単だと思います...!!~~   
:new: **自動化されました!!** :wrench::robot::dash::sparkles:

<details><summary>お知らせ記事を手動で追加する方法</summary>

1. ブラウザ上で [_data/news.yml](https://github.com/yasslab/yasslab.jp/blob/main/_data/news.yml) を開く
2. 画面右にある ✎ アイコン (Fork this project and edit this file) をクリックする
3. お知らせ情報を追記する
   - `title:` リンク先の記事のタイトル
   - `date:` リンク先の記事の公開日
   - `url:` リンク先の記事のURL
4. 修正内容にタイトルと説明文を付け、Propose file change をクリックする
5. 修正内容を確認し、問題なければ Create pull request をクリックする

以上で完了です。追記されたお知らせは他のメンバーによって再確認され、問題なければ提案された内容が反映されます。もし問題があっても他のメンバーが気付いて修正することもできるので、まずはお気軽に提案してみてください ;)

</details>

## 開発手順
ローカル環境で開発・デザインをするときは [Jekyll](https://jekyllrb.com) が必要です。   
準備ができたら次の手順でセットアップし、ローカルサーバーを立ち上げてください。

1. `$ bundle install`
    - (初回のみ) gem ライブラリのインストール
2. `$ bundle exec jekyll server`
    - ローカルサーバーの立ち上げ
    - 立ち上がったらブラウザから `localhost:4000` にアクセス

成功すれば [yasslab.jp](https://yasslab.jp/) と同じ画面が表示されます。…
