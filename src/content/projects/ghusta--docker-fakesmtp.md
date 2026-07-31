---
repo: "ghusta/docker-fakesmtp"
name: "docker-fakesmtp"
description: ":mailbox_with_mail: Another docker image for FakeSMTP (https://github.com/Nilhcem/FakeSMTP)"
readmeQualityOk: true
url: "https://github.com/ghusta/docker-fakesmtp"
language: "Dockerfile"
languages: ["Dockerfile"]
languagePcts: [100]
topics: ["docker", "fakesmtp"]
stars: 8
forks: 1
openIssues: 3
closedIssues: 9
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-12-21T12:53:15Z"
lastCommitAt: "2026-07-31T06:28:03Z"
lastReleaseAt: "2024-01-03T10:29:28Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 69
undervaluedScore: 40
maintainers: ["dependabot[bot]", "ghusta"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6587858958a4a9f44f67a492d4f0c45e8c9bfbbd8153ba7fda2be914bb81d6f/ghusta/docker-fakesmtp"
---

# docker-fakesmtp

Another docker image for FakeSMTP (https://github.com/Nilhcem/FakeSMTP)

# Overview
[FakeSMTP](https://github.com/Nilhcem/FakeSMTP) is a Free Fake SMTP Server with GUI for testing emails in applications easily. It is written in Java.

# Docker 
## Dockerfile
See original [there](https://github.com/Nilhcem/FakeSMTP/blob/master/Dockerfile).

## Usage
This allows you to run a SMTP server for testing applications which send mail. Each mail is written to a file in `/var/mail`

Starting a container :

    docker run -d -p 2525:25 -v /tmp/fakemail:/var/mail ghusta/fakesmtp:2.8

See also docker usage on the [original project](https://github.com/Nilhcem/FakeSMTP#usage-on-docker).

## Refactoring
I use **eclipse-temurin** **~openjdk~** as base image, as **java** image is now _deprecated_ (see https://hub.docker.com/_/java/).
Furthermore, I use the JRE version, as JDK is not necessary (image _eclipse-temurin:17-jre_ for example).

### Available OpenJDK Docker images

Not all versions or alternatives (jdk, jre, slim, etc.) are available.

See which ones there : [Update to version X on base os Y](https://github.com/docker-library/openjdk/issues/272).

At the moment, OpenJDK…
