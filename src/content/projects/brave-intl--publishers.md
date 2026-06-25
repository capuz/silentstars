---
repo: "brave-intl/publishers"
name: "publishers"
description: "Publisher interface for Brave Payments"
url: "https://github.com/brave-intl/publishers"
homepage: "https://creators.brave.com"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [56]
stars: 65
forks: 39
openIssues: 1
closedIssues: 4
watchers: 16
contributors: 58
recentReleases: 0
createdAt: "2016-09-30T04:47:29Z"
lastCommitAt: "2026-06-25T02:07:05Z"
lastReleaseAt: "2019-07-02T17:29:55Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 55
maintainers: ["jlbyrne", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e60ab3e8b80e9036dc96ac5e969473d2cc773ce0d79bfd972a2e0f77b96284d0/brave-intl/publishers"
---

# Creators

Creators powers the <https://creators.brave.com> platform and enables content creators to be tipped from Brave users using the [Brave Rewards](https://brave.com/brave-rewards/) system.

It allows a creator to connect channels where they are hosted content as well as a wallet through which we allow rewards users to make contributions.

Creators is powered by Ruby on Rails and React.

## Getting Started :wrench: Setup

Development with Docker and `docker-compose` is recommended for anyone just getting started. If for any reason you wish to run the stack locally see [Local Installation Instructions](docs/LOCAL.md).

## Running locally with Overmind

If you don't want to use docker, and want to develop locally, you can use [overmind](https://github.com/DarthSim/overmind):

Make sure to install it and then run:
`overmind start -N -f Procfile.dev`

## Running locally with docker-compose

1. [install docker and docker compose](https://docs.docker.com/compose/install/).
1. Ensure `openssl` is installed. `brew install openssl`
1. In your browser, navigate to `brave://flags`. Make sure `Allow invalid certificates for resources loaded from localhost.
` is enabled.
1. Run `make`…
