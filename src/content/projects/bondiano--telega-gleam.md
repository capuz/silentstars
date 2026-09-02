---
repo: "bondiano/telega-gleam"
name: "telega-gleam"
description: "Gleam library to build Telegram bots"
readmeQualityOk: true
url: "https://github.com/bondiano/telega-gleam"
homepage: "https://hexdocs.pm/telega/"
language: "Gleam"
languages: ["Gleam"]
languagePcts: [100]
topics: ["gleam", "telegram", "telegram-bots"]
stars: 68
forks: 12
openIssues: 0
closedIssues: 24
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2024-03-22T14:42:01Z"
lastCommitAt: "2026-09-02T08:04:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 53
maintainers: ["bondiano", "WeebNetsu", "avila-gabriel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/776031940/fb6a633c-2862-4bb9-9b2c-4b6b78688793"
discussionCount: 3
---

# Telega

A [Gleam](https://gleam.run/) library for the Telegram Bot API on BEAM.

</a>

## It provides

- an interface to the Telegram Bot HTTP-based APIs `telega/api`
- a client for the Telegram Bot API `telega/client`
- OTP supervision tree for all bot processes (bot actor, chat instances, polling)
- adapter to use with [wisp](https://github.com/gleam-wisp/wisp)
- long polling with automatic retry and exponential backoff
- session bot implementation
- conversation implementation (multi-message flows)
- declarative single-message dialogs with widgets and sub-dialogs (`telega/dialog`, [guide](https://hexdocs.pm/telega/docs/dialogs.html))
- per-user flood control middleware (`router.with_rate_limit`)
- inline mode result builders with pagination (`telega/inline_mode`)
- payments helpers — Telegram Stars first-class (`telega/payments`)
- paid media — `sendPaidMedia` via `api.send_paid_media` / `reply.with_paid_media`
- production observability via [telemetry](https://hexdocs.pm/telemetry/) events (`telega/telemetry`)
- graceful shutdown via `telega.shutdown()`

## Quick start

> If you are new to Telegram bots, read the official [Introduction for…
