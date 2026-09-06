---
repo: "OpenSourceEconomics/OpenSourceEconomics.github.io"
name: "OpenSourceEconomics.github.io"
description: "Our website at https://open-econ.org"
readmeQualityOk: true
url: "https://github.com/OpenSourceEconomics/OpenSourceEconomics.github.io"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 8
forks: 0
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 15
recentReleases: 0
createdAt: "2019-10-31T12:48:11Z"
lastCommitAt: "2026-09-06T08:02:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 78
undervaluedScore: 51
maintainers: ["hmgaudecker"]
openGraphImageUrl: "https://opengraph.githubassets.com/a77132b93c95daad0690de2caf72d5ead40f3143bd68698b6427b1f8d79ee989/OpenSourceEconomics/OpenSourceEconomics.github.io"
---

# opensourceeconomics.github.io

This is the source code for the OSE website. Edit the respective `*.md` files directly.

## Instructions for Building Locally

This website uses Jekyll.

For official guides to install Jekyll, see [Installation | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/installation/).

For GitHub's guide to locally build and test the website, see [Testing your GitHub Pages site locally with Jekyll - GitHub Docs](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll).

The basic steps are:

1. Clone this repository to local machine.
1. Run `jekyll --version` to make sure you have jekyll installed correctly.
1. Run `bundle install` to make sure you have all the dependencies installed.
    - Alternatively, if file `Gemfile.lock` already exists, run `bundle update`.
1. Run `bundle exec jekyll serve --livereload --safe` to start local server.
    - Note: you should access the `Server address` (for example, `http://127.0.0.1:4000`) instead of `LiveReload address`. 
    - The `safe` flag is necessary since GitHub Pages does not allow non-whitelisted plugins.
