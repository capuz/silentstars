---
repo: "rkosegi/netflow-collector"
name: "netflow-collector"
description: "Simple Netflow V5 exporter for prometheus"
readmeQualityOk: true
url: "https://github.com/rkosegi/netflow-collector"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["netflow-collector", "netflow-v5", "prometheus-exporter"]
stars: 22
forks: 5
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2022-08-29T12:32:31Z"
lastCommitAt: "2026-07-19T06:10:24Z"
lastReleaseAt: "2025-10-05T14:40:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 65
maintainers: ["dependabot[bot]", "rkosegi"]
openGraphImageUrl: "https://opengraph.githubassets.com/df959345dd23a8ff86231db2393f03a8838ae54c9270fd2d9875011d997633fc/rkosegi/netflow-collector"
discussionCount: 1
---

# Netflow exporter

Have you ever wondered where is your internet traffic going?

## How it works

Simply put, it uses netflow protocol, specifically it uses V5 version (IPv4 only) for simplicity.
In order for your setup to work, you will either need [nfdump](https://github.com/phaag/nfdump)
or dedicated hardware such as [Mikrotik RB941](https://mikrotik.com/product/RB941-2nD)
Flows are then fed into collector that aggregates them as metrics.
Geolocation info is gathered from Maxmind GeoIP Lite database.
Necessary files can be obtained on RHEL OS (or similar) with `sudo dnf install geolite2-country geolite2-asn`

Example configuration for routerboard
```
/ip traffic-flow
set enabled=yes interfaces=wan,bridge1
/ip traffic-flow target
add dst-address=192.168.0.10 port=30000 version=5
```

_Note `192.168.0.10` is address of machine where exporter is running_

## Configurable metrics

Flows are aggregated into metrics in fully configurable manner.

Example metric
```yaml
  - name: traffic_detail
    description: Traffic detail
    labels:
      - name: sampler
        value: sampler
        converter: ipv4
      - name: protocol
        value: proto_name
        converter: str
      -…
