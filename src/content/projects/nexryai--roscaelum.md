---
repo: "nexryai/roscaelum"
name: "roscaelum"
description: "Yet another human-friendly firewall"
originalDescription: "Yet another human-friendly firewall"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/nexryai/roscaelum"
homepage: "https://lance.sda1.net/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["firewall", "nftable", "nftables", "security"]
stars: 12
forks: 0
openIssues: 5
closedIssues: 20
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-06-17T05:08:50Z"
lastCommitAt: "2026-11-07T09:30:09Z"
lastReleaseAt: "2023-12-16T08:31:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["nexryai", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/960631f96558b6489b69024866b4280e8e870a6c1998012cac88399ffe340bdc/nexryai/roscaelum"
---

## roscaelum Firewall

### What is this
A lightweight, simple, secure, and essential firewall that directly manipulates nftables via netlink.  
Under development.

### Design Principles

#### Simple and easy to use
All configuration is managed in YAML. No more mashing `ufw status`!  
It also runs as a single binary and does not depend on the `nft` command, so installation is easy.

#### Secure
It displays warnings for improper configurations. It is also written in memory-safe Go.

#### Many useful features
It includes features that help make servers more secure, such as allowing access only on specific interfaces or blocking access from arbitrary IPs.  
Want to build your own router? roscaelum includes features to help you set up a simple home router!  

#### Fully offline operation
Since it does not require communication with external APIs, rule generation and application can all be done offline.

### Usage
Note: Disable any existing firewall before use.

```
wget https://raw.githubusercontent.com/nexryai/roscaelum/main/install.sh
sudo bash install.sh

# Edit the rules
sudo nano /etc/roscaelum.yml

# Apply
sudo rcfctl enable

# Apply automatically at startup
sudo systemctl enable…
