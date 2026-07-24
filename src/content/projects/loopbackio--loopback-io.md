---
repo: "loopbackio/loopback.io"
name: "loopback.io"
description: "LoopBack project site - now with documentation!"
readmeQualityOk: true
url: "https://github.com/loopbackio/loopback.io"
homepage: "http://loopback.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
topics: ["hacktoberfest"]
stars: 277
forks: 382
openIssues: 14
closedIssues: 222
watchers: 49
contributors: 212
recentReleases: 0
createdAt: "2014-01-28T18:00:00Z"
lastCommitAt: "2026-07-24T06:10:12Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 47
maintainers: ["renovate[bot]", "achrinza", "neerajd002"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/16320387/8db65300-080f-11eb-9f9f-ba2a701c3fd8"
---

# loopback.io

LoopBack community site and documentation, hosted on http://loopback.io.

## Setup

To preview the website locally:

1.  Install [Ruby and
    Bundler](https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/)
    if you don't have them already.

2.  Clone this repo (you might use the SSH URL instead of HTTPS).:

```sh
git clone https://github.com/loopbackio/loopback.io.git
```

3.  `cd` to the repository directory and run the following command:

```sh
cd loopback.io
bundle install
```

You may run into errors during `bundle install` due to compilation failure of
native gems. One such error is:

> An error occurred while installing eventmachine (1.2.7), and Bundler cannot
> continue.

To rectify these errors, install the necessary dependencies that provides the
missing compilers (g++) and devel files (Ruby). For Fedora 44:

```sh
sudo dnf install gcc-c++ ruby-devel
```

## Run and view site locally

Run Jekyll using the following command:

```
npm start
```

Then, load [http://localhost:4001/](http://localhost:4001/) on your browser.

## Formatting

Jekyll uses a variant of Markdown known as…
