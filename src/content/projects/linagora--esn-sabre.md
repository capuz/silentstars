---
repo: "linagora/esn-sabre"
name: "esn-sabre"
description: "SabreDAV for OpenPaaS ESN"
readmeQualityOk: true
url: "https://github.com/linagora/esn-sabre"
language: "PHP"
languages: ["PHP"]
languagePcts: [98]
topics: ["php", "caldav-server"]
stars: 14
forks: 15
openIssues: 24
closedIssues: 281
watchers: 19
contributors: 64
recentReleases: 3
createdAt: "2015-05-06T14:26:48Z"
lastCommitAt: "2026-11-03T12:47:47Z"
lastReleaseAt: "2026-10-07T03:23:08Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 76
maintainers: ["chibenwa", "vttranlina", "hungphan227"]
openGraphImageUrl: "https://opengraph.githubassets.com/82586a9a6413398beb9cd0ff530755307d825f695884ea982ddc6bfeccc15ba9/linagora/esn-sabre"
---

# esn-sabre

## Goals

This project is THE dav server behind Twake Calendar, where the magic take place.

It builds on top of [sabre/dav](https://github.com/sabre-io/dav/) and adds [various modules](https://github.com/linagora/esn-sabre/blob/HEAD/doc/PLUGINS.md) in order to deliver an enterprise ready calendar server!

Please note the following other components of the Twake Calendar product:
 - [Twake Calendar Side service](https://github.com/linagora/twake-calendar-side-service) augment the DAV serveur with mailing, search, users, domains, configuration...
 - [Twake Calendar Integretion Tests](https://github.com/linagora/twake-calendar-integration-tests) acts as a quality assurance for the Twake Calendar project umbrella, including this project.
 - OpenPaaS single page applications: [calendar](https://github.com/linagora/esn-frontend-calendar) and [contacts](https://github.com/linagora/esn-frontend-contacts).

 Read more about `esn-sabre` [architecture](https://github.com/linagora/esn-sabre/blob/HEAD/doc/ARCHITECTURE.md).

## Roadmap

We are planning to:

 - Update this project to latest PHP and sabre/dav version
 - Triage most bugs reported on esn-sabre
 - Improve performances…
