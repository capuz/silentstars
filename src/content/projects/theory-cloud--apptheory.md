---
repo: "theory-cloud/AppTheory"
name: "AppTheory"
description: "Contract-first serverless runtime for AWS Lambda."
readmeQualityOk: true
url: "https://github.com/theory-cloud/AppTheory"
homepage: "https://apptheory.theorycloud.ai/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [42, 23]
topics: ["aws", "aws-cdk", "aws-lambda", "mcp", "mcp-server", "golang", "python", "typescript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 108
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-19T15:32:42Z"
lastCommitAt: "2026-11-02T15:17:45Z"
lastReleaseAt: "2026-01-23T23:09:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 72
maintainers: ["tc-steward-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4bcac766de253ed332cd8301b3c0aaa9e3c73d4d18e3054e4a8719fbb5982ae/theory-cloud/AppTheory"
---

One application model. Three runtimes. Verified on every commit.

---

AppTheory is a **contract-first serverless runtime for AWS Lambda** designed to keep request handling, middleware, and event normalization consistent across languages and reliable in generative coding workflows (humans + AI assistants). It ships peer implementations in Go, TypeScript, and Python — not a Go library with bindings, but three independent runtimes verified against the contract fixture corpus on every commit. Go, TypeScript, and Python execute the SP09 MCP and SP12 OAuth fixtures as first-class contract tiers.

```
            FaceTheory (client delivery)
                      │
      AppTheory (serverless runtime)  ← you are here
                      │
            TableTheory (data layer)
                      │
                  DynamoDB
```

AppTheory is the runtime layer of the [Theory Cloud](https://github.com/theory-cloud/AppTheory/blob/HEAD/THEORY_CLOUD.md) stack — used in production by [Pay Theory](https://paytheory.com).

## Install

AppTheory is distributed exclusively through immutable **[GitHub Releases](https://github.com/theory-cloud/AppTheory/releases)** — no PyPI, no npm. The single…
