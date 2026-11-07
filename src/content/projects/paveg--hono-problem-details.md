---
repo: "paveg/hono-problem-details"
name: "hono-problem-details"
description: "RFC 9457 Problem Details middleware for Hono"
readmeQualityOk: true
url: "https://github.com/paveg/hono-problem-details"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["cloudflare-workers", "error-handling", "hono", "middleware", "problem-details", "rfc-9457", "typescript"]
stars: 27
forks: 0
openIssues: 3
closedIssues: 40
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-24T16:49:09Z"
lastCommitAt: "2026-11-07T16:11:17Z"
lastReleaseAt: "2026-04-11T05:57:51Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 47
maintainers: ["paveg", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e444b75a622d98291875cddc6beb217cde192a9a89cd4978cc04f964a3387556/paveg/hono-problem-details"
fundingLinks: ["GITHUB:https://github.com/paveg"]
---

# hono-problem-details

[RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html) Problem Details middleware for [Hono](https://hono.dev).

Returns `application/problem+json` structured error responses with a single `app.onError` setup.

> If this saved you from hand-rolling RFC 9457 in yet another Hono project, please [⭐ star the repo](https://github.com/paveg/hono-problem-details) — it helps others discover it.

## Why hono-problem-details?

Without a contract, HTTP error bodies drift. Every Hono project ends up reinventing the same
scaffolding — and every client ends up parsing whatever shows up.

- **Inconsistent shapes** across routes: `{ message }`, `{ error }`, `{ code, reason }`, or raw text
- **Validation errors** from each schema library return a different format, so clients special-case each
- **OpenAPI drift**: docs describe one error shape, the server returns another
- **No standard for extensions**: adding `retryAfter` or `correlationId` means breaking your own contract

[RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html) defines one structure — `{ type, status, title,
detail, instance }` plus arbitrary extension members — and this middleware makes it the default…
