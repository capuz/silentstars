---
repo: "Geocodio/yak"
name: "yak"
description: "Yak is an autonomous coding agent for papercuts. It picks up small tasks from Slack, Linear, Sentry, and GitHub and delivers reviewable pull requests while you work on what matters."
readmeQualityOk: true
url: "https://github.com/Geocodio/yak"
homepage: "https://geocodio.github.io/yak/"
language: "PHP"
languages: ["PHP", "TypeScript"]
languagePcts: [72, 24]
stars: 33
forks: 3
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-10T19:08:34Z"
lastCommitAt: "2026-09-30T09:56:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 42
maintainers: ["MiniCodeMonkey", "sylvesterdamgaard"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f07b24b275c654a5877b35707d408e34ed83e7e7a7eecd4a2bed348c1c757b7/Geocodio/yak"
---

</p>

<h1 align="center">Yak</h1>

  <strong>Yak is an autonomous coding agent for papercuts, a line-by-line PR reviewer, and a per-branch preview server. One shared sandbox fleet powers all three workflows.</strong>
</p>

</p>

---

## What It Does

- **Opens PRs for papercuts.** Receives tasks from Slack, Linear, Sentry, and GitHub; sends Claude into an isolated sandbox; opens a reviewable PR and verifies CI passes
- **Reviews pull requests.** Line-level comments, `suggestion` blocks, and a feedback dashboard
- **Serves preview deployments.** Every open PR gets a unique URL, OAuth-gated, hibernated when idle, destroyed when the PR closes
- **Shared sandbox fleet.** One Incus + ZFS substrate, one GitHub App, one Inertia dashboard, one cost model across all three workflows

## How It Works

</p>

## Quick Start

See the [Setup Guide](https://geocodio.github.io/yak/setup/) for provisioning a fresh server with Ansible, or the [Development Guide](https://geocodio.github.io/yak/development/) for running Yak locally.

## Channel Support

| Channel  | Input (receive tasks) | Notifications (send updates) |
|----------|-----------------------|------------------------------|
| Slack    |…
