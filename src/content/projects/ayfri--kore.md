---
repo: "Ayfri/Kore"
name: "Kore"
description: "A Kotlin library to generate Datapacks for Minecraft Java."
readmeQualityOk: true
url: "https://github.com/Ayfri/Kore"
homepage: "https://kore.ayfri.com"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["kotlin-dsl", "minecraft", "datapack", "kore", "functions", "minecraft-datapack", "minecraft-kotlin", "modding", "modding-tools", "kotlinserverside"]
stars: 143
forks: 7
openIssues: 11
closedIssues: 222
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2022-11-13T14:36:08Z"
lastCommitAt: "2026-08-15T04:04:08Z"
lastReleaseAt: "2023-11-22T22:58:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 46
maintainers: ["Ayfri", "Alumopper", "e-psi-lon"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/565476655/ba0f2611-de8a-41d1-a1df-e9f7117a13c3"
discussionCount: 4
---

<h1 align="center"> Kore </h1>
	</a>
	</a>
	</a>
</p>
<hr>

</p>

**Check the [website](https://kore.ayfri.com) for the latest documentation.**

**LLM-friendly documentation**: [llms.txt](https://kore.ayfri.com/llms.txt) | [llms-full.txt](https://kore.ayfri.com/llms-full.txt)
**AI Agents skills**: [Kore-Skill](https://github.com/Kore-Minecraft/Kore-Skill) (optional skills pack for AI-assisted
Kore work)

This library is compatible and made for Minecraft Java 1.20 and later versions, I don't think I will support older versions nor Bedrock Edition.<br>
You can still create your own fork and make it compatible with older versions.<br>
I will accept pull requests for older versions on a separate branch.

## Getting Started

New on Kore ? Read the [Getting Started](https://kore.ayfri.com/docs/getting-started) guide to learn how to create your first datapack.

You can use the [Kore Template](https://github.com/Kore-Minecraft/Kore-Template) to start a new project with Kore.

Or install one or more Kore modules by hand with Gradle. If you're starting a new datapack project, begin with the core
`kore` module.

With Kotlin DSL:

```kotlin
implementation("io.github.ayfri.kore:kore:VERSION")…
