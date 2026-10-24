---
repo: "vesta-webtrees-2-custom-modules/vesta_gov4webtrees"
name: "vesta_gov4webtrees"
description: "⚶ Vesta Gov4Webtrees (Webtrees 2 Custom Module)"
readmeQualityOk: true
url: "https://github.com/vesta-webtrees-2-custom-modules/vesta_gov4webtrees"
homepage: "https://cissee.de/"
language: "PHP"
languages: ["PHP"]
languagePcts: [88]
topics: ["webtrees", "webtrees-custom", "webtrees2", "gedcom"]
stars: 12
forks: 3
openIssues: 4
closedIssues: 45
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2019-03-10T19:54:06Z"
lastCommitAt: "2026-10-24T00:15:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 49
maintainers: ["ric2016", "ro-la"]
openGraphImageUrl: "https://opengraph.githubassets.com/be518e9a1362851d3bd0711cdbb3adce30d5d1548107be129ea840f3e30285e1/vesta-webtrees-2-custom-modules/vesta_gov4webtrees"
discussionCount: 1
---

# ⚶ Vesta Gov4Webtrees (Webtrees Custom Module)

This [webtrees](https://www.webtrees.net/) custom module provides data to an extended 'Facts and Events' tab, enhancing events with [GOV](http://gov.genealogy.net) (historic gazetteer) data.
The project’s website is [cissee.de](https://cissee.de).

See [here](https://github.com/vesta-webtrees-2-custom-modules/vesta_common/blob/master/docs/LocationData.md) for an overview of location data management in webtrees.

## Contents

* [Features](#features)
* [Disclosure to third parties](#disclosure)
* [Demo](#demo)
* [Download](#download)
* [Installation](#installation)
* [License](#license)

### Features<a name="features"/>

* Historic and current GOV data is loaded from the GOV server, cached internally, and displayed for individual facts and events. 
* Location data (map coordinates) is also used, if available, for map links and other custom modules.
* GOV ids have to be entered manually, once per place name. They may be managed in different ways (depending on the module administration settings):

1. GOV ids outside GEDCOM data. In this case, the GOV ids are stored in a separate database table, which has to be managed manually when…
