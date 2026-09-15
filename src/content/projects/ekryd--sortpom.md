---
repo: "Ekryd/sortpom"
name: "sortpom"
description: "Maven plugin that helps the user sort pom.xml. "
readmeQualityOk: true
url: "https://github.com/Ekryd/sortpom"
homepage: "https://github.com/Ekryd/sortpom/wiki/"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["pom", "maven", "maven-plugin", "sort", "xml", "sortpom-plugin"]
stars: 368
forks: 214
openIssues: 2
closedIssues: 124
watchers: 9
contributors: 10
recentReleases: 0
createdAt: "2015-03-14T14:32:22Z"
lastCommitAt: "2026-09-15T08:54:23Z"
lastReleaseAt: "2021-03-19T22:32:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 97
undervaluedScore: 41
maintainers: ["renovate[bot]", "dependabot[bot]", "Ekryd"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc056762c7796944210b76620003cdd768dbddbcfa6f9ac8d17ccf8e2ee87256/Ekryd/sortpom"
fundingLinks: ["GITHUB:https://github.com/Ekryd", "CUSTOM:https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=JB25X84DDG5JW&lc=SE&item_name=Encourage%20the%20development&item_number=sortpom&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"]
---

# Hibernation

Dear SortPom users,

This project is entering hibernation. I do not have any plans to actively add features to the plugin, but if you have any vulnerabilities or major bugs to report, please do so. No, I do not plan to accept pull requests for new features.

I have maintained this project for 17 years, and I no longer feel the same joy working on it. It has become another chore rather than something I enjoy.

You are always free to clone the repository and add the features you need yourself.

# Sortpom Maven Plugin 

Maven plugin that helps the user sort pom.xml by formatting the XML and organizing XML sections in a predefined order. 
The main advantages to have standardized sorted poms are that they become more readable and that comparisons between different module poms becomes much easier.

## Goals Overview ##
The SortPom Plugin has two goals.

  * **mvn sortpom:sort** sorts the current pom.xml file. This goal will always sort the pom.xml file.

  * **mvn sortpom:verify** only sorts the current pom.xml file if the xml elements are unsorted. This goal ignores text formatting (such as indentation and line breaks) when it verifies if the pom is sorted or not.

##…
