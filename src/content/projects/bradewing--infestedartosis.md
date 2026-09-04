---
repo: "BradEwing/InfestedArtosis"
name: "InfestedArtosis"
description: "Starcraft Brood War AI"
readmeQualityOk: true
url: "https://github.com/BradEwing/InfestedArtosis"
language: "Java"
languages: ["Java"]
languagePcts: [94]
stars: 5
forks: 2
openIssues: 0
closedIssues: 34
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-04-03T02:44:50Z"
lastCommitAt: "2026-09-04T08:11:53Z"
lastReleaseAt: "2022-10-24T02:17:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 86
maintainers: ["BradEwing", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8675a37cecf2a25a6c4730d9ef18358c10815333bf2832a3dec2d27b9c84eb21/BradEwing/InfestedArtosis"
---

#  Infested Artosis

A zerg bot initially cloned from [JavaBWAPI](https://github.com/JavaBWAPI/jbwapi-java-template).

## Features

- Opener and unit mix selections following the UCB multi-armed bandit algorithm. 
- Strong macro play
- Scouting
- Unit compositions up to lair tech supported. 

### Installation

## Command Line

Ensure that your `$JAVA_HOME` environment variable is set and pointed to Java 1.8 (I use [coretto-1.8 sdk](https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html))
```
$ mvn package
```

```
$ java -jar target/InfestedArtosis-{version}-jar-with-dependencies.jar
```

## Intellij (Preferred)

1. Open up this project in INtelliJ IDEA.
2. Set the Java SDK to Java 1.8. 

### Troubleshooting

Feel free to open up a GitHub issue or ping me on the [SSCAIT discord](https://discord.gg/DWHudeXmJE).

### Release

Run the **Release** workflow in GitHub Actions. It bumps the version in `pom.xml`, builds the jar,
creates a GitHub Release, and pushes the jar + `BWAPI.dll` zip to the BASIL ladder's Google Drive
file.

## Thank You

- **Christian McCrave** ([McRave](https://github.com/Cmccrave)) — for providing excellent advice and code for build order,…
