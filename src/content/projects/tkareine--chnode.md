---
repo: "tkareine/chnode"
name: "chnode"
description: "Changes shell's current Node.js version by updating $PATH"
readmeQualityOk: true
url: "https://github.com/tkareine/chnode"
language: "Shell"
languages: ["Shell"]
languagePcts: [89]
topics: ["nodejs", "version-manager", "shell", "bash", "zsh", "chnode", "node-version-manager", "minimalist", "homebrew-tap"]
stars: 22
forks: 1
openIssues: 0
closedIssues: 5
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2018-09-23T22:20:56Z"
lastCommitAt: "2026-09-13T08:28:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 75
undervaluedScore: 36
maintainers: ["tkareine"]
openGraphImageUrl: "https://opengraph.githubassets.com/f19addfada07ac54cca97dfa3c3a4f694368f1185117813ef49ad65a4f98791a/tkareine/chnode"
---

# chnode

Changes shell's current Node.js version by updating `$PATH`.

`chnode` is a lightweight Node.js version switcher that selects a
Node.js version for a shell session. The mechanism to do this is by
updating the `PATH` environment variable. Confining version switching to
a shell session allows you to run different Node.js versions in many
shell sessions simultaneously.

The lightweight design and small feature set makes `chnode` very fast to
load, having minimal negative effect on your shell's init script.

`chnode` expects that Node.js versions are already installed on your
system. It cannot download them for you. Instead, download Node.js
binaries manually or use another tool, such as [node-build], for the
job.

To read more about the design rationale and a comparison to [nvm] and
[nodenv], look [here][tkareine-lightweight-nodejs-version-switching].

`chnode` is inspired by [chruby], which is awesome.

## Features

- Selects Node.js version for a shell session by updating the `PATH`
  environment variable. Version switching is independent per shell
  session.
- Optional automatic Node.js version switching based on the contents of
  the `.node-version` file in your project…
