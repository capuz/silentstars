---
repo: "jcubic/dotfiles"
name: "dotfiles"
description: "Linux dotfiles"
readmeQualityOk: true
url: "https://github.com/jcubic/dotfiles"
language: "Emacs Lisp"
languages: ["Emacs Lisp"]
languagePcts: [93]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-05-12T18:19:29Z"
lastCommitAt: "2026-07-04T23:15:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 66
maintainers: ["jcubic"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb48774eed9d04deca0f2c72e32e1ccec7b82fb902b06f7a568b76b82af0e7ae/jcubic/dotfiles"
---

# jcubic Dotfiles

Bunch of customizations that I use on my Linux/Unix systems.

## Usage

### Bash

clone the repo

Add below to your ~/.bashrc

```bash
. ~/path/dotfiles/bash/aliases
. ~/path/dotfiles/bash/less
. ~/path/dotfiles/bash/functions
. ~/path/dotfiles/bash/variables

singleline_prompt
```

You can also use multiline prompt:

```bash
multiline_prompt
```

NOTE: the prompt use `git` (developer tool) so if you don't have it instaled, make sure you
modify the prompt before using.

PS: Make sure to read what the code is doing. I'm not responsible if something breaks on your system.

### GNU Emacs

Feel free to look around and copy whatever you find usefull.

To execute everything clone the repo and use this to load all the files:

```elisp
(add-to-list 'load-path "~/path/dotfiles/emacs/packages")
(eval-when-compile (require 'cl))
(require 'functions)
(mapc 'load (file-expand-wildcards
             "~/path/dotfiles/emacs/config/*.el"))
```

## License
Copyright (C) [Jakub T. Jankiewicz](https://jakub.jankiewicz.org/)<br/>
Released under [CC-0](https://creativecommons.org/public-domain/cc0/) license
