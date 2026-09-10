---
repo: "SkyblockAPI/SkyblockAPI"
name: "SkyblockAPI"
description: "A library that contains APIs for various things on Hypixel SkyBlock"
readmeQualityOk: true
url: "https://github.com/SkyblockAPI/SkyblockAPI"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [88]
stars: 23
forks: 24
openIssues: 4
closedIssues: 13
watchers: 0
contributors: 23
recentReleases: 0
createdAt: "2024-09-23T20:37:12Z"
lastCommitAt: "2026-09-10T08:20:15Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 73
maintainers: ["j10a1n15", "meowtomation", "meowora"]
openGraphImageUrl: "https://opengraph.githubassets.com/a291224859431917f5a134ac533c46a57c0c0788847ef01ab2512348d736e360/SkyblockAPI/SkyblockAPI"
---

<h1 align="center">Skyblock API</h1>

    

</div>

A collection of APIs for interacting with Hypixel SkyBlock.

## Using the Library

Hosted on:

```kts
maven("https://maven.teamresourceful.com/repository/maven-public/")
```

```kts
dependencies {
    api("tech.thatgravyboat:skyblock-api:<version>") {
        capabilities { requireCapability("tech.thatgravyboat:skyblock-api-<minecraft_version>") }
    }
    include("tech.thatgravyboat:skyblock-api:<version>") {
        capabilities { requireCapability("tech.thatgravyboat:skyblock-api-<minecraft_version>") }
    }
}
```

<minecraft_version> is:

- `26.1` for 26.1.x
- `26.2` for 26.2.x

## Major Change Logs

- **v4.2.0**: Update to 26.2
- **v4.1.0**: Update to 26.1
- **v4.0.0**: Update to 1.21.11 and switch to stonecutter
- **v3.0.0**: Update to 1.21.9/1.21.10
- **v2.3.0**: Switch to kotlin.time vs kotlinx.datetime, required because of fabric kotlin version update.
- **v2.0.0**: Move to multi-version
- **v1.0.0**: Initial release
