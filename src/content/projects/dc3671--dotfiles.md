---
repo: "dc3671/dotfiles"
name: "dotfiles"
description: "dotfiles for frontend-developer and python-user, including:  vim(support vue files and python pylint), tmux, zsh(with oh-my-zsh)"
readmeQualityOk: true
url: "https://github.com/dc3671/dotfiles"
language: "Lua"
languages: ["Lua", "Shell", "Vim Script"]
languagePcts: [32, 27, 25]
topics: ["ycm", "vim", "zsh", "dotfiles", "tmux", "frontend-developer", "vue", "config"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2016-04-15T05:11:35Z"
lastCommitAt: "2026-07-08T05:41:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 70
undervaluedScore: 41
maintainers: ["dc3671"]
openGraphImageUrl: "https://opengraph.githubassets.com/031958079359e4c5eeb38e5996874bf18e98e5aa37fa465b5b83e243e5569e5c/dc3671/dotfiles"
---

# Dotfiles #

My dotfiles for frontend-developer and python-user, including:

* vim(support vue files and python pylint)
* tmux
* zsh(with [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh))

## Install ##

Make sure `vim`, `tmux`, `zsh`, `git` have been installed.

```bash
git clone https://github.com/dc3671/dotfiles.git
cd dotfiles
./install.sh
```

## Advanced config for `YouCompleteMe` ##

Install [`YouCompleteMe`](https://github.com/Valloric/YouCompleteMe) plugin, require Vim 7.4.1578 with Python 2 or Python 3 support. Because `YouCompleteMe` contains many submodules and it will cost a lot of time, I just add basic `js` and `python` support of it. If you need more support such as Go, Java, and C, you may do as below:

```bash
cd ~/.vim/bundle/YouCompleteMe/
# for C# support
python install.py --cs-completer
# for Go support
python install.py --go-completer
# for Java support
python install.py --java-completer
```
reference: https://github.com/Valloric/YouCompleteMe#installation

## Key Mappings ##

**may already be depreciated**

### Tmux ###

`<leader>` key has been changed to ctrl+x
```tmux
set -g prefix C-x
```

resize window
```tmux
bind -r ^k resizep -U 10 # upward…
