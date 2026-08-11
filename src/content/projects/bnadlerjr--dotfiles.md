---
repo: "bnadlerjr/dotfiles"
name: "dotfiles"
description: "Various dotfiles"
readmeQualityOk: true
url: "https://github.com/bnadlerjr/dotfiles"
language: "HTML"
languages: ["HTML", "Vim Script"]
languagePcts: [38, 24]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2009-09-06T02:04:51Z"
lastCommitAt: "2026-08-11T04:46:13Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 74
maintainers: ["bnadlerjr"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f1307ee283af9f5fc3bcb4005121a4a2e96d41946ea5c79bbb4d8939bac3e95/bnadlerjr/dotfiles"
---

# Bob's Dotfiles
Dotfile setup based on Advanced Commandline screencast from PeepCode.

## Install
1. Clone to ~/dotfiles
2. Create symlinks to dotfiles by running `update_symlinks`
3. Install CtrlP C Matcher extension:

```bash
cd ~/.vim/bundle/ctrlp-cmatcher
./install.sh
```

4. Install LanguageClient-neovim

```bash
cd ~/.vim/bundle/LanguageClient-neovim
./install.sh
```

5. Install Elixir Language Server

```bash
$ mkdir -p ~/dev/elixir && cd ~/dev/elixir
$ git clone git@github.com:elixir-lsp/elixir-ls.git
$ cd elixir-ls && mkdir rel

# checkout the latest release
$ git checkout tags/v0.4.0

$ mix deps.get && mix compile

$ mix elixir_ls.release -o rel
```

6. Update Thesaurus for vim-lexical
```bash
./update_lexical.sh
```

## License
(The MIT License)

Copyright (c) 2009-2026 Bob Nadler, Jr.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to…
