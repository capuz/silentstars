---
repo: "Peter-Chou/petmacs"
name: "petmacs"
description: ":sunny: Vim in Emacs :sunny: My Personal Emacs Configuration"
readmeQualityOk: true
url: "https://github.com/Peter-Chou/petmacs"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
topics: ["emacs", "vim", "configuration", "emacs-configuration"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2019-02-10T10:37:47Z"
lastCommitAt: "2026-09-19T08:14:52Z"
lastReleaseAt: "2025-10-11T15:30:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 82
maintainers: ["Peter-Chou"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdea780e428b48f705695750451fd58f37e55da252046a489110d28e2646e309/Peter-Chou/petmacs"
---

# Petmacs

before you use Petmacs, make sure your emacs version >= 29.1 and tree-sitter is enabled.

---

## 1. Prerequisites

### 1.1 Fonts

- [JetBrains Mono NL](https://www.jetbrains.com/lp/mono) for default

- [Maple Mono SC NF](https://gitee.com/subframe7536/Maple/releases) for Chinese

- [Symbola](https://www.wfonts.com/font/symbola) for unicode

- [Nerd Icons](https://github.com/rainstormstudio/nerd-icons.el/blob/main/fonts/NFM.ttf) for icons

if you want use nerd icons in terminal, make sure [nerd fonts](https://github.com/ryanoasis/nerd-fonts) is used in your terminal.

### 1.2 ripgrep

install [ripgrep](https://github.com/BurntSushi/ripgrep) and put it into your `PATH`

### 1.3 fd

install [fd](https://github.com/sharkdp/fd) and put it into your `PATH`

### 1.4 nodejs

put [nodejs](https://nodejs.org) binaries into your `PATH`

### 1.5 rime

install [rime](https://github.com/rime/librime)

``` bash
sudo apt-get install librime-dev fcitx-rime # use terra-pinyin for chinese input
```

### 1.6 snap (ubuntu)

``` bash
sudo apt-get update
sudo apt-get install snapd
```

add `/snap/bin` to `PATH`

### 1.7 sqlite3 (ubuntu)

``` bash
# for magit
sudo apt-get install…
