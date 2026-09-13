---
repo: "jshiell/dotfiles"
name: "dotfiles"
description: "Dot files"
readmeQualityOk: true
url: "https://github.com/jshiell/dotfiles"
language: "Vim Script"
languages: ["Vim Script", "Shell", "Makefile"]
languagePcts: [39, 28, 22]
topics: ["dotfiles"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2015-08-22T09:58:31Z"
lastCommitAt: "2026-09-13T08:30:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 75
undervaluedScore: 69
maintainers: ["jshiell"]
openGraphImageUrl: "https://opengraph.githubassets.com/38491e5bb9d6d16b981920e70190cce752e7e9a9de2108d42d7f557f99192c64/jshiell/dotfiles"
---

# DotFiles

Dot files. Oh, the dot files.

For a new Mac, try [the bootstrap](https://github.com/jshiell/mac-bootstrap).

## Architecture

### Bootstrap

Symlinking is handled either by the `Makefile` in this repo or by the separate [mac-bootstrap](https://github.com/jshiell/mac-bootstrap) Ansible project.

```
git clone git@github.com:jshiell/dotfiles.git ~/dotfiles
cd ~/dotfiles
make install
```

`make status` shows the current state of all managed symlinks. `make uninstall` removes them.

### Shell (Zsh)

`~/.zshrc` symlinks to `zsh/zshrc`, which resolves its own location through symlinks and then sources every `*.zsh` file in the same directory alphabetically. Each file is responsible for a single tool or concern:

| File | Purpose |
|---|---|
| `brew.zsh` | Homebrew path setup (Linux/Intel/ARM), `bat` and `prettyping` aliases |
| `config.zsh` | History, keybindings, completions |
| `editor.zsh` | Sets `$EDITOR` |
| `gpg.zsh` | Sets `GPG_TTY` for pinentry |
| `mise.zsh` | [mise](https://mise.jdx.dev/) polyglot version manager |
| `rustup.zsh` | Cargo `bin` path |
| `starship.zsh` | [Starship](https://starship.rs/) prompt init |
| `znap.zsh` |…
