---
repo: "ledpup/ClimateExplorer"
name: "ClimateExplorer"
description: "Climate Explorer is a website to help people understand climate change."
readmeQualityOk: true
url: "https://github.com/ledpup/ClimateExplorer"
language: "C#"
languages: ["C#"]
languagePcts: [86]
stars: 29
forks: 2
openIssues: 2
closedIssues: 241
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-12-08T00:21:32Z"
lastCommitAt: "2026-10-03T09:23:22Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 60
maintainers: ["ledpup"]
openGraphImageUrl: "https://opengraph.githubassets.com/f33ab860d43685f0b4582ac3efb7ae09919272eb7e2dd45cdfb6ad2580ed4e24/ledpup/ClimateExplorer"
---

# ClimateExplorer

[ClimateExplorer](https://climateexplorer.net/) is a website to help people understand climate change. It's focussed on trying to provide a simple and approachable interface for people to explore the changes to climate in their region.

ClimateExplorer.net has two main sections;
 1. [local climate change information](https://climateexplorer.net/) about a specific location
 1. [global charts](https://climateexplorer.net/global) to show what is happening with greenhouse gases, ice melt, sea-level rise, ocean temperatures, etc.

This github site is the digital repository for everything used to bring [the website](https://climateexplorer.net/) together.

## Architecture and code
- Built in [Visual Studio 2026 Community Edition](https://visualstudio.microsoft.com/vs/community/) using
  - .NET 10
  - C#
  - Blazor
  - Minimal Web API
- The main projects in the solution are
  - **Web**: Blazor server-side website that displays the data to the user. This is a wrapper project, most of the Blazor files are in Web.Client.
  - **Web.Client**: Blazor Web Assembly version of the website. This will download to the browser and the browser will switch to using this after its…
