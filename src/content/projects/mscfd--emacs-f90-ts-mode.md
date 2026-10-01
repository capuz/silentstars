---
repo: "mscfd/emacs-f90-ts-mode"
name: "emacs-f90-ts-mode"
description: "Emacs tree-sitter mode for fortran"
readmeQualityOk: true
url: "https://github.com/mscfd/emacs-f90-ts-mode"
language: "Emacs Lisp"
languages: ["Emacs Lisp", "Fortran"]
languagePcts: [69, 30]
topics: ["emacs-mode", "f2008", "f2023", "f90", "fortran", "f2003", "f2018", "tree-sitter"]
stars: 7
forks: 3
openIssues: 5
closedIssues: 17
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2025-12-08T10:16:27Z"
lastCommitAt: "2026-10-01T10:23:27Z"
lastReleaseAt: "2026-09-03T11:39:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 69
maintainers: ["mscfd", "Akimbo92i"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc47ce6bd02d6f7f629fa82612a1d3ee879eea8deffeb6dd7ff469bec94cd8bb/mscfd/emacs-f90-ts-mode"
---

# f90-ts-mode

Tree-sitter-based major mode for editing Fortran (Fortran 90 / 2003 and
newer) in free source form in Emacs. It requires Emacs 29+.

The mode is inspired by f90-mode in Emacs core. Alongside modern
Tree-sitter-based functionality, it aims to provide and enhance features
such as smart end completion and region commenting that have made f90-mode
productive and enjoyable to use.

This project is under active [development](#roadmap).
For a comprehensive overview see [MANUAL.md](https://github.com/mscfd/emacs-f90-ts-mode/blob/HEAD/MANUAL.md).

### Changelog (recent)

**10-2026**
- Transient menu restructured and decomposed.
- Support for hideshow and outline added.

**09-2026**
 - `f90-ts-mode.el` decomposed into several smaller packages. Experimental
   `f90-ts-nav` (tree in fortran menu and tree view in side panel) has been
   made optional and requires a separate use-package to load it.
 - `f90-ts-indent-delete-trailing-whitespace` added to automatically delete
   trailing whitespace after indentation operation.
 - Font locking of interface name in deferred procedure declaration fixed.
 - Handling of trailing whitespace characters in thing-end-of-X navigation added.…
