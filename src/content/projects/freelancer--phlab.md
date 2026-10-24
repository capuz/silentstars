---
repo: "freelancer/phlab"
name: "phlab"
description: "Phabricator extensions used at Freelancer.com."
readmeQualityOk: true
url: "https://github.com/freelancer/phlab"
language: "PHP"
languages: ["PHP"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2019-04-30T06:46:22Z"
lastCommitAt: "2026-10-24T08:08:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 63
undervaluedScore: 45
maintainers: ["gready-hub", "tommmperson"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c411712bcf02070f7f6480a9be236a220126984f687085938e8d74c6dae03df/freelancer/phlab"
---

Custom extensions for Phabricator.

= Development =
The best way to develop Phlab is to use [Docker Compose](https://docs.docker.com/compose/) locally by running `docker-compose up` from the root of the repository. Before doing so, you should have the following repositories cloned locally, in the same parent directory as Phlab itself:

  - [Arcanist](https://github.com/phacility/arcanist)
  - [libphutil](https://github.com/phacility/libphutil)
  - [Phabricator](https://github.com/phacility/phabricator)

Phabricator requires that it is accessed with a `Host` header containing a period (see [T2433: Move the "no dots in domain" setup check to pre-install](https://secure.phabricator.com/T2433)) and so you will not be able to access Phabricator via http://localhost. Instead, you should add `127.0.0.1 phabricator.local` to `/etc/hosts` and access Phabricator via http://phabricator.local.

Nginx has been configured to bind to port `80` by default. You can bind to an alternative port by setting the `HTTP_PORT` environment variable.

== Unit tests ==
`arc unit`, and so `arc diff`, runs the unit tests through `bin/unit`, which runs them in Docker with PHP 7.2, MySQL 5.7 and the Arcanist and…
