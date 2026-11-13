---
repo: "NevermoreSSH/SkyNode"
name: "SkyNode"
description: "AutoScript VPN Xray SSH Websocket"
readmeQualityOk: true
url: "https://github.com/NevermoreSSH/SkyNode"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 12
forks: 16
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-12-13T07:05:56Z"
lastCommitAt: "2026-11-13T18:31:22Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 61
undervaluedScore: 57
maintainers: ["NevermoreSSH"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac1661c1c5a918cec1d31f90008a0c1fa8abcb7f0998c030d674bea4efddcf62/NevermoreSSH/SkyNode"
---

**Release Notes:** [HERE](https://github.com/NevermoreSSH/SkyNode/blob/main/releasenotes.txt) (Last updated: 13/11/2026)


♦️Autoscript SSH XRAYS Websocket Multiport By NevermoreSSH♦️

⚠️ System Requirements ⚠️
- Minimum 1GB RAM
- Debian10 above / Ubuntu20 above
- Recommended Debian for fast installation.
- Tested with VPS AWS, DigitalOcean, Vultr, GBcloud (Debian 11,12,13)

Setup:
```
apt update -y && apt upgrade -y && apt dist-upgrade -y && apt install -y screen wget curl && wget https://raw.githubusercontent.com/NevermoreSSH/SkyNode/main/install/setup.sh && chmod +x setup.sh && sed -i -e 's/\r$//' setup.sh && screen -S setup ./setup.sh
```

license key 2025-2026:
```
MNVR7X-M1M3AF-WWV7DT-RJKFQ7-R5V7XE-JWYPO7
```

Any Fix
1. For Ubuntu22 or above got problem : Command 'menu' is available in '/usr/local/bin/menu' The command could not be located because '/usr/local/bin' is not included in the PATH environment variable. menu: command not found
```
echo 'export PATH="/usr/local/bin:$PATH"' >> /root/.bashrc
source /root/.bashrc
```

2. If the installation script gets stuck due to IPv6 connectivity, temporarily disable IPv6 and run the installation again.…
