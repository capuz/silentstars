---
repo: "Montimage/mmt-dpi"
name: "mmt-dpi"
description: "A high-performance C library for deep packet inspection (DPI), designed to extract data attributes from network packets, server logs, and structured events for real-time traffic analysis."
readmeQualityOk: true
url: "https://github.com/Montimage/mmt-dpi"
homepage: "https://montimage.github.io/mmt-dpi/"
language: "C"
languages: ["C"]
languagePcts: [88]
topics: ["deep-packet-inspection", "dpi", "network"]
stars: 14
forks: 6
openIssues: 8
closedIssues: 28
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2022-01-20T16:24:40Z"
lastCommitAt: "2026-11-17T14:32:21Z"
lastReleaseAt: "2023-07-17T08:41:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 70
maintainers: ["luongnv89", "dev-montimage", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/10cd0619418b01b5b52414b6dd1292e7c5b50d973241e2c8f26097a01a692692/Montimage/mmt-dpi"
---

# MMT-DPI

**[Documentation site → montimage.github.io/mmt-dpi](https://montimage.github.io/mmt-dpi/)**

A high-performance C library for deep packet inspection (DPI), designed to extract data attributes from network packets, server logs, and structured events for real-time traffic analysis. Current release: [v1.10.3](https://github.com/Montimage/mmt-dpi/blob/HEAD/CHANGELOG.md).

## Key Features

- **Protocol Classification** - Automatic identification and classification of network traffic across 677 protocols
- **Attribute Extraction** - Extract detailed protocol-specific fields (IPs, ports, headers, payloads, etc.)
- **Session Tracking** - Track and analyze network sessions with flow-level statistics (RTT, retransmissions, byte/packet counts)
- **Extensible Plugin Architecture** - Add new protocol support via modular plugins
- **Wide Protocol Coverage** - TCP/IP stack, HTTP/HTTP2, QUIC (RFC 9000), DNS, FTP, DTLS, GTP, MQTT, OSPF, RADIUS, DICOM, syslog (RFC 3164/5424), PTP, and more
- **5G/LTE Mobile Protocols** - NAS, S1AP, NGAP, GTPv2, Diameter for mobile network monitoring
- **Linux-Based** - Supports major Linux distributions (Debian/Ubuntu, Rocky Linux/CentOS Stream, Fedora,…
