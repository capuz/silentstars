---
repo: "mute1008/.dotfiles"
name: ".dotfiles"
description: "My personalized *nix environment dotfiles."
readmeQualityOk: true
url: "https://github.com/mute1008/.dotfiles"
language: "Shell"
languages: ["Shell", "Lua", "Nix"]
languagePcts: [44, 29, 25]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2015-12-20T07:39:57Z"
lastCommitAt: "2026-08-09T04:47:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 72
maintainers: ["mute1008"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e45741705af9d2846f4137063974b1cee579d497d1501686e3cec93067fdbb6/mute1008/.dotfiles"
---

# dotfiles

```sh
$ # Nix をインストール (https://nixos.org/download/)
```

```sh
$ # インストール
$ git clone https://github.com/mute1008/.dotfiles ~/.dotfiles
$ make
```

```sh
$ # デフォルトシェルの変更
$ echo "$HOME/.nix-profile/bin/zsh" | sudo tee -a /etc/shells
$ chsh -s "$HOME/.nix-profile/bin/zsh"
```
