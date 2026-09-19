---
repo: "bardesss/haelan"
name: "haelan"
description: "Self-hosted dashboard and local mirror for your household's Google Health data. One SQLite file, one container, no telemetry."
readmeQualityOk: true
url: "https://github.com/bardesss/haelan"
homepage: "https://bardesss.github.io/haelan/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["dashboard", "docker", "google-health", "health", "health-data", "personal-analytics", "quantified-self", "self-hosted", "sqlite", "typescript"]
stars: 37
forks: 5
openIssues: 4
closedIssues: 16
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-19T13:28:50Z"
lastCommitAt: "2026-09-19T08:14:20Z"
lastReleaseAt: "2026-09-12T06:35:25Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 47
maintainers: ["bardesss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cc4018ca4c6b7b98b665669dde3209ea8c2f891f4cdccb1ea4fef0450ab47fc/bardesss/haelan"
---

# Hælan

*Hælan* is Old English for "to heal, to make whole" — the root of both *heal* and *health*. The
package, the image and the command are all `haelan`.

**A self-hosted dashboard and local mirror for your own health data, built on the Google Health
API v4.** One household, one instance, no telemetry, no hosted offering.

The reason it is self-hosted is structural rather than ideological. Google caps an unverified
OAuth client at 100 users, and clearing verification for health scopes needs a paid third-party
security assessment. A hosted dashboard therefore stalls at a hundred signups no matter how good
it is. An instance whose only users are the people who own its OAuth client never meets that cap.
The direct cost is that every household brings its own Google Cloud project; the direct benefit is
that no ceiling exists.

## Written by an AI agent

**Every line of haelan was written by a coding agent, with a human deciding what got built, what
got rejected, and what got merged.** That is stated here rather than in a footnote because you are
considering pointing this at your own health record, and it should inform that decision rather than
surprise you later.

What it means in…
