---
repo: "lagoon-examples/wordpress-base"
name: "wordpress-base"
description: "A ready-to-use Wordpress example for use on Lagoon"
readmeQualityOk: true
url: "https://github.com/lagoon-examples/wordpress-base"
language: "PHP"
languages: ["PHP", "Dockerfile"]
languagePcts: [77, 23]
topics: ["wordpress", "php", "template"]
stars: 14
forks: 18
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2018-02-02T18:23:43Z"
lastCommitAt: "2026-08-07T05:15:34Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 62
undervaluedScore: 42
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/41c0cb1181791d5649d8f70babe5e133b85962f630b7a2a23124f460516d97db/lagoon-examples/wordpress-base"
---

# WordPress and Lagoon

This repository is an example of how to use Lagoon and WordPress. It uses our local development environment, Pygmy. For more information on Pygmy, [check out the documentation](https://pygmy.readthedocs.io/en/master/). If you've never set up a Lagoon site locally, you'll need to get Docker and Pygmy set up, [so read the documentation on that](https://lagoon.readthedocs.io/en/latest/using_lagoon/local_development_environments/), it's quick!

## Getting Started

1. Open up a command line prompt.
2. Clone the repo.
3. `cd` into the repo.
4. Run `pygmy start`.
5. Run `docker compose build`.
6. Run `docker compose up -d`.
7. Run `docker compose exec cli composer install` - this will make sure all of the dependencies have been added inside of the container.
8. You should now have a fully functional local WordPress site at [`wordpress-nginx.docker.amazee.io`](http://wordpress-nginx.docker.amazee.io)!

## WordPress and Composer

This setup uses Composer with WordPress. If you're looking for more information on using Composer and WordPress together, go check out http://composer.rarst.net.

*Note*: When installing plugins, do not install them through the UI. Either…
