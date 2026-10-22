---
repo: "PostHog/posthog-go"
name: "posthog-go"
description: "Official PostHog Go library"
readmeQualityOk: true
url: "https://github.com/PostHog/posthog-go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["golang", "go", "posthog", "official", "feature-flags", "experimentation", "event-tracking"]
stars: 55
forks: 41
openIssues: 4
closedIssues: 30
watchers: 2
contributors: 76
recentReleases: 0
createdAt: "2020-02-21T22:05:23Z"
lastCommitAt: "2026-10-22T08:51:21Z"
lastReleaseAt: "2025-11-27T05:44:28Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 59
maintainers: ["releaser-posthog-go[bot]", "dependabot[bot]", "marandaneto"]
openGraphImageUrl: "https://opengraph.githubassets.com/944ce7f9c2da447085680dda14a3216c0021833a3005db18e690815b8de983e6/PostHog/posthog-go"
---

# PostHog Go

Please see the main [PostHog docs](https://posthog.com/docs).

SDK usage examples and code snippets live in the official documentation so they stay up to date.

## Documentation

- [Go library docs](https://posthog.com/docs/libraries/go)

## AI observability

The [`otel`](https://github.com/PostHog/posthog-go/blob/HEAD/otel) module is an OpenTelemetry bridge that forwards AI spans
(`gen_ai.*`, `llm.*`, and similar) to PostHog AI observability, including spans
from a Google Agent Development Kit (ADK) for Go agent. It is a separate Go
module, so the core SDK stays free of OpenTelemetry dependencies.

## Questions?

### [Visit the community forum.](https://posthog.com/questions)

## Contributing

See [CONTRIBUTING.md](https://github.com/PostHog/posthog-go/blob/HEAD/CONTRIBUTING.md) for local setup and test instructions.

## Releasing

See [RELEASING.md](https://github.com/PostHog/posthog-go/blob/HEAD/RELEASING.md).
