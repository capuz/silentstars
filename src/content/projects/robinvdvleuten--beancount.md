---
repo: "robinvdvleuten/beancount"
name: "beancount"
description: "Fast, lightweight Beancount parser, formatter and editor written in Go"
readmeQualityOk: true
url: "https://github.com/robinvdvleuten/beancount"
homepage: "https://beancount.fly.dev"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["beancount", "cli", "go", "plaintext-accounting", "ledger", "accounting", "finance", "plaintext", "solidjs"]
stars: 5
forks: 3
openIssues: 9
closedIssues: 71
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-10-06T17:36:49Z"
lastCommitAt: "2026-09-25T09:01:46Z"
lastReleaseAt: "2026-06-22T15:07:04Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 91
maintainers: ["robinvdvleuten", "dependabot[bot]", "davidkuridza"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f6c127e43430c65b2620e9771676e92bdf4d970ee3c7dcedf1ac8ab0f44dc59/robinvdvleuten/beancount"
discussionCount: 0
---

# beancount

A [Beancount](https://beancount.github.io/) toolkit written in Go, for bookkeeping with AI agents and for extending in your own code. An agent edits your plain-text ledger, and one command checks each change. It rejects wrong entries with a line number and a reason, so the agent can fix them before they reach your books. When the built-in checks are not enough, you write your own in Go, using the same parser and ledger that the command line uses, and build it into one binary. Every check, format, and query result is tested against the official Beancount tools.

- **Built for agents.** The ledger is a text file, so the agent edits it like code, and you review each change as a `git diff`. Errors give the file, the line, and a reason, plus exit code `1`.
- **Extend in plain Go.** Write importers, house rules, and reports with the `loader`, `ast`, `ledger`, `formatter`, and `query` packages. You get typed directives, typed errors, and a source position on each one.
- **Same answers as the official tools.** 155 ledger fixtures run through both `bean-check` and this tool. 93 BQL queries must match `bean-query` output byte for byte, in both text and CSV. The rare differences…
