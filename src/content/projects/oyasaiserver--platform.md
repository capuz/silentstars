---
repo: "oyasaiserver/platform"
name: "platform"
description: "OyasaiServer monorepo"
readmeQualityOk: true
url: "https://github.com/oyasaiserver/platform"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
stars: 5
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-04-19T16:02:10Z"
lastCommitAt: "2026-09-11T08:15:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 69
maintainers: ["shunueda", "takucan", "marzipan99"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff33eed0d71904f06a26def2a0bdc5c67ee7c136cc4ededd37a46186718d11fb/oyasaiserver/platform"
---

</p>

# OyasaiServer Platform

おやさい鯖の開発を行っているモノレポです。インフラからプラグインまで、幅広く開発しています。

オープンソース・クローズドコントリビューションです。貢献に興味がある方は
Discord[^1]に参加して、サーバーに慣れてきたらぜひ運営チームに声をかけてください。

脆弱性を発見した場合も Discord[^1]でご連絡ください。

## はじめに

> [!IMPORTANT]
>
> Windows
> ユーザーは[WSL](https://learn.microsoft.com/ja-jp/windows/wsl/install)をインストールしてください。全ての作業は
> WSL 内で行います。

開発には Nix を使用しています。Nix の使用を推奨しますが、基礎的なプラグイン開発のみの場合、Nix を使用しない開発も可能です。

## Nix を使用した開発

### Nix

1. [nixos.org](https://nixos.org/download/) から Nix
   をインストールしてください。マルチユーザーを推奨しますが、シングルユーザーでも問題ありません。インストール後にターミナルを再起動してください。

1. いくつかの実験的要素を有効化する必要があります。

   ```
   experimental-features = nix-command flakes
   ```

   この行を、マルチユーザーの場合は `/etc/nix/nix.conf`
   に、シングルユーザーの場合は`~/.config/nix/nix.conf`に追加してください、

1. このレポジトリ内で `nix flake show` と実行してください。エラーが出なければ成功です。

1. `nix develop` と実行してください。これが開発シェル (devshell)、Java など開発に必要なツールが全て入っています。

1. Nix
   を使用してくると、キャッシュが溜まっていきます。定期的に`nix-garbage-collect -d`と実行して、キャッシュをクリアしてください。

### フォーマット

```console
nix fmt
```

フォーマットされていないコードは受け付けられません。

## Nix を使用しない開発

> [!WARNING]
>
> Nix を使用しない開発は**非推奨**です。限定的なプラグイン開発のみ可能です。開発チームは正式にサポートしません。

### Java

[Java (JDK)…
