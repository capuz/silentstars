---
repo: "gitroomhq/postiz-aws"
name: "postiz-aws"
description: "Postiz deployment for AWS"
readmeQualityOk: true
url: "https://github.com/gitroomhq/postiz-aws"
homepage: "https://postiz.com"
language: "HCL"
languages: ["HCL", "Shell"]
languagePcts: [62, 21]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-27T18:42:34Z"
lastCommitAt: "2026-11-23T10:25:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 40
maintainers: ["nevo-david"]
openGraphImageUrl: "https://opengraph.githubassets.com/0207c5c048cca5ebb36565c86c8430e1e9a1a8a879aeee88c8ffd23464dc87b2/gitroomhq/postiz-aws"
---

# postiz-aws

The infrastructure behind [Postiz](https://github.com/gitroomhq/postiz-app)'s
hosted service on AWS, as Terraform, in the open like the app itself. It also
works as a reference for running Postiz on AWS yourself; see
[Running your own](#running-your-own).

It moves the Postiz and Temporal services from Railway to AWS (us-east-2).
Cloudflare R2 (media) and RunPod (media processing) stay where they are.

- Migration steps: [docs/migration-runbook.md](https://github.com/gitroomhq/postiz-aws/blob/HEAD/docs/migration-runbook.md)
- License: [AGPL-3.0](https://github.com/gitroomhq/postiz-aws/blob/HEAD/LICENSE), like Postiz
