---
repo: "windsorcli/cli"
name: "cli"
description: "The Windsor CLI assists your cloud native development workflow"
readmeQualityOk: true
url: "https://github.com/windsorcli/cli"
homepage: "https://windsorcli.github.io"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 18
forks: 1
openIssues: 24
closedIssues: 31
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-09-03T16:26:12Z"
lastCommitAt: "2026-07-23T06:14:41Z"
lastReleaseAt: "2025-02-22T19:11:01Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 63
maintainers: ["renovate[bot]", "rmvangun"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f6bcf3e061219b992b70b4dafb29206f9c07b8afd53b8e5e622c0b8da4d77d5/windsorcli/cli"
discussionCount: 1
---

# Windsor CLI

Windsor is a tool for composing, versioning, and distributing infrastructure blueprints.

A blueprint is a Terraform stack plus Kubernetes manifests, parameterized by conditional fragments called *facets*. The same blueprint retargets across substrates — a laptop, bare metal, EKS, or AKS — by varying which facets match. Blueprints publish as versioned OCI artifacts.

Composition compiles to plain Terraform and Kustomize. Nothing proprietary runs in the deployed infrastructure — Windsor is only present at build time. Open source under [MPL 2.0](https://github.com/windsorcli/cli/blob/HEAD/LICENSE). Runs on macOS, Linux, and Windows.

See [windsorcli.dev](https://windsorcli.dev) for documentation.

## Install

| Method | Command |
| --- | --- |
| Homebrew (macOS, Linux) | `brew tap windsorcli/cli && brew install windsor` |
| Chocolatey (Windows) | `choco install windsor` |

```bash
windsor version
```

### Shell hook

Windsor manages per-context environment (`KUBECONFIG`, AWS and Azure credentials, registry endpoints, `TALOSCONFIG`). Add the hook so `kubectl`, `terraform`, and the rest of your toolchain see the right cluster:

```bash
eval "$(windsor hook bash)"     #…
