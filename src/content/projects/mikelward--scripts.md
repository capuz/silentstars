---
repo: "mikelward/scripts"
name: "scripts"
description: "Small programs that don't need compiling, mostly day-to-day Linux stuff"
readmeQualityOk: true
url: "https://github.com/mikelward/scripts"
language: "Shell"
languages: ["Shell"]
languagePcts: [80]
stars: 23
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2011-04-26T01:48:47Z"
lastCommitAt: "2026-11-16T10:56:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 65
maintainers: ["claude", "mikelward"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e8b5f23e8544a259012a2375adec13fb52770a78a0e7c3191437542127753f7/mikelward/scripts"
---

# scripts

## Setup

Bootstrap a new machine by running the setup script directly from GitHub:

```sh
curl -fsSL https://mikelward.com/setup | sh
```

or

```sh
wget -qO- https://mikelward.com/setup | sh
```

The short URLs redirect to the raw script on GitHub. You can also use the full URLs:

```sh
curl -fsSL https://github.com/mikelward/scripts/raw/main/setup | sh
wget -qO- https://github.com/mikelward/scripts/raw/main/setup | sh
```

Re-run `setup` whenever you like: it installs what's missing and leaves what's
installed at its version, upgrading only once a week. That pass upgrades
`setup`'s apt or dnf packages, everything Homebrew has, the `homepkg` tools,
the release binaries and `uv`, and `~/.local/state/setup/last-upgrade` records
the last one that didn't fail; a failed one is tried again on the next run.
`setup --upgrade` upgrades now, and `setup --no-upgrade` leaves it for a later
run. A managed machine that has each new version of
a binary approved before it runs sees new versions at most weekly. The repos
`setup` clones (`scripts`, `conf`, `vcs` and the rest) are config, so they're pulled
on every run.

`setup` asks for what it needs at the start, so the rest of the…
