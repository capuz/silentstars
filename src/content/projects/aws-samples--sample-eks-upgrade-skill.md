---
repo: "aws-samples/sample-eks-upgrade-skill"
name: "sample-eks-upgrade-skill"
description: "A Claude Code skill that performs automated, read-only EKS cluster upgrade readiness assessments. Know what will break before you upgrade."
readmeQualityOk: true
url: "https://github.com/aws-samples/sample-eks-upgrade-skill"
homepage: "https://github.com/aws-samples/sample-eks-upgrade-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 17
recentReleases: 0
createdAt: "2026-05-07T08:06:06Z"
lastCommitAt: "2026-07-08T05:42:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 43
maintainers: ["kahhaw9368"]
openGraphImageUrl: "https://opengraph.githubassets.com/e31f06c12bfdc0026152a39b1365ed204dd9f4f00afc72361fb019af40de74e8/aws-samples/sample-eks-upgrade-skill"
---

# EKS Upgrade Readiness Skill

A [Claude Code](https://claude.ai/claude-code) skill that performs automated EKS upgrade readiness assessments. It connects to a live EKS cluster, runs checks across 8 assessment areas, calculates a readiness score (0–100%), and generates a detailed report with pre-filled AWS CLI commands.

Checks are informed by the [EKS Best Practices Guide](https://docs.aws.amazon.com/eks/latest/best-practices/) and [EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/). All operations are **read-only** — the skill does not modify your cluster.

> **Disclaimer:** This is sample code provided for educational and demonstration purposes only. It is not production-ready and should be reviewed, tested, and validated against your organization's security and operational requirements before use. The IAM permissions, MCP server configuration, and assessment logic should be adapted for your environment.

</p>

## Table of Contents

- [Getting Started](#getting-started)
- [What Gets Assessed](#what-gets-assessed)
- [Readiness Score](#readiness-score)
- [Output](#output)
- [MCP Server Setup](#mcp-server-setup)
- [Required Permissions](#required-permissions)
-…
