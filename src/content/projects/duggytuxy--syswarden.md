---
repo: "duggytuxy/syswarden"
name: "syswarden"
description: "Active Defense and HIDS/HIPS/WAAP Out-of-Band Orchestration for Critical Linux Infrastructure"
readmeQualityOk: true
url: "https://github.com/duggytuxy/syswarden"
homepage: "https://syswarden.io"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["abuseipdb-integration", "blocklists", "cybersecurity-tools", "firewall", "firewall-configuration", "firewall-rules", "ipv4-address", "malicious-ips", "security-tools", "syswarden"]
stars: 315
forks: 25
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-02-09T15:37:52Z"
lastCommitAt: "2026-08-03T06:43:19Z"
lastReleaseAt: "2026-08-02T05:43:51Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 100
undervaluedScore: 32
maintainers: ["duggytuxy", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1153695079/a91b4849-fd53-411b-82d6-0caf778f8469?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260803%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260803T064626Z&X-Amz-Expires=300&X-Amz-Signature=e169697798d2a5867d665db5703d4748d9bdd37944f42d81acd35b4f460d282a&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTczOTg4NiwibmJmIjoxNzg1NzM5NTg2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.zE0YGfsdxjgMa33RapBNADM7dhWFnTOAmP-oOQsP1K0"
fundingLinks: ["KO_FI:https://ko-fi.com/laurentmduggytuxy"]
discussionCount: 3
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
> **Active Defense and HIDS/HIPS/WAAP Out-of-Band Orchestration for Critical Linux Infrastructure**

  </a>

**SysWarden** is an Enterprise-grade Hardened Host Intrusion Detection & Prevention System (HIDS - HIPS) engineered in **100% Native Golang**. Designed for critical Linux infrastructures, it enforces automated part of CIS Level 2 hardening, integrates global Threat Intelligence, and orchestrates dynamic network defense with absolute zero-trust execution.

It acts as the definitive first line of defense for critical GNU/Linux infrastructures. By fusing dynamic firewall orchestration (`nftables`/`iptables`/`pf`), global Threat Intelligence ([Data-Shield IPv4 Blocklists](https://github.com/duggytuxy/Data-Shield_IPv4_Blocklist), GeoIP, ASN), a high-speed memory-safe WAF daemon (`syswarden-core`), and SIEM alert routing natively via Go, SysWarden neutralizes threats at the network (L2/L3/L4) and application (L7) levels without exposing your kernel to shell injection risks.

> [!IMPORTANT]
> **Zero CWE Mitigation:** Re-architected entirely in Go, SysWarden v2 strongly mitigates risks of OS Command…
