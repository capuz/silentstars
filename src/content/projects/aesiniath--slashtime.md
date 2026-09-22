---
repo: "aesiniath/slashtime"
name: "slashtime"
description: "Slashtime is a small GUI program which displays the time in various places."
readmeQualityOk: true
url: "https://github.com/aesiniath/slashtime"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 11
forks: 7
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 7
recentReleases: 1
createdAt: "2012-11-21T08:08:19Z"
lastCommitAt: "2026-09-22T08:45:07Z"
lastReleaseAt: "2026-09-22T02:29:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 65
maintainers: ["istathar"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd7d408a9b8674b04cfe28dc59c27247e4d70f07dac748f029e854469c288fb6/aesiniath/slashtime"
---

# Slashtime

This is **slashtime**, a small program which displays the time in various
places. What differentiates it from other world clock programs is that
Slashtime shows the offset from your current location, not from UTC.

# CONFIGURATION

## Places list

The cities shown by Slashtime are drawn from the list found in a file called
_tzlist_ in the appropriate place in your home directory, most likely
_~/.config/slashtime/tzlist_.

For each city you wish to see, its location is given a line listing the IANA
timezone name, the name you actually want to use, and the country it is in.

```
"Asia/Calcutta"	"Bangalore"	"India"
```

This answers another common critique of programs displaying timezones: the
IANA timezone database is filed by continent then capital cities, which
ignores country and tends not to actually be the actual place you want to see
in your list. The _tzlist_ configuration file gives you control over both.

See the [PLACES](https://github.com/aesiniath/slashtime/blob/HEAD/PLACES) file for a fully documented example.

# COMPILING AND RUNNING

## Building

For the impatient:

    $ cargo build
    $ cargo run --bin slashtime-gui

but don't forget to create a…
