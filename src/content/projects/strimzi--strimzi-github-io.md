---
repo: "strimzi/strimzi.github.io"
name: "strimzi.github.io"
description: "Strimzi web site project"
readmeQualityOk: true
url: "https://github.com/strimzi/strimzi.github.io"
homepage: "http://strimzi.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [88]
topics: ["kafka", "kafka-connect", "kafka-streams", "openshift", "kubernetes"]
stars: 36
forks: 89
openIssues: 0
closedIssues: 41
watchers: 10
contributors: 104
recentReleases: 0
createdAt: "2017-12-22T13:53:41Z"
lastCommitAt: "2026-07-09T20:44:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 69
maintainers: ["ppatierno", "scholzj", "see-quick"]
openGraphImageUrl: "https://opengraph.githubassets.com/72efec5a492807022fb989a694feba16bc58aef6f26474b329e4b7c5abc8d26c/strimzi/strimzi.github.io"
---

# Strimzi website

This repository contains the [Strimzi website](https://strimzi.io).

## Prerequisites

[Ruby](https://www.ruby-lang.org/en/) and [Rubygems](https://rubygems.org/) are needed in order to build the web site.

Install [bundler](https://bundler.io/)

    gem install bundler

## Build

In order to build and serve the web site locally, run :

    bundle install
    bundle exec jekyll serve

When running, the website is accessible at `localhost:4000`.

## Build using a container

To avoid needing to install Ruby, you can build and run the web site locally inside a container.
Run the following command:

    docker run --rm -v ${PWD}:/srv/jekyll -p 4000:4000 -it jekyll/jekyll jekyll serve

The build can take several minutes to complete.
When it's done, you'll see the message "Server running...".

**Note:** If you see the error `require': cannot load such file -- webrick (LoadError)`, add the following to the `Gemfile`:

    gem "webrick"

If you make this change, be sure not to check it in.

## Blog posts

We try to use the following process for blog posts:

1. You should start by [asking us](https://strimzi.io/join-us/#ask-for-help-and-help-others) whether your proposed…
