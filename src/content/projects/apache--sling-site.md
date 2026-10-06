---
repo: "apache/sling-site"
name: "sling-site"
description: "Apache Sling Website"
readmeQualityOk: true
url: "https://github.com/apache/sling-site"
homepage: "https://sling.apache.org/"
language: "Smarty"
languages: ["Smarty"]
languagePcts: [49]
topics: ["sling", "website", "jbake"]
stars: 24
forks: 99
openIssues: 1
closedIssues: 1
watchers: 36
contributors: 65
recentReleases: 0
createdAt: "2017-06-20T07:00:08Z"
lastCommitAt: "2026-10-06T10:42:02Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 86
undervaluedScore: 58
maintainers: ["renovate-bot", "enapps-enorman", "royteeuwen"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c76c9539c7a0ca9dae44fe87d57c2d8b704865e47cfadd59ac72d8edf97ef09/apache/sling-site"
---

&#32;[](https://ci-builds.apache.org/job/Sling/job/modules/job/sling-site/job/master/)&#32;[](https://sonarcloud.io/dashboard?id=apache_sling-site) [](https://www.apache.org/licenses/LICENSE-2.0)

# Apache Sling Website
This repository contains the content of the http://sling.apache.org/ website, which moved in September 2017 from the Apache CMS to this JBake-generated site.

## How to build and stage the site locally  
Clone this repository, run the below Maven command, open <http://localhost:8820/> and enjoy.

    mvn clean package -Prun-site
	
This allows	you to experiment with your changes before eventually publishing them.

To also activate the site search feature, use

    mvn clean package -Ppagefind,run-site

## How to publish the website

The publishing process consists out of 2 steps:

```
Original: master branch (mainly markdown files)

   |  
   |   1. Build site via Jenkins or local Maven Build with JBake
  \|/  

asf-site branch (mainly JBake-generated html files, but also m-site-p generated Maven plugin sites or Javadocs)

   |
   |   2. Publish via ASF gitpubsub, controlled via .asf.yaml
  \|/  

https://sling.apache.org
```

Each push to the `master` branch…
