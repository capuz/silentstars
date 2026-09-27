---
repo: "yeongseon/azure-functions-knowledge-python"
name: "azure-functions-knowledge-python"
description: "Knowledge retrieval (RAG) decorators for Azure Functions Python v2"
readmeQualityOk: true
url: "https://github.com/yeongseon/azure-functions-knowledge-python"
homepage: "https://yeongseon.dev/azure-functions-python/knowledge/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["azure", "azure-functions", "notion", "python", "rag", "serverless", "knowledge-base", "retrieval"]
stars: 6
forks: 0
openIssues: 3
closedIssues: 48
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-08T14:59:23Z"
lastCommitAt: "2026-09-27T09:27:22Z"
lastReleaseAt: "2026-08-11T12:24:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 63
maintainers: ["yeongseon", "dependabot[bot]", "sisyphus-dev-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/a60af130d2a901bd624a2315009da798a0e92bf3bdc10e78403d49cf19eefafb/yeongseon/azure-functions-knowledge-python"
---

# Azure Functions Knowledge

> ⚠️ **Experimental** — pattern exploration. APIs and behavior may change. Not recommended as a production dependency yet.

> Part of the **Azure Functions Python DX Toolkit** — dogfood-tested by [azure-functions-cookbook-python](https://github.com/yeongseon/azure-functions-cookbook-python).

Read this in: [한국어](https://github.com/yeongseon/azure-functions-knowledge-python/blob/HEAD/README.ko.md) | [日本語](https://github.com/yeongseon/azure-functions-knowledge-python/blob/HEAD/README.ja.md) | [简体中文](https://github.com/yeongseon/azure-functions-knowledge-python/blob/HEAD/README.zh-CN.md)

Knowledge retrieval (RAG) decorators for Azure Functions Python v2.

## Why this exists

Retrieval-augmented generation on Azure Functions usually means hand-wiring a provider SDK, credential handling, and result marshalling into every handler. `azure-functions-knowledge` collapses that into a single declarative decorator, so your function just receives the documents it asked for — matching the FastAPI-like developer experience the rest of the toolkit aims for.

## What it does

- **Decorator-based API** — Seamless integration with the Azure Functions Python v2…
