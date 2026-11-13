---
repo: "arturoeanton/goscim"
name: "goscim"
description: " 🚀 Lightning-fast SCIM 2.0 server in Go that makes identity management simple and scalable. Built for developers who need enterprise-grade user provisioning    without the enterprise complexity."
readmeQualityOk: true
url: "https://github.com/arturoeanton/goscim"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["api", "authentication", "couchbase", "developer-tools", "docker", "enterprise", "go", "golang", "identity-management", "oauth"]
stars: 30
forks: 5
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2021-03-09T02:53:37Z"
lastCommitAt: "2026-11-13T18:32:55Z"
lastReleaseAt: "2026-11-13T15:50:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 57
undervaluedScore: 30
maintainers: ["arturoeanton"]
openGraphImageUrl: "https://opengraph.githubassets.com/39c462cf2b0b8e36a87b0f91b8b50c51180ccd083652f5d9228d04b831744a46/arturoeanton/goscim"
discussionCount: 0
---

# GoSCIM

A **SCIM 2.0** server in Go, backed by Couchbase.

Resource types, schemas and per-attribute permissions are JSON files, so adding
a resource type takes no code. Authentication is required, filter values are
bound rather than interpolated into queries, and permissions are enforced per
attribute on both read and write.

> Using PostgreSQL instead of Couchbase? See the sister project
> [go-vorpal-scim](https://github.com/arturoeanton/go-vorpal-scim).

## Quick start

With Docker Compose (starts Couchbase, initialises the cluster, and starts GoSCIM):

```bash
git clone https://github.com/arturoeanton/goscim.git && cd goscim
docker compose up -d --build
```

Or running the binary directly against a local Couchbase container:

```bash
docker run -d --name goscim-db -p 8091-8094:8091-8094 -p 11210:11210 \
  couchbase:community-7.1.1
# Set up the cluster at http://localhost:8091 with the credentials below.

export SCIM_AUTH=basic                       # how clients authenticate
export SCIM_BASIC_USERS='admin:secret:admin'
export SCIM_ADMIN_USER=Administrator         # how the server reaches Couchbase
export SCIM_ADMIN_PASSWORD=password
export SCIM_COUCHBASE_TLS=false…
