---
repo: "SignalK/n2k-signalk"
name: "n2k-signalk"
description: "NMEA 2000 to Signal K transformer"
readmeQualityOk: true
url: "https://github.com/SignalK/n2k-signalk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 33
forks: 41
openIssues: 12
closedIssues: 89
watchers: 11
contributors: 33
recentReleases: 0
createdAt: "2014-04-22T19:01:31Z"
lastCommitAt: "2026-11-08T10:42:08Z"
lastReleaseAt: "2019-04-14T19:53:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 65
maintainers: ["keesverruijt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/509f373283899313b71332c2141514aebdc08ec16369abab17df5a12c46eb3f7/SignalK/n2k-signalk"
---

n2k-signalk
================

NMEA 2000 to Signal K converter. Converts [Canboat analyzer](https://github.com/canboat/canboat/wiki/analyzer) JSON output to the [Signal K](http://signalk.github.io/) data format (also JSON).

This package is part of [signalk-server](https://github.com/SignalK/signalk-server). Not a plugin. It can also be used outside of signalk-server. See Usage section below.

For mapping NMEA 0183 data to the Signal K data format, see [nmea0183-signalk](https://github.com/SignalK/nmea0183-signalk).

USAGE
-------------

**Usage in signalk-server**

All data connections in signalk-server that are configured as type NMEA 2000 use this code.

**Usage from command line**

```
$ actisense-serial /dev/actisense | analyzer -json 2>/dev/null | n2k-signalk | head -5
{"environment":{"windSpeedApparent":{"value":2.93,"source":{"pgn":"130306","timestamp":"2013-08-24-15:31:50.384","src":"105"}}}}
{"environment":{"windAngleApparent":{"value":341.4,"source":{"pgn":"130306","timestamp":"2013-08-24-15:31:50.384","src":"105"}}}}
{"environment":{"windSpeedApparent":{"value":2.93,"source":{"pgn":"130306","timestamp":"2013-08-24-15:31:50.385","src":"105"}}}}…
