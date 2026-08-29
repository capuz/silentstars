---
repo: "thomasleplus/CafeBab"
name: "CafeBab"
description: "Arduino project to detect usage of a table football. "
readmeQualityOk: true
url: "https://github.com/thomasleplus/CafeBab"
language: "Java"
languages: ["Java"]
languagePcts: [76]
topics: ["arduino", "arduino-uno", "sketch", "arduino-sketch", "arduino-platform", "arduino-boards", "xbee", "xbees", "foosball", "foosball-table"]
stars: 8
forks: 5
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-03-18T14:27:58Z"
lastCommitAt: "2026-08-29T17:27:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 84
maintainers: ["dependabot[bot]", "thomasleplus", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e49e3bfdbb72fd8d969466e6035cc7e3b55afc7eb1cb87095821437f65dd7c88/thomasleplus/CafeBab"
---

# CafeBab

Arduino project to detect usage of a table football.

## Structure

The system: an XBee-equipped Arduino on the foosball table detects activity and
sends events over the air; a host application receives them and publishes usage.

- [`arduino/`](https://github.com/thomasleplus/CafeBab/blob/HEAD/arduino/) — Arduino sketches for the on-table sensor device.
- [`babduino/`](https://github.com/thomasleplus/CafeBab/blob/HEAD/babduino/) — the Java host application that reads the XBee feed
  and publishes measurements.
- [`xbee/`](https://github.com/thomasleplus/CafeBab/blob/HEAD/xbee/) — Digi X-CTU radio configuration profiles for the XBee modules.
- [`utils/`](https://github.com/thomasleplus/CafeBab/blob/HEAD/utils/) — third-party drivers/tools for the XBee/USB hardware.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/thomasleplus/CafeBab/blob/HEAD/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Security

Please read [SECURITY.md](https://github.com/thomasleplus/CafeBab/blob/HEAD/SECURITY.md) for details on our security policy and how to report security vulnerabilities.

## Code of Conduct

Please read…
