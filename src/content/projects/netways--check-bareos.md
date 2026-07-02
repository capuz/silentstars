---
repo: "NETWAYS/check_bareos"
name: "check_bareos"
description: "Icinga Plugin to check Bareos Backup Director databases"
url: "https://github.com/NETWAYS/check_bareos"
homepage: "https://www.netways.de/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["monitoring", "icinga", "bareos"]
stars: 8
forks: 7
openIssues: 0
closedIssues: 18
watchers: 10
contributors: 27
recentReleases: 0
createdAt: "2015-09-17T21:09:58Z"
lastCommitAt: "2026-07-02T06:33:19Z"
lastReleaseAt: "2025-04-03T09:01:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 100
undervaluedScore: 52
maintainers: ["martialblog", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/822e46616db0e87a0e7f7fef72def4855dc9bac914f25d986bfa2f8cff42521b/NETWAYS/check_bareos"
---

# check_bareos

Icinga Monitoring Plugin to check Bareos Backup Director databases

The plugin connects to the Bareos database in order to retrieve data.

## Installation

The plugin requires at least Python 3.

Python dependencies:

* `psycopg2-binary`

## Usage

```
p check_bareos.py --help
usage: check_bareos.py [-h] -U USER [-p PASSWORD] [-H HOST] [-P PORT] [-d DATABASE] [-v]
                       {job,tape,status} ...

Check Plugin for Bareos Backup Status

positional arguments:
  {job,tape,status}
    job                 Specific checks on a job
    tape                Specific checks on a tapes
    status              Specific status informations

options:
  -h, --help            show this help message and exit

  -U USER, --user USER  user name for the database connections
  -p PASSWORD, --password PASSWORD
                        password for the database connections (CHECK_BAREOS_DATABASE_PASSWORD)
  --password-file PASSWORD_FILE
                        path to a password file. Can be the bareos-dir.conf
  -H HOST, --Host HOST  database host
  -P PORT, --port PORT  database port
  -d DATABASE, --database DATABASE
                        database name
  -v, --version…
