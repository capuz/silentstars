---
repo: "taw/magic-search-engine"
name: "magic-search-engine"
description: "Search engine for Magic cards"
readmeQualityOk: true
url: "https://github.com/taw/magic-search-engine"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [53, 43]
stars: 72
forks: 33
openIssues: 1
closedIssues: 181
watchers: 3
contributors: 19
recentReleases: 0
createdAt: "2015-10-10T06:54:49Z"
lastCommitAt: "2026-09-06T08:05:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 54
maintainers: ["taw", "nikouni"]
openGraphImageUrl: "https://opengraph.githubassets.com/df8e3c720573b937372dd3be3d8924a8dcb225b0fe7e4d494aa2bd3f82e0197c/taw/magic-search-engine"
---

Search engine for Magic: The Gathering cards.

### Ruby on Rails frontend

To run frontend like http://mtg.wtf/

    $ cd frontend
    $ bundle install
    $ bundle exec rails s

### Command line

To search card names from command line:

    $ ./search-engine/bin/find_cards "query"

To search card names and content from command line:

    $ ./search-engine/bin/find_cards -v "query"

To explore card database from Ruby console:

    $ ./search-engine/bin/pry_cards

### Testing

Tests for library and for Rails frontend are separate:

    $ (cd search-engine; bundle install)
    $ (cd search-engine; bundle exec rspec)
    $ (cd frontend; bundle install)
    $ (cd frontend; bundle exec rspec)

### How to update database

Make sure all relevant repositories are checked out, then run `rake update` to do the update process.
