---
repo: "RIPE-NCC/whois"
name: "whois"
description: "RIPE Database whois code repository"
readmeQualityOk: true
url: "https://github.com/RIPE-NCC/whois"
language: "Java"
languages: ["Java", "Groovy"]
languagePcts: [62, 35]
stars: 410
forks: 108
openIssues: 18
closedIssues: 327
watchers: 33
contributors: 33
recentReleases: 0
createdAt: "2013-05-07T10:38:10Z"
lastCommitAt: "2026-09-17T08:50:41Z"
lastReleaseAt: "2015-07-16T11:32:22Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 37
maintainers: ["MiguelAHM", "eshryane", "maggarwal13"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ba8eeec7416694990df58e0a123ecd3faf7e60d59f8db43671c44ba9614af5a/RIPE-NCC/whois"
---

# RIPE Whois Database

License
-------
This software is distributed under the BSD License.
See: https://raw.github.com/RIPE-NCC/whois/master/LICENSE.md

Running Integration Tests for Development
-----------------------------------------

It is preferable to write integration tests during development, and commit them along with any code changes. All dependencies apart from the database are mocked.

Running Whois Locally For Development
-------------------------------------

You can run a standalone Whois server locally. Dependencies must be configured in a local properties file.

More information [here](https://docs.db.ripe.net/)

### Running within an IDE

See [Running whois from within Intellij](https://docs.db.ripe.net/Installation-and-Development/Building-whois/#running-whois-from-within-intellij) for instructions.

### Running outside an IDE
- See [Installation instructions](https://docs.db.ripe.net/Installation-and-Development/Installation-instructions/).

Git
---

### Configure pre-commit hooks

Pre-commit hook can be found in `tools/precommitcheck`. This can be optionally configured by running: `ln -fsv tools/precommitcheck .git/hooks/pre-commit`

Tests
-----

### Run a…
