---
repo: "boykush/dotfiles"
name: "dotfiles"
description: "これで引越しも楽チン"
readmeQualityOk: true
url: "https://github.com/boykush/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-07-27T16:39:47Z"
lastCommitAt: "2026-08-01T06:12:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 77
maintainers: ["boykush", "boykush-renovate-app[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/111abab0f3de25ffe3b4f9386803da35581a39f7f018a681dfb1b3bdbe93f50d/boykush/dotfiles"
---

# dotfiles

miseを中心とした開発環境の設定ファイル群です。

## セットアップ

新環境に mise を事前インストールする必要はない。リポジトリ同梱の `bin/mise`（`mise generate bootstrap` の出力＝自己インストールラッパー）が mise 本体を取得して実行する。

### 1. リポジトリ取得

```bash
git clone git@github.com:boykush/dotfiles.git ~/dotfiles
cd ~/dotfiles
```

### 2. マシンのセットアップ（GUI アプリ・フォント + CLI ツール + dotfiles を一括）

```bash
./bin/mise bootstrap
```

`mise bootstrap` は現行 config に対して宣言的なセットアップを順に流す1コマンドで、この repo では **`[bootstrap.packages]` の GUI アプリ・フォント（brew-cask。アプリは `/Applications`、フォントは `~/Library/Fonts`）**・**`[bootstrap.repos]` の dotfiles リポジトリ自身（`~/dotfiles` を `main` に追従）**・**`[tools]` の CLI ツール**・**`[dotfiles]` のシンボリックリンク／ファイル内ブロック編集**を一括適用する（他の `[bootstrap.*]` は未定義なので no-op）。宣言的ステップは収束するため再実行は安全で、状況は `./bin/mise bootstrap status` で確認できる。

- `bin/mise` は初回に mise 本体を `~/.cache/mise` へ取得してから実行する（mise 未導入でも動く）。リポジトリ内で実行するため `mise/config.toml` がローカル config として読まれる。埋込版は renovate が `min_version` と lockstep で追従するため floor を下回らない（任意で最新化するなら `./bin/mise self-update`）。
- 適用される dotfiles は `~/.zshrc` や `~/.config/*` など。mise 設定自身の `~/.config/mise` -> `~/dotfiles/mise` もここで張る。以降は新しい対話シェルで `.zshrc` の activate（`~/dotfiles/bin/mise` を絶対パス参照）が mise とツール群を使えるようにする。シェル初期化を経ないスクリプト等からは…
