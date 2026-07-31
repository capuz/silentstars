---
repo: "roadrunner1776/magik"
name: "magik"
description: "Emacs major mode for Smallworld Magik files"
readmeQualityOk: true
url: "https://github.com/roadrunner1776/magik"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [96]
topics: ["emacs-mode", "magik"]
stars: 16
forks: 11
openIssues: 6
closedIssues: 13
watchers: 6
contributors: 10
recentReleases: 0
createdAt: "2018-08-30T13:31:51Z"
lastCommitAt: "2026-07-31T06:30:16Z"
lastReleaseAt: "2025-08-01T13:11:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 65
maintainers: ["sebastiaanspeck", "dependabot[bot]", "krn-robin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0bbf3f57653fc730ef73804b90e676b3a0367a353c8ec3daaf1237f390fd95b/roadrunner1776/magik"
discussionCount: 0
---

# magik-mode: Emacs major mode for Smallworld Magik files

## Content

1. [Installation](#installation)
2. [Features](#features)
3. [Usage with Smallworld 4.x or older](#usage-with-smallworld-4x-or-older)
4. [Side effects](#side-effects)
5. [Familiar with SW 4.x EMACS? Some tips for you!](#familiar-with-sw-4x-emacs-some-tips-for-you)

## Installation

These packages are available on [MELPA](https://melpa.org/).
See [Emacs Wiki](https://www.emacswiki.org/emacs/InstallingPackages) for instructions on how to set up and install packages.

The alternative, and recommended, way of installing [magik-mode](https://github.com/roadrunner1776/magik) is using [use-package](https://github.com/jwiegley/use-package):

```emacs-lisp
(use-package magik-mode
  :ensure t
  :config
  (magik-global-bindings)
  (magik-menu-set-menus))
```

## Features

### Automatic completion support

Automatic completion support is no longer provided by this package. Please refer to the [magik-company](https://github.com/reinierkof/magik-company) package for this functionality.

### Global keys

Global keys are set by calling `(magik-global-bindings)` after the package has been loaded.

| Key | Description |
| :---:…
