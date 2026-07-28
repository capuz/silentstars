---
repo: "Kraken-Plugins/kraken-api"
name: "kraken-api"
description: "API for creating RuneLite plugins supporting client interactions!"
readmeQualityOk: true
url: "https://github.com/Kraken-Plugins/kraken-api"
homepage: "https://kraken-plugins.com"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["client", "interaction", "kraken", "plugin", "runelite"]
stars: 6
forks: 7
openIssues: 2
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2025-08-17T20:55:10Z"
lastCommitAt: "2026-07-28T15:01:40Z"
lastReleaseAt: "2026-06-25T10:59:19Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 93
maintainers: ["cbartram"]
openGraphImageUrl: "https://opengraph.githubassets.com/90a687221bcaaa668206a37019ff891043b7d0265aec76759d5bc0c5119e91e5/Kraken-Plugins/kraken-api"
---

<br />
  </a>

<h3 align="center">Kraken API</h3>

   An API for building extended RuneLite plugins.
    <br />
</div>

---

# Getting Started

Kraken API is designed to extend the RuneLite API with additional client interaction utilities for writing RuneLite plugins with extended functionality.
This API is not meant for "botting", reverse engineering, automation or rule-breaking purposes, and any material provided by this API or its documentation is purely for 
educational purposes only.

Use at your own risk. The developers are not responsible for any consequences resulting from the use of this software.

## Quick Start

To get started with the API instantly:

```shell
git clone https://github.com/Kraken-Plugins/kraken-api
cd ./kraken-api

./gradlew build publishToMavenLocal
```

In the repository containing all your plugins `build.gradle` file: 

```groovy

repositories {
    // Attempts local first for testing API jar
    mavenLocal {
        content {
            includeGroup "com.github.kraken"
        }
    }
  
  // .. other repositories like RuneLite.net, etc...
}

dependencies {
  compileOnly group: 'com.github.kraken', name:'kraken-api', version: '1.0.0'
}
```

## API…
