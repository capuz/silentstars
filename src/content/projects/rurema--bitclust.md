---
repo: "rurema/bitclust"
name: "bitclust"
description: "System behind Japanese Ruby reference manual"
readmeQualityOk: true
url: "https://github.com/rurema/bitclust"
homepage: "https://github.com/rurema/doctree/wiki"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [90]
topics: ["ruby"]
stars: 38
forks: 37
openIssues: 4
closedIssues: 57
watchers: 13
contributors: 39
recentReleases: 0
createdAt: "2013-06-02T01:28:45Z"
lastCommitAt: "2026-07-15T05:52:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 66
maintainers: ["znz", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ed94f2388d5d01b5badd90d8a07754d9002e92a7d8a4d2008cbc700da7c8f11/rurema/bitclust"
---

# BitClust

BitClust は Ruby リファレンスマニュアル(通称「るりま」)のドキュメント処理
フレームワークです。ドキュメントソース([rurema/doctree](https://github.com/rurema/doctree))を
パースしてデータベース化し、HTML(静的サイト・HTTP サーバ)、CHM、EPUB などに
変換します。生成されたマニュアルは https://docs.ruby-lang.org/ja/ で公開されています。

## ドキュメント

- [doc/usage.md](https://github.com/rurema/bitclust/blob/HEAD/doc/usage.md) — インストール方法と各サブコマンドの使い方
- [doctree の docs/](https://github.com/rurema/doctree/tree/master/docs) — るりまプロジェクト全体の文書
  (ドキュメントの書き方・ビルド方法・チュートリアルなど)

## 開発を始める

```console
$ git clone https://github.com/rurema/bitclust.git
$ cd bitclust
$ bundle install
```

### テスト

```console
$ bundle exec rake test        # 全テスト(デフォルトタスク)
$ ruby test/test_rdcompiler.rb # 単一のテストファイル
```

### 型定義

RBS 型定義が `sig/` にあります。

```console
$ bundle exec rake sig     # 型定義の再生成
$ bundle exec steep check  # 型検査
```

### doctree と組み合わせて動作確認する

ドキュメント本体のビルドは doctree 側の Rake タスクから行います。
doctree の `Gemfile` は環境変数 `BITCLUST_PATH` でローカルの bitclust を
参照できるので、手元の変更を反映したマニュアルを生成して確認できます。

```console
$ git clone https://github.com/rurema/doctree.git
$ cd doctree
$ bundle install                     # ../bitclust があればそれを使う
$ bundle exec rake generate:3.4      # データベース生成
$ bundle exec rake statichtml:3.4…
