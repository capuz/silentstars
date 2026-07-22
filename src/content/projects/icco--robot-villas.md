---
repo: "icco/robot.villas"
name: "robot.villas"
description: "RSS to Mastodon Bridge"
readmeQualityOk: true
url: "https://github.com/icco/robot.villas"
homepage: "https://robot.villas"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["activitypub", "mastodon", "typescript"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-12-27T02:39:27Z"
lastCommitAt: "2026-07-22T06:09:24Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 76
maintainers: ["icco", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bb4ffcecf6fcfb4ddee9a89a74ab65e5339ff90d0113fdb715eeb87d06d1c7f/icco/robot.villas"
fundingLinks: ["GITHUB:https://github.com/icco"]
---

# robot.villas

An RSS-to-Mastodon bridge. Each RSS feed gets its own bot account on the fediverse, discoverable via WebFinger (e.g. `@hackernews@robot.villas`). Fediverse users can follow any bot from Mastodon or other ActivityPub-compatible platforms and receive new posts in their timeline.

## Configuration

Bots, follows, and relays are configured in `feeds.yml`:

```yaml
# yaml-language-server: $schema=./feeds.schema.json
bots:
  hackernews:
    feed_url: "https://news.ycombinator.com/rss"
    display_name: "Hacker News"
    summary: "Top stories from Hacker News"
    profile_photo: "https://news.ycombinator.com/y18.svg"
    default_hashtags:
      - Tech
      - News
follows:
  - "@someone@mastodon.social"
relays:
  - https://relay.toot.io/actor
```

`feeds.schema.json` contains a JSON Schema spec for `feeds.yml` that can be used by editors and external validators.

Each key under `bots` becomes the bot's fediverse username. Usernames must be lowercase alphanumeric or underscores (validated at startup via Zod).

| Field              | Required | Description                                          |
| ------------------ | -------- |…
