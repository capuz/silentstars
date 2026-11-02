---
repo: "leikoilja/glocaltokens"
name: "glocaltokens"
description: "Python 3 package to fetch google home local authentication tokens and IP using google username/password or google master token"
readmeQualityOk: true
url: "https://github.com/leikoilja/glocaltokens"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["google-token", "python", "google-home", "homeassistant"]
stars: 62
forks: 15
openIssues: 0
closedIssues: 56
watchers: 7
contributors: 6
recentReleases: 0
createdAt: "2020-12-29T14:42:17Z"
lastCommitAt: "2026-11-02T13:38:40Z"
lastReleaseAt: "2021-03-09T07:44:41Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 50
maintainers: ["KapJI", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/39bcaf278e5a3d42432fb151eab6dbd31d58ad393798f31312abafb3a66cc8be/leikoilja/glocaltokens"
---

# Google Home local authentication token extraction

Python package to extract Google Home devices local authentication tokens from Google servers.
These local authentication tokens are needed to control Google Home devices
(See [@rithvikvibhu](https://github.com/rithvikvibhu)'s [Google Home (2.0) API](https://rithvikvibhu.github.io/GHLocalApi/)).

## How it works

glocaltokens gets three kinds of tokens, each from the one before:

1. **Master token**: starts with `aas_et/` and is long lived. You get it once with your Google username and password, or with a browser sign-in (see "If logging in with a password fails" below).
2. **Access token**: lives 1 hour. glocaltokens gets a new one from the master token when it expires.
3. **Local authentication tokens**: one per device, used to send requests to that device. They only live about 1 day, so you will need to get new ones regularly.

Store the master token, not your password: with the master token alone, glocaltokens can get the other tokens whenever you need them.

## Installation

glocaltokens requires Python 3.12 or newer.

To fill in the IP address and port of each device, glocaltokens looks for your devices on the local…
