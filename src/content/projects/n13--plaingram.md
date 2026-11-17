---
repo: "n13/plaingram"
name: "plaingram"
description: "Minimalist Secure Telegram desktop client (Rust, TDLib, GPUI)"
readmeQualityOk: true
url: "https://github.com/n13/plaingram"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-15T15:58:04Z"
lastCommitAt: "2026-11-17T14:33:35Z"
lastReleaseAt: "2026-11-17T11:51:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["n13"]
openGraphImageUrl: "https://opengraph.githubassets.com/2df9b36042b55a8962fff69036efca792b7e06ef9d5665130788c8942c89c734/n13/plaingram"
---

# plaingram

Unofficial, super minimal Telegram client for Mac/Linux; Security first.

Design goals:
- Text and images, groups, and folders work
- Cmd-K (Ctrl-K on Linux) jumps to any chat: names that start with what you type come first, then names that contain it, each in the order you last opened them
- Starts in the chat you had open, Cmd-H hides and Cmd-Q quits
- Unread counts beside each chat, from Telegram. A message counts as read only once it is on screen while plaingram is in front
- Reduce attack surface by removing mini apps, bots, animations, etc
- Prevent impersonation and scammers by flagging all suspicious names, e.g. mixed alphabet and weird unicode characters

I am pretty confident impersonation particularly becomes impossible with the last feature, the impersonator will just end up with a bunch of ?? in their username and a big red warning label.

## Security model

- `tg-core` is the only crate that sees TDLib types. The UI only receives `SafeText`/`SafeMessage`, and `SafeText` can only be built by `sanitize()`.
- `sanitize()` keeps ASCII digits, punctuation and whitespace, the typographic punctuation Apple keyboards insert (`‘ ’ “ ” • – — …`), a few signs (`€ ₿…
