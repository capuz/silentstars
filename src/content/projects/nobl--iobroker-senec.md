---
repo: "nobl/ioBroker.senec"
name: "ioBroker.senec"
description: "ioBroker adapter for Senec Home"
readmeQualityOk: true
url: "https://github.com/nobl/ioBroker.senec"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["iobroker", "iobroker-adapter", "senec", "photovoltaics"]
stars: 31
forks: 12
openIssues: 4
closedIssues: 95
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2020-02-27T22:02:05Z"
lastCommitAt: "2026-07-14T05:52:58Z"
lastReleaseAt: "2022-02-11T17:20:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 61
maintainers: ["nobl", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34ce4a7f98360a6225774b1ba3f6b00fb457e307ac29571d03c77ffbdff9841e/nobl/ioBroker.senec"
fundingLinks: ["GITHUB:https://github.com/nobl", "BUY_ME_A_COFFEE:https://buymeacoffee.com/norblu", "CUSTOM:https://www.paypal.me/gerbots", "CUSTOM:https://share.weropay.eu/p/1/c/QzzqgSQcI3"]
---

# ioBroker.senec

**Tests:** 

## senec adapter for ioBroker

[Dokumentation DE](https://github.com/nobl/ioBroker.senec/blob/HEAD/docs/de/README.md)<br>
[Documentation EN](https://github.com/nobl/ioBroker.senec/blob/HEAD/docs/en/README.md)

Initially targeted at the Senec Home V2.1 System.
In the Senec.Home system, only selected values can be changed by the adapter. Use of this functionality is at your own risk and must be activated manually in the configuration beforehand.
Senec currently also no longer provides a reliable way to influence peak shaving via the web interface. For this purpose, mein-senec.de must be used.
Whether other systems (e.g. V3) also work with it depends on whether they are also based on lala.cgi and provide the same JSON information.
Even with integration into the Senec.Clound it is not guaranteed that the data can still be retrieved via the web interface (for this please report your experiences).

Adapter supports local polling via lala.cgi and polling via Web API.

Systems that might work:
* Senec Home 4.0,  6.0, 8.0, 10.0 / Blei
* Senec Home 5.0, 7.5, 10.0, 15.0 / Lithium
* Senec Home V2 5.0, 7.5, 10.0
* Senec Home V2.1
* Senec.Home V3
* Senec.Home V4
*…
