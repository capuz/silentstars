---
repo: "leotaku/elisp-check"
name: "elisp-check"
description: "A GitHub Action for Emacs Lisp CI"
readmeQualityOk: true
url: "https://github.com/leotaku/elisp-check"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [93]
topics: ["emacs", "emacs-lisp", "github-actions", "linting", "testing"]
stars: 81
forks: 5
openIssues: 0
closedIssues: 18
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2020-06-12T17:34:04Z"
lastCommitAt: "2026-08-01T06:13:56Z"
lastReleaseAt: "2025-03-07T20:04:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 27
maintainers: ["leotaku"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1fa88ace768c47006ea490ba2faab51b92ff6497b1fcb4c023edd32398a9b50/leotaku/elisp-check"
discussionCount: 0
---

# A GitHub Action for Emacs Lisp CI 📜

Provides a zero-config CI solution for Emacs Lisp packages.

Most Emacs packages currently use either no or an ad-hoc script based CI setup.
This GitHub Action aims to change that.

Adding this Action to your Emacs package repository immediately provides you with a default suite of code style checks that are required to get your package accepted into MELPA.
Using only one additional line of YAML, you can also run your ERT tests on GitHub Actions.

See the [Actions tab](https://github.com/leotaku/elisp-check-action/actions) for runs of this Action! 🚀

See the [COMPARISON.md](https://github.com/leotaku/elisp-check/blob/HEAD/COMPARISON.md) file for a more thorough comparison with other solutions for Emacs Lisp CI. 🛒

### Supported Checks

* [melpa](https://github.com/melpa/melpa/blob/master/CONTRIBUTING.org) :: Most checks required for MELPA <sup>(load-file, byte-compile, checkdoc, package-lint)</sup>
* [load-file](https://www.gnu.org/software/emacs/manual/html_node/eintr/Loading-Files.html) :: Load files into Emacs
* [byte-compile](https://www.gnu.org/software/emacs/manual/html_node/elisp/Byte-Compilation.html) :: Byte-compile files
*…
