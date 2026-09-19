---
repo: "JochenYang/dsh-app"
name: "dsh-app"
description: "A community-maintained branded desktop client for DeepSeek Harness, Windows / macOS / Linux"
originalDescription: "  A community-maintained branded desktop client for  DeepSeek Harness, Windows / macOS / Linux"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/JochenYang/dsh-app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["dsh-plugin"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-20T01:54:38Z"
lastCommitAt: "2026-09-19T01:35:38Z"
lastReleaseAt: "2026-08-21T16:47:14Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 62
maintainers: ["JochenYang"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1340184091/0885ab61-3667-434c-aaae-46d1c4a1dbcb"
---

<h1 align="center">DSH APP</h1>

  A branded desktop client for DeepSeek Harness (dsh), maintained by community developers.<br>
  Windows / macOS / Linux, for public release.
</p>

  <strong>Simplified Chinese</strong> · <a href="README.en.md">English</a>
</p>

The shell comes with a versioned dsh runtime (self-managed updates/rollbacks), rendering the official dsh Web UI in a sandbox window;
branded features are implemented as dsh plugin suites, without forking upstream. For architectural design including layering, kernel runtime layout, update and rollback mechanisms, packaging, etc., see [docs/ARCHITECTURE.md](https://github.com/JochenYang/dsh-app/blob/HEAD/docs/ARCHITECTURE.md).

## Packaged Client Features

DSH APP is a **self-contained, no-fork** packaged client: kernel self-hosted (`userData/kernel/`, atomic activation + rollback),
all features stacked on the upstream kernel via dsh plugin suites (`plugins/`), upstream releases are just regular kernel updates.
Current plugin capabilities:

| Feature | Plugin | Implementation Location |
|---|---|---|
| Session sidebar (native view): **Git page**—change lists grouped by directory, unified diff with dual line numbers,…
