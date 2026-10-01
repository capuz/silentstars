---
repo: "ballerina-platform/static-code-analysis-tool"
name: "static-code-analysis-tool"
description: "Tool for performing static code analysis for Ballerina projects."
readmeQualityOk: true
url: "https://github.com/ballerina-platform/static-code-analysis-tool"
language: "Java"
languages: ["Java"]
languagePcts: [73]
topics: ["ballerina", "static-code-analysis"]
stars: 14
forks: 12
openIssues: 23
closedIssues: 16
watchers: 47
contributors: 46
recentReleases: 0
createdAt: "2023-11-17T09:15:21Z"
lastCommitAt: "2026-10-01T10:24:13Z"
lastReleaseAt: "2025-08-06T14:52:09Z"
status: "watched"
tags: ["hidden_gem", "community_watch", "fork_magnet"]
healthScore: 78
undervaluedScore: 38
maintainers: ["sdmdg", "CharanaManawathilake", "azinneera"]
openGraphImageUrl: "https://opengraph.githubassets.com/7efb34107789fc395455a0ee66e6916c8333aa139c1d02518904c4f84f4745a5/ballerina-platform/static-code-analysis-tool"
---

# Ballerina Static Code Analysis Tool

## Overview

Static code analysis uses tools to examine code without executing the code. They are used for identifying potential issues like bugs, vulnerabilities, and style violations. Static code analysis improves software quality by detecting issues early, ensuring better maintainability, and providing enhanced security. Ballerina supports static code analysis using the Ballerina scan tool. The Ballerina scan tool provides the command-line functionality to statically analyze Ballerina files and report analysis results.

This repository consists of

- The Ballerina scan tool implementation.
- The core scan logic.
- The extension points for introducing additional analysis and reporting results to static code analysis platforms.

## Prerequisites

1. OpenJDK 21 ([Adopt OpenJDK](https://adoptium.net/temurin/releases/?version=21) or any other OpenJDK distribution)

2. [Ballerina](https://ballerina.io/)

## Building from the source

Execute the commands below to build from the source.

1. Export GitHub Personal access token with read package permissions as follows,

    ```bash
    export packageUser=<GitHub username>…
