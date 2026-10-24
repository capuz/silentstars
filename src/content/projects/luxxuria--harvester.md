---
repo: "luxxuria/harvester"
name: "harvester"
description: "Aggregator and validator of VLESS configurations written in Rust. Automatic Ping/Speed checking, filtering by ASN, and creation of optimized proxy lists."
originalDescription: "Агрегатор и валидатор VLESS-конфигураций на Rust. Автоматическая проверка Ping/Speed, фильтрация по ASN и создание оптимизированных списков прокси."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/luxxuria/harvester"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["free-vpn", "free-vpn-key", "free-vpn-keys", "free-vpn-russia", "russia-vpn", "v2ray", "v2rayng", "vless", "vless-reality", "vpn"]
stars: 57
forks: 4
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2026-03-22T06:15:50Z"
lastCommitAt: "2026-10-24T08:19:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["luxxuria"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b159988573ba01ca4a50e907afca5971eb70691d5ac13609eb733ddf101fe49/luxxuria/harvester"
---

## CDN Mirrors

If `github` is unreachable or blocked in your country, you can access any file by replacing the domain in the URL using the templates below:

* **jsDelivr:** `https://cdn.jsdelivr.net/gh/luxxuria/harvester@main/FILENAME.txt`
* **GitHack:** `https://raw.githack.com/luxxuria/harvester/main/FILENAME.txt`

*Replace `FILENAME.txt` with: `ping_tested.txt`, `speed_tested.txt`, or `non_ru.txt`.*

# Harvester

All of the AI-generated code was completely rewritten by hand, in order to learn something and at the same time solve current problems.
The script now uses less CPU time by reducing the spawning of xray cores and other optimizations; unnecessary buffers and memory-hungry vectors were also removed.
The pipeline has become more linear, the code is more readable, and more context has been added to errors. In the future, xray configs may be updated via grpc instead of restarts.

## Proxy files

The script updates 3 files:

### 1. ping_tested.txt
This list contains all proxies that responded to a TCP ping and returned their IP through the core. Comments are not modified in any way; URIs are stored as they are.

### 2. speed_tested.txt
The main list, containing proxies that…
