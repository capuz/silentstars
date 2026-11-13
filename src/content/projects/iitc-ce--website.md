---
repo: "IITC-CE/website"
name: "website"
description: "Page generator for https://iitc.app"
readmeQualityOk: true
url: "https://github.com/IITC-CE/website"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 1
closedIssues: 11
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2018-11-25T10:27:48Z"
lastCommitAt: "2026-11-13T18:33:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 77
maintainers: ["github-actions[bot]", "modos189"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5244118fce952435ccbd9c126590c680393efcecd32a8b3c99383eac0b3a374/IITC-CE/website"
---

Example of generating all pages for which there is a template in the `template` folder:

```python3 update.py```

Crontab for hourly news updates on the home page:

```0 * * * * cd /path/to/repo/ && python3 update.py > update.log```

# Install and start in virtual environment

## Installing prerequisites

Installing prerequisites on Ubuntu or Debian:

`sudo apt install build-essential python3-dev python3-pip python3-venv`

## Creating / Initiating a virtual environment

A virtual environment is created in project folder using a command:

`python3 -m venv venv`

Activation:

`source venv/bin/activate`

If this is the first start of the virtual environment, run the command:

`pip install -r requirements.txt`

***Remember**: When you are done working with one environment, before switching to another - or working with the globally installed one - you need to make sure to **deactivate** it.*

## Start

Next, launch as usual:

`python update.py`
