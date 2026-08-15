---
repo: "ReCloudStudio/WebHooker"
name: "WebHooker"
description: "GitHub / Gitea webhook → Discord / Telegram dispatcher. Receives webhook events via Cloudflare Workers, applies filters, and routes formatted messages to Discord channels/threads and Telegram chats/topics."
readmeQualityOk: true
url: "https://github.com/ReCloudStudio/WebHooker"
homepage: "https://webhooker.docs.worldexecute.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-24T13:49:29Z"
lastCommitAt: "2026-08-15T04:05:25Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 54
maintainers: ["RhenCloud", "github-actions[bot]", "wyf9"]
openGraphImageUrl: "https://opengraph.githubassets.com/5abd117eb87410570a3354f9112a17489e0e7affb30e0d0652ce76bf73abad3d/ReCloudStudio/WebHooker"
---

# WebHooker

GitHub / Gitea webhook → Discord / Telegram dispatcher. Receives webhook events via Cloudflare Workers, applies filters, and routes formatted messages to Discord channels/threads and Telegram chats/topics. Forge-specific adapters live under `server/lib/providers/` (GitHub + Gitea today; GitLab etc. can be added later).

## Features

- **28 event formatters** — push, pull_request, issues, issue_comment, workflow_run, workflow_job, status, deployment, deployment_status, check_run, check_suite, ping, release, create, delete, star, fork, pull_request_review, pull_request_review_comment, commit_comment, member, label, milestone, discussion, discussion_comment, repository, code_scanning_alert, dependabot_alert (+ generic fallback, + `custom` webhooks)
- **Multi-provider webhooks** — GitHub (`X-Hub-Signature-256`) and Gitea (`X-Gitea-Signature`) share one `/webhook` endpoint; the provider is auto-detected from headers
- **Per-group webhook ingress** — every group can get its own `POST /webhook/{groupId}` URL + secret (Gitea, classic GitHub webhooks, and arbitrary custom JSON posts signed with `X-WebHooker-Signature`)
- **GitHub App tenant isolation** — bind a group to a…
