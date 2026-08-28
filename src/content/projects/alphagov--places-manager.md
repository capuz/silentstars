---
repo: "alphagov/places-manager"
name: "places-manager"
description: "\"Find My Nearest\" API and management tools on GOV.UK"
readmeQualityOk: true
url: "https://github.com/alphagov/places-manager"
homepage: "https://docs.publishing.service.gov.uk/apps/imminence.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [81]
topics: ["govuk"]
stars: 13
forks: 6
openIssues: 1
closedIssues: 18
watchers: 79
contributors: 226
recentReleases: 0
createdAt: "2011-08-03T08:52:34Z"
lastCommitAt: "2026-08-28T12:23:02Z"
lastReleaseAt: "2023-09-12T10:21:58Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 98
undervaluedScore: 54
maintainers: ["dependabot[bot]", "govuk-ci", "andysellick"]
openGraphImageUrl: "https://opengraph.githubassets.com/25ee5ae3209fdab3a8aa4fbf6e5adc7e428ba7983f391a119c6cc4f9e30956db/alphagov/places-manager"
---

# Places Manager (formerly Imminence)

Places Manager manages sets of structured data for use elsewhere on GOV.UK. It's primarily used for geographical data such as lists of registry offices, test centres, and the like.

The data is structured as a set of Services which represent a distinct type of location. A Service can then have many Data Sets which are in turn collections of Places. Only one Data Set will be "active" at any given time.

Each data set is uploaded as a CSV file. A cron job takes care of geocoding the places within it. It can then be manually inspected or exported as CSV, JSON or KML so it can be tested using a variety of other tools.

There is a simple JSON API for integrating the data with other applications.

## Nomenclature

- **Services**: Represent a distinct type of location (e.g. Register Offices)
- **Data sets**: Services can have many data sets, which are collections of Places. Only one data set will be "active" at any given time.
- **Places**: Geocoded data of individual locations which belong to a data set.

## Technical documentation

This is a Ruby on Rails app, and should follow [our Rails app…
