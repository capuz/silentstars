---
repo: "duggytuxy/syswarden"
name: "syswarden"
description: "Active Defense and HIDS/HIPS Orchestration for Critical Linux Infrastructure"
readmeQualityOk: true
url: "https://github.com/duggytuxy/syswarden"
homepage: "https://syswarden.io"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["abuseipdb-integration", "blocklists", "cybersecurity-tools", "firewall", "firewall-configuration", "firewall-rules", "ipv4-address", "malicious-ips", "security-tools", "syswarden"]
stars: 293
forks: 24
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-02-09T15:37:52Z"
lastCommitAt: "2026-07-09T20:45:52Z"
status: "thriving"
tags: ["funded"]
healthScore: 100
undervaluedScore: 29
maintainers: ["duggytuxy", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/07d19c2a43a20d777531b2472398ea76f3f7631dcea05ffe99dc69f674020023/duggytuxy/syswarden"
fundingLinks: ["KO_FI:https://ko-fi.com/laurentmduggytuxy"]
discussionCount: 2
---

<br><br>
  </a>
  </a>

  <br>
  <br>

  </a>
  </a>
  </a>
</p>

# SysWarden v3 🌟

  </a>

**SysWarden** is an Enterprise-grade Hardened Host Intrusion Detection & Prevention System (HIDS - HIPS) engineered in **100% Native Golang**. Designed for critical Linux infrastructures, it enforces automated CIS Level 2 hardening, integrates global Threat Intelligence, and orchestrates dynamic network defense with absolute zero-trust execution.

It acts as a ruthless first line of defense. By fusing dynamic firewall orchestration (`nftables`/`iptables`/`pf`), global Threat Intelligence ([Data-Shield IPv4/IPv6](https://github.com/duggytuxy/Data-Shield_IPv4_Blocklist), GeoIP, ASN), a high-speed memory-safe WAF daemon (`syswarden-core`), and SIEM alert routing natively via Go, SysWarden neutralizes threats at the network (L2/L3/L4) and application (L7) levels without exposing your kernel to shell injection risks.

> [!IMPORTANT]
> **Zero CWE Mitigation:** Re-architected entirely in Go, SysWarden v2 strongly mitigates risks of OS Command Injection (CWE-78), Memory Corruption (CWE-119), and Resource Exhaustion (CWE-400), seamlessly accelerating your **ISO 27001, NIS2, and CIS Benchmark**…
