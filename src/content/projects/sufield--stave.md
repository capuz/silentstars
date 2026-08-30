---
repo: "sufield/stave"
name: "stave"
description: "Stave finds compound attack paths that single-resource scanners miss. AWS security findings from configuration snapshots — no credentials required. "
readmeQualityOk: true
url: "https://github.com/sufield/stave"
homepage: "https://www.systeminvariant.dev/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["aws-s3", "ci-cd", "cicd", "compliance", "compliance-automation", "cyber-security", "cybersecurity", "cybersecurity-tools", "hippa", "security"]
stars: 32
forks: 1
openIssues: 0
closedIssues: 21
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-06T15:28:41Z"
lastCommitAt: "2026-08-30T00:43:46Z"
lastReleaseAt: "2026-03-10T14:27:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 44
maintainers: ["github-actions[bot]", "sufield", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a488c9598f4a15de74e19c95f66b7ce32826357b31154beabfc0b12dfba9c10c/sufield/stave"
---

# Stave

Open-source cloud configuration verifier. Proves your AWS
configuration is correct instead of searching for what's wrong. It works
offline without any credentials.

[Documentation](https://github.com/sufield/stave/blob/HEAD/docs/README.md) ·
[Control Reference](https://github.com/sufield/stave/blob/HEAD/docs/controls/reference.md) ·
[Command Reference](https://github.com/sufield/stave/blob/HEAD/docs/command-reference.md) ·
[How-to Guides](https://github.com/sufield/stave/blob/HEAD/docs/how-to/README.md) ·
[Integrations](https://github.com/sufield/stave/blob/HEAD/internal/integrations/README.md)

## Install

```bash
go install github.com/sufield/stave/cmd/stave@latest
```

Or build from source:

```bash
git clone https://github.com/sufield/stave.git && cd stave && make build
```

For zero-setup options, click **Open in GitHub Codespaces** above, or see [`stave-workspace/README.md`](https://github.com/sufield/stave/blob/HEAD/stave-workspace/README.md) for Coder workspaces and Docker.

## Quick Start

```bash
# Evaluate a snapshot against the built-in catalog
stave apply --observations ./my-snapshot/

# Discover attack chains across IAM, data, and audit surfaces
stave…
