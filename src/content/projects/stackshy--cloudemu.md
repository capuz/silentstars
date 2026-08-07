---
repo: "stackshy/cloudemu"
name: "cloudemu"
description: "  A real cloud simulator. It simulates real cloud resources (AWS, Azure, GCP) entirely in-memory on your machine."
readmeQualityOk: true
url: "https://github.com/stackshy/cloudemu"
homepage: "https://cloudemu.info"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 110
forks: 9
openIssues: 28
closedIssues: 109
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-27T20:14:31Z"
lastCommitAt: "2026-08-07T05:15:03Z"
lastReleaseAt: "2026-04-12T09:00:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 32
maintainers: ["thzgajendra", "NitinKumar004", "Satyam-Trivedi-ZS"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3d5e61e4c925cbe5a922b4ffcc0f953654397b90bcedd08cac5e6babd6120cf/stackshy/cloudemu"
discussionCount: 2
---

</p>

  <h1 align="center">cloudemu</h1>
</p>

</p>

---

## What it does

cloudemu emulates AWS, Azure, and GCP cloud services entirely in memory, so you can test cloud-dependent code without real accounts, Docker, or network calls.

It ships two surfaces you can mix and match:

- **SDK-compat HTTP server** — point the real `aws-sdk-go-v2`, `azure-sdk-for-go`, `cloud.google.com/go`, or `databricks-sdk-go` clients at a local endpoint and they just work. No code changes in your app.
- **Go API** — typed in-memory mocks (`aws.S3`, `azure.VirtualMachines`, `gcp.GCE`, …) for tests written against cloudemu directly.

## Install

```bash
go get github.com/stackshy/cloudemu/v2
```

Requires Go 1.25+.

## How it works (SDK-compat)

Most apps already use the official cloud SDKs. cloudemu speaks the same wire protocols (AWS Query/JSON/Smithy, Azure ARM, GCP REST) over a local `httptest.NewServer`. Change the SDK endpoint, and the same production code runs against an in-memory backend.

```go
import (
    "net/http/httptest"

    "github.com/aws/aws-sdk-go-v2/aws"
    "github.com/aws/aws-sdk-go-v2/service/s3"
    "github.com/stackshy/cloudemu/v2"
    awsserver…
