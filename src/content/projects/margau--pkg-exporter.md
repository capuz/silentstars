---
repo: "margau/pkg-exporter"
name: "pkg-exporter"
description: "Mirror only, head over to codeberg for PRs and Issues. "
readmeQualityOk: true
url: "https://github.com/margau/pkg-exporter"
homepage: "https://codeberg.org/margau/pkg-exporter/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["prometheus", "prometheus-exporter", "exporter", "hacktoberfest"]
stars: 42
forks: 9
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2021-06-26T15:23:09Z"
lastCommitAt: "2026-11-04T21:20:14Z"
lastReleaseAt: "2023-01-19T19:39:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 46
maintainers: ["margau"]
openGraphImageUrl: "https://opengraph.githubassets.com/7369f30ff701536340b51483c558e8608baa6ec0c7185e887bb5a057bd46e1bd/margau/pkg-exporter"
---

# Prometheus PKG Exporter

This project provides an textfile-based exporter for apt-repositories. 

**The Project is in its early development phases. Interfaces may change without notice. Compatibility and Stability do vary.**

For the changelog, use the [Releases-Section on GitHub](https://github.com/margau/pkg-exporter/releases/)

## Exported Metrics

At the moment, the packages installed, upgradable, broken and autoremovable are exported per repository as gauge. The label set depends on the packet manager type.

Additionally, `pkg_reboot_required` is exported to indicate that an reboot is needed.

```
# HELP pkg_reboot_required Node Requires an Reboot
# TYPE pkg_reboot_required gauge
pkg_reboot_required 1.0
# HELP pkg_update_start_time timestamp of last apt update start
# TYPE pkg_update_start_time gauge
pkg_update_start_time 1.641382890503045e+09
# HELP pkg_update_end_time Timestamp of last apt update finish
# TYPE pkg_update_end_time gauge
pkg_update_end_time 1.641382892755024e+09
# HELP pkg_update_time_available Availability of the apt update timestamp
# TYPE pkg_update_time_available gauge
pkg_update_time_available 1.0
# HELP pkg_installed Installed packages per origin
#…
