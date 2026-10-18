---
repo: "hamedp-71/N_sub_cheker"
name: "N_sub_cheker"
description: "A new sub checker, different from the others, for all networks except my own (web) ones that have trapped me"
originalDescription: "ساب چکر جدید متفاوت با بقیه - مخصوص تمامی نت ها به جز (های وب) خودم ک اسیرم کرده"
descriptionLang: "fa"
readmeQualityOk: true
url: "https://github.com/hamedp-71/N_sub_cheker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 6
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-15T20:10:33Z"
lastCommitAt: "2026-10-18T08:16:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 70
undervaluedScore: 66
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/45da5676a339354f19dfd18f3b5732000949d110827a8821820c6eb9607ded17/hamedp-71/N_sub_cheker"
---

# Sub Checker 🚀

A simple project for automatic, periodic testing (default every 6 hours) of your proxy configs. This script checks the configs in the `normal.txt` file and saves the healthy, connectable ones to the `final.txt` file.

The main idea is to use GitHub Actions to run this script regularly and provide an up-to-date list of active configs.

## ✨ Features

*   Periodic, automatic config testing (default every 4 hours via GitHub Actions).
*   Reads the config list from the `normal.txt` file (one config per line).
*   Saves healthy, connectable configs to `final.txt` for vless, vmess, ss, trojan, wirguard, hy.
*   Test parameters (such as the test URL, log level, etc.) can be configured via the `config.json` file.
*   Support for advanced Xray settings such as Fragment and Warp-on-Warp during testing (requires enabling in `config.json`).

## 🚀 How do I use it?

The easiest way to use this automatic checker is to **Fork** this repository:

1.  Go to this repository's main page on GitHub.
2.  Click the `Fork` button at the top right.
3.  A copy of this repository will be transferred to your GitHub account.
4.  **Enable Actions:** Go to your forked repository and open the…
