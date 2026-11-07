---
repo: "shlinkio/shlink.io"
name: "shlink.io"
description: "Shlink project website"
readmeQualityOk: true
url: "https://github.com/shlinkio/shlink.io"
homepage: "https://shlink.io"
language: "SCSS"
languages: ["SCSS", "TypeScript", "Astro"]
languagePcts: [43, 34, 22]
topics: ["hacktoberfest"]
stars: 16
forks: 21
openIssues: 8
closedIssues: 174
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2016-07-31T14:44:31Z"
lastCommitAt: "2026-11-07T10:37:57Z"
lastReleaseAt: "2021-04-23T18:20:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 82
maintainers: ["acelaya", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/536901806bbfd5a8aed4b244a15e8114637fc1d095b8c669e9fceb983d5f9751/shlinkio/shlink.io"
---

# shlink.io

This is [shlink](https://shlink.io)'s project website. A statically built site, created with [next.js](https://nextjs.org/).

## Run it locally

In order to run this project locally, follow these steps:

* Clone the repo: `git clone https://github.com/shlinkio/shlink.io`.
* With `docker compose`:
    * Copy `docker-compose.override.yml.dist` to `docker-compose.override.yml`.
    * Run project: `docker compose up`.
* Without `docker compose`:
    * Install dependencies: `npm install`.
    * Run project: `node --run dev`.
* Open app [localhost:3000](http://localhost:3000).

Now you can work locally on any change in case you want to provide some improvement.

## Build production site

The project can be exported to a static site fully optimized for production.

Run `node --run build:prod` and you will get a `build` directory with the static files.

Now you can serve it with the web server of your choice.

## Build docker image

As an alternative to building the static site locally, you can also build a docker image which will in turn use the static site internally and serve it using nginx.

Run `docker build . -t shlink-website` (or the name you want to give it) to get…
