---
repo: "HadesShade/entra-id-applications-exporter"
name: "entra-id-applications-exporter"
description: "Prometheus exporter for Microsoft Entra ID app registrations: secret and certificate expiry, owners and inventory"
readmeQualityOk: true
url: "https://github.com/HadesShade/entra-id-applications-exporter"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["azure-ad", "golang", "grafana", "microsoft-entra", "monitoring", "prometheus", "prometheus-exporter"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-11-14T12:08:55Z"
lastCommitAt: "2026-11-23T12:22:14Z"
lastReleaseAt: "2026-11-23T12:23:55Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 15
maintainers: ["HadesShade"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e7062fd2cdc3fbc9e454d4f2c12374a481afec54ac520238caedbdff5098ed2/HadesShade/entra-id-applications-exporter"
---

# entra-id-applications-exporter

A Prometheus exporter for **Microsoft Entra ID app registrations**. It reads the
applications of one tenant through Microsoft Graph and exposes their secret and
certificate expiry dates, owner counts and basic metadata, so you can alert
**before** a credential expires and breaks something.

- Per-credential expiry for **secrets and certificates**, with their descriptions.
- Authenticates with a service principal (client secret).
- Supports the `public`, `china` and `usgov` clouds.
- Every scrape queries Graph live; if Graph throttles (HTTP 429) the last good
  result is served for a limited time.
- Single static binary, no dependencies. One exporter instance = one tenant / cloud.
- Ready-made [Grafana dashboard](#grafana-dashboard) and example alert rules.

## Installation

### Pre-built binary

Download the archive for your platform from the
[Releases](https://github.com/hadesshade/entra-id-applications-exporter/releases) page,
verify it against `checksums.txt`, and unpack it:

```sh
sha256sum -c checksums.txt --ignore-missing
tar -xzf entra-id-applications-exporter_<version>_linux_amd64.tar.gz
```
