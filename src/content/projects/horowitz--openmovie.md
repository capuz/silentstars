---
repo: "horowitz/openMovie"
name: "openMovie"
description: "Show case Android best practices using The Movie Database API"
readmeQualityOk: true
url: "https://github.com/horowitz/openMovie"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
stars: 33
forks: 14
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-01-10T12:57:01Z"
lastCommitAt: "2026-11-02T15:16:02Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 82
undervaluedScore: 30
maintainers: ["horowitz"]
openGraphImageUrl: "https://opengraph.githubassets.com/9487b4a40710af6159d8e49dfd55adfafefa5e9d7e1b40f0e1f304813e825c89/horowitz/openMovie"
discussionCount: 1
---

# openMovie

Show case Android practices using [the Movie db](https://www.themoviedb.org/)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="assets/open_movie.gif" width="40%" height="40%"/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src="assets/open_movie_2.gif" width="40%" height="40%"/>

## Tech stack
- 100% testable Kotlin code
- Clean Multimodular Architecture
- Presentation layer built based on Unidirectional data flow (UDF) and single entry points
- AGP 9 with built-in Kotlin, JVM 21, and a central Gradle version catalog
- Dagger Hilt
- CI with Github actions
- High test coverage using Unit, Instrumentation and Integration tests

## Architecture

### Multi modular project structure

This project aims for showcasing a multi modular architecture based on 2 concepts: Libraries and Features

- **Features** contains all user facing functionality (e.g. Discover, Movie Details)
- **Libraries** are shared modules that help the building of features (e.g. network,  ui, test)

### Feature architecture

Each feature is developed using clean architecture composed by 3 layers: Data, Domain, and Presentation. 
Domain is completely independent of the other layers and…
