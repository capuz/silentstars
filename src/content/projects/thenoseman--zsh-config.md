---
repo: "thenoseman/zsh_config"
name: "zsh_config"
description: "My ZSH Config"
readmeQualityOk: true
url: "https://github.com/thenoseman/zsh_config"
language: "Shell"
languages: ["Shell"]
languagePcts: [76]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2011-02-22T15:15:28Z"
lastCommitAt: "2026-07-13T06:36:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 69
maintainers: ["thenoseman"]
openGraphImageUrl: "https://opengraph.githubassets.com/d871f54559528ce9d1ac5f1a4423f9a76fc2372cb7917ddc0b3fd6d23c01d807/thenoseman/zsh_config"
---

# My ZSH Config

# Configuration of GIT commiter
```
> cat ~/.gitcredentials
[user]
  name = "thenoseman"
  email = "some@example.com"
```

# Essential settings

```bash
# Show task switcher on every display
defaults write com.apple.dock appswitcher-all-displays -bool true && killall Dock

# Change the whitespace settings value for icons in the menubar
defaults -currentHost write -globalDomain NSStatusItemSelectionPadding -int 6
defaults -currentHost write -globalDomain NSStatusItemSpacing -int 6

# Tahoe: Disable icons in menu entries
defaults write -g NSMenuEnableActionImages -bool NO
```

# Todos fresh install
Install `InconsolataGoNerdFont-Regular.otf` from `zsh_config/home/extras/fonts`.
(Original: https://raph.levien.com/type/myfonts/inconsolata/)

Execute `relink`.

Execute `update_all`

Link from sync to `$HOMEBREW_PREFIX/etc/wireguard` (deprecated)

Link from sync to `$HOMEBREW_PREFIX/etc/coredns/Corefile` (deprecated)

Link `amazon-shell-tools.sh` from sync to `zsh_config/home/.zsh/private`

Link `export.sh` from sync to `zsh_config/home/.zsh/private`

`colima start -c 4 -d 80 -m 8 -t "vz" --vz-rosetta`

Make spotlight index all prefpanes: `spotlight_index_all`

##…
