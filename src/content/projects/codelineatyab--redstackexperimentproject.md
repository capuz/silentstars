---
repo: "CodelineAtyab/RedStackExperimentProject"
name: "RedStackExperimentProject"
description: "Collaborative Java learning sandbox for Team Red Stack"
readmeQualityOk: true
url: "https://github.com/CodelineAtyab/RedStackExperimentProject"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 52
closedIssues: 17
watchers: 0
contributors: 24
recentReleases: 0
createdAt: "2026-10-17T18:47:10Z"
lastCommitAt: "2026-11-12T05:26:47Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 42
maintainers: ["alaahmed1", "AYS-115", "buthaina111"]
openGraphImageUrl: "https://opengraph.githubassets.com/73142b76860798ab146d76f569df9677858c86bb88f93e1a5c0400e2d7392258/CodelineAtyab/RedStackExperimentProject"
---

## About This Project

**RedStackExperimentProject** is a collaborative Java learning sandbox for Team Red Stack. It gives every team member their own personal package to experiment, practice, and grow their Java skills — sprint by sprint.

### Tech Stack
- **Language:** Java 17
- **Build Tool:** Maven
- **Entry Point:** `org.example.litedesk.Main`

### Project Structure

All member work lives under `experiments_area`, inside a directory named after the contributor: `from_<name>` (e.g. `from_atyab`, `from_ishaq`). Inside your own directory, create **one directory per exercise, sprint mini project, or Maven project**. Do not leave files loose in `experiments_area/from_<name>/`.

#### Allowed layouts

**1. Practice folder** — for standalone `.java` files (CodingBat, exercises, small programs):

```
experiments_area/
└── from_<name>/
    └── <practice-topic>/          # e.g. CodingBat, HelloWorld, project1
        ├── HelloWorld.java
        └── Warmup1.java
```

All `.java` files directly inside that folder are compiled together with `javac`. Files that reference each other must live in the same folder. Create a separate folder per exercise so class names don't collide.

**2. Maven…
