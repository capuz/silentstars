---
repo: "davidteren/mutineer"
name: "mutineer"
description: "Mutineer - a clean-room mutation-testing tool for Ruby. Prism + stdlib only, zero runtime deps."
readmeQualityOk: true
url: "https://github.com/davidteren/mutineer"
homepage: "https://davidteren.github.io/mutineer/"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [99]
stars: 72
forks: 8
openIssues: 57
closedIssues: 151
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2026-06-28T01:20:18Z"
lastCommitAt: "2026-11-11T19:45:02Z"
lastReleaseAt: "2026-06-30T14:00:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 35
maintainers: ["davidteren", "cursoragent", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dca0a29764716316ad70fd536abcce1b8557489503cb94ea4eb4c776332c6d1/davidteren/mutineer"
---

# Mutineer

**Find bugs your tests would miss.** Mutineer changes your Ruby code and runs your Minitest or RSpec tests.
Changes that still pass reveal possible test gaps. This is **mutation testing**.

**Features**

- **Minitest and RSpec.** Detected from test filenames; override with `--framework`.
- **Rails support.** `--rails` boots once. With `--daemon`, each Minitest worker gets its own SQLite file, PostgreSQL, or MySQL 8 test database.
- **Focused tests.** Runs tests that reach each changed line, likely and fast tests first. Stops at the first failure by default.
- **PR checks.** `--since origin/main` checks changed lines; `--baseline` gates new survivors, and score drops on full runs. When tests change, run a full scan (`--no-since`).
- **CI and agents.** GitHub Action, versioned JSON, stable mutant ids, clear exit codes, and zero runtime gem dependencies.

📖 **[davidteren.github.io/mutineer →](https://davidteren.github.io/mutineer/)**: overview, operators, and usage.

## Is it production-ready?

Check your database and framework before adding a CI gate.
Mutineer requires Ruby 3.4 or later. In-process runs require Linux or macOS for forks.
Plain Ruby projects without…
