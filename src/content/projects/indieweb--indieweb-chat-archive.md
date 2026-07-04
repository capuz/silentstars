---
repo: "indieweb/indieweb-chat-archive"
name: "indieweb-chat-archive"
description: "Full archive of IndieWeb chat log data files"
readmeQualityOk: true
url: "https://github.com/indieweb/indieweb-chat-archive"
homepage: "https://chat.indieweb.org"
language: "PHP"
languages: ["PHP", "Python"]
languagePcts: [60, 35]
stars: 16
forks: 9
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 47
recentReleases: 0
createdAt: "2017-12-01T21:06:19Z"
lastCommitAt: "2026-07-04T23:15:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 67
maintainers: ["loqibot"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdc4dd06b9d5ba20746f3dea2e2d7ab19ccd3e6e5aede9be6d2e87125f025568/indieweb/indieweb-chat-archive"
---

# IndieWeb Chat Archive

This repo contains the full archive of IndieWeb chat log data files visible at https://chat.indieweb.org

Chat logs are added to this repo every 15 minutes.

Looking for the website source code for chat.indieweb.org? See: https://github.com/indieweb/chat.indieweb.org

## File Format

Each channel's files can be read using [QuartzDB](https://github.com/aaronpk/QuartzDB). The files follow a simple format:

```
2017-12-01 23:15:06.218000 {"type":"message","timestamp":1512170106.218,"network":"irc","server":"freenode","channel":{"uid":"#indieweb","name":"#indieweb"},"author":{"uid":"Loqi","nickname":"Loqi","username":"Loqi","name":"Loqi","photo":null,"url":null,"tz":"US\/Pacific"},"content":"[@indiewebcamp] This week in the #indieweb https://indieweb.org/this-week/2017-12-01.html https://pbs.twimg.com/media/DP_z5rCVwAAGdTk.jpg (http://twtr.io/1Yx4r5CHSBC)","modes":[]}
```

* Each line begins with the timestamp. 
* There will always be 26 characters followed by a space. 
* The timestamp is UTC and has 6 digits of precision for the seconds. 
* The rest of the line is a JSON-encoded string representing the IRC message and who sent it.

## Spam removal

For a…
