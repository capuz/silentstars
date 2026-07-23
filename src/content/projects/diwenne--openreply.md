---
repo: "diwenne/openreply"
name: "openreply"
description: "open sourced Manychat: comment-dm automation + account analytics. the link below will not allow you to oauth; you must self-host with your own api keys."
readmeQualityOk: true
url: "https://github.com/diwenne/openreply"
homepage: "https://tryopenreply.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-17T02:01:45Z"
lastCommitAt: "2026-07-23T06:16:20Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 65
undervaluedScore: 49
maintainers: ["diwenne", "im-anishraj"]
openGraphImageUrl: "https://opengraph.githubassets.com/98e4a96c9742d3185899fc7cca088dc936533f7b6a9f3f12a6d4e1ad5fa1cc3a/diwenne/openreply"
---

# OpenReply

Open-sourced ManyChat for Instagram comment-to-DM automation.

</div>

Someone comments `LINK` on your reel, and they get a DM with your link a second later. That is the whole idea. OpenReply watches the comments on your Instagram posts, and when a comment matches a keyword you set, it sends that person a private reply through the official Meta API. You can also post a public reply under the comment at the same time.

ManyChat does this and charges a monthly fee. OpenReply is the same core feature, free, running on your own infrastructure, with no seat limits and no plan caps.

> If this saves you a subscription or a weekend of building, a star on the repo genuinely helps other people find it.

## Why this exists

Comment-to-DM is one feature, but every tool that offers it wants a recurring subscription for it. The actual work is a webhook, a keyword match, and one API call to Meta. That does not need to cost anything to run for a single account.

OpenReply is built around Meta's official Instagram private replies. It does not scrape, it does not automate a browser, and it never asks for an Instagram password. That keeps your account inside Meta's rules, which matters…
