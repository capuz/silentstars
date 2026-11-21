---
repo: "Salamek/picpro"
name: "picpro"
description: "PIC K150 / K128 / K149 / K182 programmer software written in Python 3"
readmeQualityOk: true
url: "https://github.com/Salamek/picpro"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 31
forks: 7
openIssues: 5
closedIssues: 25
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2021-12-30T17:42:27Z"
lastCommitAt: "2026-11-21T11:37:18Z"
lastReleaseAt: "2026-05-11T16:09:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 55
maintainers: ["Salamek", "cfgnunes"]
openGraphImageUrl: "https://opengraph.githubassets.com/55550a7bf377cf16588e5d464001bd0f3adb9369ab574c401f954d8654d4fd4b/Salamek/picpro"
fundingLinks: ["GITHUB:https://github.com/Salamek", "PATREON:https://patreon.com/salamek", "CUSTOM:https://www.paypal.me/salamek", "CUSTOM:https://salamek.cz/funding-crypto.html"]
---

# picpro a kitsrus PIC CLI programmer

This is complete rewrite of kitsrus_pic_programmer into Python 3 + bunch of fixes and features.

## Supported kitsrus programmers

* K128
* K149 version A to F
* K150 (Tested)
* K182

**Note:** The programmer must have the latest firmware version, which utilizes the P18A protocol. Firmware versions using older protocols (P018, P016, P014, or earlier) are not supported.

See <https://www.kitsrus.com/pic.html>.

## Installation

### PIP (pip3 on some distros)

```bash
pip install picpro
```

### Repository

You can also use these repositories maintained by me

#### Debian and derivatives

Add repository by running these commands

```bash
wget -O- https://repository.salamek.cz/deb/salamek.gpg | sudo tee /usr/share/keyrings/salamek-archive-keyring.gpg
echo "deb     [signed-by=/usr/share/keyrings/salamek-archive-keyring.gpg] https://repository.salamek.cz/deb/pub all main" | sudo tee /etc/apt/sources.list.d/salamek.cz.list
```

And then you can install a package picpro

```bash
apt update && apt install picpro
```

#### Archlinux

Add repository by adding this at end of file `/etc/pacman.conf`
