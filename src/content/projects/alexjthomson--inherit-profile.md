---
repo: "alexjthomson/inherit-profile"
name: "inherit-profile"
description: "A VisualStudio Code extension that adds profile inheritance."
readmeQualityOk: true
url: "https://github.com/alexjthomson/inherit-profile"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 21
forks: 4
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2025-09-04T16:14:27Z"
lastCommitAt: "2026-07-09T20:44:45Z"
lastReleaseAt: "2026-07-09T11:13:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 51
maintainers: ["alexjthomson", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bc02ae0e5e2eeba6a41d0eb92a42bc1fc9c92dac541d6d70f941c8e70f1f153/alexjthomson/inherit-profile"
---

<h3 align="center">Enables profile inheritance in VisualStudio Code!</h3>
<h4 align="center"><a href="https://marketplace.visualstudio.com/items?itemName=alexthomson.inherit-profile" target="_blank">View in Marketplace</a></h3>
<hr>

## ⚙️ Configuration

Make sure you have this extension installed on the profile you would like to
inherit settings onto.

**Important**: After updating the inheritance configuration for your profile,
you need to run the `Apply Profile Inheritance (Current Profile)` command. This
will fetch the inherited settings from your chosen profiles. By default this
will automatically execute on extension startup, whenever you switch profiles,
whenever the current profile's `settings.json` is saved, and whenever a parent
profile's `settings.json` is saved. Each of these triggers can be disabled
individually — see `runOnStartup`, `runOnProfileChange`,
`runOnCurrentProfileSave`, and `runOnParentProfileSave` below.

**Inheritance Priority**: This extension respects the settings you declare in your profile. Settings decalared in the current profile will take priority over inherited settings. Additionally, the order that you inherit from also matters; the extension…
