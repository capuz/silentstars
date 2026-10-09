---
repo: "Shark-vil/xray_vless_easy_install_script"
name: "xray_vless_easy_install_script"
description: "A simple Xray server setup manager: VLESS (REALITY, XHTTP, Vision, WS), Trojan, VMess, Shadowsocks, Hysteria2, experimental Turnable. Manage inbounds, routing (WARP, TOR, own servers) and the camouflage site from a menu; changes are validated before going live. Adopts existing Xray setups."
readmeQualityOk: true
url: "https://github.com/Shark-vil/xray_vless_easy_install_script"
homepage: "https://shark-vil.github.io/xray_vless_easy_install_script/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [60, 31]
topics: ["bash", "hysteria2", "installation-scripts", "linux", "nginx-server", "shadowsocks-server", "tor", "trojan", "turnable", "vless"]
stars: 74
forks: 12
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-25T00:25:30Z"
lastCommitAt: "2026-10-09T10:49:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 35
maintainers: ["Shark-vil"]
openGraphImageUrl: "https://opengraph.githubassets.com/d4a90c17d690ad7786c7693d720a846796b75f1ea4b424ea3521598c44b26222/Shark-vil/xray_vless_easy_install_script"
---

# XVEI — A simple Xray server setup manager

## [Документация на русском](https://github.com/Shark-vil/xray_vless_easy_install_script/blob/HEAD/docs/RU.md)

📖 **Documentation site: <https://shark-vil.github.io/xray_vless_easy_install_script/>**

XVEI installs and configures [Xray-core](https://github.com/XTLS/Xray-install)
(and optionally [Hysteria2](https://v2.hysteria.network/)) and then lets you
reshape the configuration **without reinstalling** — inbounds, WARP / TOR and
your own outbounds, routing rules and templates, the camouflage site. Every
change is validated with `xray -test` before it is applied; a failed check
leaves the running config untouched. An Xray that is already set up on the
server is taken over as is.

Run everything as **root**. Supported: Ubuntu 20.04+, Debian 11+, CentOS
Stream 9 ([details](https://github.com/Shark-vil/xray_vless_easy_install_script/blob/HEAD/docs/en/install.md#supported-systems)).

## Install

Ubuntu / Debian:

```bash
apt-get update && apt-get -y install curl
```

CentOS:

```bash
dnf -y install curl tar
```

Install and run the setup wizard:

```bash
bash <(curl -fsSL…
