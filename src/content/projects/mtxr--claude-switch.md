---
repo: "mtxr/claude-switch"
name: "claude-switch"
description: "Switch Claude Code and Claude Desktop accounts without logging out. One command, per-directory profiles, concurrent terminals. Single static binary."
readmeQualityOk: true
url: "https://github.com/mtxr/claude-switch"
language: "Zig"
languages: ["Zig"]
languagePcts: [94]
topics: ["claude", "claude-code", "cli", "account-switcher", "anthropic", "claude-desktop", "cli-tool", "developer-tools", "homebrew", "keychain"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-03-21T00:45:08Z"
lastCommitAt: "2026-11-03T10:52:07Z"
lastReleaseAt: "2026-10-26T14:12:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 60
maintainers: ["mtxr", "github-actions[bot]", "raineorshine"]
openGraphImageUrl: "https://opengraph.githubassets.com/3178392b534e2c0cad525c66a28f28f9c43a6615be2532304f3e2de8b9afec23/mtxr/claude-switch"
discussionCount: 0
---

# claude-switch

**Use multiple Claude accounts, work and personal, without ever logging out.** Works for Claude Code and Claude Desktop. `csw` keeps one profile per account, lets several terminals use different accounts at the same time, and picks the account from the directory you are in.

### Two accounts at the same time

Each terminal can use a different account, with no logout in between.

### Pick the account by directory

Enter a project and its account loads. Leave it and you are back where you were.

More: [picker, completions, rename and profile management](https://github.com/mtxr/claude-switch/blob/HEAD/docs/demos.md).

## Why csw

Several tools solve the "one machine, several Claude Code accounts" problem. These are the places where csw is ahead of the closest ones (see the [comparison](#comparison)):

- **Claude Desktop and Claude Code switch together.** None of the others document Desktop support. `csw use work --all` moves both.
- **Nothing to install first.** One static binary of about 400 KB. No Node.js, no `gum`, no wrapper script on your `PATH`, no local proxy.
- **Claude Code stays in charge of its own login.** csw does not shim or wrap `claude`. Each…
