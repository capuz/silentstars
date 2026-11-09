---
repo: "reo7sp/dotfiles"
name: "dotfiles"
description: "Config files for zsh, vim, ranger, tmux, kitty and etc."
readmeQualityOk: true
url: "https://github.com/reo7sp/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [56, 42]
topics: ["vim", "vimrc", "zsh", "zshrc", "dotfiles", "kitty", "ranger", "tmux", "nvim", "nvim-configs"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-08-15T11:47:30Z"
lastCommitAt: "2026-11-09T11:59:02Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 76
undervaluedScore: 53
maintainers: ["reo7sp"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9cc11a7c72f753d51e5e3770609710d4ad8e0e322f22aab2dee71e813bbe31f/reo7sp/dotfiles"
---

# dotfiles

My config files:

- zsh: [config.zsh](https://github.com/reo7sp/dotfiles/blob/HEAD/home/dot_config/zsh/config.zsh).
- nvim: [init.lua](https://github.com/reo7sp/dotfiles/blob/HEAD/home/dot_config/nvim/init.lua).
- kitty: [kitty.conf](https://github.com/reo7sp/dotfiles/blob/HEAD/home/dot_config/kitty/kitty.conf).
- sublime text: [Preferences.sublime-settings](<./home/private_Library/private_Application Support/Sublime Text/Packages/User/Preferences.sublime-settings>).

How zsh looks:

How nvim looks:

## How to install

### Step 1: Install chezmoi

#### macOS

```sh
brew install chezmoi
```

#### Linux (Debian/Ubuntu)

```sh
sudo apt update
sudo apt install chezmoi
```

#### Linux (CentOS)

```sh
sudo dnf install chezmoi
```

#### Linux (any)

```sh
mkdir -p "$HOME/.local/bin"
sh -c "$(curl -fsLS https://get.chezmoi.io)" -- -b "$HOME/.local/bin"
export PATH="$HOME/.local/bin:$PATH"
chezmoi --version
```

### Step 2: Install dotfiles

```sh
chezmoi init reo7sp
```

> If the repository was cloned manually:
>
> ```sh
> git clone https://github.com/reo7sp/dotfiles.git
> cd dotfiles
> chezmoi --source . init
> ```

### Step 3: Apply

```sh
chezmoi apply
```

## Extra tools…
