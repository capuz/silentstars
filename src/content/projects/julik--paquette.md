---
repo: "julik/paquette"
name: "paquette"
description: "A nimble package server for commercial/private libs"
readmeQualityOk: true
url: "https://github.com/julik/paquette"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-10-06T11:16:34Z"
lastCommitAt: "2026-10-21T08:48:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 72
maintainers: ["julik", "skatkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/16df8d91da71ef8b2955f99853a455546101edb0a5961adec2eeac3016cbfeda/julik/paquette"
---

Paquette is a (slightly unhinged) Rack-based server for libraries. At the moment it serves gems, NPM packages and Python packages. It is designed to be small and embeddable in other Ruby web applications. You allocate a directory with packages and expose it through Paquette, all the while bringing your own authentication, limits, filtering and entitlements.

In essence, it is a gem/NPM/PyPI server for distributing commercial packages. I use
it for https://shop.stanquette.nl and it is pretty neat!

Things are somewhat in flux but Paquette is usable alright.

## Basic setup

This is a Ruby library so you will need Ruby installed. To try a minimal setup, do a `bundle install` and start `bin/dev`. Try pushing a gem into Paquette and then adding the local server to your `Gemfile` - and then do a `bundle install` in your application for that custom gem.

However, that is not how Paquette is primarily meant to be used. It is meant to be integrated into a larger Rails or Rack application, and otherwise bent to your will in various (slightly unhinged) ways. Just a few use cases Paquette was designed for:

- Hosting your internal package registry (why get the jFrog and the kitchen sink?)
-…
