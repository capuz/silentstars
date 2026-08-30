---
repo: "yeongseon/azure-functions-scaffold-python"
name: "azure-functions-scaffold-python"
description: "Scaffolding CLI for Azure Functions Python v2 projects"
readmeQualityOk: true
url: "https://github.com/yeongseon/azure-functions-scaffold-python"
homepage: "https://yeongseon.dev/azure-functions-python/scaffold/"
language: "Python"
languages: ["Python", "Jinja"]
languagePcts: [70, 28]
topics: ["azure-functions", "cli", "python", "serverless", "azure", "scaffolding", "code-generator", "project-template"]
stars: 6
forks: 0
openIssues: 2
closedIssues: 70
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-03-07T00:15:24Z"
lastCommitAt: "2026-08-30T00:45:26Z"
lastReleaseAt: "2026-08-14T12:09:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 66
maintainers: ["yeongseon", "dependabot[bot]", "sisyphus-dev-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/46f221e7c4d229898d31cf906e72b1da3fc70c741101729550245207a273ec82/yeongseon/azure-functions-scaffold-python"
---

# Azure Functions Scaffold

> Part of the **Azure Functions Python DX Toolkit** — dogfood-tested by [azure-functions-cookbook-python](https://github.com/yeongseon/azure-functions-cookbook-python).

Read this in: [한국어](https://github.com/yeongseon/azure-functions-scaffold-python/blob/HEAD/README.ko.md) | [日本語](https://github.com/yeongseon/azure-functions-scaffold-python/blob/HEAD/README.ja.md) | [简体中文](https://github.com/yeongseon/azure-functions-scaffold-python/blob/HEAD/README.zh-CN.md)

Scaffolding CLI for production-ready Azure Functions Python v2 projects.

Python version support: 3.10-3.13 are GA on Azure Functions; 3.14 is accepted as **Preview**. See [Python version support](https://github.com/yeongseon/azure-functions-scaffold-python/blob/HEAD/docs/guide/configuration.md#python-version-support).

## Why `afs new` instead of `func init`?

`afs new` is **not** a replacement for [Azure Functions Core Tools](https://learn.microsoft.com/azure/azure-functions/functions-run-local). It complements them. Use whichever fits your situation.

| Concern | `func init` + `func new` (official) | `afs new` (this project) |
|---|---|---|
| Maintained by | Microsoft | Community |
| Scope |…
