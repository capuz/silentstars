---
repo: "speakeasy-api/openapi-generation"
name: "openapi-generation"
description: "Open-source OpenAPI SDK generator for building production-ready client libraries. Available under AGPL-3.0; contact Speakeasy for commercial licensing options."
readmeQualityOk: true
url: "https://github.com/speakeasy-api/openapi-generation"
homepage: "https://www.speakeasy.com"
language: "Go"
languages: ["Go"]
languagePcts: [54]
topics: ["clients", "codegen", "codegeneration", "codegenerator", "openapi", "openapi-codegen", "openapi-generator", "openapi-spec", "openapi31", "sdk"]
stars: 37
forks: 11
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 17
recentReleases: 10
createdAt: "2026-09-10T15:32:40Z"
lastCommitAt: "2026-11-10T14:50:06Z"
lastReleaseAt: "2026-09-15T20:14:40Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 45
maintainers: ["github-merge-queue[bot]", "speakeasybot", "2ynn"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d70a032082a7534b25dd12daff1cfa4c02f49fed1bb97dcb7394cc22fdcd072/speakeasy-api/openapi-generation"
---

<img
      width="1500"
      height="500"
      alt="Speakeasy"
      src="https://github.com/user-attachments/assets/0e56055b-02a3-4476-9130-4be299e5a39c"
    />

    Speakeasy's Go-based generator for producing idiomatic SDKs, Terraform
    providers, MCP servers, Postman collections, and developer tooling from
    OpenAPI documents.

---

## Generate from OpenAPI

This repository is the development home for the generator and its templates. For
normal end-user SDK generation, use the
[Speakeasy CLI](https://github.com/speakeasy-api/speakeasy). To develop the
generator or a target template directly, generate from an OpenAPI document:

```bash
go run ./cmd/generate/main.go \
  -s ./tests/specs/basic-http.yaml \
  -o /tmp/generated-sdk \
  -l go \
  --license agpl-3.0-only \
  --skip-compile
```

`--license agpl-3.0-only` accepts AGPL-3.0-only licensing for the generated
output; commercial customers supply a license token instead. Run `./zero` once
per checkout to record either choice in `.env` (see
[Licensing generated output](#licensing-generated-output)).

The first run creates `.speakeasy/gen.yaml` in the output directory with default
target configuration. Remove…
