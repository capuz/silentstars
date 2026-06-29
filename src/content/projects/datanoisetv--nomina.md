---
repo: "DatanoiseTV/Nomina"
name: "Nomina"
description: "Secure split-horizon DNS server for homelabs: authoritative + resolver + ad-filtering + DNSSEC + DoT/DoH/DoQ + web UI, in a single Rust binary."
url: "https://github.com/DatanoiseTV/Nomina"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [70, 26]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-27T14:07:24Z"
lastCommitAt: "2026-06-29T07:23:40Z"
lastReleaseAt: "2026-06-28T12:53:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["DatanoiseTV"]
openGraphImageUrl: "https://opengraph.githubassets.com/40176f2e64770b8e1a57c8887828250f0490abc3556750687d4e99ab0c947acb/DatanoiseTV/Nomina"
---

# Nomina

A secure, split-horizon DNS server for homelabs and small networks — in a
**single self-contained Rust binary**. Nomina is authoritative for your own
zones, forwards or recurses for everything else, blocks ads and trackers like
Pi-hole, speaks the modern encrypted transports, and ships with a web UI and a
JSON API.

```sh
cargo build --release
./target/release/nomina --dns-listen 0.0.0.0:53 --web-listen 127.0.0.1:8053
```

</p>

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/request-log.png" alt="Request log"><br><sub><b>Request log</b> — paginated, filterable, with one-click block / allow / rewrite.</sub></td>
    <td width="50%"><img src="docs/screenshots/zone-editor.png" alt="Zone editor"><br><sub><b>Zone editor</b> — structured per-type records, SOA, and per-zone DNSSEC signing.</sub></td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/screenshots/blocklists.png" alt="Blocklist catalog"><br><sub><b>Blocklists</b> — one-click subscribe from a catalog of ~20 well-known lists.</sub></td>
    <td width="50%"><img src="docs/screenshots/dhcp.png" alt="DHCP scopes and leases"><br><sub><b>DHCP</b> — IPv4/IPv6 scopes, reservations, leases, and full…
