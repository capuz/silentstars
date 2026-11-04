---
repo: "bwplotka/my"
name: "my"
description: "Personal website with Hugo, KeepIt theme and some automation! (: "
readmeQualityOk: true
url: "https://github.com/bwplotka/my"
language: "HTML"
languages: ["HTML", "SCSS"]
languagePcts: [64, 30]
stars: 15
forks: 4
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2019-03-06T00:10:50Z"
lastCommitAt: "2026-11-04T13:04:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 63
maintainers: ["bwplotka"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/174040170/4e944200-661b-11e9-9e2c-21bc39f3bc95"
---

# my

Source for [bwplotka.dev](https://bwplotka.dev) personal website including blog posts.

Once cloned, make sure to run `git submodule update --init --recursive`

## What it includes?

* Overview page
* Blog posts framework
  * YOLO comments reusing Github Issues (yes ^^)

`git submodule update --init --recursive`

## What open source tools I used to build this?

* [Hugo](https://gohugo.io/overview/introduction/)
* Theme [KeepIt](https://github.com/Fastbyte01/KeepIt)
* Improve favs & facebook linking: <https://realfavicongenerator.net>
* Netlify :heart: and it's free tier for open source projects!
* Tiny amount of jquery
* Awesome Github client for JS: <https://octokit.github.io/rest.js/>

### What YOLO comments means

Features:

* Using github issues as comments. For full discussions as well.
* On website in comment sections it gives you index overview of comments, nothing more.
* Prints all issues related to issue. Based on labels. For each new blog post new gh label has to be created (: (is there a label num limit?)
* It does not care about issue status, can be even closed.

Limitations:

* No dynamic reload
* Nested responses not rendered - only as numbers
* No markdown…
