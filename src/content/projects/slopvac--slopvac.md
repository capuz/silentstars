---
repo: "slopvac/slopvac"
name: "slopvac"
description: "Deterministic linter for AI writing patterns and documentation quality."
readmeQualityOk: true
url: "https://github.com/slopvac/slopvac"
homepage: "http://slopvac.github.io/slopvac/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [73, 27]
topics: ["ai-writing", "cli", "documentation", "linter", "prose-linting", "python", "technical-writing", "vale"]
stars: 14
forks: 1
openIssues: 10
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-07-27T10:53:06Z"
lastCommitAt: "2026-11-25T11:59:57Z"
lastReleaseAt: "2026-09-09T14:55:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 46
maintainers: ["srobroek"]
openGraphImageUrl: "https://opengraph.githubassets.com/eade496c65700c9be7ff3899492ba372304ba5daf1532d7e1d8ca77cea532bc8/slopvac/slopvac"
---

# slopvac

---

[Quick start](#quick-start) · [CLI reference](https://github.com/slopvac/slopvac/blob/HEAD/packages/slopvac-lint/README.md) ·
[Rules](https://github.com/slopvac/slopvac/blob/HEAD/packages/slopvac-lint/docs/rules.md) ·
[Metrics](https://github.com/slopvac/slopvac/blob/HEAD/packages/slopvac-lint/docs/metrics.md) ·
[Triage](https://github.com/slopvac/slopvac/blob/HEAD/packages/slopvac-lint/docs/triage.md) ·
[Suppressions](https://github.com/slopvac/slopvac/blob/HEAD/packages/slopvac-lint/docs/suppressions.md) ·
[Configuration](https://github.com/slopvac/slopvac/blob/HEAD/packages/slopvac-lint/README.md#configuration) ·
[Agent setup](#agent-setup) · [Writing guidance](#writing-guidance) ·
[Semantic review](#semantic-review) · [CI](#ci-integration) · [Roadmap](#roadmap)

`slopvac` lints prose and source comments. Its rules cover AI writing patterns
and general prose quality, including documentation discipline and
technical-writing constraints. Use it on AI-generated documentation, PR
descriptions, Markdown, and comments in supported source files such as TSX and
JSX. Comment mode checks comments, not code or strings.
