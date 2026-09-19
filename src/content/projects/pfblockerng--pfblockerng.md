---
repo: "pfBlockerNG/pfBlockerNG"
name: "pfBlockerNG"
description: "pfBlockerNG - IP and DNS blocking for pfSense"
readmeQualityOk: true
url: "https://github.com/pfBlockerNG/pfBlockerNG"
homepage: "https://pfBlockerNG.com"
language: "Python"
languages: ["Python", "PHP"]
languagePcts: [46, 42]
topics: ["dns", "dns-over-https", "dns-over-tls", "dnsbl", "firewall", "pfblockerng", "pfsense", "pfsense-netgate", "unbound", "unbound-dns"]
stars: 20
forks: 0
openIssues: 144
closedIssues: 1466
watchers: 1
contributors: 4
recentReleases: 9
createdAt: "2026-05-29T07:20:30Z"
lastCommitAt: "2026-09-19T01:16:58Z"
lastReleaseAt: "2026-09-15T21:14:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 52
maintainers: ["andrebrait", "github-actions[bot]", "BBcan177"]
openGraphImageUrl: "https://opengraph.githubassets.com/90efc1399089874e48f841601c827ba18ac0d527698bef79283e2356576fc0e7/pfBlockerNG/pfBlockerNG"
fundingLinks: ["GITHUB:https://github.com/andrebrait", "PATREON:https://patreon.com/BBcan177"]
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
