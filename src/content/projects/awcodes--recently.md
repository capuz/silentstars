---
repo: "awcodes/recently"
name: "recently"
description: "Easily track and access recently viewed records in your filament panels."
readmeQualityOk: true
url: "https://github.com/awcodes/recently"
language: "PHP"
languages: ["PHP"]
languagePcts: [93]
topics: ["filament", "filament-plugin"]
stars: 43
forks: 14
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2024-08-31T20:01:54Z"
lastCommitAt: "2026-08-28T15:36:41Z"
lastReleaseAt: "2026-01-19T17:10:00Z"
status: "thriving"
tags: ["funded"]
healthScore: 90
undervaluedScore: 40
maintainers: ["awcodes", "dependabot[bot]", "Kyrch"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a96f82a4afb5d62991c72adc5722f866b2556852be5fddfb4886d2fba14738b/awcodes/recently"
fundingLinks: ["GITHUB:https://github.com/awcodes"]
---

# Recently

Easily track and access recently viewed records in your filament panels.

## Compatibility

| Package Version | Filament Version |
|-----------------|------------------|
| 1.x             | 3.x              |
| 2.x             | 5.x              |
| 3.x             | 4.x & 5.x        |

## Installation

You can install the package via composer then run the installation command and follow the prompts:

```bash
composer require awcodes/recently
```

```bash
php artisan recently:install
``` 

> [!IMPORTANT]
> If you have not set up a custom theme and are using Filament Panels follow the instructions in the [Filament Docs](https://filamentphp.com/docs/4.x/styling/overview#creating-a-custom-theme) first.

After setting up a custom theme add the plugin's views to your theme css file or your app's css file if using the standalone packages.

```css
@source '../../../../vendor/awcodes/recently/resources/**/*.blade.php';
```

## Usage
The plugin adds a “Recently Viewed” functionality in your filament panel(s), letting users quickly access resources they’ve recently interacted with. It tracks views/visits to `EditRecord` and `ViewRecord` pages of resources where it’s enabled.…
