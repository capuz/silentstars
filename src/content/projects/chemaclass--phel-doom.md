---
repo: "Chemaclass/phel-doom"
name: "phel-doom"
description: "Terminal DOOM-lite raycaster built in Phel (Lisp on PHP). 256-color ANSI, 5 procedural levels — a real-world Phel showcase app."
readmeQualityOk: true
url: "https://github.com/Chemaclass/phel-doom"
homepage: "https://chemaclass.github.io/phel-doom/"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [42, 38]
topics: ["lisp", "phel", "phel-lang", "cli", "game", "php", "doom", "ansi", "ascii-art", "fps"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 132
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-20T13:17:36Z"
lastCommitAt: "2026-07-16T05:57:35Z"
lastReleaseAt: "2026-06-03T13:39:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["Chemaclass", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/50b68b0fadb5e05a0f71c5673aac6c0b1212458bc564ed7be5d16fb8516249dc/Chemaclass/phel-doom"
fundingLinks: ["CUSTOM:https://chemaclass.com/sponsor"]
---

# phel-doom

DOOM-lite raycaster in your terminal. Pure [Phel](https://phel-lang.org/) (Lisp on PHP). 256-color ANSI, 10 procgen levels, FPS combat, ~5ms frame. Full feature list: [docs/features.md](https://github.com/Chemaclass/phel-doom/blob/HEAD/docs/features.md).

## Play

Needs PHP >= 8.4 and a 256-color terminal.

Fastest: grab the single-file PHAR from the [latest release](https://github.com/Chemaclass/phel-doom/releases/latest) (no clone, no Composer):

```bash
curl -fsSL -o phel-doom.phar https://github.com/Chemaclass/phel-doom/releases/latest/download/phel-doom.phar
php phel-doom.phar
```

<details>
<summary>Build from source (needs Composer, or Docker)</summary>

```bash
git clone git@github.com:Chemaclass/phel-doom.git
cd phel-doom
make install
make play
```

Or `composer install && composer play`.

### No local PHP? Run in Docker

PHP 8.5 CLI + Composer + deps in an image; `docker` is the only prerequisite.

```bash
make docker-build      # build image
make docker-play       # launch game (raw TTY)
make docker-test       # run test suite
make docker-shell      # bash inside container
make docker-clean      # remove image
```

Override tag: `DOCKER_IMG=mytag make…
