---
repo: "Vulnetix/cli"
name: "cli"
description: "Automate vulnerability triage which prioritizes remediation over discovery"
readmeQualityOk: true
url: "https://github.com/Vulnetix/cli"
homepage: "https://www.vulnetix.com"
language: "Open Policy Agent"
languages: ["Open Policy Agent", "Go"]
languagePcts: [56, 43]
topics: ["cyclonedx", "oscal", "sarif", "sbom", "slsa", "software-transparency", "vex", "vulnerability-management", "sast", "sca"]
stars: 25
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-06-02T12:06:27Z"
lastCommitAt: "2026-10-28T09:57:25Z"
lastReleaseAt: "2026-03-16T00:49:00Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 64
maintainers: ["0x73746F66", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/08e4b6bbe29cc64200659dea7e82d2bea30d2ab9b34b2d1072f9f6ec7de747b3/Vulnetix/cli"
---

# Vulnetix CLI & GitHub Action

Automated vulnerability management for your CI/CD pipelines and development workflows.

## Contents

- [GitHub Action](#github-action)
- [Claude Code Plugin](#pix-ai-coding-assistant)
- [CLI Installation](#cli-installation)
- [Available Tasks](#available-tasks)
- [Documentation](#documentation)
- [CLI Documentation](https://docs.cli.vulnetix.com/)
- [Claude Code Plugin Documentation](https://ai-docs.vulnetix.com)
- [VDB API Reference](https://redocly.github.io/redoc/?url=https://api.vdb.vulnetix.com/v1/spec)
- [GitHub App](https://github.com/marketplace/vulnetix)

---

## GitHub Action

This GitHub Action provides the Vulnetix CLI for your workflows, enabling automated vulnerability scanning directly in your CI/CD pipeline.

### Basic Usage

```yaml
- name: Vulnetix Scan
  uses: Vulnetix/cli@v3.59.4
  with:
    org-id: ${{ secrets.VULNETIX_ORG_ID }}
    api-key: ${{ secrets.VULNETIX_API_KEY }}
```

### Workflow Examples

#### Scan on Pull Request

```yaml
name: Security Scan
on: [pull_request]
permissions:
  contents: read

jobs:
  vulnetix:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: Vulnetix/cli@v3…
