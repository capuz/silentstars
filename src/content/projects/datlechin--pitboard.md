---
repo: "datlechin/pitboard"
name: "pitboard"
description: "Switch between your own Claude Code and Codex logins, and see how much each one has left."
readmeQualityOk: true
url: "https://github.com/datlechin/pitboard"
homepage: "https://docs.usepitboard.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["claude-code", "cli", "keychain", "linux", "macos", "rust", "anthropic", "claude", "menu-bar", "oauth"]
stars: 42
forks: 8
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-21T11:34:42Z"
lastCommitAt: "2026-10-11T10:16:05Z"
lastReleaseAt: "2026-09-25T12:35:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 37
maintainers: ["datlechin", "dige04"]
openGraphImageUrl: "https://opengraph.githubassets.com/819f2941369060bb0b51131247914d8dd2ca80f748d15532ffefdc5a91560400/datlechin/pitboard"
---

# Pitboard

Switch between your own Claude Code and Codex logins, and see how much each one has left.

  alt="The Pitboard menu, listing Claude Code and Codex accounts, with a check mark on each
  one in use and, under each account's name, its usage or that it needs signing in again"
  width="300">

With two or more Claude or ChatGPT subscriptions, changing accounts in Claude Code or
OpenAI's Codex CLI means a sign-out and a browser sign-in. Pitboard keeps the login of
each account you are not using, called a parked login. A switch puts the chosen account's
parked login where the tool reads it.

Only the account changes: your history, sessions, settings and projects stay where they are.
A Claude Code session that is already open picks up a switch within about 33 seconds, or,
while `~/.claude/.credentials.json` sits behind the keychain on macOS, when its login is next
renewed. A running `codex` keeps the old account until you restart it.

The menu bar app also gives each account its own
[window on claude.ai or chatgpt.com](https://docs.usepitboard.com/guides/account-windows),
signed in separately. It opens a page from your browser's Share menu as the account you
choose.

Pitboard…
