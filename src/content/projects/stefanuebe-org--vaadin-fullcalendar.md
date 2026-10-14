---
repo: "stefanuebe-org/vaadin-fullcalendar"
name: "vaadin-fullcalendar"
description: "Integration of FullCalendar for Vaadin Flow."
readmeQualityOk: true
url: "https://github.com/stefanuebe-org/vaadin-fullcalendar"
homepage: "https://vaadin.com/directory/component/full-calendar-flow"
language: "Java"
languages: ["Java"]
languagePcts: [81]
topics: ["fullcalendar", "fullcalendar-scheduler", "vaadin", "vaadin-addon", "vaadin-flow", "full-calendar-scheduler", "full-callendar", "java"]
stars: 38
forks: 29
openIssues: 8
closedIssues: 233
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2018-10-23T12:37:09Z"
lastCommitAt: "2026-10-14T07:15:18Z"
lastReleaseAt: "2026-07-06T08:21:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 66
maintainers: ["stefanuebe", "stefanuebe-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/add0edc7b8fc91d21c985cc7cae15c6fa5bca7e7c40b64637902ff7c62d97320/stefanuebe-org/vaadin-fullcalendar"
---

# FullCalendar for Flow
This addon is an integration of the [FullCalendar](https://fullcalendar.io/) as a Flow component. It is based on version 6 of the
FullCalendar library.

## Requirements / versions / support
There are several versions of the addon
* Version 7, based on Vaadin 25 / Java 21
* Version 6.4, based on Vaadin 24.9 / Java 17
* Version 6.3 and before, based on Vaadin 14 / Java 11, which should also support any version up to Vaadin 24 (not supported anymore)

Addon versions prior to 6.4 and 7.1 are not supported. If you need a fix for such a version
feel free to fork the project. You may create an issue, but due to limited time it is very unlikely, that we will fix
it.

We also made the decision to explicitly introduce a breaking change with version 6.4.0. On one hand, we normally support
only the latest major version of Vaadin, but also know on the other hand, that migrating from 24 to 25 might not be possible
at the moment. Therefore we decided to backport all the changes from 7.1.x to 6.4.x as long as it is suitable.

Please also have a look at the demo for some basic examples and source code of how to integrate FullCalendar.
For more examples please have a look…
