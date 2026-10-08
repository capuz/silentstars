---
repo: "sakha1370/OpenRay"
name: "OpenRay"
description: "OpenRay is one of the largest open-source collections of free proxy servers, running hourly pipelines to ensure high-quality lists by protocol and country, promoting open and unrestricted internet access for everyone worldwide."
readmeQualityOk: true
url: "https://github.com/sakha1370/OpenRay"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["free-proxies", "internet-freedom", "iran", "proxy", "shadowsocks", "trojan", "v2ray", "vless", "vmess", "vpn"]
stars: 247
forks: 20
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-08-20T15:31:10Z"
lastCommitAt: "2026-10-08T10:52:12Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 40
maintainers: ["github-actions[bot]", "sakha1370"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b85ebbc8cc49e92892ac80ce861b8580b4f647ed9911611e0c3f134aa77e72d/sakha1370/OpenRay"
---

# 🌐 OpenRay

**A community-driven attempt to keep the internet open and affordable**

*Free, tested, and reliable proxy lists for everyone*

[🚀 Quick Start](#-quick-start) • [📋 Proxy Lists](#-proxy-collections) • [🤝 Contributing](#-contributing) • [⭐ Star Growth](#-github-star-growth)

---

## Collector runtime

The collector uses Python 3.13+, transactional SQLite, bounded asynchronous queues and pinned Xray, sing-box and mihomo cores. Subscription paths and URLs remain available. New candidates require an end-to-end successful check; infrastructure failures preserve existing connection health.

```bash
python -m pip install -r requirements.lock
python -m pip install --no-deps --no-build-isolation -e .
python tools/install_cores.py
python -m openray migrate
python -m openray run --report .state/latest-run.json
```

The run stages an immutable snapshot. Installation and publishing are separate commands with client validation gates. Read the [implementation evidence](https://github.com/sakha1370/OpenRay/blob/HEAD/docs/implementation.md), [operations and recovery guide](https://github.com/sakha1370/OpenRay/blob/HEAD/docs/operations.md), [compatibility…
