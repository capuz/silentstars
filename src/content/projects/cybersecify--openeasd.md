---
repo: "cybersecify/OpenEASD"
name: "OpenEASD"
description: "Self-hosted external attack surface scanner. Subdomain enumeration + takeover detection, ports, CVEs, TLS, SSH, web vulns, EPSS/KEV prioritisation. 19 tools across 6 phases, one `docker run`. MIT-licensed."
readmeQualityOk: true
url: "https://github.com/cybersecify/OpenEASD"
homepage: "https://cybersecify.com/openeasd"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["attack-surface", "osint", "recon", "security", "self-hosted", "vulnerability-scanner", "docker", "infosec", "nuclei", "pentest-tool"]
stars: 24
forks: 17
openIssues: 6
closedIssues: 13
watchers: 1
contributors: 9
recentReleases: 2
createdAt: "2025-08-11T11:29:49Z"
lastCommitAt: "2026-09-09T08:18:11Z"
lastReleaseAt: "2026-08-24T10:19:08Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 74
maintainers: ["rathnakaragn", "ashok-kamat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8abf5ca19d49833df5a749e29f65a7bfc1164e6948c2e4b033ab780d5e41b12a/cybersecify/OpenEASD"
discussionCount: 4
---

</p>

# OpenEASD

**See what attackers see. Use it before they do.**

Use it as a **red teamer** to map external surface fast on targets you're authorised to test. Use it as a **defender** to see what's leaking out of your own infrastructure: subdomains, exposed ports, dangling CNAMEs, missing TLS, known CVEs, without paying $500-5000/mo for a commercial EASM platform.

OpenEASD wraps the open-source recon tools security teams already use: `subfinder`, `amass`, `alterx`, `dnsx`, `subzy`, `cloud_enum`, `naabu`, `nmap`, `httpx`, `gau`, `katana`, `nuclei`, `gitleaks`, behind a single web UI with scheduling, alerts, and findings tracking. Twenty-eight tools across DNS/DNSSEC, historical DNS records (passive; A/AAAA/MX a domain has resolved to over time), email (SPF/DMARC/DKIM/MTA-STS/open-relay), TLS, SSH, ports, CVEs, subdomain takeover, ASN/IP-range discovery, historical URLs, cloud assets, exposed secrets in JavaScript, leaked secrets in public GitHub (passive; searches GitHub's code-search API for the org's committed credentials and runs gitleaks over the hits — bring-your-own GitHub token), public-source infrastructure exposure (passive; internal hostnames, cloud buckets, and API…
