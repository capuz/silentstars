---
repo: "jenkinsci/groovy-events-listener-plugin"
name: "groovy-events-listener-plugin"
description: "A Jenkins plugin, which executes groovy code when an event occurs."
readmeQualityOk: true
url: "https://github.com/jenkinsci/groovy-events-listener-plugin"
homepage: "https://plugins.jenkins.io/groovy-events-listener-plugin/"
language: "Groovy"
languages: ["Groovy", "Java"]
languagePcts: [50, 27]
stars: 41
forks: 35
openIssues: 1
closedIssues: 31
watchers: 95
contributors: 713
recentReleases: 0
createdAt: "2015-09-18T04:11:38Z"
lastCommitAt: "2026-08-28T15:31:23Z"
lastReleaseAt: "2020-02-09T15:36:07Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 41
maintainers: ["raymondwu1", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3db417e94bc7d0d183dd1c33f549647b4f1d2640bac806a6e9d26a1d1785d2ea/jenkinsci/groovy-events-listener-plugin"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

# Groovy Events Listener Plugin

A Jenkins plugin, which executes Groovy code when an event occurs.

Table of contents
---

1. [Overview](#overview)
1. [Building](#building)
1. [Basic Usage](#basic-usage)
1. [Authors](#authors)
1. [License](#license)
1. [Similar Plugins](#similar-plugins)
1. [Releases (Release Notes, Changelog, Artifacts)](https://github.com/jenkinsci/groovy-events-listener-plugin/blob/HEAD/../../releases)
1. [Issues (Bugs / Issues / Enhancements)](https://github.com/jenkinsci/groovy-events-listener-plugin/blob/HEAD/../../issues)

Overview
---

The reason I created the plugin was because I wanted to integrate Jenkins with an external application.
Invoking a Jenkins jobs via the REST API was simple, but getting Jenkins to callback the external application wasn't
straight forward.

All the plugins I'd seen either had to be individually configured per job (i.e. in a post build step), or their features
were limited to making a HTTP GET/POST request (a bit restrictive).

Basically:

- I wanted to be able to write my own code
- I didn't want to repeat myself

So I wrote this plugin. Along the way, I realised it could have some other applications too:

- customised…
