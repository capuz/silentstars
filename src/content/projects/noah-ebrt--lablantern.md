---
repo: "noah-ebrt/LabLantern"
name: "LabLantern"
description: "Self-hosted vulnerability monitoring for homelabs and small networks. Scans every Linux host, container image and appliance daily (Grype + OSV), flags what is actively exploited or exposed to the internet, warns early from security news and gives the exact fix command. LAN-only, agents open no ports, dangerous actions need your passkey."
readmeQualityOk: true
url: "https://github.com/noah-ebrt/LabLantern"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [63, 20]
topics: ["cve", "docker", "grype", "homelab", "linux", "osv", "sbom", "security", "self-hosted", "selfhosted"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-03T09:12:33Z"
lastCommitAt: "2026-11-14T21:59:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 40
maintainers: ["noah-ebrt"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e559500c92d4c143cf8f8323f68c0f425c60c5046689ac9664769e70b5f8765/noah-ebrt/LabLantern"
---

# LabLantern

**Self-hosted vulnerability monitoring for your homelab or small network.**

```bash
curl -fsSL https://raw.githubusercontent.com/noah-ebrt/LabLantern/main/install.sh | sh
```

LabLantern keeps track of every Linux host, container and appliance in your network, checks them for known security
vulnerabilities every day, and tells you clearly what needs your attention: what is critical, what is merely
outdated, what is reachable from the internet, and which check could not run. It runs entirely on your own hardware
and its web interface is reachable only in your LAN.

**In short:**

- **One overview** of all hosts, containers and devices, with a clear red / yellow / green status.
- **Daily scans** of operating system packages and every running container image.
- **Concrete next steps:** which image or package to update, and the command to do it.
- **No silent gaps:** if a check fails, you see it. LabLantern never reports "all clear" by leaving something out.
- **Secure by design:** agents open no ports, dangerous actions need your passkey, secrets are stored encrypted.

## Features

### Vulnerability scanning

- Scans the packages of each host and every running…
