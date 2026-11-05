---
repo: "rammpeter/panorama"
name: "panorama"
description: "Tool for performance analysis of Oracle databases"
readmeQualityOk: true
url: "https://github.com/rammpeter/panorama"
homepage: "https://rammpeter.github.io/panorama.html"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [58, 37]
topics: ["oracle-db", "oracle-database", "performance-analysis", "performance-monitoring", "performance-tuning", "performance", "oracle"]
stars: 37
forks: 9
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2015-01-05T15:52:44Z"
lastCommitAt: "2026-11-05T11:24:52Z"
lastReleaseAt: "2021-09-01T16:45:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 59
maintainers: ["rammpeter"]
openGraphImageUrl: "https://opengraph.githubassets.com/3feb47fe9387b8bb0dacac0906f4340e61799652ee327076a135b82f45d37613/rammpeter/panorama"
discussionCount: 0
---

Panorama for Oracle-DB
========

Web-tool for analyzing performance issues of Oracle databases.<br/>
Provides easy access to several current and historic state information of Oracle DBs.<br>

For more details please have a look at:
- a more comprehensive documentation: https://rammpeter.github.io/panorama.html
- the blog about Oracle performance topics: https://rammpeter.blogspot.com

## Installation / Usage
there are two ways to run Panorama:
1. as Java program (jar file)
2. as Docker container

### 1. Use Panorama as Java program (jar file)
- Ensure you have Java installed (version 21 or higher)
- Download the latest release of Panorama.jar from https://github.com/rammpeter/panorama/releases/latest
- Start the application by executing the jar file in a terminal:
  ```
  > java -jar panorama.jar
  ```
- Open the application in your browser: http://localhost:8080
- Login with an Oracle user of the chosen database 

### 2. Use Panorama as container
- Ensure you have Docker or Podman installed
- Run the application by executing the following command in a terminal:
  ```
  > docker run -p 8080:8080 docker.io/rammpeter/panorama
  ```
- Open the application in your browser:…
