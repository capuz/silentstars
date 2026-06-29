---
repo: "alphagov/asset-manager"
name: "asset-manager"
description: "Manages uploaded assets (images, PDFs etc.) for applications on GOV.UK"
url: "https://github.com/alphagov/asset-manager"
homepage: "https://docs.publishing.service.gov.uk/apps/asset-manager.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [88]
topics: ["govuk"]
stars: 11
forks: 9
openIssues: 53
closedIssues: 218
watchers: 73
contributors: 220
recentReleases: 0
createdAt: "2013-01-28T11:00:30Z"
lastCommitAt: "2026-06-29T07:23:24Z"
lastReleaseAt: "2023-08-29T07:38:27Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 57
maintainers: ["dependabot[bot]", "callumknights", "brucebolt"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2c0a8bde890b5ad473cf2267a927ff99cfe18e9fff9a910a51035632d8e2302/alphagov/asset-manager"
---

# Asset Manager

Manages uploaded assets (images, PDFs etc.) for applications in the GOV.UK Publishing stack.

The app receives uploaded files from publishing applications and returns the URLs that they will be made available at. Before an asset is available to the public, it is virus scanned. Once a file is found to be clean, Asset Manager serves it at the previously generated URL. Unscanned or Infected files return a 404 Not Found error. Deleted files return a 410 Gone response.

Scanning uses [ClamAV][clamav] and occurs asynchronously via [govuk_sidekiq][sidekiq].

## Technical Documentation

This is a Ruby on Rails app, and should follow [our Rails app conventions](https://docs.publishing.service.gov.uk/manual/conventions-for-rails-applications.html).

You can use the [GOV.UK Docker environment](https://github.com/alphagov/govuk-docker) to run the application and its tests with all the necessary dependencies. Follow [the usage instructions](https://github.com/alphagov/govuk-docker#usage) to get started.

**Use GOV.UK Docker to run any commands that follow.**

### Running the test suite

`bundle exec rspec`

### Assets on S3

All assets are uploaded to the S3 bucket via a…
