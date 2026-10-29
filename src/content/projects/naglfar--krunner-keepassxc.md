---
repo: "naglfar/krunner-keepassxc"
name: "krunner-keepassxc"
description: "A small krunner plugin to copy keepassxc entries to clipboard using its Freedesktop.org Secret Service dbus integration."
readmeQualityOk: true
url: "https://github.com/naglfar/krunner-keepassxc"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 34
forks: 2
openIssues: 3
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-05-16T10:21:09Z"
lastCommitAt: "2026-10-29T12:25:06Z"
lastReleaseAt: "2022-04-27T05:05:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 71
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/8a6f2bcca594735358221e8435cd961438876a3c5aa7efef48c9195ce17352b8/naglfar/krunner-keepassxc"
---

# <img src="https://raw.githubusercontent.com/naglfar/krunner-keepassxc/master/logo.svg" width="64" height="64"/> krunner-keepassxc

A krunner plugin to copy keepassxc entries to clipboard using its Freedesktop.org Secret Service dbus integration.

> :warning: with one of the newer versions (^2.7.1) keepassxc will turn off secret service integration until you disable kwallet. Either that or the newer versions of KDE plasma (^5.25) turn kwallet on if it used to be off. Not sure, but if the plugin suddenly stops working this might be the reason.

## Usage
You can install the plugin through the krunner settings dialog or alternatively find it on the [web store](https://store.kde.org/p/1414906/), download the archive, extract and run the install.sh, which should get everything up and running.

### Requirements:
- Python 3.14 (probably runs with 3.10+)
- KeepassXC installed and configured for Freedesktop.org Secret Service access (See below)

### Enable Secret Service in KeepassXC:
* Open KeepassXC client
* Go to: Tools > Settings > Secret Service Integration
* Check "Enable KeepassXC Freedesktop.org Secret Service integration"
* for each used database:
  * Go to: Database > Database…
