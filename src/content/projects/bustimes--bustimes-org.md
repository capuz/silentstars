---
repo: "bustimes/bustimes.org"
name: "bustimes.org"
description: "Every bus stop, route and timetable, using (Geo)Django and things"
readmeQualityOk: true
url: "https://github.com/bustimes/bustimes.org"
homepage: "https://bustimes.org"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["bus", "django", "gtfs", "transxchange", "busopendata"]
stars: 145
forks: 35
openIssues: 33
closedIssues: 196
watchers: 11
contributors: 16
recentReleases: 0
createdAt: "2015-06-20T16:03:25Z"
lastCommitAt: "2026-10-15T08:32:26Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 46
maintainers: ["jclgoodwin"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc94f41fdd6f1e2209f171325f7d02dc5599c4f4b3d8cac0b1c62ca8eb94aa45/bustimes/bustimes.org"
---

## What's this?

Source code for [the website bustimes.org](https://bustimes.org/). (The "the" is important – running your own "instance" is not recommended or supported.)

It's a magnificent monolithic Django app that's evolved over time (since 2015). The structure doesn't make complete sense:

app      | concern
---------|------------
accounts | user accounts
api      | the Django Rest Framework–powered API
buses    | contains the site settings.py
busstops | bus stops - but also operating companies, places, and routes 🤯 and the site's static file assets
bustimes | getting timetable data out of various formats (GTFS, TransXChange, ~~ATCO-CIF~~) and into a database and doing stuff therewith
config   | Kamal and Supervisor configuration
departures | listing the "next departures" at a bus stop – from a timetable and/or predicted by an API
disruptions | information about like roadworks, diversions and stuff
fares    | fares
fixtures | some YAML files containing overrides/corrections to the operator (NOC) and bus stop (NaPTAN) datasets. Also recorded HTTP responses used in tests
frontend | TypeScript and Sass bits
transxchange | code for parsing TransXChange XML files. Could be…
