---
repo: "instana/mcp-instana"
name: "mcp-instana"
description: "MCP Server for Instana"
readmeQualityOk: true
url: "https://github.com/instana/mcp-instana"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["instana", "mcp"]
stars: 28
forks: 33
openIssues: 0
closedIssues: 18
watchers: 3
contributors: 25
recentReleases: 0
createdAt: "2025-08-07T14:46:55Z"
lastCommitAt: "2026-10-23T12:04:57Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["sunjit10", "Jayssgss", "NiyathaVS"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bca61b8857ffe73f2ea99407ae9308d4dc7d4ce08fbbaa430a4cfbb83b06cce/instana/mcp-instana"
---

> 🔒 **SSL Enabled by Default**: Starting with this release 1.0.3, SSL certificate verification is **enabled by default** for all outgoing Instana API calls. You can customize this behaviour (disable, supply a custom CA bundle, etc.) via CLI flag, environment variable, or `config.yaml`. See [SSL Certificate Verification](#ssl-certificate-verification) for full details.

## Table of Contents

- [MCP Server for IBM Instana](#mcp-server-for-ibm-instana)
  - [Quick Links](#quick-links)
  - [Architecture Overview](#architecture-overview)
  - [Workflow](#workflow)
  - [Prerequisites](#prerequisites)
  - [Installing Instana MCP server](#installing-instana-mcp-server)
    - [Option 1: Install from PyPI (Recommended)](#option-1-install-from-pypi-recommended)
    - [Option 2: Development Installation](#option-2-development-installation)
      - [Installing uv](#installing-uv)
      - [Setting Up the Environment](#setting-up-the-environment)
    - [Header-Based Authentication for Streamable HTTP Mode](#header-based-authentication-for-streamable-http-mode)
      - [1. API Token Authentication (Direct API Calls)](#1-api-token-authentication-direct-api-calls)
      - [2. Session Token…
