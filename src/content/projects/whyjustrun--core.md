---
repo: "WhyJustRun/Core"
name: "Core"
description: "Platform for orienteering club communities"
readmeQualityOk: true
url: "https://github.com/WhyJustRun/Core"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [65, 22]
stars: 5
forks: 4
openIssues: 18
closedIssues: 27
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2012-01-08T06:16:01Z"
lastCommitAt: "2026-10-21T21:15:07Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 86
undervaluedScore: 80
maintainers: ["russellporter", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0e4027c1307da5dfe94e24a22759fb9f5171d539e68fc767960da87e7a99596/WhyJustRun/Core"
---

# WhyJustRun Core

Source code for [whyjustrun.ca](https://whyjustrun.ca) and club websites.

## Usage

The app can easily be run using Docker.

1) Use the default configuration: `cp .env.core{.sample,}`
2) Start the container: `docker compose up --build`
3) Set up the database: `docker compose exec core bundle exec rails db:reset db:populate_example_data`

You should be up and running. Head to [localhost:3000](http://localhost:3000/).

To install/update gems, it's easiest to first run the container, and then run bundler commands inside the container. For example, to update the gems, use `docker compose exec core bundle update`.
### Test Users

By running the Rails task `db:populate_example_data`, a test club and several test users are set up with various privilege levels:
admin@example.com, webmaster@example.com, executive@example.com, user@example.com
Password for all accounts is: "password".

### Keeping up to date

When the database schema changes, you'll need to migrate your database: `docker compose exec core rake db:migrate`

When additional config params (via environment variables) are added, you may need to update your `.env.core` configuration.
