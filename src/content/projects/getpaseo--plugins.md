---
repo: "getpaseo/plugins"
name: "plugins"
description: "Paseo plugin registry: reviewed, pinned plugins for paseo.sh/plugins"
readmeQualityOk: true
url: "https://github.com/getpaseo/plugins"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 14
forks: 47
openIssues: 41
closedIssues: 572
watchers: 0
contributors: 45
recentReleases: 0
createdAt: "2026-10-03T14:42:54Z"
lastCommitAt: "2026-10-30T11:03:13Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 61
maintainers: ["github-actions[bot]", "sm1ee", "monarchmaisuriya"]
openGraphImageUrl: "https://opengraph.githubassets.com/c045ca0ead84fe7ccd21b247206d86d116916940babc21d7458ab764cae4653c/getpaseo/plugins"
---

# Paseo plugins

The reviewed plugin registry behind [paseo.sh/plugins](https://paseo.sh/plugins).
Each record pins an npm artifact or a Git commit. Merge approves that exact artifact.

The [open registry protocol](https://github.com/getpaseo/plugins/blob/HEAD/PROTOCOL.md) is the client contract. Companies can host
an internal registry by serving the same static JSON documents.

## Submit a plugin

1. Open the submission form and use your plugin's name as the issue title.
2. In **Source**, paste its GitHub repository or folder URL, npm package page or
   name, or Git/npm source accepted by `paseo plugin add`, then tick its categories.
   Registry ids and local directories cannot be submitted.
3. The bot opens a review PR containing your submission. Git tags and commits
   are optional. When supplied, the reviewer uses that reference; otherwise the
   reviewer resolves the current `main` commit. npm submissions use the supplied
   version, or `latest` when omitted.
4. The reviewer inspects the artifact under [REVIEW.md](https://github.com/getpaseo/plugins/blob/HEAD/REVIEW.md), completes the
   listing, and tags you in the outcome. Approved listings appear on…
