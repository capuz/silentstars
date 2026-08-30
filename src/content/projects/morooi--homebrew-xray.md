---
repo: "morooi/homebrew-xray"
name: "homebrew-xray"
description: "The homebrew tap for xray-core."
readmeQualityOk: true
url: "https://github.com/morooi/homebrew-xray"
language: "Shell"
languages: ["Shell", "Ruby"]
languagePcts: [62, 38]
topics: ["xray", "xray-core", "homebrew", "homebrew-tap", "v2ray", "v2ray-core"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2021-01-25T13:21:46Z"
lastCommitAt: "2026-08-29T08:54:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 76
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/402cee72ce1a7960c0a9504ea0c101b308bb18b370d94cd00e832bca0741e8b6/morooi/homebrew-xray"
postedAt: "2026-08-20T04:13:07.390Z"
---

# homebrew-Xray
The homebrew tap for [Xray-core](https://github.com/XTLS/Xray-core).

This tap replaces the `geoip.dat` and `geosite.dat` files in the Xray-core project with [Loyalsoldier/v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat).

## Install Xray-core

``` bash
brew tap morooi/xray
brew install xray
```

## Update Xray-core

``` bash
brew update
brew upgrade xray
```

## Uninstall Xray-core

``` bash
brew uninstall xray
brew untap morooi/xray
```

## Usage

The defualt config file location is: `/usr/local/etc/xray/config.json`

You can get some example configs at https://github.com/XTLS/Xray-examples

run Xray-core without starting at login:

``` bash
brew services run xray
```

run Xray-core and register it to launch at login:

``` bash
brew services start xray
```
