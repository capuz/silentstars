---
repo: "twarge/zephyr"
name: "zephyr"
description: "Native macOS Zulip client"
readmeQualityOk: true
url: "https://github.com/twarge/zephyr"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 0
recentReleases: 0
createdAt: "2026-08-02T16:47:39Z"
lastCommitAt: "2026-11-04T13:00:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ed613cdae685359ffac2190f3050606f7c9cbcbf3126087eefddbe98aee182e6/twarge/zephyr"
---

# Zephyr — for Zulip

**Zephyr** is a truly native Apple-platform client for [Zulip](https://zulip.com) —
macOS first, with iOS/iPadOS builds from the same target: a calm two-pane window in the
spirit of Apple Messages, with the web app's sidebar concepts (channels, folders,
topics, views) rendered natively. The name honors Zulip's ancestry in MIT's
Zephyr messaging system — and a zephyr is a soft, fast breeze, which is the feel the app
aims for. Zephyr is an independent project, not affiliated with the Zulip organization.

**Status: feature-complete through M4** (minus scheduled messages, deferred
deliberately). Everything in M2's messaging core plus: notifications with
inline reply (DMs + mentions, while running — Zulip has no desktop push), dock badge and
send sounds (configurable in Settings ⌘,), multi-account with switching, a channel
browser with subscribe/unsubscribe and muting, warm launch from a cached snapshot
("stale → live"), topic moves with propagation, read receipts, and an edit-history
viewer. Offline-first: warm launch from the cached snapshot, a per-account SQLite
message store (GRDB) retains full history for offline transcripts, offline
scrollback, and offline…
