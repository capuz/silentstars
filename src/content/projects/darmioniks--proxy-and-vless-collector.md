---
repo: "Darmioniks/proxy-and-vless-collector"
name: "proxy-and-vless-collector"
description: "A site that takes proxy tg and vless keys from open GitHub repositories and leaves only the working ones, conveniently connecting them in tg."
originalDescription: "Сайт который берёт прокси tg и vless ключи из открытых github репозиториев и оставляет только рабочие, удобно подключает их в тг"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Darmioniks/proxy-and-vless-collector"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-06T17:02:43Z"
lastCommitAt: "2026-07-20T06:32:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccacd2caa6dad8d5606dadbb01130e24a0bfc2075961a134fe76c901ff86ec13/Darmioniks/proxy-and-vless-collector"
---

# Proxy Manager

Streamlit application for collecting MTProto proxies (Telegram) and VLESS keys from several independent sources, with functionality checks.

## Features

- **MTProto**: collection from multiple repositories, deduplication by `server:port`, ping check.
- **VLESS**: cascading filtering of keys for functionality:
  1. **TCP** — filtering out dead servers (by unique `host:port`);
  2. **TLS handshake** — checking the handshake with the required SNI (for `tls`/`reality`);
  3. **Xray** — real URL test only for surviving keys.
- Pagination, text filter, export to `.txt`.

## Installation

```bash
pip install -r requirements.txt
streamlit run proxy_manager.py
```

## Optionally: real URL test via Xray

For stage 3, the `xray` binary ([Xray-core releases](https://github.com/XTLS/Xray-core/releases)) is needed in `PATH` or next to `proxy_manager.py`. Without it, the cascade ends at the TLS stage.

## Settings

Constants at the beginning of `proxy_manager.py`:

| Constant | Purpose | Default |
|---|---|---|
| `MAX_TCP_WORKERS` | TCP check threads | 100 |
| `MAX_TLS_WORKERS` | TLS check threads | 60 |
| `MAX_XRAY_WORKERS` | parallel Xray url tests | 8 |
|…
