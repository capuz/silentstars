---
repo: "slobys/openclash-auto-installer"
name: "openclash-auto-installer"
description: "OpenClash one-click install/update/uninstall/repair scripts for OpenWrt, iStoreOS and ImmortalWrt"
originalDescription: "OpenClash one-click install/update/uninstall/repair scripts for OpenWrt, iStoreOS and ImmortalWrt"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/slobys/openclash-auto-installer"
language: "Shell"
languages: ["Shell"]
languagePcts: [91]
topics: ["immortalwrt", "istoreos", "openclash", "openwrt", "shell-script"]
stars: 416
forks: 187
openIssues: 30
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-03-28T16:28:00Z"
lastCommitAt: "2026-10-07T10:30:53Z"
lastReleaseAt: "2026-10-07T10:32:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 51
undervaluedScore: 8
maintainers: ["slobys"]
openGraphImageUrl: "https://opengraph.githubassets.com/c64c28a312f5a3c5298821acd1e490af341fa79ce51222f992f2a4aeb2e8863f/slobys/openclash-auto-installer"
---

# OpenClash Auto Installer

Proxy plugin installation, update, uninstall, and check script collection for **OpenWrt / iStoreOS / ImmortalWrt**.

Already integrated:

- OpenClash
- PassWall
- PassWall2
- Nikki
- SmartDNS
- MosDNS
- daed

---

## One-Click Usage

Recommended to use menu mode directly, installation, updates, version checking, and uninstall are all in the menu:

```sh
wget -qO /usr/bin/openclash-menu https://raw.githubusercontent.com/slobys/openclash-auto-installer/main/menu.sh && chmod +x /usr/bin/openclash-menu && openclash-menu
```

When accessing GitHub is slow domestically, you can use the Gitee entry:

```sh
wget -qO /usr/bin/openclash-menu https://gitee.com/naiyou88/openclash-auto-installer/raw/main/menu.sh && chmod +x /usr/bin/openclash-menu && OPENCLASH_AUTO_BASE_URL=https://gitee.com/naiyou88/openclash-auto-installer/raw/main openclash-menu
```

If the system has already installed `curl`, you can also use:

```sh
curl -fsSL https://raw.githubusercontent.com/slobys/openclash-auto-installer/main/menu.sh -o /usr/bin/openclash-menu && chmod +x /usr/bin/openclash-menu && openclash-menu
```

Full project method:

```sh
git clone…
