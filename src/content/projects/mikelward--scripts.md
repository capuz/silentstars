---
repo: "mikelward/scripts"
name: "scripts"
description: "Small programs that don't need compiling, mostly day-to-day Linux stuff"
readmeQualityOk: true
url: "https://github.com/mikelward/scripts"
language: "Shell"
languages: ["Shell"]
languagePcts: [79]
stars: 23
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2011-04-26T01:48:47Z"
lastCommitAt: "2026-10-26T09:17:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 65
maintainers: ["claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8988ceea1c1af0b1348ca19529b055fdfeed277e8c25c81d64b04cf7174b59fc/mikelward/scripts"
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

## Installing tools without root

On machines where you can't use `apt`/`dnf`, `homepkg` installs prebuilt CLI
tools into a home prefix (default `~/.local`, already on `PATH` via the conf
repo).

`setup --no-root` wires this in automatically: it runs unprivileged (implying
`--no-sudo`, so the `apt`/`dnf` installs and every other privileged step are
skipped) and installs the CLI tools via `homepkg` instead — the core set
(`ripgrep fd bat fzf jq delta gh zoxide lf`) plus the extras (`helix jj nu`, unless
the minimal profile is in effect). `--no-sudo` on its own is just the mechanism
(skip sudo); it assumes the tools are provided some other way.

`atuin` and `carapace` — the history search and completion engines the conf
repo's shell config wires up —…
