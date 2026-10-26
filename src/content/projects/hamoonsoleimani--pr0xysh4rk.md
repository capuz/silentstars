---
repo: "HamoonSoleimani/Pr0xySh4rk"
name: "Pr0xySh4rk"
description: "Pr0xySh4rk merges, tests, and streamlines your v2ray proxy subscriptions for faster, reliable connections with Hiddify / Xray / Nekoray."
readmeQualityOk: true
url: "https://github.com/HamoonSoleimani/Pr0xySh4rk"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-02-24T22:25:11Z"
lastCommitAt: "2026-10-26T18:06:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 68
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d6b510201b422cdd3c5c8db266cf6a2ead79d5c1429d3f49c58e8cc239f284d/HamoonSoleimani/Pr0xySh4rk"
---

# Pr0xySh4rk

**Pr0xySh4rk** collects free vmess / vless / trojan / shadowsocks / hysteria2 /
tuic / wireguard configs from a curated set of public sources, actually
**tests every one of them for real connectivity, latency, and (optionally)
throughput**, and publishes only the ones that currently work as a single
ready-to-import subscription. A GitHub Actions workflow re-runs the whole
pipeline every 6 hours and commits the refreshed subscription back into this
repo.

### Subscription URL

```
https://raw.githubusercontent.com/HamoonSoleimani/Pr0xySh4rk/refs/heads/main/Pr0xySh4rk_SubBase64.txt
```

Import this URL into V2rayNG, Hiddify, NekoBox, Streisand, or any client that
accepts a base64 subscription link.

---

## How it works

```
main.py            ──►  collected_configs.txt   ──►  Pr0xySh4rk.py  ──►  Pr0xySh4rk_SubBase64.txt
(collector)              (raw, de-duplicated)         (tester + reporter)      (published subscription)
```

1. **`main.py`** downloads each source in `SOURCES`, extracts every config
   link it can find regardless of how the source packages them (plain text,
   one link per line; the whole file as a single base64 blob; individual
   base64 lines; with…
