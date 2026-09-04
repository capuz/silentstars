---
repo: "BePing/beping-backends"
name: "beping-backends"
description: "This api is a middleware to the TabT SOAP API. It contacts TabT and cache results in order to reduce latency."
readmeQualityOk: true
url: "https://github.com/BePing/beping-backends"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-10-07T06:47:10Z"
lastCommitAt: "2026-09-04T08:11:29Z"
lastReleaseAt: "2023-01-26T13:18:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 69
maintainers: ["Fllorent0D", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2c6fb13c934d129ac6b6f120743269f4a2aedff5eedd665385530716d94a867/BePing/beping-backends"
---

# TabT-Rest

This api is a bridge to the TabT SOAP API. It contacts TabT and cache results in order to reduce latency for some requests. More documentation will come.

## Prerequisites

- Node.js 26
- pnpm 11

## Installation

```bash
$ git clone https://github.com/Fllorent0D/TabT-Rest.git
$ corepack enable
$ pnpm install
```

Create your own environment file (`.env`) from the `.env.example`

PostHog is optional in production (the services remain safe no-ops without a
token) and required in development so missing instrumentation is visible:

- `POSTHOG_API_KEY`: BePing project token shared with the mobile app
- `POSTHOG_HOST`: `https://t.beping.be` (BePing reverse proxy; defaults to this
  value when omitted). Use `https://eu.i.posthog.com` only as a direct fallback.

### PostHog observability

Backend business events, error tracking and OTLP Logs use `POSTHOG_API_KEY`.
Generic HTTP completions are not sent as product analytics events: request
telemetry belongs in Logs, while only server-confirmed user actions are kept as
product events. Logs are enabled automatically in production and are sent to
`<POSTHOG_HOST>/i/v1/logs`; set `POSTHOG_LOGS_ENDPOINT` only when the ingestion…
