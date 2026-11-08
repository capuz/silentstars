---
repo: "haxqer/ip2geo"
name: "ip2geo"
description: "A fast, zero-dependency IP-geolocation reader for Go."
readmeQualityOk: true
url: "https://github.com/haxqer/ip2geo"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-07-10T07:39:55Z"
lastCommitAt: "2026-11-08T14:04:29Z"
lastReleaseAt: "2026-11-08T10:39:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 67
undervaluedScore: 43
maintainers: ["haxqer"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9360bfce1f3794f647bdbf40ffd6c4db1ca0b95ecc098f7b98df98c4737dbf5/haxqer/ip2geo"
---

# ip2geo

A fast, **zero-dependency** IP-geolocation reader for Go.

You convert a MaxMind GeoIP2 / GeoLite2 **City** `.mmdb` into a compact `.geoc`
file once, then look up IPv4 **and** IPv6 addresses in it. On random IPv4 a
lookup is a median **14.5× (city profile) to 58× (country profile) faster**
than [`oschwald/geoip2-golang`](https://github.com/oschwald/geoip2-golang)
`City()`. The input is the same `netip.Addr`, but `Lookup` returns
`(Record, bool)` rather than geoip2-golang's `(*City, error)`.

## Speed

5,000,000 random IPv4 lookups, Apple M3, single core, best of 3 per run;
each figure is the median of 5 runs. The speedup column divides every row by
`geoip2-golang` `City()` (median of the 5 per-run ratios):

| reader | ns / lookup | throughput | speedup vs `City()` |
|---|--:|--:|--:|
| `geoip2-golang` `City()` | 1768 | 0.6 M/s | 1× (baseline) |
| `geoip2-golang` `Country()` | 1121 | 0.9 M/s | 1.6× |
| **`ip2geo` `Lookup()` — city profile** | **119** | **8.4 M/s** | **14.5×** (13.2–19.3× over 5 runs) |
| **`ip2geo` `Lookup()` — country profile** | **30.5** | **32.8 M/s** | **58×** |

Same input addresses for every row. The city profile returns country, top
region, city,…
