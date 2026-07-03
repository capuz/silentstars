---
repo: "rudrankriyam/Feedback-Assistant-CLI"
name: "Feedback-Assistant-CLI"
description: "Unofficial CLI for automating Apple Feedback Assistant workflows: prepare, submit, attach, and verify"
url: "https://github.com/rudrankriyam/Feedback-Assistant-CLI"
homepage: "https://feedbackassistant.apple.com/"
language: "Swift"
languages: ["Swift"]
languagePcts: [93]
topics: ["apple", "automation", "cli", "command-line-tool", "developer-tools", "feedback-assistant", "macos", "swift", "xcode", "feedback"]
stars: 34
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-06-10T23:32:01Z"
lastCommitAt: "2026-07-03T12:22:55Z"
lastReleaseAt: "2026-06-15T03:00:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 88
undervaluedScore: 36
maintainers: ["rudrankriyam"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d11dd3205a745d58f6de31f268cf707c9d2acd69eec23de97ebe6a70706dc13/rudrankriyam/Feedback-Assistant-CLI"
fundingLinks: ["GITHUB:https://github.com/rudrankriyam"]
---

# Feedback Assistant CLI

> [!IMPORTANT]
> `xcfb` is a community-defined name and an unofficial tool. It is not an
> Apple command or product, and it is not affiliated with or endorsed by Apple.

> [!WARNING]
> **Apple ID risk with the `xcfb web` commands.** The web workflow reimplements
> Apple's sign-in flow against undocumented, unsupported endpoints. Automated
> sign-in can trigger rate limiting, security challenges, or a temporary
> lockout on the Apple ID you use, and the endpoints may change or stop working
> without notice. Prefer the native (Accessibility) path, which drives the
> official Feedback Assistant app, and where possible use a dedicated test
> Apple ID rather than your primary account for the web commands.

`xcfb` is an agent-first command-line toolkit for Apple Feedback Assistant
workflows on macOS. It prepares, files, and verifies reports; inspects the local
Feedback Assistant store; drives Apple's native app through Accessibility; and
provides an experimental authenticated web workflow for server-backed drafts
and confirmed submission.

xcfb is distributed only as an executable. Its Swift package manifest is the build definition for the CLI and exports no…
