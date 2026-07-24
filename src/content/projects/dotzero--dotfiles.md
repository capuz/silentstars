---
repo: "dotzero/dotfiles"
name: "dotfiles"
description: ":octocat: macOS environment: zsh, Oh My Zsh, Git, etc."
readmeQualityOk: true
url: "https://github.com/dotzero/dotfiles"
homepage: "https://dotzero.blog"
language: "Shell"
languages: ["Shell"]
languagePcts: [80]
topics: ["dotfiles", "zsh", "unix", "macos", "iterm"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-03-04T07:31:24Z"
lastCommitAt: "2026-07-24T06:08:56Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 73
undervaluedScore: 46
maintainers: ["dotzero"]
openGraphImageUrl: "https://opengraph.githubassets.com/2419995692bff2cf29bcdeabe98864db0c233b638cd1e673a92eacba8ee6c343/dotzero/dotfiles"
---

# dotzero dotfiles

### Set computer name

```bash
sudo scutil --set ComputerName "0x6D746873"
sudo scutil --set HostName "0x6D746873"
sudo scutil --set LocalHostName "0x6D746873"
sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.smb.server NetBIOSName -string "0x6D746873"
```

### Generating a new SSH key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
nano ~/.ssh/config
```

Add the following lines:

```
AddKeysToAgent yes
UseKeychain yes
IdentityFile ~/.ssh/id_ed25519
```

### Install dotfiles

```bash
git clone git@github.com:dotzero/dotfiles.git ~/.0
```

### Bootstrap dotfiles

```bash
~/.0/bootstrap
~/.0/macos
```

### Update

```bash
selfupdate
```
