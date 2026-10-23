---
repo: "hanshuebner/herold"
name: "herold"
description: "Herold mail server - public read-only code mirror. Development, issues and PRs are at code.netzhansa.com/herold/herold."
readmeQualityOk: true
url: "https://github.com/hanshuebner/herold"
homepage: "https://code.netzhansa.com/herold/herold"
language: "Go"
languages: ["Go"]
languagePcts: [63]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-27T05:15:02Z"
lastCommitAt: "2026-10-23T07:57:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 58
maintainers: ["hanshuebner"]
openGraphImageUrl: "https://opengraph.githubassets.com/508eb21127d8271d4bead674d656666dde90aeb3b649fada677e31bb881dc932/hanshuebner/herold"
discussionCount: 0
---

# Herold

Herold is a single-node mail server in Go. Substrate beneath the
in-tree Suite SPA (mail, calendar, contacts, chat) under `web/apps/suite`.

One binary. One system config file. One data directory. SQLite by
default; Postgres for larger deployments. No CGO. No multi-node. No
phone-home.

## What it is

Herold is a self-hostable, single-node communications server. Phase 1
ships an SMTP MTA plus IMAP / JMAP mailbox server with Sieve filtering,
DKIM / SPF / DMARC / ARC, a first-class HTTP send API, incoming
webhooks, LLM-based spam classification, and per-user external OIDC
federation. Phase 2 layers JMAP for Calendars, JMAP for Contacts, and a
chat surface (DMs, Spaces, presence, reactions, 1:1 video calls) on top
of the same store and dispatch core.

It is sized for small-to-medium self-hosters, including power users
with 1 TB+ mailboxes. Target scale per node: roughly 1,000 mailboxes,
100 hosted domains, 10,000 inbound + 10,000 outbound messages per day,
1,000 concurrent IMAP / JMAP sessions, ~10 TB total storage. See
`docs/design/00-scope.md` for the canonical scope statement and the
non-goals that frame what herold is not.

Explicit non-goals: no multi-tenancy, no…
