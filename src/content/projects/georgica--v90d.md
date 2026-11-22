---
repo: "georgica/v90d"
name: "v90d"
description: "Dial-up server firmware for the Grandstream HT802: a real modem dials in on the phone port and gets PPP out of the Ethernet port"
readmeQualityOk: true
url: "https://github.com/georgica/v90d"
language: "C"
languages: ["C"]
languagePcts: [90]
stars: 12
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-11-16T00:02:07Z"
lastCommitAt: "2026-11-22T02:09:12Z"
lastReleaseAt: "2026-11-20T04:33:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["georgica"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b9e5454dd692f18061a779f3102865601aa5507f21f6a51e1db694650ee1ba4/georgica/v90d"
---

# v90d: a dial-up server in a Grandstream HT802

v90d is replacement firmware for the Grandstream HT802 analogue telephone
adapter. It turns the box into a small dial-up internet provider: plug an
old computer's modem into one of the two phone ports, dial the number, and
the modem connects (up to V.90 / V.92 speeds) and gets a PPP session that is
routed out of the box's Ethernet port. No phone line, no SIP, no PC in
between.

It also gives bulletin boards their telephone numbers back: dial
**227 835 3422** from a terminal program and the box joins the call to
Telehack on the internet, the way boards were called before there was a
web. More than a thousand boards have a number, and **1 800 BBS DIAL** is
the operator.

It installs from the stock firmware's own upgrade page with one file, and
the stock firmware stays in the box, one click away.
