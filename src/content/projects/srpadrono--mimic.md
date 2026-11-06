---
repo: "srpadrono/mimic"
name: "mimic"
description: "A native mock API server for macOS: mock endpoints, script failures and retries, forward to real backends, and drive tests from the CLI."
readmeQualityOk: true
url: "https://github.com/srpadrono/mimic"
homepage: "https://mimic-mock.app"
language: "Swift"
languages: ["Swift"]
languagePcts: [92]
topics: ["api-mocking", "cli", "developer-tools", "http-mock", "macos", "mock-api", "mock-server", "swift", "swiftui", "testing"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 52
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-04-07T14:39:53Z"
lastCommitAt: "2026-11-06T13:19:49Z"
lastReleaseAt: "2026-11-05T23:02:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 70
maintainers: ["srpadrono", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4b5d6396ab95a776dfa802c1b68e905b3e99dc2219a8417f1c11ca873a89b0/srpadrono/mimic"
---

# Mimic

Mimic is a native macOS app that runs local mock API servers. Define endpoints and responses, switch scenarios, script multi-request journeys, simulate failures, and inspect live traffic. A CLI and a token-protected loopback API let tests and agents drive the same project without clicking through the window.

**Website:** [mimic-mock.app](https://mimic-mock.app) · **Blog:** [mimic-mock.app/blog](https://mimic-mock.app/blog)

*The sample project: configure a response, switch scenarios, and inspect requests in the same window.*

## Install

Install with [Homebrew](https://brew.sh):

```sh
brew install --cask srpadrono/tap/mimic
```

Or download the [latest release](https://github.com/srpadrono/mimic/releases/latest) and run its signed `.pkg`. Either way, it installs `Mimic.app` in `/Applications` and `mimic` in `/usr/local/bin`. To build from source, see [Contributing](https://github.com/srpadrono/mimic/blob/HEAD/CONTRIBUTING.md).

### Check a download

Releases after 0.14.0 are built by the [Release workflow](https://github.com/srpadrono/mimic/blob/HEAD/.github/workflows/release.yml) on GitHub's runners and carry a build provenance attestation and an SPDX SBOM. To confirm…
