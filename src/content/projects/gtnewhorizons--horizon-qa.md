---
repo: "GTNewHorizons/Horizon-QA"
name: "Horizon-QA"
description: "Advanced automated testing for 1.7.10. Modern GameTest logic expanded for GTNH's complex multi-blocks and machine states"
url: "https://github.com/GTNewHorizons/Horizon-QA"
homepage: "https://www.gtnewhorizons.com/Horizon-QA/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["gametest", "gregtech", "gtnh", "junit", "minecraft-1-7-10", "minecraft-forge", "testing"]
stars: 6
forks: 1
openIssues: 17
closedIssues: 84
watchers: 0
contributors: 157
recentReleases: 9
createdAt: "2026-05-03T16:52:53Z"
lastCommitAt: "2026-06-26T06:46:50Z"
lastReleaseAt: "2026-06-14T14:53:07Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 66
maintainers: ["Worive", "Kogepan229"]
openGraphImageUrl: "https://opengraph.githubassets.com/73a2cb1bb78e3206a25b9997fa51f991139b51fbf5a9342ba8de74639b68dcd7/GTNewHorizons/Horizon-QA"
---

# Horizon QA

Horizon QA is an end-to-end testing framework for GTNH. It implements the modern Minecraft GameTest API on 1.7.10, providing a specialized environment to validate multiblocks, machine logic, and logistics.

**📖 Documentation: <https://GTNewHorizons.github.io/Horizon-QA/>** with getting started, guides, the full command/property reference, and [Javadoc](https://GTNewHorizons.github.io/Horizon-QA/javadoc/index.html). This README is a summary; the website is the canonical documentation.

## Quick Example: Testing Negative Cases

A key strength of Horizon QA is verifying that machines *don't* behave incorrectly. The snippet below checks that an Electric Blast Furnace fails to form when its coils are missing, exactly the kind of regression a unit test can't catch:

```java
@GameTest(template = "ebf_no_coils", timeoutTicks = 60)
public static void doesNotFormWithoutCoils(GameTestHelper helper) {
    Multiblock ebf = helper.gtnh().multiblock(at(1, 0, 0));
    helper.onEachTick(() -> helper.assertFalse(ebf.isFormed(), "EBF formed without coils"));
    helper.succeedAtTimeout();
}
```

`onEachTick` re-runs the assertion every tick for the full 60-tick window, so any…
