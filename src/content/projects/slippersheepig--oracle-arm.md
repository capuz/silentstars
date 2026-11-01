---
repo: "slippersheepig/oracle_arm"
name: "oracle_arm"
description: "Oracle ARM instance registration (key-based login only)"
originalDescription: "甲骨文注册ARM实例（仅适用于密钥登录）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/slippersheepig/oracle_arm"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["arm", "oracle"]
stars: 12
forks: 5
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-29T01:56:07Z"
lastCommitAt: "2026-11-01T10:44:39Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 71
maintainers: ["slippersheepig", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5aa26247bf66510d239e844248c5b9252e63ef231bb8b496d3b53b7a070fe18/slippersheepig/oracle_arm"
---

### Oracle ARM 抢注脚本 → ### Oracle ARM Instance Grabbing Script

This script is built on the Oracle Cloud Infrastructure (OCI) Python SDK. It automatically and repeatedly tries to grab ARM-architecture instances (`VM.Standard.A1.Flex`) from the Oracle Cloud Always Free tier. It supports automatic parsing of the `main.tf` configuration file, smart backoff retries, network fault tolerance, and Telegram notification push.

> Only key-based login is supported. If you need password-based login, modify `oracle_arm.py` yourself.

## Pre-run Preparation

### 1. Create a `data` folder, edit the `.env` and `config` files, and save your private key `p.pem` inside the `data` folder

#### Save the `.env` file with the following format

```bash
USE_TG=True
TG_BOT_TOKEN=123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ
TG_USER_ID=987654321
TG_API_HOST=api.telegram.org
```

- `USE_TG=True` enables Telegram notifications. If you don't need them, change `True` to `False` and check the logs yourself for details.
- `TG_BOT_TOKEN`: enter the Telegram bot TOKEN.
- `TG_USER_ID`: enter the user, channel, or group ID.
- `TG_API_HOST`: enter the address of a self-hosted Telegram API reverse proxy, for use when the…
