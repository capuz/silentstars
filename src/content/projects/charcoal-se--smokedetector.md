---
repo: "Charcoal-SE/SmokeDetector"
name: "SmokeDetector"
description: "Headless chatbot that detects spam and posts links to it in chatrooms for quick deletion."
readmeQualityOk: true
url: "https://github.com/Charcoal-SE/SmokeDetector"
homepage: "https://metasmoke.erwaysoftware.com"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["python", "spam", "regex", "hacktoberfest"]
stars: 493
forks: 204
openIssues: 67
closedIssues: 363
watchers: 21
contributors: 112
recentReleases: 0
createdAt: "2014-01-30T20:29:37Z"
lastCommitAt: "2026-07-17T06:01:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 39
maintainers: ["SmokeDetector"]
openGraphImageUrl: "https://opengraph.githubassets.com/acadb49e891152977dc75b01dbbd51a89766b654645f8286eac4e455fe5a635a/Charcoal-SE/SmokeDetector"
---

# SmokeDetector

A headless chatbot that detects spam and posts it to chatrooms.
Uses [ChatExchange](https://github.com/Manishearth/ChatExchange),
takes questions from the Stack Exchange
[realtime tab](https://stackexchange.com/questions?tab=realtime),
and accesses answers via the [Stack Exchange API](https://api.stackexchange.com/).

Example [chat post](https://chat.stackexchange.com/transcript/message/43579469):

## Documentation

User documentation is in the [wiki](https://charcoal-se.org/smokey).

Detailed documentation for
[setting up and running SmokeDetector is in the wiki](https://charcoal-se.org/smokey/Set-Up-and-Run-SmokeDetector).

### Basic setup

To set up SmokeDetector, please use

```shell
git clone https://github.com/Charcoal-SE/SmokeDetector.git
cd SmokeDetector
git checkout deploy
sudo pip3 install -r requirements.txt --upgrade
pip3 install --user -r user_requirements.txt --upgrade
```

Next, copy `config.sample` to a new file named `config`,
and edit the values required.

To run, use `python3 nocrash.py`
(preferably in a daemon-able mode, like a `screen` session.)
You can also use `python3 ws.py`,
but then SmokeDetector will be shut down after 6 hours;
when…
