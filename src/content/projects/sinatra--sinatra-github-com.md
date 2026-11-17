---
repo: "sinatra/sinatra.github.com"
name: "sinatra.github.com"
description: "“The best revenge is massive success.”"
readmeQualityOk: true
url: "https://github.com/sinatra/sinatra.github.com"
homepage: "https://sinatra.run"
language: "HTML"
languages: ["HTML"]
languagePcts: [62]
stars: 299
forks: 218
openIssues: 7
closedIssues: 34
watchers: 18
contributors: 186
recentReleases: 0
createdAt: "2009-01-18T06:33:56Z"
lastCommitAt: "2026-11-17T14:44:28Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 72
undervaluedScore: 30
maintainers: ["rkh", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9ad47ac2e2f551e4a128d13e7b59efe709e575ea63a759bd8e3b2c23205a684/sinatra/sinatra.github.com"
---

Sinatra Website / Documentation
===============================

This repo contains the Sinatra website and documentation sources published
at [https://sinatra.run/](https://sinatra.run/).

Working Locally
---------------

Grab the sources from GitHub:

    $ git clone git://github.com/sinatra/sinatra.github.com.git
    $ cd sinatra.github.com

Make sure you have the `bundler` gem installed on your machine:

    $ gem install bundler

Install dependencies:

    $ bundle install

Run the test server:

    $ rake server

Changes are immediately available at:

    http://localhost:4000/

Sass / CSS / Gulp
--------------

It would be appreciated if you could introduce your changes using the indented Sass syntax (.sass) in one of the existing Sass partials or if needed via new ones of your own. Not a friend of curlies and stuff.

Gulp was [set up](https://github.com/sinatra/sinatra.github.com/blob/master/gulpfile.js) to streamline your build process. Simply run:

    $ gulp watch

`gulp watch` triggers a couple of processes:
- After changes have been introduced in the `_sass` directory, it first builds uncompressed `.css` files from the corresponding `.sass` files and puts them into…
