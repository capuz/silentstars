---
repo: "Permafrost/Tundra"
name: "Tundra"
description: "❄ A package of cool services for webMethods Integration Server 7.1 and higher."
readmeQualityOk: true
url: "https://github.com/Permafrost/Tundra"
language: "Java"
languages: ["Java", "JavaScript"]
languagePcts: [54, 43]
topics: ["webmethods", "webmethods-integration-server"]
stars: 32
forks: 10
openIssues: 4
closedIssues: 119
watchers: 18
contributors: 1
recentReleases: 0
createdAt: "2012-06-22T03:11:37Z"
lastCommitAt: "2026-07-20T19:09:31Z"
lastReleaseAt: "2014-02-13T11:19:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 35
maintainers: ["lachlan"]
openGraphImageUrl: "https://opengraph.githubassets.com/33e8f017e5690801318bb0ef5193a8666205d42a21d346eb8a0aa3b2028ff6de/Permafrost/Tundra"
---

# Tundra ❄

A package of cool services for [webMethods Integration Server] 7.1
and higher.

## Services

Refer to the [SERVICES.md] file for detailed descriptions of all
services provided by the package.

## Installation

You have two choices for installing [Tundra]:

* `zip`
* `git`

If you are comfortable using git, I recommend this method as you can
then easily switch between package versions using git checkout and
download new versions using git fetch.

### Using Zip

1. Download a pre-built zip of the desired version of the package
   from the available [releases].
2. Copy the `Tundra-vn.n.n.zip` file to your Integration Server's
   `./replicate/inbound/` directory.
3. Install and activate the package release `Tundra-vn.n.n.zip` from
   the package management web page on your Integration Server's web
   administration site.
4. Restart Integration Server to complete the installation.

### Using Git

To install with this method, first make sure that:

* Git is [installed](http://git-scm.com/downloads) on your
  Integration Server.
* Your Integration Server has internet access to https://github.com
  (for cloning the repository).
* The dependent packages listed above are…
