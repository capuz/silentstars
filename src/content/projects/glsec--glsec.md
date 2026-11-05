---
repo: "glsec/glsec"
name: "glsec"
description: "Static security scanner and linter for GitLab CI. Finds .gitlab-ci.yml misconfigurations, supply-chain risks, and leaked secrets. Offline, SARIF output, OWASP CICD-SEC and CWE mappings."
readmeQualityOk: true
url: "https://github.com/glsec/glsec"
homepage: "https://glsec.github.io"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["devops", "devsecops", "gitlab", "gitlab-ci", "go", "linter", "security", "ci-cd-security", "owasp", "pipeline-security"]
stars: 25
forks: 18
openIssues: 21
closedIssues: 504
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-05-14T09:28:35Z"
lastCommitAt: "2026-11-05T08:04:51Z"
lastReleaseAt: "2026-06-03T22:26:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 54
maintainers: ["predictor2718", "dependabot[bot]", "AliMoharramy"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8d33de56205e1c0e91df37856e559d3b7760944bc3b19dca302ec78c6ac9e16/glsec/glsec"
---

# glsec

**glsec** is a security linter for `.gitlab-ci.yml` files. It detects misconfigurations that can lead to supply-chain attacks, secret leakage, and token exfiltration — the same class of issues that [zizmor](https://github.com/zizmorcore/zizmor) and [actionlint](https://github.com/rhysd/actionlint) catch in GitHub Actions, but for GitLab CI.

**Website and rule reference: [glsec.github.io](https://glsec.github.io)**

```console
$ glsec .gitlab-ci.yml

error[GL001]: image "node:latest" uses mutable tag "latest" — pin to a specific version or digest
  --> .gitlab-ci.yml:7:10 (job: build)
  |
7 |   image: node:latest
  |          ^

warn[GL002]: unquoted user-controlled variable $CI_COMMIT_REF_NAME in script — value is set by commit authors and may contain shell metacharacters
  --> .gitlab-ci.yml:14:7 (job: build)
   |
14 |     - echo $CI_COMMIT_REF_NAME
   |       ^
```

Use `--format table` for a compact one-line-per-finding view when there are many findings.

## Quick start

Add glsec to a GitLab pipeline with the [CI/CD Catalog component](https://gitlab.com/explore/catalog/glsec-io/glsec):

```yaml
include:
  - component: gitlab.com/glsec-io/glsec/glsec@v1.0.28
```

It…
