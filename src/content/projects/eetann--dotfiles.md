---
repo: "eetann/dotfiles"
name: "dotfiles"
description: "This is a repository for my dotfiles"
readmeQualityOk: true
url: "https://github.com/eetann/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [50, 22]
stars: 12
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2019-03-06T05:12:05Z"
lastCommitAt: "2026-09-18T08:27:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 71
maintainers: ["eetann"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee4d326c4f25bebc650618c15c078ede2ec3f49b723f0009feb9af6d604c7431/eetann/dotfiles"
---

# dotfiles  
dotfilesのレポジトリです。
WSL2のUbuntuメインだったけどMacに移行中

**TODO: このREADMEをもう少しシェルスクリプトに移す**

##
```
sh <(curl --proto '=https' --tlsv1.2 -L https://nixos.org/nix/install)
```

# Windows
[アプリ インストーラー - Microsoft Apps](https://apps.microsoft.com/detail/9nblggh4nns1?rtc=1&hl=ja-jp&gl=JP)

## WSL上でWezTerm/tmuxの特定のAltキーショートカットだけ効かない

一部のAltキー（例: `Alt+z`）だけ反応せず、他のAltキー（`Alt+n`等）は動く場合、
GPUベンダー製ソフトのグローバルオーバーレイホットキーに奪われている可能性が高い。

- **AMD Software: Adrenalin Edition**: デフォルトで`Alt+Z`がオーバーレイ起動キー
- **NVIDIA App / GeForce Experience**: 同じくデフォルトで`Alt+Z`がオーバーレイ起動キー

いずれもアプリの設定画面からホットキーを変更 or 無効化すれば直る。

### 切り分け方法

1. tmuxまで届いているか: 該当キーを一時的に`display-message`に差し替えて確認
   ```
   bind-key -n M-z display-message "reached tmux"
   ```
2. WezTermまで届いているか: `wezterm.lua`のキーバインドに`wezterm.log_info(...)`を仕込み、
   Debug Overlay（`Ctrl+Shift+L`）でログが出るか確認
3. どちらにも届いていなければWindows側の常駐アプリ（GPUベンダー製ソフト、Discord、
   ゲーミングデバイスソフト、PowerToys等）のグローバルホットキーを疑う

# Installation
## Font
1. download font
    + [白源](https://github.com/yuru7/HackGen/releases) or 
    + [Cica](https://github.com/miiton/Cica/releases)
    + [PlemolJP Console NF](https://github.com/yuru7/PlemolJP/releases)
2. Install to OS
3. Set to terminal

#…
