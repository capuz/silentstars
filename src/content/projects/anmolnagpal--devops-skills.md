---
repo: "anmolnagpal/devops-skills"
name: "devops-skills"
description: "Multi-tool DevOps skills for Claude Code, Cursor, and Codex — Terraform, Kubernetes, Docker, GitHub Actions, GitLab CI, AWS FinOps, OWASP security."
readmeQualityOk: true
url: "https://github.com/anmolnagpal/devops-skills"
homepage: "https://github.com/anmolnagpal/devops-skills"
language: "Shell"
languages: ["Shell"]
languagePcts: [90]
topics: ["agents-md", "ai-agents", "aws", "claude-code", "claude-skills", "codex", "cursor", "cursor-rules", "devops", "docker"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-05-14T12:42:50Z"
lastCommitAt: "2026-07-05T20:18:14Z"
lastReleaseAt: "2026-06-10T21:47:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 48
maintainers: ["anmolnagpal", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2093965fae17c5ee8b64ea61371c233dd7f5024feecf184b8862b6cef243199/anmolnagpal/devops-skills"
---

# devops-skills

> **One source of DevOps expertise, three AI coding tools.** Reusable skills for **Claude Code**, **Cursor**, and **Codex** that review and scaffold Terraform, Kubernetes/Helm, Docker, CI/CD (GitHub Actions + GitLab), AWS FinOps, GitHub repo hygiene, and OWASP security — without you copy-pasting the same prompt into every project.

### Install in Claude Code (10 seconds, no clone)

```text
/plugin marketplace add anmolnagpal/devops-skills
/plugin install clouddrove@devops-skills
```

Skills land as `/clouddrove:tf`, `/clouddrove:finops`, … with a native `(clouddrove)` label. For Cursor/Codex/MCP, use the [installer](#quick-start).

## What you get

- **12 skills** that auto-trigger on file globs and answer with structured, rule-ID-tagged review output
  (`/clouddrove:tf`, `/clouddrove:k8s`, `/clouddrove:ci`, `/clouddrove:github-actions`, `/clouddrove:github`, `/clouddrove:docker`, `/clouddrove:finops`, `/clouddrove:owasp`, `/clouddrove:wrapper-tf`, `/clouddrove:deploy`, `/clouddrove:adr`, `/clouddrove:skill-creator`)
- **Packaged as the `clouddrove` plugin** — installed from this repo's own marketplace, so skills are namespaced `(clouddrove)` in Claude Code…
