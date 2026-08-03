---
repo: "Eomm/why-don-t-you-tweet"
name: "why-don-t-you-tweet"
description: "Tweet your GitHub events!"
readmeQualityOk: true
url: "https://github.com/Eomm/why-don-t-you-tweet"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["github-actions", "tweets", "twitter", "twitter-bot", "automation"]
stars: 20
forks: 3
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-11-21T09:46:00Z"
lastCommitAt: "2026-08-03T06:43:27Z"
lastReleaseAt: "2024-05-26T08:36:30Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 81
undervaluedScore: 33
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/69678fca827dee9b169ee33f69cf76040d0f55a1af7b5e77b534d696a3518e15/Eomm/why-don-t-you-tweet"
fundingLinks: ["GITHUB:https://github.com/Eomm"]
---

# Why don't you tweet?

Send a tweet from a GitHub actions workflow!

## Installation

To allow GitHub Actions to send tweets programmatically, you'll need to:

- Create a new Twitter application from your [developer console](https://developer.twitter.com/apps).
- Turn on the Read and Write permissions

- Configure the authentication keys and tokens for your Twitter app as secrets in your repository.

- Add the `Usage` section code to your workflow's.

Done in 10 minutes 🎉

## Secret Configuration

This configuration lets you to tweet using your Twitter account.

- `TWITTER_CONSUMER_API_KEY`: the application consumer key.
- `TWITTER_CONSUMER_API_SECRET`: the application consumer secret.
- `TWITTER_ACCESS_TOKEN`: your user access token, generated from the developer console.
- `TWITTER_ACCESS_TOKEN_SECRET`: your user access token secret, generated from the developer console.

## Usage

Copy & Customize the following code into your workflow:

```yml
name: tweet-release

# More triggers
# https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#release
on:
  release:
    types: [published]

jobs:
  tweet:
    runs-on: ubuntu-latest
    steps:
      -…
