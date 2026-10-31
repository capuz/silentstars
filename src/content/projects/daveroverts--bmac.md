---
repo: "daveroverts/bmac"
name: "bmac"
description: "Booking system for Vatsim events."
readmeQualityOk: true
url: "https://github.com/daveroverts/bmac"
homepage: "https://booking.dutchvacc.nl"
language: "PHP"
languages: ["PHP", "Blade"]
languagePcts: [78, 22]
topics: ["vatsim", "laravel"]
stars: 12
forks: 15
openIssues: 9
closedIssues: 42
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2020-04-17T06:12:39Z"
lastCommitAt: "2026-10-31T09:53:18Z"
lastReleaseAt: "2021-11-07T19:57:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 80
maintainers: ["daveroverts", "semantic-release-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aae2a945896ac0e4b205338d1fd72c3ab3e73adaed2bea007befddf7b35dadc5/daveroverts/bmac"
fundingLinks: ["GITHUB:https://github.com/daveroverts"]
discussionCount: 2
---

# Book me a Cookie [BMAC]

> **Notice:** The unversioned API routes (`/api/events`, `/api/bookings`, etc.) are deprecated and will be removed on **2026-12-31**. Please migrate to `/api/v1/`. See [API](#api) for details.

Book me a Cookie [BMAC] is a Vatsim booking system created in Laravel.
It's initial purpose was to be used for one event (The Holland - America Line),
however, this system is already ready to be used for more events.

## Features

- Uses [Vatsim Connect](https://vatsimnetwork.github.io/documentation/connect) as
  default authentication provider
- A different OAuth2 provider can also be used
- Supports the following event types:
  - One-way / Groupflight
  - Citypair
  - Fly-in
  - Multiflights (limited to 2 flights per booking)
- E-mail templates included
- Bootstrap / Bootswatch colors are editable
- Slots can be imported or added manually.
- Airports and Events can have links for charts, briefing, scenery or something else.
  They are visible after pilots book a flight.

## Tech Stack

- Laravel
- Vite
- Bootstrap 4
- Bootswatch 4 Flatly theme

## Vatsim Connect

In order to use Vatsim Connect as OAuth2 provider, you need to create a
organization (or have…
