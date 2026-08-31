---
repo: "SetraTheXX/next-secure-check"
name: "next-secure-check"
description: "Deterministic security checks for Next.js projects. Run with npx or GitHub Actions and review clear terminal, JSON, Markdown, GitHub Summary, or SARIF output."
readmeQualityOk: true
url: "https://github.com/SetraTheXX/next-secure-check"
homepage: "https://www.npmjs.com/package/next-secure-check"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["cli", "devsecops", "github-actions", "nextjs", "security", "security-scanner", "static-analysis", "typescript", "web-security"]
stars: 5
forks: 0
openIssues: 3
closedIssues: 19
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-05-09T21:15:19Z"
lastCommitAt: "2026-08-31T09:59:03Z"
lastReleaseAt: "2026-08-29T15:51:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 59
maintainers: ["SetraTheXX"]
openGraphImageUrl: "https://opengraph.githubassets.com/5550aec7c9e9c4c4bfe0c9feec3575933b7a2dd0e53eaf41f1c870e88bd81c89/SetraTheXX/next-secure-check"
---

# next-secure-check

Deterministic, explainable security checks for Next.js projects before deploy, locally or in CI.

Run one `npx` command to scan a project before it reaches production. Review each finding with its rule, severity, confidence, location, context, and recommendation. The scanner does not execute repository code or use AI at runtime.

> **Stable npm release:** `v0.5.0` is published on npm and is the `latest` line. The [`v0.5.0` GitHub release](https://github.com/SetraTheXX/next-secure-check/releases/tag/v0.5.0) targets the validated release commit, and the reusable [`v1.1.0` Action release](https://github.com/SetraTheXX/next-secure-check/releases/tag/v1.1.0) runs the same CLI line through the floating `@v1` tag. v0.5 adds bounded source-to-sink evidence, structural auth intent, explainable reports, and a concise terminal summary.

</p>

## Why use it?

- Run a quick security sanity check with one `npx` command.
- Get deterministic findings with severity, confidence, location, context, bounded evidence paths, and recommendations.
- Use the same scanner locally, in GitHub Actions, or through SARIF-compatible Code Scanning workflows.

It is a pre-deploy review signal,…
