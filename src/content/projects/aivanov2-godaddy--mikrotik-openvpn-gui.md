---
repo: "aivanov2-godaddy/mikrotik-openvpn-gui"
name: "mikrotik-openvpn-gui"
description: "A portable, self-hosted OpenVPN management dashboard for MikroTik RouterOS containers."
readmeQualityOk: true
url: "https://github.com/aivanov2-godaddy/mikrotik-openvpn-gui"
homepage: "https://github.com/aivanov2-godaddy/mikrotik-openvpn-gui"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["containers", "mikrotik", "openvpn", "python", "routeros", "self-hosted", "vpn"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 85
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-09-07T13:33:19Z"
lastCommitAt: "2026-10-29T21:24:56Z"
lastReleaseAt: "2026-10-04T15:13:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 63
maintainers: ["aivanov2-godaddy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d736447dd6a8df5f93dbec10eb7c84bb82fb837a0cb12d20045c83a61c69d3a/aivanov2-godaddy/mikrotik-openvpn-gui"
discussionCount: 6
---

# MikroTik OpenVPN GUI

MikroTik OpenVPN GUI is a self-hosted, WinBox-inspired control plane for an
OpenVPN service on RouterOS 7. It is not a visual-only UI: it deploys the
dashboard container, validates the router connection, and applies the selected
user, device-profile, policy, rate-limit, schedule, and access changes through
RouterOS while RouterOS remains the source of truth for identities,
certificates, sessions, and traffic policy.

> [!IMPORTANT]
> The current installer provisions and configures the dashboard around an
> existing RouterOS OpenVPN server, PPP profile, and CA. For an otherwise empty
> supported router, the optional **OpenVPN foundations** planner can generate a
> reviewable CA, server-certificate, address-pool, PPP-profile, and OpenVPN
> server plan. It never applies commands automatically, changes the normal
> installation path, or stores secrets in the public project. Review every
> generated RouterOS command before applying it and test on an isolated canary
> device where practical.

## Highlights

- Authenticate administrators against RouterOS; no second dashboard-password database.
- Add, edit, suspend, duplicate, and remove VPN users.
- Issue separate…
