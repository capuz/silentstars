---
repo: "loopbackio/strong-error-handler"
name: "strong-error-handler"
description: "Error handler for use in development (debug) and production environments."
readmeQualityOk: true
url: "https://github.com/loopbackio/strong-error-handler"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["error-handler", "loopback", "nodejs", "express", "hacktoberfest"]
stars: 38
forks: 36
openIssues: 4
closedIssues: 32
watchers: 24
contributors: 24
recentReleases: 0
createdAt: "2016-01-22T17:08:22Z"
lastCommitAt: "2026-10-09T18:56:07Z"
lastReleaseAt: "2024-05-13T13:17:06Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 59
maintainers: ["renovate[bot]", "dhmlau"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a66f8f5f38aa9fcff14432b3ef00d6489491e4494c36ce38a4c5ec82f6c71b7/loopbackio/strong-error-handler"
---

# strong-error-handler

This package is an error handler for use in both development (debug) and production environments.

In production mode, `strong-error-handler` omits details from error responses to prevent leaking sensitive information:

- For 5xx errors, the output contains only the status code and the status name from the HTTP specification.
- For 4xx errors, the output contains the full error message (`error.message`) and the contents of the `details`
  property (`error.details`) that `ValidationError` typically uses to provide machine-readable details
  about validation problems. It also includes `error.code` to allow a machine-readable error code to be passed
  through which could be used, for example, for translation.

In debug mode, `strong-error-handler` returns full error stack traces and internal details of any error objects to the client in the HTTP responses.

## Supported versions

This module adopts the [Module Long Term Support (LTS)](http://github.com/CloudNativeJS/ModuleLTS) policy, with the following End Of Life (EOL) dates:

| Version    | Status          | Published | EOL                  |
| ---------- | --------------- | --------- | --------------------…
