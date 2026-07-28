---
repo: "SnowCait/nostr-japanese-users"
name: "nostr-japanese-users"
description: "Follow Japanese users"
readmeQualityOk: true
url: "https://github.com/SnowCait/nostr-japanese-users"
homepage: "https://nostter.app/JapaneseUsers@snowcait.github.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-04-09T16:03:31Z"
lastCommitAt: "2026-07-28T14:57:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 77
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be751e616f9572407228e3d35edca71fae3af11c4ccd94160f9c1035b18072a/SnowCait/nostr-japanese-users"
---

# Nostr Japanese users

Follow Japanese users. Working on GitHub Actions.

日本人をフォローする bot です。 GitHub Actions で動いています。

## Development

Install [Deno](https://docs.deno.com/runtime/manual/).

Set environment variable `NOSTR_PRIVATE_KEY` (nsec or hex) or save as `.env`.

```bash
NOSTR_PRIVATE_KEY=nsec1yourprivatekey
```

## Run

These commands run locally.

```bash
deno task follow
deno task follow-followers
deno task follow-sleepers
deno task unfollow
deno task prune
```

If you want to send kind 3 event to relays.

```bash
deno task send
```
