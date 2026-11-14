---
repo: "viral32111/apc-ups-exporter"
name: "apc-ups-exporter"
description: "Prometheus exporter for APC UPS status data."
readmeQualityOk: true
url: "https://github.com/viral32111/apc-ups-exporter"
homepage: "http://www.apcupsd.org/manual"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["exporter", "prometheus", "ups", "metrics"]
stars: 17
forks: 3
openIssues: 4
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-09-29T21:31:48Z"
lastCommitAt: "2026-11-14T22:02:17Z"
lastReleaseAt: "2024-08-28T19:12:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 40
maintainers: ["dependabot[bot]", "viral32111"]
openGraphImageUrl: "https://opengraph.githubassets.com/34431ed8a03f08d0ad4cce973e38d1ea2a04bf9af988e9ede460d355500f0619/viral32111/apc-ups-exporter"
---

# APC UPS Exporter

This is a [Prometheus exporter](https://prometheus.io/docs/instrumenting/exporters/) for the status data reported by [APC's Uninterruptible Power Supplies](https://www.apc.com/uk/en/).

The status data is fetched from [apcupsd](http://www.apcupsd.org/)'s *Network Information Server* (NIS), so [ensure it is enabled in your `apcupsd.conf` configuration file](http://www.apcupsd.org/manual/manual.html#configuration-directives-used-by-the-network-information-server).

I test this against my [APC Back-UPS 850VA (BE850G2-UK)](https://www.apc.com/shop/uk/en/products/APC-Back-UPS-850VA-230V-USB-Type-C-and-A-charging-ports-8-BS-1363-outlets-2-surge-/P-BE850G2-UK).

## 📥 Usage

Download the [latest release](https://github.com/viral32111/apc-ups-exporter/releases/latest) for your platform. There are prebuilt binaries for Linux and Windows, covering both 32-bit and 64-bit architectures of x86 and ARM. There are additional Linux builds to accommodate glibc and musl systems.

The utility does not expect any command-line arguments. There are sensible defaults in place, so it *should* run without any configuration. However, functionality can be changed using the optional…
