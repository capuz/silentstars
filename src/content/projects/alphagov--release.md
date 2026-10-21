---
repo: "alphagov/release"
name: "release"
description: "Internal dashboard summarising the release pipeline for components of the GOV.UK web content management system."
readmeQualityOk: true
url: "https://github.com/alphagov/release"
homepage: "https://docs.publishing.service.gov.uk/repos/release.html"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [78]
topics: ["govuk"]
stars: 24
forks: 14
openIssues: 0
closedIssues: 35
watchers: 82
contributors: 112
recentReleases: 0
createdAt: "2012-11-29T14:16:36Z"
lastCommitAt: "2026-10-21T08:49:03Z"
lastReleaseAt: "2023-08-16T08:27:53Z"
status: "watched"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 99
undervaluedScore: 54
maintainers: ["dependabot[bot]", "govuk-ci", "dj-maisy"]
openGraphImageUrl: "https://opengraph.githubassets.com/6dbdf5e187644efe2e8a2c6aec8887e019a4eb467c41f42ede2954e155cc3bc8/alphagov/release"
---

# Release

An application to make managing releases to specific environments easier.

## Technical documentation

This is a Ruby on Rails app, and should follow [our Rails app conventions](https://docs.publishing.service.gov.uk/manual/conventions-for-rails-applications.html).

You can use the [GOV.UK Docker environment](https://github.com/alphagov/govuk-docker) to run the application and its tests with all the necessary dependencies. Follow [the usage instructions](https://github.com/alphagov/govuk-docker#usage) to get started.

## Seeing the kubernetes API view running locally

To see the kubernetes API view you will need to run the `Release` app on your machine, not in the `govuk-docker` stack.
If you are just running the tests you can use `govuk-docker`.

* Before running the app you will need to update the `Trust relationship` for the `release-assumed` role on the AWS `IAM` control panel using your `fulladmin` account on the `integration` environment. The additional trusted entity that you are adding should look like this -

```json
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::1234567890:role/your.name-developer"…
