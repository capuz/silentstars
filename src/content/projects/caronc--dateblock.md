---
repo: "caronc/dateblock"
name: "dateblock"
description: "A command-line tool and library that waits until a cron-style schedule matches. Unlike sleep, which waits for a specified duration, Dateblock waits until a scheduled point in time."
readmeQualityOk: true
url: "https://github.com/caronc/dateblock"
language: "C++"
languages: ["C++"]
languagePcts: [62]
topics: ["python-bindings", "datemath", "cron", "cli"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2013-10-19T23:13:34Z"
lastCommitAt: "2026-10-31T01:59:35Z"
lastReleaseAt: "2026-10-26T23:44:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 66
maintainers: ["caronc"]
openGraphImageUrl: "https://opengraph.githubassets.com/e52ca2b968fd18379f809cf7e8e962b27fdc545845a9ff13e352e73bed6e5234/caronc/dateblock"
fundingLinks: ["GITHUB:https://github.com/caronc", "CUSTOM:https://www.paypal.com/donate/?hosted_button_id=CR6YF7KLQWQ5E"]
---

Dateblock
=========
Dateblock allows you to block (exactly how a Linux/Unix Cron might) _until_ a
specific point of time unlike 'sleep' which blocks _for_ a set period of time.
The difference is very subtle but can prove to be very useful.

It offers a few new features that the Internet Systems Consortium (ICS) version
does not (refering to /etc/crontab style). Dateblock specifically offers the ability
to wake/unblock on a _specific second_ and/or _drift_ for certain period afterwards
your calculated time is met (kind of like combining _sleep_ and _ICS Cron_ into one).

Python, PHP and Node.js bindings are additionally included, supporting the
standard date and time objects of each language!

## Quick Start
The `dateblock` command is a C++ tool; install it from the distribution
packages or build it from source (see [Installation](#installation)).
```bash
# When would the next 5th minute start?  (--test shows without waiting)
dateblock -t -n /5

# Wait for 9:00 in Tokyo, whatever timezone this computer is in
dateblock -z Asia/Tokyo -c "0 0 9"

# Run a backup at the next quarter hour (dateblock exits with its exit code)
dateblock -n /15 -- ./backup.sh --full
```

The Python library…
