---
repo: "KDE/discover"
name: "discover"
description: "Helps you find and install applications, games, and tools"
readmeQualityOk: true
url: "https://github.com/KDE/discover"
homepage: "https://invent.kde.org/plasma/discover"
language: "C++"
languages: ["C++"]
languagePcts: [77]
stars: 130
forks: 43
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 143
recentReleases: 0
createdAt: "2015-11-06T17:39:32Z"
lastCommitAt: "2026-07-28T01:51:34Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 45
maintainers: ["aleixpol", "Pointedstick", "bhush9"]
openGraphImageUrl: "https://opengraph.githubassets.com/41c10cef203db50ae3b608f64970e7b60df340fb2383f8610639b4e43cde1f26/KDE/discover"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Discover

Discover helps you find and install applications, games, and tools. You can search or browse by category, and look at screenshots and read reviews to help you pick the perfect app.

## Features

* Install and download software.
* Manage software sources, e.g. Flatpak repositories.
* Upgrade operating system software through PackageKit.
* Find and install add-ons for Plasma.

## Support

If you have an issue with Discover, please [open a support thread on KDE Discuss](https://discuss.kde.org/c/help/6).

## Building

The easiest way to make changes and test Discover during development is to [build it with kde-builder](https://community.kde.org/Get_Involved/development).

## Vendor Customization

Want to change the apps featured in the Editor’s Choice section? Add a configuration file named `/usr/share/discover/featuredurlrc` that points to a JSON file patterned off the default one present at https://autoconfig.kde.org/discover/featured-5.9.json:
```toml
[Software]
FeaturedListingURL="https://your-url-here/file.json"
```

## Contributing

Like other projects in the KDE ecosystem, contributions are welcome from all. This repository is managed in [KDE…
