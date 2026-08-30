---
repo: "pfBlockerNG/pfBlockerNG"
name: "pfBlockerNG"
description: "pfBlockerNG - IP and DNS blocking for pfSense"
readmeQualityOk: true
url: "https://github.com/pfBlockerNG/pfBlockerNG"
homepage: "https://pfBlockerNG.com"
language: "Python"
languages: ["Python", "PHP"]
languagePcts: [47, 42]
topics: ["dns", "dns-over-https", "dns-over-tls", "dnsbl", "firewall", "pfblockerng", "pfsense", "pfsense-netgate", "unbound", "unbound-dns"]
stars: 18
forks: 0
openIssues: 175
closedIssues: 1244
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2026-05-29T07:20:30Z"
lastCommitAt: "2026-08-30T00:45:25Z"
lastReleaseAt: "2026-08-25T16:52:50Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 53
maintainers: ["andrebrait", "BBcan177"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ad2b6b4978366a39c808d940b011a41a2853db568b14fa45fd8b2443bd569a3/pfBlockerNG/pfBlockerNG"
---

<h1>pfBlockerNG</h1>

<p><strong>This is the OFFICIAL repository for pfBlockerNG</strong></p>
<p>pfBlockerNG is created by <a href="https://github.com/BBcan177">BBcan177</a>, who designs, supports and maintains it with <a href="https://github.com/andrebrait">André Brait</a>.</p>
<p>
</p>

</div>

pfBlockerNG downloads curated IP and domain feeds and turns them into live
firewall and DNS policy: IP feeds become firewall rules, GeoIP lets you block
or permit by country, and DNSBL enforces domain blocklists directly in the
Unbound resolver. It adds reports, alerts, a dashboard widget, and HA/CARP
sync on top.

> [!NOTE]
> For day-to-day usage and configuration, start with the
> [official pfBlockerNG documentation](https://pfblockerng.com/).

## Features

- **IP blocking** — IPv4/IPv6 feeds become firewall rules (Deny / Permit /
  Match, inbound/outbound), with dedup, CIDR aggregation, and suppression of
  your own networks.
- **GeoIP** — block or permit by continent or country (MaxMind GeoLite2).
- **DNSBL** — domain blocklists enforced inside the Unbound resolver;
  sinkhole-VIP or NULL responses, SafeSearch enforcement, and per-name reports.
- **Adblock Plus / EasyList feeds** —…
