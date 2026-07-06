---
repo: "daijunhaoMinecraft/NeteaseSensitiveWordsProject"
name: "NeteaseSensitiveWordsProject"
description: "Netease Minecraft Sensitive Word Detection Repository"
originalDescription: "网易我的世界敏感词检测仓库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/daijunhaoMinecraft/NeteaseSensitiveWordsProject"
language: "C++"
languages: ["C++"]
languagePcts: [85]
stars: 26
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-06T05:42:35Z"
lastCommitAt: "2026-07-06T07:02:27Z"
lastReleaseAt: "2025-08-09T02:41:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 50
maintainers: ["github-actions[bot]", "daijunhaoMinecraft"]
openGraphImageUrl: "https://opengraph.githubassets.com/11ac7a2b84af492eddd700c592d66717a4f090eeb81ea2464d485b2b9452212d/daijunhaoMinecraft/NeteaseSensitiveWordsProject"
---

# Netease Minecraft Sensitive Word Detection

A high-performance sensitive word filtering HTTP service developed in C++, supporting multi-PC sensitive word detection (X19) and PE sensitive word detection (G79), automatically updated every hour, with the word library sourced from Netease Minecraft, and decryption sourced from IDA Pro → libenvsdk<br/>
Online test: [https://neteasemcapi.theconsole.top/SensitiveWords](https://neteasemcapi.theconsole.top/SensitiveWords)

**2026/06/14: The libenvsdk.dll sensitive word library in the Bedrock Edition will run locally, so the decryption method will not be open-sourced for now**

## Compilation Dependencies

```bash
# Ubuntu/Debian
sudo apt-get install libpcre2-dev libssl-dev nlohmann-json3-dev

# CentOS/RHEL
sudo yum install pcre2-devel openssl-devel

# macOS (using Homebrew)
brew install pcre2 openssl nlohmann-json
```

## Compilation Method

```bash
# Clone the project
git clone https://github.com/daijunhaoMinecraft/NeteaseSensitiveWordsProject
cd NeteaseSensitiveWordsProject

# Compile
g++ -std=c++17 -O2 \
    -DCPPHTTPLIB_OPENSSL_SUPPORT \
    -I/usr/include/pcre2 \
    -o Netease_sensitive_word main.cpp \
    -lpcre2-8 -lssl -lcrypto…
