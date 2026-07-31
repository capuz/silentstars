---
repo: "siderolabs/docs"
name: "docs"
description: "Sidero documentation"
readmeQualityOk: true
url: "https://github.com/siderolabs/docs"
language: "MDX"
languages: ["MDX"]
languagePcts: [98]
stars: 12
forks: 68
openIssues: 28
closedIssues: 177
watchers: 0
contributors: 64
recentReleases: 0
createdAt: "2025-08-01T21:41:28Z"
lastCommitAt: "2026-07-31T06:20:53Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 96
undervaluedScore: 80
maintainers: ["Iheanacho-ai", "kevintijssen", "smira"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e6bb86c334d016987a8e18bcf4693d1d59e2615f70a6c4215af1d9d56a56745/siderolabs/docs"
---

# SideroLabs documentation contribution guide

Welcome to the official SideroLabs documentation, we are excited that you want to contribute!

This guide walks you through how to make changes to the SideroLabs Docs, which power the documentation for Talos, Omni, and the shared Kubernetes Guides both projects rely on.

Whether you’re fixing a typo or adding a brand-new page, this document explains how to get started, how the docs are structured, and how to make sure your contribution is clear, consistent, and high-quality.

## Where docs live

All SideroLabs documentation is housed in a single repository, organized under the `public/` folder:

```txt

public/

 ├── talos/               → Versioned Talos docs

 ├── omni/                → Unversioned Omni docs

 └── kubernetes-guides/   → Unversioned Kubernetes guides

```

The documentation is written in MDX format. You can learn more about[ MDX syntax from the Mintlify documentation](https://mintlify.com/docs) and the [official MDX website](https://mdxjs.com/docs/).

## Documentation versioning policy

When updating versioned documentation (for example, Talos), we generally expect changes to be applied to:

- The current version
-…
