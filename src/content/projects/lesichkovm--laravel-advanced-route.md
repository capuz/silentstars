---
repo: "lesichkovm/laravel-advanced-route"
name: "laravel-advanced-route"
description: "An advanced route for Laravel to support controllers"
readmeQualityOk: true
url: "https://github.com/lesichkovm/laravel-advanced-route"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 70
forks: 27
openIssues: 0
closedIssues: 18
watchers: 4
contributors: 13
recentReleases: 0
createdAt: "2016-11-06T09:33:14Z"
lastCommitAt: "2026-07-29T06:13:55Z"
lastReleaseAt: "2019-09-03T18:55:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 33
maintainers: ["lesichkovm"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d7c3e0105a498f6db1431c5d86cdd3bca39bcaf82370e6bb436c7dd5a6a0558/lesichkovm/laravel-advanced-route"
---

# Laravel Advanced Route

An advanced route for Laravel 5.3, 5.4, 5.5, 5.6, 5.8, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0 to support controllers.

## Background ##
In Laravel 5.3 the advanced functionality Route::controller was removed.
This class fixes this shortcoming.

## Reason ##
The default router is sufficient for small projects. Once the project starts to grow, placing all possible route definitions in the router file starts to become harder to understand and follow. Quite often the router file becomes so messy that the developer is afraid to modify/remove routes (even if these might be unused) in order to not break the application unexpectedly.

The AdvancedRoute::controller gives the control to the controller itself, and makes each controller responsible for its own routing (destiny).

Specifying the controller methods with get/post/any prefixes improves readability, and allows to easily understand what HTTP method is being used to call the functionality just by viewing the method.

Does your router file not fit the screen and you have to scroll to see all routes? Have you split your routes in separate router files, and included these in one router file? Do you not…
