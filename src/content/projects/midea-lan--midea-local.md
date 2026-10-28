---
repo: "midea-lan/midea-local"
name: "midea-local"
description: "Control your Midea M-Smart appliances via local area network."
readmeQualityOk: true
url: "https://github.com/midea-lan/midea-local"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["midea", "python"]
stars: 108
forks: 93
openIssues: 28
closedIssues: 49
watchers: 3
contributors: 56
recentReleases: 0
createdAt: "2024-04-23T15:55:35Z"
lastCommitAt: "2026-10-28T09:57:14Z"
lastReleaseAt: "2024-06-24T23:56:12Z"
status: "thriving"
tags: ["needs_contributors", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 50
maintainers: ["chemelli74", "renovate[bot]", "rokam"]
openGraphImageUrl: "https://opengraph.githubassets.com/7374cd28646d3ce98ddaa15fffb5c2b5eb361392283e91b74265e7c7e49b58ee/midea-lan/midea-local"
fundingLinks: ["GITHUB:https://github.com/rokam", "GITHUB:https://github.com/chemelli74"]
discussionCount: 8
---

# Midea-local python lib

> [中文版 / Chinese README](https://github.com/midea-lan/midea-local/blob/HEAD/README_hans.md)

Control your Midea M-Smart appliances via local area network.

This library is part of https://github.com/georgezhao2010/midea_ac_lan code. It was separated to segregate responsibilities.

⭐If this component is helpful for you, please star it, it encourages me a lot.

## Getting started

### Finding your device

```python3
from midealocal.discover import discover

# Without knowing the ip address
discover()
# If you know the ip address
discover(ip_address="203.0.113.11")
# The device type is in hexadecimal as in midealocal/devices/TYPE
type_code = hex(list(discover().values())[0]["type"])[2:]
```

### Getting data from device

```python3
from midealocal.discover import discover
from midealocal.devices import device_selector

token = "..."
key = "..."

# Get the first device
d = list(discover().values())[0]
# Select the device
ac = device_selector(
    name="AC",
    device_id=d["device_id"],
    device_type=d["type"],
    ip_address=d["ip_address"],
    port=d["port"],
    token=token,
    key=key,
    device_protocol=d["protocol"],
    model=d["model"],…
