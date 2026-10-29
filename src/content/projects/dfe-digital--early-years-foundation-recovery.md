---
repo: "DFE-Digital/early-years-foundation-recovery"
name: "early-years-foundation-recovery"
description: "The Early Years Covid Recovery project application"
readmeQualityOk: true
url: "https://github.com/DFE-Digital/early-years-foundation-recovery"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [79]
topics: ["rails", "postgres", "yarn"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 28
watchers: 3
contributors: 27
recentReleases: 0
createdAt: "2022-01-07T12:36:05Z"
lastCommitAt: "2026-10-29T14:07:21Z"
lastReleaseAt: "2023-11-06T10:08:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 88
maintainers: ["Jonas-AND", "david-dfe", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac620cabb2821e792f72a5dbd41293dbf5676dc70b8eae7eb115d7fe25612445/DFE-Digital/early-years-foundation-recovery"
discussionCount: 0
---

# Early years child development training

This is an application, written in Ruby on Rails (Version 7), based on the [DFE-Digital][rails-template] template. It uses a [Contentful](https://app.contentful.com/spaces/dvmeh832nmjc/) workspace for the content, managed by the content editors in the Early years child development training service.

Optionally create `.env` to override or set default variables.

## Dependencies

Ruby version `3.4.x`
Node version `22.12.x` locally (`24.x` in the production image)
PostgreSQL version `15.17`
Yarn version `4.0.x`

Suggest using [asdf][asdf] for local development.
It is recommended to install Ruby, Postgres and Nodejs using asdf (see instructions in 'Working locally' section). You may also be required to install dependencies to use these versions

## Getting Started

### Run locally
1. Clone the [repository][app-repo]
2. Install [git-secrets](#git-secrets)
3. Obtain the master keys
4. Run `bundle install` to install the gem dependencies
5. Run `yarn` to install node dependencies
6. Copy the .env.example settings into the .env file
7. Run `bin/dev` to launch the app on http://localhost:3000

### Run through containerised environment
1. Clone the…
