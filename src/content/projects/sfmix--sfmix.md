---
repo: "sfmix/sfmix"
name: "sfmix"
description: "San Francisco Metropolitan Internet eXchange"
readmeQualityOk: true
url: "https://github.com/sfmix/sfmix"
homepage: "https://sfmix.org/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [37, 27]
topics: ["internet-exchange-point", "internet-routing"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 10
recentReleases: 0
createdAt: "2023-06-17T23:50:17Z"
lastCommitAt: "2026-07-07T06:38:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 72
maintainers: ["jof", "dorkmatt"]
openGraphImageUrl: "https://opengraph.githubassets.com/7613476da7e28aba56c31f4f0746c3fa75169f04561ef22216e51d9316cc113f/sfmix/sfmix"
---

# 🌉 SFMIX

**San Francisco Metropolitan Internet eXchange** — a community-driven and operated Internet Exchange in the San Francisco Bay Area since 2006. Keeping Bay Area traffic local since before it was cool.

🔗 [sfmix.org](https://sfmix.org/) · 📬 tech-c@sfmix.org

---

## 🌐 `website/`

Hugo static site for [sfmix.org](https://sfmix.org/). Built and deployed to GitHub Pages via GitHub Actions (see `.github/workflows/website.yml`). Participants data is fetched from the looking glass at build time.

## 🔧 `ansible/`

Ansible roles and playbooks that keep the lights on — network devices, servers, and services. Highlights include:

- **`sfmix_arouteserver`** / **`sfmix_route_server_linux`** — route server config generation ([ARouteServer](https://arouteserver.readthedocs.io/)) and BIRD deployment
- **`sfmix_looking_glass`** — looking glass and participant data publishing
- **`sfmix_network_devices`** — peering switch configuration management
- **`sfmix_dns`** — authoritative DNS zone management
- **`snappy`** — the speed test stack (LibreSpeed, OpenSpeedTest, TAUC TR-143, iperf3)
- …and more (monitoring, flow collection, RPKI, etc.)

## 🔭 `looking-glass/`

A multi-frontend…
