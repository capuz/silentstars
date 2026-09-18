---
repo: "sirjojo69/ioBroker.awattar"
name: "ioBroker.awattar"
description: "get hourly price of aWATTAR."
readmeQualityOk: true
url: "https://github.com/sirjojo69/ioBroker.awattar"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
topics: ["iobroker", "smarthome", "awattar"]
stars: 8
forks: 5
openIssues: 8
closedIssues: 44
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2020-10-18T20:44:10Z"
lastCommitAt: "2026-09-18T14:00:20Z"
lastReleaseAt: "2025-01-31T13:10:09Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 53
maintainers: ["sirjojo69", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f055617893d8b8fccddcd6fe0b45e52bfdb5e2e0274ada9a7948ecfeaffcfa37/sirjojo69/ioBroker.awattar"
---

# ioBroker.awattar

**Tests:** 

<p>
</a>
</p>

## aWATTar adapter for ioBroker

This adapter reads the hourly prices for the coming day of the electricity provider <a href="https://www.awattar.de/" target="_blank"> aWATTar </a>
for the hourly and hourly CAP tariffs.
With this information you can then control when e.g. your electric car or the home storage should be charged (namely at the cheapest time).
Since this provider offers its services only in Austria and Germany, note that some field labels in the admin UI are in German.

In the adapter settings you will find 5 fields (each pre-filled with default values):
<li>The variable "URL for aWATTar API" contains the URL for aWATTar's API price data feed.</li>
<li>If you want to know the cheapest hours during the night (e.g. for charging your EV), use the following two parameters.
<ul>The variable "Start Threshold Loading (e.g. for EV)" contains a time that marks the start of a period for which you want to get the cheapest hours in sorted order.</ul>
<ul>The variable "End Threshold Loading" contains a time that marks the end of a period for which you want to get the cheapest hours in sorted order.</ul>
</li>
<li>The variable…
