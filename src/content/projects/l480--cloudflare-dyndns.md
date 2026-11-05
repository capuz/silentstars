---
repo: "L480/cloudflare-dyndns"
name: "cloudflare-dyndns"
description: "☁️ Cloudflare DynDNS solution for AVM FRITZ!Box"
readmeQualityOk: true
url: "https://github.com/L480/cloudflare-dyndns"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["cloudflare", "python", "fritzbox", "dyndns", "dns", "ddclient", "inadyn"]
stars: 106
forks: 35
openIssues: 0
closedIssues: 21
watchers: 5
contributors: 6
recentReleases: 10
createdAt: "2021-08-08T17:31:14Z"
lastCommitAt: "2026-11-05T08:05:59Z"
lastReleaseAt: "2026-09-23T18:22:24Z"
status: "thriving"
tags: ["legacy_hero", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 54
maintainers: ["dependabot[bot]", "L480", "Bl4d3s"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/394027336/63c61bb2-35d8-4840-8ff7-70d32f6c9d62"
fundingLinks: ["GITHUB:https://github.com/L480", "KO_FI:https://ko-fi.com/L480_"]
---

# cloudflare-dyndns

Middleware for updating [Cloudflare](https://www.cloudflare.com/) DNS records
through an [AVM FRITZ!Box](https://en.avm.de/products/fritzbox/) (or any
DynDNS-capable client: `ddclient`, `inadyn`, or a plain `curl`/cron job).

The FRITZ!Box calls an "Update URL" whenever its WAN IP changes; this
service translates that call into Cloudflare API writes.

## Getting started

### Create a Cloudflare API token

Create a [Cloudflare API token](https://dash.cloudflare.com/profile/api-tokens)
with **read permissions** for `Zone.Zone` and **edit permissions** for
`Zone.DNS`, scoped to the specific zone(s) you intend to update.

### :rocket: Option 1: Self-host cloudflare-dyndns

#### Run on Docker

```bash
docker run -d -p 8080:8080 \
  --read-only --cap-drop=ALL --security-opt no-new-privileges \
  --user 10001:10001 \
  ghcr.io/l480/cloudflare-dyndns:latest
```

Or with Docker Compose — see [`compose.yaml`](https://github.com/L480/cloudflare-dyndns/blob/HEAD/compose.yaml).

#### Run on Kubernetes

Use the [Helm chart](https://github.com/L480/cloudflare-dyndns/blob/HEAD/helm-chart) or pull it directly from the repository's
OCI registry:

```bash
helm pull…
