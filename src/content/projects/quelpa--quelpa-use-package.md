---
repo: "quelpa/quelpa-use-package"
name: "quelpa-use-package"
description: "Emacs quelpa handler for use-package"
readmeQualityOk: true
url: "https://github.com/quelpa/quelpa-use-package"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [100]
topics: ["emacs", "use-package", "quelpa", "package-manager"]
stars: 142
forks: 15
openIssues: 1
closedIssues: 15
watchers: 8
contributors: 8
recentReleases: 0
createdAt: "2015-07-31T19:51:35Z"
lastCommitAt: "2026-11-15T08:27:13Z"
lastReleaseAt: "2020-10-22T06:29:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 30
maintainers: ["steckerhalter"]
openGraphImageUrl: "https://opengraph.githubassets.com/f4cea94e9e8d5b5a752f65704d1e40c0eb4ca7695caf5baf2960e14ef94dd935/quelpa/quelpa-use-package"
---

# quelpa-use-package

If you are using [use-package](https://github.com/jwiegley/use-package) (which can help to simplify your .emacs) you can use the [quelpa](https://github.com/quelpa/quelpa) handler provided by `quelpa-use-package`.

## Installation

**Requirements**: Emacs 29.1

Assuming you have bootstrapped `quelpa`, install `quelpa-use-package` (which installs `use-package` as a dependency) and require the library:

```cl
(quelpa
 '(quelpa-use-package
   :fetcher git
   :url "https://github.com/quelpa/quelpa-use-package.git"))
(require 'quelpa-use-package)
```

## Usage

After that it is possible to call `use-package` with the `:quelpa` keyword:

```cl
;; installs abc-mode with quelpa
(use-package abc-mode :quelpa)

;; does the same (`t' is optional)
(use-package abc-mode :quelpa t)

;; again... (if the package would have another name)
(use-package abc-mode :quelpa abc-mode)

;; passes upgrade parameter to quelpa
(use-package abc-mode :quelpa (:upgrade t))

;; uses the given recipe
(use-package abc-mode
  :quelpa (abc-mode :fetcher github :repo "mkjunker/abc-mode"))

;; recipe with plist arguments
(use-package abc-mode
  :quelpa ((abc-mode :fetcher github :repo…
