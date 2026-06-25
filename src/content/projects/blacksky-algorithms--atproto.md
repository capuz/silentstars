---
repo: "blacksky-algorithms/atproto"
name: "atproto"
description: "Blacksky fork of bluesky-social/atproto with AppView performance optimizations, caching, and community features"
url: "https://github.com/blacksky-algorithms/atproto"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 92
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 37
recentReleases: 0
createdAt: "2026-01-21T17:44:20Z"
lastCommitAt: "2026-06-25T01:32:10Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 27
maintainers: ["matthieusieben", "github-actions[bot]", "rafaeleyng"]
openGraphImageUrl: "https://opengraph.githubassets.com/69d82c81f89b8d720b757a4d7ca1b9ed6c046ad28de9b16c175e562d5262cc9b/blacksky-algorithms/atproto"
---

# Blacksky AppView

This is [Blacksky's](https://blacksky.community) fork of the [AT Protocol reference implementation](https://github.com/bluesky-social/atproto) by Bluesky Social PBC. It powers the AppView at `api.blacksky.community`.

We're publishing this for transparency and so other communities can benefit from the work. **This repository is not accepting contributions, issues, or PRs.** If you want the canonical atproto implementation, use [bluesky-social/atproto](https://github.com/bluesky-social/atproto).

## What's Different

All changes are in `packages/bsky` (appview logic), `services/bsky` (runtime config), and one custom migration. Everything else is upstream.

### Why Not the Built-in Firehose Consumer?

The upstream dataplane includes a TypeScript firehose consumer (`subscription.ts`) that indexes events directly. We replaced it with [rsky-wintermute](https://github.com/blacksky-algorithms/rsky), a Rust indexer, for several reasons:

- **Performance at scale**: The TypeScript consumer processes events sequentially. At network scale (~1,000 events/second, 18.5 billion total records), a full backfill at ~90 records/sec would take 6.5 years. Wintermute targets 10,000+…
