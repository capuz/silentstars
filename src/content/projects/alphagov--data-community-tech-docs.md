---
repo: "alphagov/data-community-tech-docs"
name: "data-community-tech-docs"
description: "Data Community Technical Documentation"
readmeQualityOk: true
url: "https://github.com/alphagov/data-community-tech-docs"
homepage: "https://docs.data-community.publishing.service.gov.uk/"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
topics: ["govuk"]
stars: 6
forks: 4
openIssues: 5
closedIssues: 6
watchers: 31
contributors: 163
recentReleases: 0
createdAt: "2021-08-27T13:50:11Z"
lastCommitAt: "2026-08-28T14:32:30Z"
status: "watched"
tags: ["legacy_hero", "community_watch"]
healthScore: 88
undervaluedScore: 62
maintainers: ["janetzhu8", "jamesm6", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9fe844024e75febb00d257b2f981ca1573b9fb8ceca1c4e50dc92c85c6308d8/alphagov/data-community-tech-docs"
---

# Technical Documentation

This project uses the [Tech Docs Template][template], which is a [Middleman template][mmt] that you can use to build technical documentation using a GOV.UK style.

👉 To find out more about setting up and managing content for a website using this template, see the [Tech Docs Template documentation][tdt-docs].

## Before you start

To use the Tech Docs Template you need:

- [Ruby][install-ruby]
- [Middleman][install-middleman]

The [tech docs template
documentation](https://tdt-documentation.london.cloudapps.digital/create_project/get_started/#install-ruby)
says to install the latest 2.7.x version listed at
https://www.ruby-lang.org/en/downloads/ which is 2.7.8, but that page says that
2.7.8 is no longer maintained, and rbenv will only install 2.7.6.  The
documentation also says to use RVM to install Ruby, but the [GDS
Way](https://gds-way.cloudapps.digital/manuals/programming-languages/ruby.html#conventional-tooling)
recommends rbenv.

## Create a new website

- Install rbenv
- Install Ruby version 2.7.6 `rbenv install 2.7.6`
- Activate Ruby version 2.7.6 in your current terminal `rbenv shell 2.7.6`
- Install an old version of a dependency `rbenv exec…
