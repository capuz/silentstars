---
repo: "mickey/tailhome"
name: "tailhome"
description: "The start page that builds itself from your tailnet."
readmeQualityOk: true
url: "https://github.com/mickey/tailhome"
homepage: "https://michaelbensoussan.com/posts/tailhome/"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [51, 40]
topics: ["dashboard", "homelab", "self-hosted", "service-discovery", "startpage", "tailscale", "tsnet", "golang", "start-page", "launcher"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-14T14:14:04Z"
lastCommitAt: "2026-10-29T10:36:36Z"
lastReleaseAt: "2026-10-27T13:21:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 39
maintainers: ["mickey"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1419099190/db98b908-bb37-44ed-b4a7-520e32f96571"
discussionCount: 1
---

# tailhome

The start page that builds itself from your tailnet.

A self-hosted launcher for your [Tailscale](https://tailscale.com/) network: published apps and coding agents' previews, at `http://home/`.

Web apps get links; others, such as SSH or Postgres, get copyable addresses. tailhome runs as one container (Linux amd64, arm64 and armv7) or one binary (also macOS and Windows). It [joins your tailnet itself](https://tailscale.com/docs/features/tsnet), so it needs no Tailscale on the host and no API credentials.

It checks the devices it can reach, including other members' laptops and phones, and everyone who can open it sees the whole list. See [security and privacy](#security-and-privacy).

tailhome is pre-1.0 with one maintainer, who runs it daily. Settings and defaults may change between 0.x releases; read the [release notes](https://github.com/mickey/tailhome/releases) before upgrading.

## Why tailhome

tailhome keeps your app list up to date by discovering what you publish on your tailnet with `tailscale serve`, [DockTail or TSDProxy](https://github.com/mickey/tailhome/blob/HEAD/docs/apps.md#publish-container-apps). Your coding agents' work appears too: with the…
