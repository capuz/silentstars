---
repo: "0Pwny/proxy-checker"
name: "proxy-checker"
description: "Fast threaded proxy checker with real transfer tests, GeoIP lookup, and multi-format outputs."
readmeQualityOk: true
url: "https://github.com/0Pwny/proxy-checker"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-30T22:51:40Z"
lastCommitAt: "2026-10-25T02:48:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 79
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9b56a5c055a1f80e01e47ac363f1de3eddf701919857d30b868bb8f665eb98f/0Pwny/proxy-checker"
---

# proxy-checker
Fast threaded proxy checker with real transfer tests, GeoIP lookup, multi-format outputs, and optional Discord notifications with rich embeds.

| 🌐 Updated (UTC) | ✅ Alive | 📄 TXT | 📜 JSONL | 📦 Size (TXT/JSONL) |
|---|---:|---|---|---|
| 2026-10-25 02:48 UTC | 16253 | [proxies/alive_proxies.txt](https://github.com/0Pwny/proxy-checker/blob/HEAD/proxies/alive_proxies.txt) | [proxies/alive_proxies.jsonl](https://github.com/0Pwny/proxy-checker/blob/HEAD/proxies/alive_proxies.jsonl) | 308.8KB / 3.0MB |

## Features
- Harvests proxies from many public lists (HTTP + HTTPS)
- Verifies real data transfer (>= 200KB) over both HTTP and HTTPS
- Optional GeoIP via ip-api.com through the proxy itself
- Outputs in `proxies/`: `alive_proxies.txt`, `alive_proxies.jsonl`, `alive_proxies.json`
- Discord webhook notifications:
	- Per-hit embed for each alive proxy (flag, ISP, supports, mobile/proxy/hosting flags)
	- Optional final summary (alive count, total processed, duration, top countries)
 - Protocols: HTTP and HTTPS only for now. SOCKS4 and SOCKS5 planned for a future version.

## Usage

Basic run:

```bash
python app.py
```

Key options:

- `--timeout <sec>`: per-proxy hard…
