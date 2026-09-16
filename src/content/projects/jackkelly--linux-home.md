---
repo: "JackKelly/linux_home"
name: "linux_home"
description: "Config files in my Linux home directory"
readmeQualityOk: true
url: "https://github.com/JackKelly/linux_home"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-10-01T10:32:12Z"
lastCommitAt: "2026-09-16T08:46:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 55
undervaluedScore: 39
maintainers: ["JackKelly"]
openGraphImageUrl: "https://opengraph.githubassets.com/79d7015bc797bdc4a8ad8f248313719a8fa24df585ace824105bb1df8bd0e6b0/JackKelly/linux_home"
---

# Installation

Clone this repo to `~/linux_home` and then edit `install.sh` and run `install.sh`.

# Things to install

In `.bashrc`, set `export GEMINI_API_KEY=` to my Gemini API key (for use in neovim).

## Base tools (for all Ubuntu installs: headless & desktop)

```bash
sudo apt install git ripgrep fzf zoxide python3-pip python3-venv make unzip gcc clang nodejs
sudo snap install nvim astral-uv --classic
sudo snap install vale
# Next, install rust. See: https://rust-lang.org/learn/get-started/
cargo install --locked tree-sitter-cli
```

* `vale`: The `.config/vale` config is used for the Vale formatter, which is used in my `nvim` config as a linter for English text.
* `fzf` and `zoxide`: see below for more installation instructions.
* `python3-pip`, `python3-venv`, `make`, `unzip`, `gcc`, `tree-sitter-cli`: All required for `nvim`.
* `clang` and `nodejs` are required to install `tree-sitter-cli`

### `fzf`

1. `sudo apt install fzf`
2. [Set up shell integration](https://github.com/junegunn/fzf?tab=readme-ov-file#setting-up-shell-integration). (This is still necessary even after installing `fzf` is via APT.)

### `zoxide`

Install: `sudo apt install zoxide`

And append this to…
