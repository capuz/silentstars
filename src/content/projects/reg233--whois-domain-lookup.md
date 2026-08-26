---
repo: "reg233/whois-domain-lookup"
name: "whois-domain-lookup"
description: "A simple WHOIS domain lookup website with strong TLD compatibility."
readmeQualityOk: true
url: "https://github.com/reg233/whois-domain-lookup"
homepage: "https://whois.233333.best"
language: "PHP"
languages: ["PHP"]
languagePcts: [83]
topics: ["cctld", "domain", "tld", "whois", "rdap", "lookup"]
stars: 89
forks: 45
openIssues: 0
closedIssues: 8
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-04-14T01:46:11Z"
lastCommitAt: "2026-08-26T04:15:31Z"
lastReleaseAt: "2025-07-10T03:39:30Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 99
undervaluedScore: 55
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab68defce6d911bdc6c5818528a34db1d8587a4a7f1496d2f5bc71b617488433/reg233/whois-domain-lookup"
---

[简体中文 README](https://github.com/reg233/whois-domain-lookup/blob/HEAD/README.zh.md)

# WHOIS domain lookup

A simple WHOIS domain lookup website with strong TLD compatibility.

<table>
  <tr>
    <th>Light</th>
    <th>Dark</th>
  </tr>
  <tr>
    <td>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>
    </td>
    <td>
    </td>
  </tr>
</table>

[Live Demo 1](https://whois.233333.best)

[Live Demo 2](https://whois1.233333.best)

## Features

- Simple, Clear UI
- Strong TLD compatibility, including most ccTLDs and a few private domains
- WHOIS and RDAP support
- Display domain days, and other information
- Highlight url and email in raw data
- API support
- Access control

## Deployment

### Vercel

### Docker Compose

#### Deploy

```sh
mkdir whois-domain-lookup
cd whois-domain-lookup
wget https://raw.githubusercontent.com/reg233/whois-domain-lookup/main/docker-compose.yml
docker compose up -d
```

#### Update

```sh
docker compose down
docker compose pull
docker compose up -d
```

### Web Hosting

Requirements:

- PHP >= 8.1
- PHP curl extension
- PHP mbstring extension

Download the…
