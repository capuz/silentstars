---
repo: "ordnary-com/amelu"
name: "amelu"
description: "Amelu is an email hosting product by Ordnary. It provisions and manages mailboxes, aliases and domains on top of a self-hosted Stalwart mail server, with its own Postgres database for account and billing metadata, kept separate from Stalwart's own mail store."
readmeQualityOk: true
url: "https://github.com/ordnary-com/amelu"
homepage: "https://amelu.org"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [57, 37]
topics: ["go-http", "mx", "osi", "stalwart"]
stars: 9
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-13T08:01:01Z"
lastCommitAt: "2026-10-08T10:52:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 38
maintainers: ["stijnwtf"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b85ebbc8cc49e92892ac80ce861b8580b4f647ed9911611e0c3f134aa77e72d/ordnary-com/amelu"
---

Email hosting on your own domain, from [Ordnary](https://ordnary.com).

---

## Why we built this

We wanted email on our own domain that we actually control: real IMAP/SMTP,
no lock-in to a big provider, no proprietary web client. Most "custom domain
email" options turn out to be a reseller markup on top of Google Workspace,
or they leave you self-hosting a mail server yourself, which starts as a
weekend project and quietly becomes a permanent job: DNS records, spam
reputation, a server you now have to keep patched forever.

Amelu is our attempt at a middle path. Under the hood it's
[Stalwart](https://stalw.art), an open-source mail server, doing the actual
mail handling. Amelu is the layer on top: a dashboard for verifying domains,
setting up aliases, getting DNS right, and billing, so running your own mail
server feels like signing up for a SaaS product instead of wrangling a
server yourself at 1am because a cert expired.

Right now it's a working demo, not a public launch, so don't go telling all
your friends yet. Domain verification, mailbox provisioning, and billing all
work end to end against a real Stalwart instance we operate, but we're still
hardening things before…
