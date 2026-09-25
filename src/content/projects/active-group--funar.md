---
repo: "active-group/funar"
name: "funar"
description: "Materials for FUNAR trainings - previous trainings are archived as branches"
readmeQualityOk: true
url: "https://github.com/active-group/funar"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [90]
topics: ["architecture", "functional-programming", "haskell", "racket"]
stars: 12
forks: 6
openIssues: 0
closedIssues: 1
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2019-06-28T20:38:38Z"
lastCommitAt: "2026-09-25T09:03:21Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 72
maintainers: ["mikesperber"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea52c4b8087f2bddd3648ba7498badd029c60f01723ea40c5c806fab7c490f27/active-group/funar"
---

# Haskell Installation

- install [Visual Studio Code](https://code.visualstudio.com/)
- install [GHCup](https://www.haskell.org/ghcup/install/)
- select all "default" options
- answer "Do you want to install haskell-language-server (HLS)?" with "Yes"

Then run these commands:

```
ghcup install ghc 9.10.3
ghcup set ghc 9.10.3
```

To test the installation:

- start VSCode via  `code .` in this folder
- install the `haskell.haskell` extension
- in the file `haskell-code/Intro.hs`, delete a character in `where`
- after some time (it should show processing in the bottom bar), you
  should see red squiggles (not just red letters)
