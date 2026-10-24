---
repo: "ericbstie/tibber.py"
name: "tibber.py"
description: "An UNOFFICIAL python wrapper for the nordic electricity company Tibber's API."
readmeQualityOk: true
url: "https://github.com/ericbstie/tibber.py"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 22
forks: 3
openIssues: 6
closedIssues: 31
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2022-05-06T17:17:07Z"
lastCommitAt: "2026-10-24T00:16:11Z"
lastReleaseAt: "2025-01-06T21:02:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 45
maintainers: ["ericbstie", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/00d4ba7806b33599475994f65dd04eb9998755f96c0055da6d64fd67d1d02a2b/ericbstie/tibber.py"
discussionCount: 7
---

# tibber.py - The Python wrapper for the Tibber API

> Note that this is NOT [pyTibber](https://github.com/Danielhiversen/pyTibber) which is the official python wrapper endorsed by Tibber themselves.

tibber.py is an unofficial python wrapper package for communication with the [Tibber API](https://developer.tibber.com/).
This package aims to cover all functionalities of the Tibber API in the most beginner-friendly modern Pythonic way. You can read all the capabilites of the API and explore it
with [Tibbers' API explorer](https://developer.tibber.com/explorer). For documentation on how to use tibber.py head over to https://tibberpy.readthedocs.io/en/latest/.

Every field of the API types should be found in the corresponding `tibber.type` (e.g. the `size: Int` field of `Home`
type, should be accessed in the tibber.py package as: `Home.size` and return an int). In addition to these "1 to 1" relations between the tibber.py package and the Tibber API, there might be extra properties or methods for simpler access of common properties
(one example: it is possible to simply write `home.address1` instead of `home.address.address1`, although the latter is
also supported). The docstrings of…
