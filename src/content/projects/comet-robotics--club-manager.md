---
repo: "Comet-Robotics/club-manager"
name: "club-manager"
description: "Payment processing, link shortener, attendance tracking, Discord bot, and other utilities for managing club operations"
readmeQualityOk: true
url: "https://github.com/Comet-Robotics/club-manager"
homepage: "https://portal.cometrobotics.org"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [70, 21]
topics: ["django", "membership-management"]
stars: 5
forks: 1
openIssues: 37
closedIssues: 26
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2024-08-01T04:08:09Z"
lastCommitAt: "2026-10-21T23:35:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 66
maintainers: ["jasonappah", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea3d00e26b6e42302eaf9e43f8bdf4adc172d504119b4eba296c92aba3d108da/Comet-Robotics/club-manager"
---

# Club Manager

Club Manager is a web app and Discord bot for managing all things related to Comet Robotics club operations. Some of the things it does include:

- Link shortener
- Event check-ins / meeting attendance tracking
- Payment tracking for credit card and cash payments (for member dues and other ad-hoc payments, like club shirts)
- Processing credit card payments (by integrating [Square's API](https://developer.squareup.com/us/en/online-payment-apis))
- Assigning Discord roles to users based on membership status

It's also used by RoboSub who hosts their own instance of Club Manager.

## Technical Details

This app is written in Python using the Django web framework. [This page](https://www.djangoproject.com/start/) has a decent overview of what Django offers which you should read over - its a less than 5 min read. We use PostgreSQL as the database.

For Comet Robotics, the app is deployed in a virtual machine on a server at our booth in the Makerspace. More details on the deployment and infrastructure stuff is on the CROUTON Committee ClickUp - to be added, ask an officer in Discord.

## Development Environment Setup

Want to contribute to Club Manager? You'll want to…
