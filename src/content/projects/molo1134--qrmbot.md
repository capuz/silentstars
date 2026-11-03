---
repo: "molo1134/qrmbot"
name: "qrmbot"
description: "qrm ham radio IRC bot and associated scripts"
readmeQualityOk: true
url: "https://github.com/molo1134/qrmbot"
language: "Perl"
languages: ["Perl", "Tcl"]
languagePcts: [80, 20]
stars: 45
forks: 41
openIssues: 0
closedIssues: 11
watchers: 2
contributors: 44
recentReleases: 0
createdAt: "2018-01-29T03:36:23Z"
lastCommitAt: "2026-11-03T19:05:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 64
maintainers: ["molo1134", "MonkeybutlerCJH", "salcedo"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3d4e71d14a5818a096dbb82eae66738d3281da62668d063d7d3c6f71d40faf8/molo1134/qrmbot"
---

# qrm IRC bot and command line tools

A collection of command line tools and wrapper scripts for the eggdrop IRC bot.

Eggdrop is an IRC bot written in C with a built-in TCL scripting environment.
These IRC bot scripts are based around command-line tools written in perl with
a TCL wrapper layer.  The command line tools are designed to be standalone with
VT220/ANSI terminal output, and have been adapted for IRC color output.

## License

All original code is 2-clause BSD licensed.  See [LICENSE](https://github.com/molo1134/qrmbot/blob/HEAD/LICENSE) file.

The [`astro`](https://github.com/molo1134/qrmbot/blob/HEAD/lib/astro) program has portions derived from K1JT Joe Taylor's
wsjt program and is GPLv3 licensed.  See [COPYING](https://github.com/molo1134/qrmbot/blob/HEAD/COPYING) file.

## Usage

See [the /r/amateurradio wiki page for qrm
bot](https://www.reddit.com/r/amateurradio/wiki/qrmbot).

## Dependencies

As tested on Debian:

* `curl`
* `perl`
* `perl-base`
* `perl-modules`
* `libastro-satpass-perl` (`Astro::Coord::ECI` -- see instructions below)
* `libclone-perl`
* `libdate-manip-perl`
* `libdatetime-format-strptime-perl`
* `libdatetime-perl`
* `libjson-perl`
*…
