---
repo: "castula/magisk_nezha-agent"
name: "magisk_nezha-agent"
description: "Nezha Probe Magisk module, simple and easy to use"
originalDescription: "哪吒探针 Magisk 模块，简洁易用"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/castula/magisk_nezha-agent"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2025-06-11T09:09:30Z"
lastCommitAt: "2026-10-18T08:16:17Z"
lastReleaseAt: "2026-09-12T13:58:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 74
undervaluedScore: 57
maintainers: ["castula", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7064df1e7b372f5da8ce879e2f6c4fc5b7b1fca9a1298f4b0cbec54bb592f6c1/castula/magisk_nezha-agent"
---

# Nezha Monitoring (Nezha Agent) Magisk Module

> 💡 This module aims to integrate the [Nezha Monitoring client (nezha-agent)](https://github.com/nezhahq/agent) into the Android system as a Magisk module, enabling continuous background operation. All code and documentation in this repository were completed with the assistance of Gemini.
> 
> ⚠️ **Architecture note**: The `nezha-agent` automatically built by this module is **ARM64 architecture** and only supports 64-bit devices.

## ✨ Core Features

*   🔄 **Automatic sync**: Powered by GitHub Actions, periodically pulls the latest official core release and packages it.
*   ⚡ **Basic daemon**: Built-in daemon script with fault-tolerant network detection, retry mechanism for abnormal exits, and customizable power management modes.

## ✅ Usage

1. Go to the **[Releases page]** of this repository and download the latest version's archive (e.g. `magisk-nezha-agent-vX.X.X.zip`);
2. Extract the archive and edit the `/bin/config.yml` configuration file, filling in your panel communication address, secret key, and other probe information;
3. (Optional) Edit the `service.sh` file and configure the `RUN_MODE` variable according to the…
