---
repo: "ujh/fountainpencompanion"
name: "fountainpencompanion"
description: "Repository for https://www.fountainpencompanion.com"
url: "https://github.com/ujh/fountainpencompanion"
language: "Ruby"
languages: ["Ruby", "JavaScript"]
languagePcts: [58, 33]
stars: 50
forks: 10
openIssues: 46
closedIssues: 153
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2017-04-16T15:55:15Z"
lastCommitAt: "2026-06-26T06:47:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 95
undervaluedScore: 52
maintainers: ["ujh", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0a17f6a3f839e160f39665988ad927d08059fe58bd9f3b1deb61295d12fecca/ujh/fountainpencompanion"
discussionCount: 3
---

# Goals

There's two things that FPC wants to do. First of all it should be a place where users can manage their inks & pens.

Secondly, we also want to take advantage of having the data of all users in one place and aggregate it somehow to provide additional value to the whole user base. For now that's just a simple list of brands and inks but that's of course only the beginning.

It is important to keep in mind that these two goals are in conflict at times. Allowing users to manage their collection of inks to me means that we don't change the user's data. So if one user wants to call the ink "Callifolio Andrinople" and the next one wants to call it "L'Artisan Pastellier Callifolio Andrinople" they should be free to do so. On the other hand, for clustering entries that refer to the same ink it would be nice if everyone named the inks the same. There are cases where I'm OK with changing entries (like spelling mistakes) but in general that should be kept to a minimum. Instead the system should be enhanced to have the ability to deal with these issues.

# Technology

Most parts of the app are written in Ruby on Rails. The inks part is written using React with a JSON API (the spec)…
