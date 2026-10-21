---
repo: "mrhenrike/WirelessXPL-Forge"
name: "WirelessXPL-Forge"
description: "Wireless attack surface & lab orchestration — PCAP, Wi-Fi, BLE, AWDL, rogue AP, mesh, Bruce wardriving. pip: wirelessxpl. BSD-3-Clause."
readmeQualityOk: true
url: "https://github.com/mrhenrike/WirelessXPL-Forge"
homepage: "https://mrhenrike.github.io/WirelessXPL-Forge/"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["offensive-security", "wireless-security", "wireless-research", "ble-scanner", "cybersecurity", "cybersecurity-research", "cybersecurity-tools", "hacking", "hacking-tool", "hacking-toolkit"]
stars: 9
forks: 4
openIssues: 0
closedIssues: 53
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-04-05T05:51:14Z"
lastCommitAt: "2026-10-21T20:00:54Z"
lastReleaseAt: "2026-10-19T20:46:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 69
maintainers: ["mrhenrike"]
openGraphImageUrl: "https://opengraph.githubassets.com/29314ef81e7d5f4b8365faf9539be390d2953ca06b9f8459a8ef46a0179bea2f/mrhenrike/WirelessXPL-Forge"
---

---

> **Platform Note:** This framework is designed and tested primarily on **Linux** (Debian/Ubuntu/Kali). Most hardware-dependent modules (wireless adapters, USB devices, raw socket access, firmware tools) require Linux. Running on Windows or macOS may cause errors or limited functionality in many modules. Linux is strongly recommended for maximum compatibility.

---

# WirelessXPL-Forge

> **Modular wireless security research framework** for 802.11 (WPA2/WPA3/WPE/EAPOL), Bluetooth Classic, BLE, Zigbee, RFID and ESP32 lab workflows — designed for authorised penetration testing, research, and education.

**Version:** 2.0.3 | **License:** BSD-3-Clause | **Python:** 3.8 - 3.13

**Language:** **English (en-US)** — default · **Português (pt-BR):** [README.pt-BR.md](https://github.com/mrhenrike/WirelessXPL-Forge/blob/HEAD/README.pt-BR.md)

---

## Instalacao / Installation

### Basico / Basic (clone)

```bash
git clone https://github.com/mrhenrike/WirelessXPL-Forge.git
cd WirelessXPL-Forge
python3 -m pip install -r requirements.txt
cp pyproject.toml.example pyproject.toml   # opcional — editable install
pip install -e ".[wifi]"
python wxf.py
```

> `pyproject.toml` é **local** (não…
