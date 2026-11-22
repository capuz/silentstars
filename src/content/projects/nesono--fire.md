---
repo: "nesono/fire"
name: "fire"
description: "Fully Integrated Requirements Engineering"
readmeQualityOk: true
url: "https://github.com/nesono/fire"
language: "Python"
languages: ["Python"]
languagePcts: [73]
stars: 5
forks: 0
openIssues: 9
closedIssues: 66
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-10-27T10:40:44Z"
lastCommitAt: "2026-11-22T11:52:24Z"
lastReleaseAt: "2026-04-08T06:04:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["nesono", "fernride-jissing"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e4c6205103af136a021fb8302ba1dcc7bca8379ff959303d88cad05463b0459/nesono/fire"
---

# FIRE — Fully Integrated Requirements Engineering

FIRE is a Bazel module for managing safety-critical requirements and parameters
with versioned traceability between them. Requirements are written in Markdown
and parameters in YAML, with cross-references validated at build time. Parameters
can be consumed from generated source code libraries in C++, Python, Go, Rust,
and Java.

## Integration

Add to `MODULE.bazel`:

```starlark
bazel_dep(name = "fire", version = "0.6.1")

# Add language rules for the languages you intend to use
bazel_dep(name = "rules_cc", version = "0.2.17")
bazel_dep(name = "rules_python", version = "2.5.1")
```

## System Requirements

System requirements are stored in `.sysreq.md` files. Each requirement is an
H2 heading followed by a metadata line and free-form Markdown text. Every H2
heading must be exactly a requirement ID (`[A-Z][A-Z0-9_-]+`); other H2
headings fail validation. Use H3 or deeper for structure inside a requirement.
Requirement IDs must be unique; a duplicate ID fails validation.

**Metadata fields:**
