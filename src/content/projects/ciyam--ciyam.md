---
repo: "ciyam/ciyam"
name: "ciyam"
description: "CIYAM Software Manufacturing"
readmeQualityOk: true
url: "https://github.com/ciyam/ciyam"
language: "C++"
languages: ["C++"]
languagePcts: [78]
stars: 25
forks: 19
openIssues: 2
closedIssues: 1
watchers: 8
contributors: 7
recentReleases: 0
createdAt: "2012-01-07T10:55:14Z"
lastCommitAt: "2026-11-01T22:59:33Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 59
maintainers: ["damon", "ciyam"]
openGraphImageUrl: "https://opengraph.githubassets.com/486d00258fde4710b9647d55e25a49048e33f4d378ded4d9bbbf4452ba016f03/ciyam/ciyam"
---

CIYAM Software Manufacturing
============================

The following environment variables are required by various scripts:

Name   | Description                 | Sample Value
------ | --------------------------- | -------------
WEBDIR | Web Document Root path**    | /var/www/html

** This path must *not* contain spaces and each directory in the path must have "rwx" permissions set so that
both the Apache2 user (wwwrun) and the user account being used for development can create, update, append and
delete files in and below this path.

An optional CIYAM_CPP_OPTS environment variable can be used to include extra compiler options (which is handy
for development environments where debug information is desirable):

export CIYAM_CPP_OPTS=-g

An optional MARKER environment variable can be used as a way of preventing accidental source code commits due
to some temporary tracing code (as it is used in the pre-commit hook script's call to 'check_source').

The development packages for `libpng` (and optionally `readline`) will also need to be installed.

NOTE: More specific OS dependency installation instructions can be found in additional "<os_name>.txt" files.

MySQL
-----…
