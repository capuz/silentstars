---
repo: "SheepTester/uxdy"
name: "uxdy"
description: "like elon's X😐, this aspires to be an ✨everything app✨ for ucsd🔱 but will never reach it 😩"
readmeQualityOk: true
url: "https://github.com/SheepTester/uxdy"
homepage: "https://sheeptester.github.io/uxdy/classrooms/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["classrooms", "schedule", "ucsd", "webapp"]
stars: 13
forks: 2
openIssues: 2
closedIssues: 9
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-09-27T00:47:05Z"
lastCommitAt: "2026-07-22T06:08:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 61
maintainers: ["SheepTester"]
openGraphImageUrl: "https://opengraph.githubassets.com/19ab7fa0580ab63774ced2afd2a02dd3b1b27dc926a1dff75a73f06d26a036ed/SheepTester/uxdy"
---

[**Scrape schedules**](https://github.com/SheepTester/uxdy/actions/workflows/scrape.yml)

> [!IMPORTANT]
> The frontend for UCSD classroom schedules has been moved to **[SheepTester/ucsd-classrooms](https://github.com/SheepTester/ucsd-classrooms)**.
> This repo remains active for _scraping_ classroom schedules.

This is a monorepo mostly for scraping UCSD class schedules.
It also contains code related to a few other, fairly unrelated projects—it was originally meant to be for a personal class schedule app.

The UCSD classrooms website's scraper sits in `scheduleofclasses` (`webreg-scraping` is no longer used), and its original frontend is in `classrooms`.

- `classrooms` - classrooms website
- `dependencies` - scraping the [course catalog](https://catalog.ucsd.edu/front/courses.html) for prereqs
- `scheduleofclasses` - scraping the [Schedule of Classes](https://act.ucsd.edu/scheduleOfClasses/scheduleOfClassesStudent.htm) for class schedules
- `scripts` - deploying to GitHub Pages
- `src` & `static` - personal schedule app
- `terms` - predicting UCSD term dates
- `util` - utils for classroom schedule scraping and website
- `webreg-scraping` - scraping…
