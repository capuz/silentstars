---
repo: "AbolfazlTafakori/w-ui"
name: "w-ui"
description: "WireGuard, AmneziaWG and OpenVPN panel for selling access — kernel-enforced quotas, expiry, device limits, subscription pages, Telegram bot, one-command install"
readmeQualityOk: true
url: "https://github.com/AbolfazlTafakori/w-ui"
homepage: "https://abolfazltafakori.github.io/w-ui/"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [61, 26]
topics: ["amneziawg", "golang", "nftables", "openvpn", "self-hosted", "subscription", "telegram-bot", "vpn-panel", "vue", "wireguard"]
stars: 25
forks: 12
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-09-02T19:04:46Z"
lastCommitAt: "2026-09-28T10:05:34Z"
lastReleaseAt: "2026-09-28T10:07:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 51
maintainers: ["AbolfazlTafakori", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/baa36cf550c5e2dc07aeb2fca2d8ac62737fae9b8dbfc719cdb754c8f0d88256/AbolfazlTafakori/w-ui"
---

<h1 align="center">W-UI</h1>

  A WireGuard, AmneziaWG and OpenVPN panel for selling access — quotas the kernel enforces, expiry, device limits, subscription links, and a management script with the classic panel layout.
</p>

</p>

</p>

</p>

---

## Install

One command, on a fresh Ubuntu, Debian, AlmaLinux, Rocky or Fedora server:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/AbolfazlTafakori/w-ui/main/install.sh)
```

It asks a few questions — port, URL path, administrator, database, certificate — and then runs on its own. Press enter through all of it and nothing about the result is guessable: a random port, a random path, a random administrator name, a generated password, and a Let's Encrypt certificate for the server's own address that renews itself. When it finishes it prints the address, the credentials and an API token, once, and writes the same to `/etc/wui/install-result.env` (root only) for automation to pick up.

```
  ═══════════════════════════════════════════
       Panel Installation Complete!
  ═══════════════════════════════════════════
  Username:    kX4mQ9vTr2
  Password:    ••••••••••••••••
  Port:        41873
  Sub Port:    28114…
