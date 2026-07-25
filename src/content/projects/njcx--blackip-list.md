---
repo: "njcx/blackip_list"
name: "blackip_list"
description: "A list of malicious IPs synchronized from FireHOL, updated daily."
originalDescription: "从FireHOL 同步的恶意IP 清单，每天都会更新"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/njcx/blackip_list"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 23
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-12T03:33:20Z"
lastCommitAt: "2026-07-25T06:01:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 56
maintainers: ["njcx"]
openGraphImageUrl: "https://opengraph.githubassets.com/a59686dc5809cc64a6d73c57f32598f51f8bc1522a0e7826b1287d80ec463a64/njcx/blackip_list"
---

Due to the amount of data and the frequency of the updates on this repo,
github has requested to limit the number of updates.
The site [https://iplists.firehol.org](https://iplists.firehol.org) has direct links
to all the files in this repo. **This repo is now updated once per day.**

### Contents

- [About this repo](#about-this-repo)

- [Using these ipsets](#using-these-ipsets)
 - [Which ones to use?](#which-ones-to-use)

 - [Why are open proxy lists included](#why-are-open-proxy-lists-included)
   
 - [Using them in FireHOL](#using-them-in-firehol)
    * [Adding the ipsets in your firehol.conf](#adding-the-ipsets-in-your-fireholconf)
    * [Updating the ipsets while the firewall is running](#updating-the-ipsets-while-the-firewall-is-running)
    
- [Dynamic List of ipsets included](#list-of-ipsets-included)

- [Comparison of ipsets](#comparison-of-ipsets)

# About this repo

This repository includes a list of ipsets dynamically updated with
[FireHOL](https://github.com/firehol/firehol)'s `update-ipsets.sh`
[documented in this wiki](https://github.com/firehol/blocklist-ipsets/wiki).

This repo is self maintained. It it updated automatically from the script via…
