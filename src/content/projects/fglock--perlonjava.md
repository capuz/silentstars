---
repo: "fglock/PerlOnJava"
name: "PerlOnJava"
description: "An implementation of the Perl programming language designed to run on the Java platform"
readmeQualityOk: true
url: "https://github.com/fglock/PerlOnJava"
language: "Perl"
languages: ["Perl", "Java"]
languagePcts: [67, 28]
stars: 67
forks: 8
openIssues: 64
closedIssues: 364
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2024-08-02T19:02:42Z"
lastCommitAt: "2026-11-05T11:25:02Z"
lastReleaseAt: "2024-11-04T17:41:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 50
maintainers: ["fglock", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/60a19030487dcc67e76907cff9dc06b9ffbce8ec808a224da403f5a5663453bd/fglock/PerlOnJava"
discussionCount: 2
---

# PerlOnJava

> Perl 5 on the JVM — single jar, batteries included

PerlOnJava compiles Perl to JVM bytecode, so many existing Perl scripts can run on any platform with a JVM and use supported Java-backed libraries. Compatibility is substantial but not complete; check the [feature matrix](https://github.com/fglock/PerlOnJava/blob/HEAD/docs/reference/feature-matrix.md) and [bundled-module list](https://github.com/fglock/PerlOnJava/blob/HEAD/docs/reference/bundled-modules.md) before relying on a particular language feature or CPAN module. One jar file runs on Linux, macOS, and Windows — just add Java 24+. PerlOnJava is an independent project, not part of the Perl core distribution.

> **Project status:** PerlOnJava is actively developed and is now in its
> **compatibility and performance phase**. The broad language implementation is
> in place; current work closes the remaining Perl compatibility gaps, expands
> CPAN coverage, and improves CPU and memory performance. See the
> [current status and priorities](https://github.com/fglock/PerlOnJava/blob/HEAD/docs/about/roadmap.md#current-project-status).

**Compatibility milestone (2026-10-03):** all **575 selected imported Perl core…
