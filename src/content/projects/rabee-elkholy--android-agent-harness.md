---
repo: "rabee-elkholy/android-agent-harness"
name: "android-agent-harness"
description: "Deterministic Android AI Agent Harness & 5-Leaf Review Gate for Cursor, Claude Code, Antigravity, Copilot, and Windsurf."
readmeQualityOk: true
url: "https://github.com/rabee-elkholy/android-agent-harness"
homepage: "https://github.com/rabee-elkholy/android-agent-harness"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai-agents", "android", "antigravity", "claude-code", "code-review", "copilot", "cursor", "jetpack-compose", "kotlin", "kotlin-multiplatform"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-08-23T12:46:15Z"
lastCommitAt: "2026-09-09T08:17:14Z"
lastReleaseAt: "2026-09-01T09:40:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["rabee-elkholy", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3b614ad4d59a69a9f265265a2ca1610caee1cd2c068e97db3ba4dafda3f341c/rabee-elkholy/android-agent-harness"
discussionCount: 0
---

# Android Agent Harness

A local, zero-dependency development harness for Android projects. It is designed to improve AI-assisted implementation quality while keeping model calls, build work, and developer interruption proportional to the actual change.

## v1 guarantees

- Analysis and planning are read-only. No implementation starts until the developer explicitly approves the exact plan.
- A deterministic classifier selects only relevant skills, tests, reviewers, build steps, and device checks.
- Every gate is bound to one repository, approved plan, complete delivery snapshot, change set, run id, harness version, and producer.
- Evidence is append-only. The final verifier is read-only and rejects stale, incomplete, forged, or cross-run evidence.
- APK output is an artifact set, so split APKs are built, hashed, installed, and launched as one identity.
- Clean install, same-major update, dry-run uninstall, backup, rollback, and user-file ownership are explicit lifecycle operations.
- Zoho Sprints keeps the existing workflow and never changes without `update zoho`, an approved plan that lists `--external-write zoho_sprints`, and a stable operation id.
- Hosts report their real…
