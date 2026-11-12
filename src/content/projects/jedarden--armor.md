---
repo: "jedarden/ARMOR"
name: "ARMOR"
description: "Authenticated Range-readable Managed Object Repository — encrypted B2 storage with zero-egress Cloudflare delivery"
readmeQualityOk: true
url: "https://github.com/jedarden/ARMOR"
homepage: "https://jedarden.com"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["b2", "backups", "cloudflare", "encryption", "go", "s3", "storage"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-03-24T03:42:39Z"
lastCommitAt: "2026-11-12T05:43:54Z"
lastReleaseAt: "2026-10-16T03:56:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 62
maintainers: ["jedarden"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fe81114b6b1e56dbdb9cf78444a90583361e9620182b062bfbd48d3915459dc/jedarden/ARMOR"
---

# ARMOR

**Authenticated Range-readable Managed Object Repository**

ARMOR is an S3-compatible proxy. It encrypts objects before storing them in
Backblaze B2 and serves reads through a Cloudflare domain. Clients use ARMOR
credentials and an S3 endpoint; ARMOR holds the B2 credentials and master
encryption key (MEK). Its source tests cover a scoped set of S3 operations,
including single-PUT writes, reads, listing, and documented multipart cases.

## Install

Install Docker with the Compose plugin, then clone this repository for its
[`compose.yaml`](https://github.com/jedarden/ARMOR/blob/HEAD/compose.yaml) and [`.env.example`](https://github.com/jedarden/ARMOR/blob/HEAD/.env.example):

```bash
git clone https://github.com/jedarden/ARMOR.git
cd ARMOR
```

Select an image tag that has been published. The [release-status
register](https://github.com/jedarden/ARMOR/blob/HEAD/docs/release-status.md) is the evidence boundary: it records which
tags have published images and what each publication does and does not
prove. The export below and the Compose default both pin the release the
register records as the latest fully published, compat-green one, so an
unset `ARMOR_VERSION` gets the…
