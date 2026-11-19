---
repo: "floci-io/floci-cli"
name: "floci-cli"
description: "Any Cloud. Locally. Floci CLI to manage local cloud emulators."
readmeQualityOk: true
url: "https://github.com/floci-io/floci-cli"
homepage: "https://floci.io"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["aws", "aws-lambda", "aws-s3", "aws-sqs", "azure", "gcp", "gcp-cloud-functions"]
stars: 183
forks: 58
openIssues: 0
closedIssues: 7
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2026-05-12T22:06:13Z"
lastCommitAt: "2026-11-19T05:06:04Z"
lastReleaseAt: "2026-07-24T16:07:21Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 96
undervaluedScore: 34
maintainers: ["hectorvent", "semantic-release-bot", "juandiii"]
openGraphImageUrl: "https://opengraph.githubassets.com/e242e747ee8883902c2e2233ce950974e21bd1aefa3720a0b8ddd323dbf662fc/floci-io/floci-cli"
fundingLinks: ["GITHUB:https://github.com/floci-io"]
---

Light, fluffy, and always free: the Floci command-line interface<br />
  No account. No auth token. No feature gates.

---

## What is this?

`floci-cli` is the official command-line interface for [Floci](https://github.com/floci-io), the free, open-source
local cloud emulators. It starts, stops, configures and diagnoses the emulator containers, and prints the
environment your cloud CLI or SDK needs to talk to them. It does not manage cloud resources itself; your usual
`aws`, `gcloud`, `az` and `oci` tools do that against the emulator (see [Scope](#scope)).

```sh
# AWS (default)
floci start
eval $(floci env)
aws s3 mb s3://my-bucket

# GCP
floci gcp start
eval $(floci gcp env)
gcloud storage buckets create gs://my-bucket

# Azure
floci az start
floci az setup
eval $(floci az env)
az storage container create --name mycontainer
az group create -n my-rg -l westeurope

# OCI
floci oci start
floci oci setup
eval $(floci oci env)
oci os ns get
```
