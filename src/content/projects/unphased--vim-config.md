---
repo: "unphased/vim-config"
name: "vim-config"
description: "My personal vim configuration."
readmeQualityOk: true
url: "https://github.com/unphased/vim-config"
language: "Lua"
languages: ["Lua", "Shell", "Vim Script"]
languagePcts: [34, 33, 31]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2013-03-12T04:16:02Z"
lastCommitAt: "2026-08-07T05:15:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 71
maintainers: ["unphased"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e3fdb2a0fa280af8b84e0fa51c4f7587287a3c19e3267f10d260dddc775e1a2/unphased/vim-config"
---

vim-config
==========

My personal vim configuration.

Rather than making the home directory a Git repository, clone the configuration
into `~/.vim` and link its entry points from home:

1. If `~/.vim` does not already exist, run
   `git clone git@github.com:unphased/vim-config ~/.vim`.
2. Back up and remove any existing `~/.vimrc`, `~/.zprofile`, and `~/.zshrc`.
3. Create the links:

   ```sh
   cd ~
   ln -s .vim/.vimrc .vimrc
   ln -s .vim/zprofile .zprofile
   ln -s .vim/zshrc .zshrc
   ```

The tracked `zprofile` is the shell bootstrap anchor. On interactive login it
warns if `~/.zshrc` no longer resolves to `~/.vim/zshrc`, which catches tools
such as shell-framework installers replacing that link.

Linux virtual terminal setup is tracked here too:

```
~/.vim/linux-vt-install.sh
```

That script links the VT palette/setup files into `~/.config` and adds guarded
Bash/Zsh hooks so the root-level setup script only runs when `TERM=linux`.

The installer also sets up the boot-time VT setup service by default. It
applies the user files first, then asks sudo only for the systemd unit:

```
~/.vim/linux-vt-install.sh
```

Use `--force` only if an existing local…
