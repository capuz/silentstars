---
repo: "ananthb/starla"
name: "starla"
description: "Unofficial RIPE Atlas Software Probe in Rust"
readmeQualityOk: true
url: "https://github.com/ananthb/starla"
homepage: "https://ananthb.github.io/starla/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 8
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 6
recentReleases: 3
createdAt: "2026-01-11T09:32:05Z"
lastCommitAt: "2026-10-14T08:58:04Z"
lastReleaseAt: "2026-09-07T07:58:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 81
maintainers: ["ananthb", "dependabot[bot]", "hosted-weblate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9bae3f84e1343b176ad93e252dff47e5b7c6005f370f199387212bca19b0dca/ananthb/starla"
---

# Starla

An alternative unofficial [RIPE Atlas](https://atlas.ripe.net) software probe written in Rust.

## Features

- **All measurement types**: Ping, Traceroute, DNS, HTTP, TLS, NTP
- **Pure Rust SSH**: no OpenSSH dependency, uses `russh`
- **No local ports**: all communication flows through the SSH tunnel
- **Minimal container image**: just the binary + CA certs, multi-arch (amd64/arm64)
- **Home Assistant add-on**: packaged in [ananthb/hass-addons](https://github.com/ananthb/hass-addons)
- **NixOS module**: declarative configuration with systemd hardening
- **Home Manager module**: user-level service with launchd (macOS) or systemd (Linux)
- **macOS app bundle**: Starla Tray.app with DMG installer and Install CLI script
- **Prometheus metrics**: optional observability export
- **Bounded in-memory result queue**: configurable capacity, drops oldest when full
- **Scamper backend (Linux)**: every Linux build statically links the
  [`rscamper`](https://crates.io/crates/rscamper) bindings, so ping and
  traceroute can be routed through a running scamper daemon by setting
  `"backend": "scamper"` on the measurement. Hosts without scamper
  installed are unaffected unless the…
