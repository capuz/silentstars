---
repo: "MattJColes/lgtmaybe"
name: "lgtmaybe"
description: "any model. no keys. maybe a merge."
readmeQualityOk: true
url: "https://github.com/MattJColes/lgtmaybe"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-06T20:17:12Z"
lastCommitAt: "2026-07-24T06:08:44Z"
lastReleaseAt: "2026-06-15T21:40:10Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["MattJColes", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e279e777b045cc9c0b11ce0a9813ecbdb4179a8a7c46c8b0b3856a802277726/MattJColes/lgtmaybe"
---

</p>

# lgtmaybe

Provider-agnostic PR reviewer. Seven hosted providers, local ollama, and any
OpenAI-compatible endpoint — one flag, no static keys for cloud providers. Posts
inline review comments and a summary.

📖 **Full documentation:** <https://mattjcoles.github.io/lgtmaybe/>

## What it reviews

lgtmaybe fetches the PR diff from the GitHub API and reviews the lines a pull
request changes. It never checks out or runs your code. To judge each change in
context it also reads a few surrounding lines from the file. It only ever
comments on what the PR actually changed, not the whole repository.

Reviews surface the kind of thing a careful reviewer would flag, each graded from
`info` up to `critical`:

- **Logic and correctness bugs** — edge cases, null dereferences, off-by-one and
  boundary errors, mismatched ranges, unhandled error paths, races and TOCTOU,
  missed `await`s, numeric and timezone bugs.
- **Security vulnerabilities** — the model is prompted with an **OWASP-aligned
  checklist**: injection, XSS, CSRF and open redirects, hardcoded secrets,
  broken authn/authz (including JWT pitfalls), path traversal, unrestricted
  uploads, SSRF, insecure deserialization and XXE,…
