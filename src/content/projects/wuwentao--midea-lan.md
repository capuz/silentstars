---
repo: "wuwentao/midea-lan"
name: "midea-lan"
description: "Control your Midea M-Smart appliances via LAN."
readmeQualityOk: true
url: "https://github.com/wuwentao/midea-lan"
homepage: "https://github.com/wuwentao/midea_ac_lan"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["midea", "midea-lan"]
stars: 13
forks: 19
openIssues: 3
closedIssues: 6
watchers: 2
contributors: 50
recentReleases: 3
createdAt: "2026-08-12T08:25:14Z"
lastCommitAt: "2026-09-11T08:14:14Z"
lastReleaseAt: "2026-09-08T15:53:18Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 67
maintainers: ["wuwentao", "renovate[bot]", "chemelli74"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c9821602199c1f7e4b877789441250a00b64a577214be198b49ccff6cae071c/wuwentao/midea-lan"
---

# midea-lan python lib

> [中文版 / Chinese README](https://github.com/wuwentao/midea-lan/blob/HEAD/README_hans.md)

Control your Midea M-Smart appliances via local area network.

This library is part of https://github.com/wuwentao/midea_ac_lan code.
⭐If this component is helpful for you, please star it, it encourages me a lot.

## Getting started

### Finding your device

```python3
from midealan.discover import discover

# Without knowing the ip address
discover()
# If you know the ip address
discover(ip_address="203.0.113.11")
# The device type is in hexadecimal as in midealan/devices/TYPE
type_code = hex(list(discover().values())[0]["type"])[2:]
```

### Getting data from device

```python3
from midealan.discover import discover
from midealan.devices import device_selector

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
    model=d["model"],
    subtype=0,
    customize="",
)

# Connect and authenticate
ac.connect()…
