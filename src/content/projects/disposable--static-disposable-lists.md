---
repo: "disposable/static-disposable-lists"
name: "static-disposable-lists"
description: "Static lists for disposable hosts"
readmeQualityOk: true
url: "https://github.com/disposable/static-disposable-lists"
homepage: "https://disposable.github.io/static-disposable-lists/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-04-21T11:18:42Z"
lastCommitAt: "2026-10-13T10:59:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 88
maintainers: ["smeinecke", "github-actions[bot]", "bradleyhtaylor"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e871850f9c203fcc9059f2d46d61200f8f1b523aa89760bc1bbac789f4f938b/disposable/static-disposable-lists"
---

# Static Disposable Lists

Static data repository for disposable email domains and mail service definitions that cannot be dynamically updated via the main [disposable](https://github.com/disposable/disposable) project.

**Web Interface:** [https://disposable.github.io/static-disposable-lists/](https://disposable.github.io/static-disposable-lists/) ([DNS Services](https://disposable.github.io/static-disposable-lists/dns.html), [Tunnel Brokers](https://disposable.github.io/static-disposable-lists/tunnelbrokers.html))

## Data Files

| File | Description |
|------|-------------|
| [mailservices.json](https://github.com/disposable/static-disposable-lists/blob/HEAD/mailservices.json) | Email service definitions with host and verification metadata; drives whitelist/strict-tier classification in disposable (see below) |
| [dnsservices.json](https://github.com/disposable/static-disposable-lists/blob/HEAD/dnsservices.json) | Dynamic DNS / free hostname provider definitions: offered domains, pricing, update support, API, revalidation and signup metadata (see below). Source of truth — hand-edited, web-facing; imported `hosts` capped at 500 per provider |
|…
