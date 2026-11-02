---
repo: "emacs-eask/archives"
name: "archives"
description: "Handle refreshing package archives failure"
readmeQualityOk: true
url: "https://github.com/emacs-eask/archives"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [90]
topics: ["elpa", "emacs", "archives-content"]
stars: 7
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2022-04-12T08:21:15Z"
lastCommitAt: "2026-11-02T17:57:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 70
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/9f0dc850940f06bd62eb67e3a45a85bff04e5e2b655fc1225a00463b21d32cd0/emacs-eask/archives"
fundingLinks: ["GITHUB:https://github.com/emacs-eask", "GITHUB:https://github.com/jcs090218"]
---

# archives
> Handle refreshing package archives failure

Workflow automatically downloads package archives contents and stores them here.

💡 **NOTE:** This will refresh every `1` hour(s).

## ❓ Why do we need this?

When sandboxing during Emacs package development, we might need to call
`package-refresh-contents` multiple times due to the newly set up
environment. While Eask already minimizes unnecessary refreshes, you
may still encounter `404` errors from the archive servers (`elpa`,
`melpa`, etc.). This typically happens when the server temporarily
blocks your IP after too many requests within a short period. In such
cases, you’ll need to wait a few minutes (depending on the server) for
your IP to be unblocked.

This is where the `archives` comes in! Eask helps you avoid this situation
by downloading the `archive-contents` files when a `404` is encountered.
In other words, your package refreshes will never fail. 🎉

## ⚜️ License

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This…
