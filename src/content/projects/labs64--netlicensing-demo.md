---
repo: "Labs64/NetLicensing-Demo"
name: "NetLicensing-Demo"
description: "Labs64 NetLicensing / Demo Application"
readmeQualityOk: true
url: "https://github.com/Labs64/NetLicensing-Demo"
homepage: "https://netlicensing.io"
language: "PHP"
languages: ["PHP", "Blade"]
languagePcts: [67, 32]
topics: ["labs64", "netlicensing", "demo", "try-and-buy", "subscription", "restful", "api", "netlicensing-io", "license", "management"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 13
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2017-05-25T19:39:02Z"
lastCommitAt: "2026-09-03T08:14:12Z"
lastReleaseAt: "2017-07-17T17:51:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 55
maintainers: ["dependabot[bot]", "v-rudkovskiy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/92438023/674c6080-ae8a-11ea-9f98-77786cee1b09"
---

</p>

# [Labs64 NetLicensing](https://netlicensing.io) Demo Application

This _NetLicensing Demo Application_ provides a simple way to explore basic [NetLicensing](https://netlicensing.io) functionalities, as well as integration options with real application code. Feel free to use code snippets from this project as a help for NetLicensing integration in your own product.

# Getting started

## With Docker

This project is based on [docker-compose](https://docs.docker.com/compose/). By default, the following containers are started: _netlicensing-demo (centos:7 based), nginx_. The `/var/www/netlicensing-demo` directory is the web root which is mapped to the nginx container.
You can directly edit configuration files from within the repo as they are mapped to the correct locations in containers.

### System Requirements
To be able to run NetLicensing Demo you have to meet the following requirements:
* [docker](https://www.docker.com)
* [docker-compose](https://docs.docker.com/compose/)

### Run

1. Clone repository
```
$ git clone https://github.com/Labs64/NetLicensing-Demo.git
```

2. Copy `.env.example` to `.env` and modify according to your environment
```
$ cp .env.example .env…
