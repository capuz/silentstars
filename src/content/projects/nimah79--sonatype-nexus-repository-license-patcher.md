---
repo: "nimah79/sonatype-nexus-repository-license-patcher"
name: "sonatype-nexus-repository-license-patcher"
description: "A javaagent that returns a hardcoded license for Sonatype Nexus Repository"
readmeQualityOk: true
url: "https://github.com/nimah79/sonatype-nexus-repository-license-patcher"
language: "Shell"
languages: ["Shell", "Batchfile", "Java"]
languagePcts: [40, 32, 28]
stars: 28
forks: 10
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-03-22T18:22:09Z"
lastCommitAt: "2026-11-16T11:55:37Z"
status: "thriving"
tags: []
healthScore: 75
undervaluedScore: 25
maintainers: ["nimah79", "keksmd"]
openGraphImageUrl: "https://opengraph.githubassets.com/8642c11f4253188d89046ec41d7f57c3d841a99d42a2de6966f43a0e2cf29670/nimah79/sonatype-nexus-repository-license-patcher"
---

# [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) License Bypass Agent

A javaagent that patches [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) license managers to bypass license verification

Latest tested version: [3.98.1](https://help.sonatype.com/en/sonatype-nexus-repository-3-90-0-release-notes.html)

**⚠️ YOU SHOULD NEVER USE THIS PROJECT TO CRACK/PATCH/ ILLEGAL USE SONATYPE NEXUS REPOSITORY. THIS PROJECT IS FOR EDUCATIONAL PURPOSES! THE CONSEQUENCES CAUSED BY THE USE OF THIS SOFTWARE SHALL BE BORNE BY THE USER.**

## Build

The prebuilt jar file of the javaagent is available in `nexus-repository-license-bypass-agent-1.0.jar`. However, if you have modified the source code, you can build the jar file using the following command:

```bash
mvn clean package
```

## Run Nexus with Patched License

### Method 1: Using Docker Compose and the original Nexus Docker image

```bash
docker compose up
```

### Method 2: Building a custom Docker image

```bash
docker build -t nexus:latest .
```

## What the Agent Does

The agent intercepts and patches these classes:
-…
