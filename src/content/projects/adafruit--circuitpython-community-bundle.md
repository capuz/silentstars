---
repo: "adafruit/CircuitPython_Community_Bundle"
name: "CircuitPython_Community_Bundle"
description: "A bundle of useful CircuitPython libraries from the CircuitPython community."
readmeQualityOk: true
url: "https://github.com/adafruit/CircuitPython_Community_Bundle"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["circuitpython"]
stars: 206
forks: 96
openIssues: 5
closedIssues: 19
watchers: 30
contributors: 88
recentReleases: 0
createdAt: "2017-07-26T01:10:28Z"
lastCommitAt: "2026-08-01T06:12:44Z"
lastReleaseAt: "2018-12-06T11:00:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 38
maintainers: ["FoamyGuy", "kritishmohapatra", "tekktrik"]
openGraphImageUrl: "https://opengraph.githubassets.com/e566fc14d66108772e267e8dbe41d7e44816a4791c9bfff2f6e95a9f324487fd/adafruit/CircuitPython_Community_Bundle"
---

# CircuitPython Community Library Bundle

This repo bundles a bunch of useful CircuitPython libraries into an easy to
download zip file. CircuitPython boards can ship with the contents of the zip to
make it easy to provide a lot of libraries by default.

# License
Each included library has its own license that must allow for redistribution. To
save space, license text is not included in the bundle. However, a link to each
individual repository is which should provide source code access and license
information.

# Use
To use the bundle download the zip (not source zip) from the
[latest release](https://github.com/adafruit/CircuitPython_Community_Bundle/releases/latest),
unzip it and copy over the subfolders, such as `lib`, into the root of your
CircuitPython device. Make sure to indicate that it should be merged with the
existing folder when it exists.

# Development

After you clone this repository you must run `git submodule init` on update
also do `git submodule update`.

## Updating libraries
To update the libraries run `update-submodules.sh`. The script will fetch the
latest code and update to the newest tag (not master).

## Expectations for Library Inclusion
You're…
