---
repo: "elentok/dotfiles"
name: "dotfiles"
description: "My dotfiles"
readmeQualityOk: true
url: "https://github.com/elentok/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [58]
topics: ["dotfiles", "zsh", "vim", "cheatsheet", "zsh-settings", "i3", "nvim"]
stars: 24
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2013-01-11T14:18:58Z"
lastCommitAt: "2026-08-01T06:12:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 79
undervaluedScore: 56
maintainers: ["elentok"]
openGraphImageUrl: "https://opengraph.githubassets.com/080895248cf2fa9f0084cbb2d36df38e5b9eb92b3c170305eff65443ae238ca0/elentok/dotfiles"
---

# elentok's dotfiles

To install run:

```bash
curl -L https://github.com/elentok/dotfiles/raw/master/online_install.sh | bash
```

by default it will clone the repository from "<https://github.com/elentok/dotfiles>", to use ssh run
this:

```bash
curl -L https://github.com/elentok/dotfiles/raw/master/online_install.sh | bash -s use-ssh
```

## Documentation

- [keys.md](https://github.com/elentok/dotfiles/blob/HEAD/docs/keys.md) - a cheatsheet of all of my vim keybindings (can be accessed from the
  command line using the `k` command)
- [help.md](https://github.com/elentok/dotfiles/blob/HEAD/docs/help.md) - a cheatsheet of useful commands (can be accessed from the command line
  using the `h` or `h {query}` commands)
- [commands.md](https://github.com/elentok/dotfiles/blob/HEAD/docs/commands.md) - a cheatsheet of of my custom shell scripts

### Git

Use `~/.dotlocal/gitconfig`:

```gitconfig
[user]
  name = Your Name
  email = you@gmail.com
[github]
  user = your-github-user
```
