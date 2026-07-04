---
repo: "dakra/keepassxc.el"
name: "keepassxc.el"
description: "Emacs interface for KeePassXC"
readmeQualityOk: true
url: "https://github.com/dakra/keepassxc.el"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-02-18T10:00:42Z"
lastCommitAt: "2026-07-04T22:12:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 38
maintainers: ["dakra"]
openGraphImageUrl: "https://opengraph.githubassets.com/96079f8aebd036bb6fa20bf1c7a355c6827ce712887fb6b82781991373ca19d4/dakra/keepassxc.el"
---

# KeePassXC integration for Emacs

Talk to a running [KeePassXC](https://keepassxc.org/) from Emacs over
the KeePassXC-Browser protocol.
Plus an [auth-source](https://www.gnu.org/software/emacs/manual/html_mono/auth.html)
backend so Gnus, ERC, smtpmail, Forge and friends can read (and
create) credentials in your KeePassXC database.

All traffic is encrypted with libsodium `crypto_box`
(X25519-XSalsa20-Poly1305) via the
[sodium.el](https://github.com/dakra/sodium.el) dynamic module.

## Features

- **Entry access**: `keepassxc-copy-password`, `keepassxc-copy-username`,
  `keepassxc-copy-totp`, `keepassxc-get-login`, `keepassxc-copy-url`
  and `keepassxc-browse-url` all pick an entry from the whole
  database — completion matches title *and* URL, narrowing live as
  you type (vertico/orderless style).
  Copied secrets are cleared from the kill-ring after
  `keepassxc-password-timeout` (45s default), like password-store.
- **auth-source backend**: `(keepassxc-auth-source-enable)` and your
  KeePassXC database answers `auth-source-search`, including entry
  creation via `:create t`.
- **Entry management**: `keepassxc-create-login`,
  `keepassxc-delete-entry`,…
