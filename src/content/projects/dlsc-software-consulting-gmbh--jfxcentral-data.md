---
repo: "dlsc-software-consulting-gmbh/jfxcentral-data"
name: "jfxcentral-data"
description: "The data repository for the JFXCentral website"
url: "https://github.com/dlsc-software-consulting-gmbh/jfxcentral-data"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "javafx"]
stars: 60
forks: 54
openIssues: 3
closedIssues: 29
watchers: 5
contributors: 50
recentReleases: 0
createdAt: "2021-02-16T16:11:08Z"
lastCommitAt: "2026-06-26T06:46:36Z"
lastReleaseAt: "2023-06-26T08:59:33Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 59
maintainers: ["FDelporte", "dlemmermann", "leewyatt"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ca1d0e7fd620668025147ad84b4dc2dc124c823b25f1a83b90126ded9865269/dlsc-software-consulting-gmbh/jfxcentral-data"
---

# JFX-Central Data Repository

To add data to this repository, please follow these steps:

1. Fork the repository
2. Add your data
3. Submit a pull request for the `live` branch

> Don't worry too much about breaking things. Unit tests are in place to verify
> the validity of the data. After those have passed your edits will be reviewed
> by a human being, yours truly. Once the review is done, your pull request will
> be merged. Please be aware that there is no guarantee that the information provided 
> by your pull request will appear immediately after merging. The website will be 
> updated only when explicitly requested by an administrator.
 
## General Concepts

This repository contains the data for the following model objects:

- `Blog`
- `Book`
- `Company`
- `Download`
- `Library`
- `LinksOfTheWeek`
- `News`
- `Person`
- `RealWorldApp`
- `Tool`
- `Tutorial`
- `Utility`
- `Video`
- `Tip`

Instances of these types can be registered in JSON files in subdirectories that
match the types of the model objects:

- Blogs inside `blogs/blogs.json`
- Books inside `books/books.json`
- Companies inside `companies/companies.json`
- Downloads inside `downloads/downloads.json`
- Libraries…
