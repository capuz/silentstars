---
repo: "dstanberry/dotfiles"
name: "dotfiles"
description: "📝 Dotfiles with an emphasis on decluttering the home directory."
readmeQualityOk: true
url: "https://github.com/dstanberry/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [56, 21]
topics: ["dotfiles", "fzf", "neovim", "tmux", "zsh"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-11-30T22:34:47Z"
lastCommitAt: "2026-07-05T20:59:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 76
undervaluedScore: 52
maintainers: ["dstanberry"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c114b08d9ea476804c95c0ae43f83608c9aca97cacbbb10c4a68d459b4a4aed/dstanberry/dotfiles"
---

# Dotfiles

The schema is constructed such that it adheres to the XDG Base Directory
Specification.

The `.config` directory is maintained as a worktree linked to a git bare
repository. To setup the environment, a number of one-time tasks will need to be
executed:

Clone the repository:

```bash
# If desired, replace '$HOME/Git/dotfiles' with another location that is preferred.
bare=$HOME/Git/dotfiles
worktree=$HOME/.config
git clone --bare https://github.com/dstanberry/dotfiles $bare
cd $bare
git worktree add $worktree $(git branch --show-current)
```

The glue required to make this possible is to tell the system wide configuration
file where to look for the user shell profile:

ZSH: This will need to be set in `/etc/zsh/zshenv`.

```zsh
export XDG_CONFIG_HOME="${HOME}/.config"
export ZDOTDIR="${XDG_CONFIG_HOME}/zsh/"
```

***Note:***

Machine specific settings can be defined within zsh/rc.private/ if desired. The
directory will be created automatically if it does not exist. In particular
during startup neovim will check if the current shell has a file called
`hashes.zsh` (depending on the running shell) and will define each path as an
environment variable within the editor.…
