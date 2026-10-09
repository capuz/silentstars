---
repo: "LittleGreenViper/LGV_TZ_Lookup"
name: "LGV_TZ_Lookup"
description: "Server for Matching Long/Lat to Timezone"
readmeQualityOk: true
url: "https://github.com/LittleGreenViper/LGV_TZ_Lookup"
language: "PHP"
languages: ["PHP"]
languagePcts: [96]
stars: 47
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2023-06-13T14:20:06Z"
lastCommitAt: "2026-10-09T18:56:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 27
maintainers: ["ChrisMarshallNY"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/653164997/b3bc5278-4bf9-474d-95c2-53cceff764cb"
---

# LGV_TZ_Lookup

A small PHP library that turns longitude and latitude into an IANA time zone name, such as `America/New_York`. Use it in your application through Composer, or run it as a simple HTTP service.

Requires **PHP 8.0+**, **PDO**, and **MySQL or PostgreSQL** with a loaded boundary database. Boundary data comes from the [Timezone Boundary Builder project](https://github.com/evansiroky/timezone-boundary-builder).

## What Problem Does This Solve?

Unfortunately, time zones are not a simple "I'm at this longitude, so it must be this time." They are political constructs.

Here's why we can't just do a simple longitude match:

[_Image Source: Wikimedia Commons_](https://commons.wikimedia.org/wiki/File:World_Time_Zones_Map.png)

We address this by using the rendered result of [this great project](https://github.com/evansiroky/timezone-boundary-builder), which is an effort to build a "living document" map of all the world timezones, as a shapefile (a file that can project polygons over a digital map), and locating a geographic point, within those shapes.

## Composer Library

Run these commands in your application's directory:

```bash
composer config…
