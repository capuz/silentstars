---
repo: "lucianmarin/logparser"
name: "logparser"
description: "Command line parser for common log format."
readmeQualityOk: true
url: "https://github.com/lucianmarin/logparser"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "nginx", "clf"]
stars: 141
forks: 1
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2020-09-14T17:53:58Z"
lastCommitAt: "2026-11-12T11:37:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 55
undervaluedScore: 20
maintainers: ["lucianmarin"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a60a576a725c1d38f604648f8e42fb3ee4f97e670e3b95cb44aab38a398ef30/lucianmarin/logparser"
---

# Logparser

Command line parser for common log format (Nginx default).

## Usage

It counts most important data: referrers, operating systems, browsers and daily unique visitors (IPs). It excludes bots by default.

```shell
# Console output
python parse.py sitename.log.gz
python parse.py sitename.log.gz sub.sitename.log.gz

# Hide less than or equal values
python parse.py sitename.log.gz --hide 1

# HTML output
python parse.py sitename.log.gz --page ~/sitename/logs.html

# Ignore hostnames from referrers
python parse.py sitename.log.gz --skip "subreply.com"

# Drop logs older than specified days and rebuild log file
python parse.py sitename.log.gz --drop 30
```

Install and update PIP packages.

```shell
pip install -U -r requirements.txt
```

## Speed

- Logparser 24,249/s
- GoAccess 1.3 6,234/s - virtual server, Intel (1 core)
- GoAccess 1.5 47,299/s - laptop, Intel (4 cores)

## Outputs

- HTML output is based on Jinja2 templates. It can be improved as you see fit.
- Console output for [Subreply](https://subreply.com/) for a fews days in Sep, 2021:

```shell
----- Days
 1402 2021-09-14 Tuesday
  893 2021-09-15 Wednesday
  797 2021-09-16 Thursday
  857 2021-09-17 Friday
  951…
