---
repo: "garmin/connect-personal-api-python"
name: "connect-personal-api-python"
description: "Python client and command-line interface for Garmin Connect Personal API."
readmeQualityOk: true
url: "https://github.com/garmin/connect-personal-api-python"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 99
forks: 5
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2026-10-20T18:14:08Z"
lastCommitAt: "2026-11-11T19:46:46Z"
lastReleaseAt: "2026-10-21T14:18:57Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 10
maintainers: ["mabomm1", "garmatthew"]
openGraphImageUrl: "https://opengraph.githubassets.com/8770ccf2e09a797d310eb6ba7913d5a3a540b48187315176f8134183ae76b827/garmin/connect-personal-api-python"
---

# Garmin Connect Personal API Client

A small Python client for reading data from [Garmin's Personal API](https://developer.garmin.com/gc-developer-program/personal/personal-api). It is a
concrete example of how to query Garmin data using Personal API
authentication, and other projects can reuse its parts independently:

- `PersonalApiAuthenticator` caches bearer tokens and exchanges a Personal API
  key for a new token when needed.
- `GarminPersonalApiClient` makes authenticated GET requests with any bearer
  token and provides convenience wrappers for Personal API data sets.
- `gc-personal` is a command-line interface built on those same wrappers. Its
  direct commands work in scripts and one-off queries, and an optional
  interactive menu is included for demonstrating and exploring the data.

## Requirements and installation

You need Python 3.12 or newer and a Garmin Connect Personal API key. The
package installs `requests` automatically.

Create a virtual environment, activate it, and install the package:

```shell
python3 -m venv .venv
source .venv/bin/activate
python -m pip install garmin-connect-personal-api-python
```

On Windows, create and activate the environment with:…
