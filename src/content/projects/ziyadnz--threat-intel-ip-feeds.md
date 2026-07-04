---
repo: "ziyadnz/threat-intel-ip-feeds"
name: "threat-intel-ip-feeds"
description: "Automated IP blacklist aggregator from 23 threat intelligence sources - updated hourly via GitHub Actions"
readmeQualityOk: true
url: "https://github.com/ziyadnz/threat-intel-ip-feeds"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["blue-team", "blue-team-tool", "blue-teaming-tools", "cybersecurity", "cybersecurity-tools", "github-actions", "ip-blacklist", "ip-blacklists", "python", "soc"]
stars: 18
forks: 10
openIssues: 0
closedIssues: 99
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-04T13:07:26Z"
lastCommitAt: "2026-07-04T23:14:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 52
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1201277777/40c370b0-ac70-45b1-a905-c78b25bf1cf7"
discussionCount: 1
---

# Threat Intel IP Feeds

**Hourly updated, firewall-ready IP blocklist aggregated from 18+ threat intelligence sources. ~120,000+ unique malicious IPs, deduplicated, validated, and ready to import.**

```
https://raw.githubusercontent.com/ziyadnz/threat-intel-ip-feeds/main/output/hourlyIPv4.txt
```
Copy the URL above into your firewall, SIEM, or any tool that accepts a plain-text IP blocklist. One IP/CIDR per line, no comments, no headers. Updated every hour.

---

## Quick Usage Examples

### FortiGate

> Full documentation: [FortiGate External Block List Policy Guide](https://docs.fortinet.com/document/fortigate/7.0.0/administration-guide/891236/external-blocklist-policy)

<details>
<summary><b>Step-by-step GUI guide</b></summary>

#### Step 1 — Create External Threat Feed

Navigate to **Security Fabric > External Connectors > Create New > Threat Feeds > IP Address**

| Field | Value |
|-------|-------|
| **Name** | `ThreatIntel-IPFeed` |
| **URL** | `https://raw.githubusercontent.com/ziyadnz/threat-intel-ip-feeds/main/output/hourlyIPv4.txt` |
| **Refresh Rate** | `60` minutes |
| **Status** | Enabled |

After saving, the feed should show a green status with the number of…
