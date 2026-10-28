---
repo: "WMP/GlobalProtect-SAML-NetworkManager"
name: "GlobalProtect-SAML-NetworkManager"
description: "NetworkManager VPN plugin for GlobalProtect with SAML/SSO authentication - supports GNOME and KDE Plasma"
readmeQualityOk: true
url: "https://github.com/WMP/GlobalProtect-SAML-NetworkManager"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 10
forks: 6
openIssues: 10
closedIssues: 36
watchers: 1
contributors: 7
recentReleases: 2
createdAt: "2026-01-24T17:52:59Z"
lastCommitAt: "2026-10-28T09:57:37Z"
lastReleaseAt: "2026-10-03T05:58:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 70
maintainers: ["claude", "WMP"]
openGraphImageUrl: "https://opengraph.githubassets.com/b22d7ce33557dd3b143d9f0f7f56339d6e46861bb49e95c919e50d2345d697b0/WMP/GlobalProtect-SAML-NetworkManager"
---

# NetworkManager GlobalProtect VPN Plugin

NetworkManager VPN plugin for GlobalProtect (Palo Alto Networks) with SAML/SSO authentication support.

The recordings are made by the end-to-end tests ([tests/e2e](https://github.com/WMP/GlobalProtect-SAML-NetworkManager/blob/HEAD/tests/e2e/README.md)):
the desktop, NetworkManager, the editors, the VPN service and Edge are real;
the company "Contoso", its sign-in pages and the VPN gateway are fictional.

## Features

- **NetworkManager integration** - manage VPN like any other connection
- **SAML/2FA authentication** via browser (Edge, Firefox, Chrome)
- **Standard login & RSA token portals** - interactive username/password/OTP
  prompts via desktop dialogs (see [docs/INTERACTIVE_AUTH.md](https://github.com/WMP/GlobalProtect-SAML-NetworkManager/blob/HEAD/docs/INTERACTIVE_AUTH.md))
- **Desktop support** - GNOME Settings (GTK3/GTK4) and KDE Plasma
- **Routing control** - configure which traffic goes through VPN
- **Systemd service** - automatic VPN service management via D-Bus

## Installation

Add the apt repository and install - dependencies, upgrades and the GNOME/Plasma
choice are handled by apt:

```bash
# old one-line setup from…
