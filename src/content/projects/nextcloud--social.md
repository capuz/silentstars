---
repo: "nextcloud/social"
name: "social"
description: "🎉 Social can be used for work, or to connect to the fediverse!"
readmeQualityOk: true
url: "https://github.com/nextcloud/social"
homepage: "https://apps.nextcloud.com/apps/social"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [71, 24]
topics: ["nextcloud", "nextcloud-app", "activitypub", "social-network", "federation", "mastodon", "fediverse", "open-source", "social", "nextcloud-social"]
stars: 499
forks: 58
openIssues: 87
closedIssues: 354
watchers: 24
contributors: 263
recentReleases: 0
createdAt: "2018-09-05T10:15:47Z"
lastCommitAt: "2026-09-08T08:16:37Z"
lastReleaseAt: "2019-06-21T18:00:02Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 36
maintainers: ["karlitschek", "SchBenedikt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/25d502127733f7bfe68c30d677bb0d4c1d4140b710c888c205569d58a6672a7d/nextcloud/social"
---

# Nextcloud Social 🚀✨

Nextcloud Social is an ActivityPub app that connects your Nextcloud account to the Fediverse. Your instance acts as a lightweight federated social server: each user gets a `Person` actor, can write and edit posts, follow accounts on other servers, and like, boost and reply to what they receive.

It is a partial implementation of ActivityPub and of the Mastodon client API — enough for posting, following and reading timelines, but far from feature parity with Mastodon. See "Not implemented yet" below before deploying it as someone's only Fediverse client.

## 🔧 Features

- 🧭 **Timelines** — Home, Local, Global (federated), Direct messages, Liked posts, Notifications, per-account and per-hashtag timelines.
- ✍️ **Composer** — write posts and replies, pick a visibility (public, unlisted, followers-only, direct), insert emoji, and attach images. `@mentions` and `#hashtags` typed by hand are extracted from the text and turned into real recipients and tags.
- ✏️ **Edit posts** — edit your own local posts inline; the change is saved and federated as an ActivityPub `Update` (`lib/Service/PostService.php`, `editPost()`).
- 🗑️ **Delete posts** — delete your own…
