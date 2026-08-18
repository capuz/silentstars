---
repo: "b3s/b3s"
name: "b3s"
description: "Totally sweet Ruby on Rails-based forum software"
readmeQualityOk: true
url: "https://github.com/b3s/b3s"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [59, 20]
topics: ["forum", "ruby", "rails"]
stars: 119
forks: 35
openIssues: 0
closedIssues: 73
watchers: 16
contributors: 18
recentReleases: 0
createdAt: "2009-04-23T12:44:42Z"
lastCommitAt: "2026-08-18T04:08:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 47
maintainers: ["elektronaut", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2723de2e18d5c0aaeea132f1da7cbcfc635465d55dcc22f2c206ef28adec2479/b3s/b3s"
---

# B3S

B3S is a modern open-source forum optimized for performance and usability,
written in Ruby on Rails.

## Dependencies

* [Ruby 4.0+](https://www.ruby-lang.org/en/)
* [Node.js 24+](https://nodejs.org/)
* [pnpm](https://pnpm.io/)
* [PostgreSQL](https://www.postgresql.org/)
* libvips

## Deployment

The following environment variables are required for a production deployment:

Environment variable   | Info
-----------------------|------------------
RAILS_MASTER_KEY       | Rails master key
DATABASE_URL           | URL to Postgres
OEMBED_FACEBOOK_TOKEN  | Facebook oEmbed access token
WEB_CONCURRENCY        | Puma worker count (default: 2)
NGINX_CACHE_MAX_SIZE   | Max size of nginx image cache (default: 2g)

## Credits

Thanks to the members of the B3S community for feedback, ideas and
encouragement, names far too many to be mentioned. Napkin was written by
Branden Hall of [Automata Studios](http://automatastudios.com/).

## License

Copyright (c) 2008 Inge Jørgensen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without…
