---
repo: "PhonePe/nika"
name: "nika"
description: "A source code analysis tool that combines cross-file taint analysis and rule-based detection to identify vulnerability patterns, with optional AI-assisted false positive reduction."
url: "https://github.com/PhonePe/nika"
homepage: "https://phonepe.github.io/nika/index.html"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-24T08:37:21Z"
lastCommitAt: "2026-06-30T06:50:40Z"
lastReleaseAt: "2026-06-08T04:33:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 48
maintainers: ["rootaux", "Ncoder2", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e391cdc45b55938451ae54ba55dbd53e87c9380b5347889f12b8dd008a6ad7bb/PhonePe/nika"
---

# Nika

Nika is an open-source source code review and static analysis tool for security engineers who need to identify exploit paths in Java microservices. It performs cross-file taint analysis to trace attacker-controlled input across application layers and determine whether that input reaches a security-sensitive sink.

## Why Nika

Many exploitable issues are not visible inside a single file. Request data may enter through a controller, pass through DTOs and service layers, and only become dangerous when it reaches a sink such as a database query, file operation, template engine, reflection API, or outbound network call.

Nika is built for that review problem. Instead of just identifying dangerous sinks, it traces data flow across files and functions so security engineers can determine whether a path is actually reachable.

## What Nika Helps Security Engineers Do

- Trace attacker-controlled input across controllers, services, helpers, and utility layers.
- Validate source-to-sink reachability.
- Support secure code review with branch-aware scanning.
- Generate HTML reports.
- Extend coverage with custom sources, OpenGrep sinks, and vulnerability plugins.

## Detection…
