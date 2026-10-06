---
repo: "luxxuria/harvester"
name: "harvester"
description: "VLESS configuration aggregator and validator in Rust. Automatic Ping/Speed checking, filtering by ASN, and creation of optimized proxy lists."
originalDescription: "Агрегатор и валидатор VLESS-конфигураций на Rust. Автоматическая проверка Ping/Speed, фильтрация по ASN и создание оптимизированных списков прокси."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/luxxuria/harvester"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["free-vpn", "free-vpn-key", "free-vpn-keys", "free-vpn-russia", "russia-vpn", "v2ray", "v2rayng", "vless", "vless-reality", "vpn"]
stars: 53
forks: 4
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-03-22T06:15:50Z"
lastCommitAt: "2026-10-06T10:41:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["luxxuria"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d047ae7edb513ec6788718ce53d87afe59c0904fd92f3f3475eba5098b20f48/luxxuria/harvester"
---

## CDN Mirrors

If `github` is unreachable or blocked in your country, you can access any file by replacing the domain in the URL using the templates below:

* **jsDelivr:** `https://cdn.jsdelivr.net/gh/luxxuria/harvester@main/FILENAME.txt`
* **GitHack:** `https://raw.githack.com/luxxuria/harvester/main/FILENAME.txt`

*Replace `FILENAME.txt` with: `ping_tested.txt`, `speed_tested.txt`, or `non_ru.txt`.*

# Harvester

All the neural code was completely rewritten by hand, with the goal of learning something and solving current problems.
The script now uses less CPU time due to reducing the spawning of xray cores and other optimizations, and unnecessary buffers and memory-consuming vectors have been removed.
The pipeline became more linear, the code more readable, and more context for errors has been added. In the future, possibly xray configs will be updated via grpc instead of restarts.

## Proxy Files

The script updates 3 files:

### 1. ping_tested.txt
This list contains all proxies that responded to tcp ping and returned their IP through the core. Comments are not modified in any way, uri are stored as-is.

### 2. speed_tested.txt
The main list containing proxies that were able…
