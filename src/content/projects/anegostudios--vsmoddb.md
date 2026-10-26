---
repo: "anegostudios/vsmoddb"
name: "vsmoddb"
description: "VS Mod DB"
readmeQualityOk: true
url: "https://github.com/anegostudios/vsmoddb"
language: "PHP"
languages: ["PHP"]
languagePcts: [84]
stars: 47
forks: 26
openIssues: 15
closedIssues: 40
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2021-02-15T13:23:47Z"
lastCommitAt: "2026-10-26T09:16:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 52
maintainers: ["SaculRennorb", "Zaldaryon"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f04b20e29d5eea4855b7aa1f7ff0e9ae5eee48e2006cb5a8533fa1b852d21e8/anegostudios/vsmoddb"
---

# vsmoddb
Repository for https://mods.vintagestory.at

# VS Mod DB API Docs

## URLS

*Api base url*
http://mods.vintagestory.at/api

*Api v2 base url - currently still in development*
http://mods.vintagestory.at/api/v2

~~*Base url for all returned files*~~
~~http://mods.vintagestory.at/~~
Always respect the full uris returned by the api.

## Interfaces

## V1

Request: Normal GET requests  
Response format: Json.  
Every response contains a *statuscode* property which uses [HTTP Error Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to denote success/failure of a request.

### /api/tags
List all mod tags

Example: http://mods.vintagestory.at/api/tags

### /api/gameversions
List all game version tags

Example: http://mods.vintagestory.at/api/gameversions

### /api/authors
List all authors (users)

Example: http://mods.vintagestory.at/api/authors

### /api/comments/[assetid]
Lists all comments for given assetid or latest 100 if assetid is not specified

Example: http://mods.vintagestory.at/api/comments

### /api/mods
List all mods

Example: http://mods.vintagestory.at/api/mods

Get Parameters:<br>
**tagids[]**: Filter by tag id (AND)<br>
**gameversion** or **gv**:…
