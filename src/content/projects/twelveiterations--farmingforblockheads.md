---
repo: "TwelveIterations/FarmingForBlockheads"
name: "FarmingForBlockheads"
description: "Minecraft Mod. Adds a seed market with a search bar and a scrolling grid."
readmeQualityOk: true
url: "https://github.com/TwelveIterations/FarmingForBlockheads"
homepage: "https://mods.twelveiterations.com/mc/farming-for-blockheads/"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["minecraft-mod", "forge-mod", "fabricmc-mod", "neoforge-mod"]
stars: 27
forks: 24
openIssues: 1
closedIssues: 216
watchers: 2
contributors: 18
recentReleases: 0
createdAt: "2017-03-01T23:04:16Z"
lastCommitAt: "2026-08-28T15:34:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 95
undervaluedScore: 74
maintainers: ["BlayTheNinth", "twelveiterations-automations[bot]", "Ch1sho"]
openGraphImageUrl: "https://opengraph.githubassets.com/54f4470d9583df403def71e438608a7be8422563202b14c58543c7bb77d84bea/TwelveIterations/FarmingForBlockheads"
fundingLinks: ["GITHUB:https://github.com/BlayTheNinth", "PATREON:https://patreon.com/BlayTheNinth", "KO_FI:https://ko-fi.com/BlayTheNinth"]
---

# Farming for Blockheads

Minecraft Mod. Adds farming utilities, such as a seed market, fertilizer and feeding troughs.

- [Modpack Permissions](https://mods.twelveiterations.com/permissions)

#### Downloads

## Contributing

If you're interested in contributing to the mod, you can check
out [issues labelled as "help wanted"](https://github.com/TwelveIterations/FarmingForBlockheads/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).

When it comes to new features, it's best to confer with me first to ensure we share the same vision. You can join us on [Discord](https://discord.gg/VAfZ2Nau6j) if you'd like to talk.

Contributions must be done through pull requests. I will not be able to accept translations, code or other assets through any other channels.

## Adding Farming for Blockheads to a development environment

Note that you will also need to add Balm if you want to test your integration in your environment.

### Using CurseMaven

Add the following to your `build.gradle`:

```groovy
repositories {
    maven { url "https://www.cursemaven.com" }
}

dependencies {
    // Replace ${farmingforblockheads_file_id} and ${balm_file_id} with the id of the file you want to depend…
