---
repo: "BenjiTrapp/ip-to-cloudprovider"
name: "ip-to-cloudprovider"
description: "Scrape the IP ranges of cloudproviders and check if a IP belongs to a particular CloudProvider. This can also help to speed up your CSIRT activities"
url: "https://github.com/BenjiTrapp/ip-to-cloudprovider"
homepage: "https://benjitrapp.github.io"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["aws", "azure", "cloudflare", "cloudprovider", "cloudsecurity", "ip-lookup", "ipra", "osint-tool", "bluete"]
stars: 12
forks: 1
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-11-09T23:01:42Z"
lastCommitAt: "2026-06-27T00:48:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 62
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/68ce0638890e8305405013d19237fd1058c72551e85006ad40e9b7a75478064e/BenjiTrapp/ip-to-cloudprovider"
---

</p>

<h1 align="center">IP to CloudProvider</h1>

  <strong>Instantly identify which cloud provider owns any IP address.</strong><br>
  Fast, concurrent, and always up-to-date.
</p>

</p>

---

## Why?

During incident response, threat hunting, or infrastructure audits you often need to quickly determine whether an IP belongs to AWS, Azure, GCP, or another cloud. This tool does that lookup **locally and instantly** against pre-downloaded CIDR registries -- no external API calls at scan time.

---

## Features

| | |
|---|---|
| **Multi-provider** | Match IPs against 15 provider registries simultaneously |
| **Blazing fast** | CIDRs parsed once, matched in-memory with concurrent workers |
| **Flexible input** | CLI args, file (`-f`), or piped stdin |
| **JSON output** | Machine-readable with `-j` for scripting and pipelines |
| **Summary stats** | Aggregate breakdown with `--stats` |
| **Selective updates** | Refresh a single provider or all at once |
| **Auto-refresh** | GitHub Actions updates IP ranges daily at midnight UTC |

---

## Supported Providers

| Provider | Source |
|:---------|:-------|
| Alibaba Cloud | ASN data (AS45102) via ipverse |
| Amazon AWS |…
