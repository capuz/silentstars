---
repo: "salemsayed/omawarden"
name: "omawarden"
description: "Bitwarden in the Omarchy bar: instant search, safe timed copies, lock and sync."
readmeQualityOk: true
url: "https://github.com/salemsayed/omawarden"
language: "Python"
languages: ["Python", "QML"]
languagePcts: [52, 30]
topics: ["bitwarden", "hyprland", "omarchy", "omarchy-plugin", "password-manager", "quickshell", "vaultwarden"]
stars: 8
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-08-20T18:20:39Z"
lastCommitAt: "2026-11-23T12:17:30Z"
lastReleaseAt: "2026-10-07T09:54:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 63
undervaluedScore: 17
maintainers: ["salemsayed"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3de5993a7b075e55e24ee58176e543197321ca159184877eb02e7f5c0529b78/salemsayed/omawarden"
---

# OmaWarden

**Bitwarden in the Omarchy bar.** Press `/`, type a few letters, then press
Enter: the selected login or card value is on your clipboard for thirty
seconds — never in Omarchy's clipboard history, never in the shell.

## Demo

## Screenshots

Before the vault is open — install, sign in, unlock:

The bar icon, locked, unlocked and needing attention:

## Highlights

- **Instant.** Search runs against an in-memory index of login names,
  usernames and sites plus card names, brands and last four digits. Results
  are ranked — `git` finds *GitHub* before *DigitalOcean* — and the panel
  opens on what you used last.
- **Safe.** The shell only ever sees names, usernames, sites, cardholders,
  card brands and last four digits. Passwords, one-time codes, card numbers
  and security codes go from the Bitwarden CLI straight to a sensitive,
  self-clearing clipboard, and the session key never leaves a small per-user
  helper.
- **Keyboard first.** The panel opens in command mode; `/` or `Ctrl+F` enters
  search mode. `Enter` copies the primary value, `Shift+Enter` the alternate,
  and the Ctrl shortcuts reach passwords, usernames, card fields, one-time
  codes and websites.
