---
repo: "msgambel/Project-Euler"
name: "Project-Euler"
description: "iPhone/iPad app that shows the questions and solutions to the Project Euler questions. All files are well commented, and thoroughly explained."
url: "https://github.com/msgambel/Project-Euler"
language: "Objective-C"
languages: ["Objective-C"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2013-01-02T04:17:07Z"
lastCommitAt: "2026-06-27T07:03:03Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 63
maintainers: ["msgambel"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2114e779e6385d06cff69eed2f06cd7cf6ab7554a2e6ce9a55ad4e628f5e200/msgambel/Project-Euler"
---

Project-Euler
=============

iPhone/iPad app that shows the questions and solutions to the Project Euler questions. All files are well commented, and thoroughly explained.

The iPhone version of the app is a simple push navigation application. The app is iOS 8.0 or later in order to take advantage of Auto Layout in the UIStoryBoard.

The iPad version of the app is a simple UISplitView. The code is mostly reused from the iPhone app, with slight changes based on the device.

The Questions are all solved in their own individual .h and .m files. They all are a subclass of a QuestionAndAnswer object which holds the default variables and methods that each Question conform to.

The computation is all done on a separate thread so that the main thread does not lock if the computation takes too long. This allows for the user to still interact with the app even if the computation is still running (Note: the answers are all precomputed and stored in the initialize method of the Question object).

Each question has 2 different solutions. The first is the brute force way, which is usually slow. The second (and more interesting method) is an optimized solution, which runs much faster!

While all…
