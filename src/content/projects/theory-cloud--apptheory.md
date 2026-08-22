---
repo: "theory-cloud/AppTheory"
name: "AppTheory"
description: "Contract-first serverless runtime for AWS Lambda."
readmeQualityOk: true
url: "https://github.com/theory-cloud/AppTheory"
homepage: "https://apptheory.theorycloud.ai/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [44, 20]
topics: ["aws", "aws-cdk", "aws-lambda", "mcp", "mcp-server", "golang", "python", "typescript"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 98
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-19T15:32:42Z"
lastCommitAt: "2026-08-22T04:07:17Z"
lastReleaseAt: "2026-01-23T23:09:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["aron23", "theory-factory-mcp[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6531ff7af87c3734461425233a8b86a7f3824ebc633c5d7e31a176ef984c1887/theory-cloud/AppTheory"
---

</a>
</p>

<h1 align="center">AppTheory</h1>

  <strong>Contract-first serverless runtime for AWS Lambda.</strong><br>
  One application model. Three runtimes. Verified on every commit.
</p>

</p>

</p>

</p>

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

AppTheory is…
