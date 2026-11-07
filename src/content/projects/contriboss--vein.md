---
repo: "contriboss/vein"
name: "vein"
description: "A fast, intelligent package proxy/mirror server"
readmeQualityOk: true
url: "https://github.com/contriboss/vein"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["cache", "caching", "circuit-breaker", "cyclonedx", "gems", "mirror", "proxy", "proxy-server", "rama", "ruby"]
stars: 28
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2025-12-15T15:50:05Z"
lastCommitAt: "2026-11-07T10:38:03Z"
lastReleaseAt: "2026-10-26T21:11:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 58
maintainers: ["seuros", "github-actions[bot]", "gregmolnar"]
openGraphImageUrl: "https://opengraph.githubassets.com/28b28caceaa6852b5efe04e2222c1ba2fe3a2f4668aaa471baeeb9b3eeb8befd/contriboss/vein"
---

# Vein 💎

A fast, intelligent multi-ecosystem package proxy/cache for RubyGems, crates.io, and npm.

Docs, quickstart, configuration reference, and deployment guides: **https://vein.contriboss.com**

## Why

Using Vein results in faster, cheaper, more reliable CI builds. Once a package
has been fetched, it is served from your own cache instead of the public
registry. This speeds up builds, cuts outbound bandwidth, and keeps builds
working when rubygems.org, crates.io or npm is slow or down.

You also get supply-chain protection through the release delay. You can refuse
to serve a package version until it has been public for, say, 7 days. Most
malicious npm or gem releases, like hijacked maintainer accounts or typosquats,
are caught and yanked within hours or days. A delay keeps your builds from
pulling them in that window.

Vein generates CycloneDX SBOMs and keeps a catalog, so you get a central
record of which packages and versions your organization actually pulls. That
helps with compliance (SOC 2, the EU Cyber Resilience Act, etc) and with
answering “are we affected?” when a new CVE drops.

The exposed MCP resources, and optional GitHits integration for code and docs
context…
