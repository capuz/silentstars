---
repo: "fabriziosalmi/flareover"
name: "flareover"
description: "Deterministic, 0% false-positive engine to migrate your proxied CDN/WAF edge to EU-sovereign self-hosted infrastructure (Caddy · caddy-waf · PowerDNS · CertMate · MinIO). AGPL."
readmeQualityOk: true
url: "https://github.com/fabriziosalmi/flareover"
homepage: "https://www.flareover.com"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["agpl", "caddy", "certmate", "cloudflare-alternative", "dns", "eu-sovereignty", "golang", "migration-tool", "powerdns", "reverse-proxy"]
stars: 6
forks: 2
openIssues: 3
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-07T11:18:17Z"
lastCommitAt: "2026-10-17T07:59:23Z"
lastReleaseAt: "2026-07-09T16:48:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 59
maintainers: ["fabriziosalmi", "dependabot[bot]", "fabgpt-coder"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1292218427/10eef9cf-3ef9-4c39-8c75-adca3a12196d"
fundingLinks: ["GITHUB:https://github.com/fabriziosalmi"]
discussionCount: 2
---

**Move your site off the orange cloud onto your own EU servers, without changing how it behaves.**

Leaving the big managed edge means rebuilding, by hand, everything the dashboard quietly does for
you: DNS, TLS certificates, redirects, firewall/WAF rules, caching, and hoping you didn't miss
something that silently breaks the site.

`flareover` does that rebuild for you. Point it at a Cloudflare zone; it reads every setting and
generates the equivalent configuration for an open-source, self-hosted stack (Caddy, PowerDNS,
CertMate, …) on EU infrastructure. Its one rule: **never emit config that silently changes behavior.**

- Where it can prove an exact equivalent, it applies it.
- Where a choice is genuinely ambiguous, it asks you one yes/no.
- Where nothing maps faithfully, it flags the item for you, and **never guesses**.

That last part is the whole point: a migration you can trust, because the tool is honest about exactly
what it can and can't carry over.

**Contents:** [The contract](#the-contract-no-silent-surprises) · [How it works](#how-it-works--five-phases) · [Target stack](#target-stack-eu-sovereign) · [Install](#install) · [Usage](#usage) · [Status](#status) ·…
