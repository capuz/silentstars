---
repo: "cycodehq/cycode-cli"
name: "cycode-cli"
description: "Boost security in your dev lifecycle via SAST, SCA, Secrets & IaC scanning"
readmeQualityOk: true
url: "https://github.com/cycodehq/cycode-cli"
homepage: "https://www.cycode.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["code", "sast", "sca", "secrets", "secure", "security", "cycode"]
stars: 99
forks: 69
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 44
recentReleases: 0
createdAt: "2022-07-04T16:39:28Z"
lastCommitAt: "2026-10-05T10:47:54Z"
lastReleaseAt: "2023-05-22T14:38:06Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 88
undervaluedScore: 50
maintainers: ["dependabot[bot]", "Ilanlido", "omer-roth"]
openGraphImageUrl: "https://opengraph.githubassets.com/bac9dcbf4864b488562ae92a4ee59f5c4a2e5d1037606dc55d44871e133ae0ac/cycodehq/cycode-cli"
---

# Cycode CLI User Guide

The Cycode Command Line Interface (CLI) is an application you can install locally to scan your repositories for secrets, infrastructure as code misconfigurations, software composition analysis vulnerabilities, and static application security testing issues.

This guide walks you through both installation and usage.

# Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
    1. [Install Cycode CLI](#install-cycode-cli)
        1. [Using the Auth Command](#using-the-auth-command)
        2. [Using the Configure Command](#using-the-configure-command)
        3. [Add to Environment Variables](#add-to-environment-variables)
            1. [On Unix/Linux](#on-unixlinux)
            2. [On Windows](#on-windows)
    2. [Install Pre-Commit Hook](#install-pre-commit-hook)
3. [Cycode CLI Commands](#cycode-cli-commands)
4. [Certificates and Proxies](#certificates-and-proxies)
5. [MCP Command](#mcp-command-experiment)
    1. [Starting the MCP Server](#starting-the-mcp-server)
    2. [Available Options](#available-options)
    3. [MCP Tools](#mcp-tools)
    4. [Usage Examples](#usage-examples)
    5. [Advanced…
