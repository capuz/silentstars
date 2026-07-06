---
repo: "wintermeyer/vutuv"
name: "vutuv"
description: "vutuv is a social network. Think of it as a fast, secure and less annoying open-source alternative for LinkedIn, Facebook and X."
readmeQualityOk: true
url: "https://github.com/wintermeyer/vutuv"
homepage: "https://vutuv.de"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [89]
topics: ["social-network"]
stars: 318
forks: 40
openIssues: 29
closedIssues: 730
watchers: 15
contributors: 1
recentReleases: 0
createdAt: "2016-04-27T07:25:37Z"
lastCommitAt: "2026-07-06T07:03:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "under_pressure"]
healthScore: 99
undervaluedScore: 40
maintainers: ["wintermeyer"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c6b0294949decc479bf9af6b61e71136558ce5cb838acd999ecceedbebd8e4e/wintermeyer/vutuv"
discussionCount: 4
---

# vutuv

Many people call vutuv **the LinkedIn of the Fediverse**: a free, fast and
open source social network for the profiles of humans and organizations. It
began as a LinkedIn alternative and picked up the good parts of X and
Facebook along the way: posts, likes, reposts, replies and direct messages.
And it federates, so members can be followed from Mastodon and the rest of
the Fediverse (ActivityPub, opt-in per member). The reference installation
runs at
[vutuv.de](https://vutuv.de); **anyone can run their own** — on the public
internet or inside a company intranet.

We use the [MIT License](https://github.com/wintermeyer/vutuv/blob/HEAD/LICENSE).

## What it does

- Public member profiles (work experience, education, spoken languages, tags,
  links, contact details) with follow relationships, posts, likes/reposts/replies and
  1:1 direct messages — all real-time (Phoenix LiveView) where it matters.
- **Passwordless**: login by emailed PIN, optionally passkeys (WebAuthn).
- Invite non-members by email: the link opens the sign-up form prefilled, with
  an optional personal note and opt-in auto-follow.
- Agent-ready: every public page is also served as Markdown, plain text,…
