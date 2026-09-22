---
repo: "lodado/playwright-spec-for-AI-Agent"
name: "playwright-spec-for-AI-Agent"
description: "It turns Playwright specs from deterministic test scripts into AI-readable QA scenarios for live staging validation."
readmeQualityOk: true
url: "https://github.com/lodado/playwright-spec-for-AI-Agent"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 46]
topics: ["ai-qa", "e2e", "hermes-agent", "playwright", "staging", "test-automation", "testing", "qa-scenario", "ai-agent", "ai-engineering"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-05-30T16:14:34Z"
lastCommitAt: "2026-09-22T08:45:28Z"
lastReleaseAt: "2026-07-27T07:55:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 56
maintainers: ["lodado", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24d1e8120007ddd5c5ee0c9d98fa03e7309e2fee09426ca1387ef5c48334dbcb/lodado/playwright-spec-for-AI-Agent"
---

# playwright-spec-for-AI-Agent

**Judge a live staging page against the Playwright specs you already wrote.**

</div>

Your `*.spec.ts` files already encode what "correct" means. This CLI reads the
`@qa-scenario` annotations on them, turns each scenario into a Given/When/Then plan,
sends an AI agent to look at the real staging page, and returns `pass`, `fail`,
`manual_review`, or `skip` — with the harness, not the agent, deciding whether the
evidence supports it.

```text
spec → abstract-ai → judge → review → slack · issues (optional)
```

## What it is, and is not

- **It is** a live-staging judgment layer for apps that already have Playwright specs.
- **It is not** a test generator, a test healer, or a replacement for your CI suite.
- **It never executes your Playwright test suite against staging.** Specs are read as source material and never modified. Browser session setup and evidence capture can use Playwright APIs.
- Ambiguous results become `manual_review` rather than a forced pass or fail.
- Zero runtime dependencies. `@playwright/test` is an *optional* peer, needed only for the browser session paths and the trace/HAR evidence they enable.

## Try it offline, in one…
