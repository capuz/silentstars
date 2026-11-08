---
repo: "andrasmaroy/pconf"
name: "pconf"
description: "Hierarchical python configuration with files, environment variables and command-line arguments."
readmeQualityOk: true
url: "https://github.com/andrasmaroy/pconf"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "configuration", "hierarchical", "hacktoberfest"]
stars: 21
forks: 7
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2017-04-27T13:02:38Z"
lastCommitAt: "2026-11-08T14:13:47Z"
lastReleaseAt: "2020-03-19T08:56:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 64
maintainers: ["andrasmaroy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4616ea468736b941b962b580a72523bdad5190d15dc249df93e4762fbefe07f/andrasmaroy/pconf"
fundingLinks: ["GITHUB:https://github.com/andrasmaroy"]
---

# pconf

Hierarchical python configuration with files, environment variables, command-line arguments.

## Example

``` python
from pconf import Pconf
import json

"""
Setup pconf config source hierarchy as:
  1. Environment variables
  2. A JSON file located at 'path/to/config.json'
"""
Pconf.env()
Pconf.file("path/to/config.json", encoding="json")

# Get all the config values parsed from the sources
config = Pconf.get()

# Just print everything nicely
print(json.dumps(config, sort_keys=True, indent=4))
```
Run the above script:
``` bash
python example.py
```
The output should be something like this:
```
{
    "HOSTNAME": "bb30700d22d8",
    "TERM": "xterm",
    "PATH": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    "PWD": "/",
    "SHLVL": "1",
    "HOME": "/root",
    "no_proxy": "*.local, 169.254/16",
    "_": "/usr/bin/env",
    "example": {
        "another": "stuff",
        "key": "value"
    }
}
```

## Hierarchical configuration
Pconf is designed to be used with multiple sources of configuration values with the user being able define the priority of each of these as a hierarchy. The supported sources described below can be setup in any order without…
