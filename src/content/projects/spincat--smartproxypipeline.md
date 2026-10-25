---
repo: "spincat/SmartProxyPipeline"
name: "SmartProxyPipeline"
description: "An automated proxy subscription processing tool supporting templating, validation, deduplication, consolidation, and upload functionality."
originalDescription: "一个自动化代理订阅处理工具，支持模板化、验证、去重、整合和上传功能。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/spincat/SmartProxyPipeline"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-10T07:32:21Z"
lastCommitAt: "2026-10-25T22:11:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 68
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/802ce5b8bb0c290914d3c82b9104791918e96bd5ffc3aa77a26384cdf6cb40ee/spincat/SmartProxyPipeline"
---

# SmartProxyPipeline

## Introduction

`SmartProxyPipeline` is an automated proxy subscription processing tool supporting templating, validation, deduplication, consolidation, and upload functionality. It downloads proxy addresses from multiple subscription sources, verifies that these addresses are valid, and uploads the valid addresses to a Git repository. The tool supports two run modes, `local` and `github-action`, and suits scenarios that require proxy addresses to be updated regularly.

## Features

- **Subscription source download**: Generates multiple subscription URLs from the configured subscription source URL templates, and downloads the subscription content concurrently.
- **Address validation**: Uses the `ping` command to verify that downloaded proxy addresses are valid.
- **Git upload**: Saves valid proxy addresses to a file and uploads them to the specified Git repository.
- **Multithreaded processing**: Uses multiple threads to download and validate addresses concurrently, improving processing efficiency.

## Configuration file (`config.json`)

The configuration file defines the program's runtime parameters. The details are as follows:

- **`mode`**: Run mode,…
