---
repo: "RobErskine/Craft-User-Manual"
name: "Craft-User-Manual"
description: "📚 Help Section Plugin for Craft CMS."
url: "https://github.com/RobErskine/Craft-User-Manual"
language: "PHP"
languages: ["PHP", "Twig"]
languagePcts: [76, 24]
topics: ["craftcms", "craft-plugin", "craftcms-plugin", "useful"]
stars: 85
forks: 16
openIssues: 1
closedIssues: 25
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2015-10-05T17:10:45Z"
lastCommitAt: "2026-06-28T03:11:48Z"
lastReleaseAt: "2024-06-04T18:57:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 31
maintainers: ["RobErskine", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/56378b2c209f5099961b9a744caaca9dd92cac24ef55b80573befd0f054197a4/RobErskine/Craft-User-Manual"
fundingLinks: ["GITHUB:https://github.com/RobErskine"]
---

# Craft User Manual plugin for Craft CMS 4.x and Craft CMS 5.x

Craft User Manual allows developers (or even content editors) to provide CMS documentation using Craft's built-in sections (singles, channels, or structures) to create a "User Manual" or "Help" section directly in the control panel.

## Requirements

This plugin requires Craft CMS 4.0.0 or later; or Craft CMS 5.0.0 or later.

## Installation

### Craft 4 and Craft 5
To install the plugin in your Craft 4 or Craft 5 project, follow these instructions.

1. Open your terminal and go to your Craft project:

        cd /path/to/project

2. Then tell Composer to load the plugin:

        composer require hillholliday/craft-user-manual

> Wondering why it says `hillholliday` and not `roberskine` as the org? This package was originally submitted as hillholliday, and to [preserve the artifacts on Packagist](https://packagist.org/packages/hillholliday/craft-user-manual) we have kept it as hillholliday.

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for usermanual.

4. Select the section the plugin should use as the **User Manual** page in the CP.
    * (Optional) - Replace the plugin's name to…
