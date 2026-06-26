---
repo: "MisterPeModder/ShulkerBoxTooltip"
name: "ShulkerBoxTooltip"
description: "What's in my shulker box?"
url: "https://github.com/MisterPeModder/ShulkerBoxTooltip"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["fabricmc", "minecraft", "mod", "minecraft-mod"]
stars: 116
forks: 39
openIssues: 30
closedIssues: 176
watchers: 3
contributors: 25
recentReleases: 0
createdAt: "2019-02-15T23:34:01Z"
lastCommitAt: "2026-06-26T21:30:12Z"
lastReleaseAt: "2020-09-13T02:39:03Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 87
undervaluedScore: 46
maintainers: ["MisterPeModder", "lishhhhmm", "WyattMarks"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/170941988/991b2c2a-46f1-40e7-98de-5b0f9471a99a"
---

Shulker Box Tooltip  
=========================

This mod allows you to see a preview window of a shulker box contents when hovering above it in an inventory by pressing shift.

**[Help translate ShulkerBoxTooltip on Crowdin!](https://crowdin.com/project/shulkerboxtooltip)**  
[Please vote for this to be included in vanilla!](https://feedback.minecraft.net/hc/en-us/community/posts/360074507051-shulker-boxes-should-have-the-new-bundle-interface)

## Developers

### List of artifacts
- **com.misterpemodder:shulkerboxtooltip-common**: Platform-agnostic API
- **com.misterpemodder:shulkerboxtooltip-fabric**: Fabric Implementation
- **com.misterpemodder:shulkerboxtooltip-forge**: Forge-specific API + Implementation
- **com.misterpemodder:shulkerboxtooltip-neoforge**: NeoForge-specific API + Implementation

### Declaring the dependency (Fabric Loom/Architectury Loom)
```gradle
repositories {
    maven { url "https://maven.misterpemodder.com/libs-release/" }
}

dependencies {
    // Change to 'shulkerboxtooltip-forge', 'shulkerboxtooltip-neoforge', or 'shulkerboxtooltip-common' depending on the artifact
    implementation("com.misterpemodder:shulkerboxtooltip-fabric:VERSION") { transitive…
