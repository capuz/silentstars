---
repo: "apache/mina-site"
name: "mina-site"
description: "Website sources for Apache MINA"
url: "https://github.com/apache/mina-site"
homepage: "https://mina.apache.org/"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [63, 37]
topics: ["apache", "mina", "hugo"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2020-02-24T08:37:41Z"
lastCommitAt: "2026-06-27T06:22:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 73
undervaluedScore: 53
maintainers: ["elecharny", "tomaswolf"]
openGraphImageUrl: "https://opengraph.githubassets.com/42f78008e048bedcf07dd8b734bdab96316c653969e4e2e12e198f43ed288911/apache/mina-site"
---

# Apache Mina website

This is the source code for the website of [Apache Mina](https://mina.apache.org/), hosted at:

    https://mina.apache.org/

## Repository structure

This repository uses 2 branches for serving the website.
- The `master` branch, which contains all the sources for the website.
- The `asf-site` branch, which contains the generated website being used for the actual website.

When contributing patches, apply them to the `master` branch. Jenkins will then regenerate the website
and commit the changes to the `asf-site` branch.

## Content Management System

The website uses Hugo as static website generator. 
See [Hugo](https://gohugo.io/) for more info and for details how to install Hugo.

## Generate the website

To generate the static website, execute `hugo` to generate and serve the website on `localhost:1313`.

During development, it may be useful to run an incremental build. For this to work, execute `hugo server -D` to 
continuously generate and serve the website on `localhost:1313`.

## Publish the website

Jenkins is used for generating the website and committing the generated site to the `asf-site` branch.
