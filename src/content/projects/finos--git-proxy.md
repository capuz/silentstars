---
repo: "finos/git-proxy"
name: "git-proxy"
description: "Deploy custom push protections and policies on top of Git"
readmeQualityOk: true
url: "https://github.com/finos/git-proxy"
homepage: "https://git-proxy.finos.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["scans", "gitops", "security"]
stars: 244
forks: 176
openIssues: 64
closedIssues: 359
watchers: 9
contributors: 66
recentReleases: 0
createdAt: "2020-04-17T13:38:25Z"
lastCommitAt: "2026-09-02T08:05:11Z"
lastReleaseAt: "2024-07-29T16:05:47Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 46
maintainers: ["jescalada", "andypols", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/256513079/f63474b0-1a0f-4f21-a302-e7b31a98232f"
discussionCount: 12
---

<br />
  </a>

  <br />
  <br />

    Deploy custom push protections and policies<br />on top of Git
    <br />
    <br />
    <br />
    ·
    ·
    ·
  </p>

  <br />

<br />

</div>
<br />

## What is GitProxy

GitProxy is an application that stands between developers and a Git remote endpoint (e.g., `github.com`). It applies rules and workflows (configurable as `plugins`) to all outgoing `git push` operations to ensure they are compliant. GitProxy supports both **HTTP/HTTPS** and **SSH** protocols with identical security scanning and validation.

The main goal of GitProxy is to marry the defacto standard Open Source developer experience (git-based workflow of branching out, submitting changes and merging back) with security and legal requirements that firms have to comply with, when operating in highly regulated industries like financial services.

That said, GitProxy can also be used on a local environment to enforce a single developer's best practices, which tends to be the easiest setup to start with and the most comfortable one to build new GitProxy plugins.

```mermaid
sequenceDiagram
    actor Developer
    Developer->>+Git Server: git clone
    Developer->>Workstation:…
