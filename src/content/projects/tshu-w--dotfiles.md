---
repo: "tshu-w/dotfiles"
name: "dotfiles"
description: "Just my dotfiles"
readmeQualityOk: true
url: "https://github.com/tshu-w/dotfiles"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [36, 28]
topics: ["dotfiles", "macos", "linux", "makefile", "stow"]
stars: 44
forks: 6
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-02-18T09:51:34Z"
lastCommitAt: "2026-11-07T10:36:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 56
maintainers: ["tshu-w", "anupamme"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8671c3c57946c925c13e0f5177f8630917c3401de108eba0c90e1bdfb4b236e/tshu-w/dotfiles"
---

# Dotfiles

``` {.bash org-language="sh"}
git clone --recurse-submodules https://github.com/tshu-w/dotfiles.git
```

## macOS

1. Ensure iCloud Unison folder downloaded

2. Grant terminal Full Disk Access

3. `make`

4. Finish *TODO* and *FIXME* in [macOS.sh](https://github.com/tshu-w/dotfiles/blob/HEAD/darwin/macOS.sh)

5. Link Documents to Dropbox and lock it

```shell
sudo rm -rf ~/Documents && ln -s ~/Library/CloudStorage/Dropbox/Documents ~
sudo chflags -h uchg ~/Documents
```

6. Set YouDao appID and key for LaunchBar (\~ ID)

7. Import GPG subkeys

```shell
gpg --import private-subkeys.asc
gpg --edit-key [key-id]
gpg> trust
gpg> save
gpg-connect-agent "keyattr $(gpg --list-keys --with-keygrip | awk '/\[A\]/{f=1;next} f && /Keygrip =/{print $3; exit}') Use-for-ssh: true" /bye
```

## Server

1. Import GPG public key

```shell
gpg --import .config/gnupg/public.asc
```
