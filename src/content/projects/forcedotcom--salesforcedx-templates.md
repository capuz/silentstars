---
repo: "forcedotcom/salesforcedx-templates"
name: "salesforcedx-templates"
description: "Salesforce Templates Node Library"
readmeQualityOk: true
url: "https://github.com/forcedotcom/salesforcedx-templates"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
stars: 94
forks: 87
openIssues: 12
closedIssues: 21
watchers: 19
contributors: 84
recentReleases: 0
createdAt: "2019-06-10T17:19:21Z"
lastCommitAt: "2026-11-02T15:17:14Z"
lastReleaseAt: "2023-08-08T19:56:08Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 51
maintainers: ["dependabot[bot]", "svc-idee-bot", "svc-cli-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a436fdd11b27f7266b549e7c1f5bcedffb9ea374963794d48fb266a643e4f6f4/forcedotcom/salesforcedx-templates"
---

# salesforcedx-templates

## Introduction

This repository provides:

- [@salesforce/templates](https://www.npmjs.com/package/@salesforce/templates) to support the library and [Salesforce VS Code extensions](https://github.com/forcedotcom/salesforcedx-vscode/).

### Consumer build requirements (e.g. salesforcedx-vscode)

Repos that **bundle** `@salesforce/templates` (e.g. with esbuild) and use a templates manifest must:

1. **Copy built-in templates into the bundle output** before the bundle step that runs `generateTemplatesManifest`. The published package includes templates at `lib/templates`. You can copy from that path, or use the exported path:
   - `getBuiltinTemplatesPath` (returns the resolved path to `lib/templates` when not on the web platform; `undefined` on web).
2. **Wireit / task order**: Ensure the script that populates `dist/templates` (or your equivalent) runs **before** the `vscode:bundle` (or similar) task. Otherwise the bundle step will fail with `ENOENT: no such file or directory, scandir '.../dist/templates'`.

Template paths inside the package are kept short (via placeholders in `lib/templates`) so they stay within Windows path limits used by `pack:verify`.…
