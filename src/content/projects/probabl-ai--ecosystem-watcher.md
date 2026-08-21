---
repo: "probabl-ai/ecosystem-watcher"
name: "ecosystem-watcher"
description: "Just keeping an eye on the ecosystem."
readmeQualityOk: true
url: "https://github.com/probabl-ai/ecosystem-watcher"
homepage: "https://probabl-ai.github.io/ecosystem-watcher/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
stars: 24
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2024-02-06T10:40:16Z"
lastCommitAt: "2026-08-21T04:11:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 68
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0213a3f6bed46b81dae6e6cbea62f84f65c12aed48c3595cf80537de0a48e6e1/probabl-ai/ecosystem-watcher"
---

<br>

<h1 style="border-bottom: 0px;">Ecosystem Watcher</h1>

This repository collects statistics for scikit-learn related plugins. The goal is to offer resources for the community 
that gives an overview of useful tools, but it can also be helpful to track how projects develop over time. The goal of
this repository is to address both these needs. 

## Overview

This repository uses Github Actions to scrape relevant information on a daily basis. This data then
feeds an overview page that is hosted on the same repo. This is great because it means this page can
update daily and we have a way for folks to contribute at the same time. 

You can inspect the generated overview on [here](https://probabl-ai.github.io/ecosystem-watcher/).

## Add a project.

Feel free to make a PR if you believe that we're missing a relevant plugin. You can edit the
[repos.jsonl](https://github.com/probabl-ai/ecosystem-watcher/blob/main/repos.jsonl) file in
the root of this repository to add one. For our scraper to work, we need the Github repository
as well as the `pypi` name. Our goal is to be very accepting to new tools, but our goal
is to focus on plugins that interact or play nice with the…
