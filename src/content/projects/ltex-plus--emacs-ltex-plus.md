---
repo: "ltex-plus/emacs-ltex-plus"
name: "emacs-ltex-plus"
description: "LTeX+: Grammar/spell checker 🔍✔️ for Emacs using LanguageTool with support for LaTeX 🎓, Markdown 📝, and others"
readmeQualityOk: true
url: "https://github.com/ltex-plus/emacs-ltex-plus"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [92]
stars: 22
forks: 3
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-04-14T16:23:04Z"
lastCommitAt: "2026-08-29T17:27:51Z"
lastReleaseAt: "2026-05-15T23:29:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 45
maintainers: ["alberti42", "LukeXuan"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac5d88168f9d0d011da7f0a14a3525bbe6078b2a7ec81c43cb09bcb37c5a9974/ltex-plus/emacs-ltex-plus"
---

# Emacs LTeX+

`lsp-ltex-plus` is a lightweight [lsp-mode](https://github.com/emacs-lsp/lsp-mode) client for **LTeX+**, a powerful grammar and spell checker powered by [LanguageTool](https://languagetool.org/).

*Developed and tested on Emacs 31.1. Requires Emacs 27.1 or later.*

This package allows you to have professional-grade grammar checking in Emacs while you write Markdown, LaTeX, Org-mode, Magit-commit messages, and more — and also checks grammar and spelling inside comments and string literals of 30+ programming languages. It is designed to be an "add-on" server, meaning it runs quietly in the background alongside your existing language servers without interfering with them. With the local backend, checks typically complete fast enough to feel instant while you type — see [Performance](#performance) for measured numbers and a reproducible benchmark.

*LTeX+ in action: `C-c l a a` activates the LSP actions, allowing you to choose the suitable correction (e.g., fixing "your" to "you're" in the example above). The key binding can be customized by configuring the `lsp-mode` package.*

For detailed information about the underlying LTeX+ server and its capabilities, please…
