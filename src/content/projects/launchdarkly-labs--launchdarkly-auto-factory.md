---
repo: "launchdarkly-labs/launchdarkly-auto-factory"
name: "launchdarkly-auto-factory"
description: "Early design partner prototype of fairytale"
readmeQualityOk: true
url: "https://github.com/launchdarkly-labs/launchdarkly-auto-factory"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 7
forks: 23
openIssues: 7
closedIssues: 1
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-05-30T01:13:13Z"
lastCommitAt: "2026-09-28T10:05:58Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 78
undervaluedScore: 54
maintainers: ["ttotenberg-ld", "yeutterg", "kevincloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dd892b4d2cf865e56a607b35c872e85874537ddf2280bbe9ecc29752330088f/launchdarkly-labs/launchdarkly-auto-factory"
---

# LaunchDarkly AutoFactory

Prototype of autonomous, safe software releases. A chain of LaunchDarkly-defined AI agents
turns a plain pull request into a feature-flagged, metric-instrumented, tested change, and a
release orchestrator turns the eventual deploy into a guarded rollout that monitors itself.

Status: working prototype, shared with design partners. Phase 1 and Phase 2 both run
end-to-end against a live demo repo. Not a product.

## How it works

- **Phase 1 (per change):** resolve an agent graph and six agent configs from LaunchDarkly
  and walk the chain: research and classify the change, normalize any human-stated release
  intent, create a feature flag (targeting off), wire the new behavior behind it, create
  guarded-release metrics and instrument their events, write flag-on/flag-off tests, and
  produce a review verdict. A release manifest
  (`.release-flags/…json`) records the flag, metrics, and rollout parameters. LaunchDarkly
  **judges** attached to the coding agents score each output 0..1 against the agent's actual
  git diff — a sampled, non-blocking evaluation layer (the reviewer remains the gate; see
  [ADR…
