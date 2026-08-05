---
repo: "puavo-org/puavo-web"
name: "puavo-web"
description: "Puavo Web is a system for managing user accounts and devices primarily at school and education domains."
readmeQualityOk: true
url: "https://github.com/puavo-org/puavo-web"
homepage: "http://puavo.org"
language: "Ruby"
languages: ["Ruby", "JavaScript"]
languagePcts: [53, 22]
stars: 12
forks: 6
openIssues: 27
closedIssues: 65
watchers: 14
contributors: 14
recentReleases: 0
createdAt: "2010-05-12T09:40:43Z"
lastCommitAt: "2026-08-05T06:06:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 89
undervaluedScore: 60
maintainers: ["jarmopi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff29bf2bf4098e9567ac453c53488a689172a940cc12e05b7991ff7a0e1fc330/puavo-org/puavo-web"
---

# puavo-web & puavo-rest

Web interface and RESTful API server on top of OpenLDAP with [Puavo
schemas](https://github.com/puavo-org/puavo-ds)

## Hacking

Apply Ansible rules from [puavo-standalone](https://github.com/puavo-org/puavo-standalone).

Clone this repository and install build dependencies

    sudo make install-build-deps

### puavo-web

Install required rubygems and build assets

    make

Stop the puavo-standalone installed puavo-web server and start a development
server

    sudo stop puavo-web
    make server

Access ActiveLdap console

    bundle exec rails runner script/puavo-web-prompt.rb

### puavo-rest

    cd rest

Install required rubygems

    make

Stop the puavo-standalone installed puavo-rest server and start a development
server

    sudo stop puavo-rest
    make server

or with a reloading server

    bundle exec shotgun -o 0.0.0.0 -p 9292

Access model console

    bundle exec scripts/puavo-rest-prompt.rb
