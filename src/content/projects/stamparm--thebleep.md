---
repo: "stamparm/thebleep"
name: "thebleep"
description: "A fast, maintained successor to The Fuck — fix your previous console command."
readmeQualityOk: true
url: "https://github.com/stamparm/thebleep"
homepage: "https://www.sekuripy.hr/labs/thebleep/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["python", "shell", "cli", "command-correction", "command-line", "productivity", "terminal"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-17T20:09:01Z"
lastCommitAt: "2026-08-29T17:29:00Z"
lastReleaseAt: "2026-08-21T09:23:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 60
maintainers: ["stamparm", "TrixSec"]
openGraphImageUrl: "https://opengraph.githubassets.com/18807ed2af47440f9a14ebf19ba67816f2e27edc43e46150ee5dad5ea27269aa/stamparm/thebleep"
---

# The Bleep [][version-link] [][workflow-link] [](LICENSE.md)

**The maintained successor to [The Fuck](https://github.com/nvbn/thefuck).**

Type the command wrong. Type `bleep`. Run the right one.

## Get it

```bash
curl -fsSL https://raw.githubusercontent.com/stamparm/thebleep/master/install.sh | sh
```

That picks up whichever of `uv`, `pipx` or `pip` you already have, and prints
the one line to add to your shell's startup file. Prefer to do it yourself:

```bash
uv tool install thebleep          # or: pipx install thebleep
thebleep --alias-loader >> ~/.bashrc
```

Open a new shell, and the next time you mistype something, type `bleep`.
[The long version](#installation), including the muscle memory you already
have:

```bash
thebleep --alias-loader fuck >> ~/.bashrc
```

## Why not just The Fuck

Because the idea deserves better than its last release. *The Fuck* 3.32 is from
January 2022: it cannot start on Python 3.12 or newer, over three hundred
issues are open on it, and a good number of its rules quietly stopped matching
when the tools they correct changed what they print. *The Bleep* is the same
tool, maintained — and several times quicker about it.

Same machine, same…
