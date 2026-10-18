---
repo: "arnaucube/configs"
name: "configs"
description: "config files"
readmeQualityOk: true
url: "https://github.com/arnaucube/configs"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [44, 21]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-10-27T18:56:03Z"
lastCommitAt: "2026-10-18T08:15:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 50
maintainers: ["arnaucube"]
openGraphImageUrl: "https://opengraph.githubassets.com/db65f56a27933e75b71aa2ad607e953dbf9fa516791b447f90ba088da306fcef/arnaucube/configs"
---

# configs
config files

## List of utilities for terminal
- bat https://github.com/sharkdp/bat
- rg https://github.com/BurntSushi/ripgrep
- tig https://github.com/jonas/tig
- gitg
```
alias gitg="git log --color --graph --abbrev-commit --pretty=format:'%Cred%h%Creset%C(yellow)%d%Creset %s %Cgreen(%ar)%C(cyan) %an<%ae>%Creset'"
```
- exa https://github.com/ogham/exa
```
alias ls='exa'
alias lst='exa -l -snew'
```
- fd https://github.com/sharkdp/fd
- jq https://github.com/stedolan/jq
- tmux
- nvim
- mpsyt (mps-youtube) https://github.com/mps-youtube/mps-youtube
- fzf https://github.com/junegunn/fzf

---

- Vim: `.vimrc`
	- put `vimconfigbase.vim` into `~/`
	- put `.vimrc` into `~/`
	- install https://github.com/junegunn/vim-plug
	- inside vim, execute: `:PlugInstall`
- NeoVim: `init.vim`
	- put `vimconfigbase.vim` into `~/`
	- in `.config/nvim/init.vim`
	- install https://github.com/junegunn/vim-plug
	- inside neovim, execute: `:PlugInstall`
	- for the vim-go, execute: :GoInstallBinaries
- `.bashrc`
	- in `~/home/.bashrc` directory
	- execute `source .bashrc`
- Tmux: `.tmux.conf`
	- in `~/home/.tmux.conf` directory
- Keyboard remap `.Xmodmap`
	- in `~/home/.Xmodmap`
	- changes will…
