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
stars: 15
forks: 23
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 56
recentReleases: 3
createdAt: "2026-08-12T08:25:14Z"
lastCommitAt: "2026-09-22T08:45:24Z"
lastReleaseAt: "2026-09-08T15:53:18Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 66
maintainers: ["wuwentao", "renovate[bot]", "kmich"]
openGraphImageUrl: "https://opengraph.githubassets.com/edd667abb216df4f8347c0b6273af26b98a8132a6e03eac648573ef1b5176d2f/wuwentao/midea-lan"
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
