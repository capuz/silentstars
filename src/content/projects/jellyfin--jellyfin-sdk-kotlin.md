---
repo: "jellyfin/jellyfin-sdk-kotlin"
name: "jellyfin-sdk-kotlin"
description: "Kotlin SDK for Jellyfin, supporting Android and JVM targets"
readmeQualityOk: true
url: "https://github.com/jellyfin/jellyfin-sdk-kotlin"
homepage: "https://kotlin-sdk.jellyfin.org"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["android", "java", "kotlin", "jellyfin", "openapi3", "ktor", "sdk", "jvm"]
stars: 121
forks: 64
openIssues: 5
closedIssues: 63
watchers: 5
contributors: 59
recentReleases: 0
createdAt: "2018-12-22T19:14:06Z"
lastCommitAt: "2026-09-08T08:16:21Z"
lastReleaseAt: "2020-08-19T07:30:15Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 94
undervaluedScore: 51
maintainers: ["renovate[bot]", "nielsvanvelzen", "jellyfin-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1472f019bd9c0cdac0a69aa8ee4e25c87c121f8209284cee59b3d071a512841e/jellyfin/jellyfin-sdk-kotlin"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/jellyfin"]
---

<h1 align="center">Jellyfin Kotlin SDK</h1>
<h3 align="center">Part of the <a href="https://jellyfin.org/">Jellyfin Project</a></h3>

---

<br/>
<br/>
</a>
</a>
</a>
<br/>
</a>
</a>
</a>
</a>
</a>
</p>

---

The Kotlin SDK for Jellyfin implements the Jellyfin API to easily access servers. It is currently available
for the JVM and Android. Developer documentation is available at [kotlin-sdk.jellyfin.org].

[kotlin-sdk.jellyfin.org]: https://kotlin-sdk.jellyfin.org/guide/getting-started.html

## Contributing

We welcome contributions to the SDK. Open an issue or ask in our official chats if you plan to make bigger changes.

To validate binary compatibility we use the [Binary compatibility validator] tool from the Kotlin team. When creating
pull requests the api files need to be updated. Use the `apiDump` Gradle task to generate the api files. Add the changes
from this command to a separate commit to make the review process easier.

[Binary compatibility validator]: https://github.com/Kotlin/binary-compatibility-validator

## Testing

The SDK includes two example projects, the kotlin-cli and java-cli, to test various larger functions like server
discovery. Besides that we use unit…
