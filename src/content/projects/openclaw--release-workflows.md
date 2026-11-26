---
repo: "openclaw/release-workflows"
name: "release-workflows"
description: "Reusable release workflows for the OpenClaw/steipete fleet: uniform draft → verify → publish pipelines per archetype (go-cli, npm-cli, sparkle-app, electron, web)"
readmeQualityOk: true
url: "https://github.com/openclaw/release-workflows"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
stars: 9
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 5
createdAt: "2026-07-18T03:16:22Z"
lastCommitAt: "2026-11-26T12:57:10Z"
lastReleaseAt: "2026-09-14T19:53:15Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 58
maintainers: ["steipete", "vincentkoc", "SebTardif"]
openGraphImageUrl: "https://opengraph.githubassets.com/6506a87ab49e0ef57dcc5f962151e0b557cc7d2fa3aa150c3df58eb37fc5052c/openclaw/release-workflows"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# OpenClaw release workflows

Fleet-standard reusable release pipelines. Every archetype follows one trust boundary:

1. freeze a protected-branch commit, reusing an immutable annotated tag on retries;
2. build and freeze an immutable same-run artifact payload, staging an unpublished draft where the archetype requires it;
3. independently verify that artifact on arm64 and x86_64 without signing or release-write credentials, emitting the exact verified `ASSET-INVENTORY.json`, configured checksum asset (`SHA256SUMS` by default), plus a verdict;
4. let the publisher require exact name and digest equality with both verifier attestations before publication, re-downloading staged draft assets before un-drafting.

All archetypes reject an unprotected default branch. Only a missing tag ref starts a release from the protected head; a missing or unreadable annotated-tag object fails validation without exporting a build target.
