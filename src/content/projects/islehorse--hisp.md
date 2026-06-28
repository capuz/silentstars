---
repo: "islehorse/HISP"
name: "HISP"
description: "A Server Emulator for the Flash-Based MMORPG \"Horse Isle: The Secret Land of Horses\""
url: "https://github.com/islehorse/HISP"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["dotnet", "server", "emulator", "horse-isle", "server-emulator", "adobe-flash", "xml-socket", "csharp", "private-server", "sockets-tcp"]
stars: 18
forks: 2
openIssues: 1
closedIssues: 7
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2020-09-29T01:29:36Z"
lastCommitAt: "2026-06-28T03:09:42Z"
lastReleaseAt: "2025-12-28T02:01:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 49
maintainers: ["LiEnby"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df955d8e7441fa2953fff21d9e6d4e3d75863fc8539ceda54d3eb0dc033b56e/islehorse/HISP"
---

# HISP - Horse Isle Server Project

HISP is a "Server Emulator" for Horse Isle 1          
You may know of "private servers" for big MMO games such as **Runescape** or **Club Penguin**          
well they essentailly run off "Server Emulators".          

!!! ALL FEATURES NOW IMPLEMENTED (um, unless theres some obscure thing i dont know about :D)

**tl;dr, think "Club Penguin Rewritten" but with Horse Isle.**

## Running a Server

Note: if you just want to play HI1 as a single player thing to mess around with;
it is probably preferable to download the HISP-N00BS version; its basically one-click for this

these loose instructions assume somewhat\* knowing how to get around a linux system;
and also assume your using linux, it is possible to setup on other platforms (such as windows)
however this is not documented at the moment

### Setup with Docker

download: https://github.com/islehorse/HISP/blob/master/docker/docker-compose-production.yml

& name it "docker-compose.yml"

create a file named ".env" and include the following
```
DB_GAME1=game1
DB_WEB=web
DB_USER=horseisle
DB_PASS=test123
```

after that; just run 
```
docker compose up -d
```

should give you the following…
