---
repo: "jrmgx/wikireveal.com"
name: "wikireveal.com"
description: "A daily browser game where the user tries to determine the subject of a random obfuscated Wikipedia"
url: "https://github.com/jrmgx/wikireveal.com"
homepage: "https://wikireveal.com"
language: "PHP"
languages: ["PHP"]
languagePcts: [92]
stars: 9
forks: 4
openIssues: 4
closedIssues: 20
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-07-24T18:01:27Z"
lastCommitAt: "2026-07-04T06:11:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 81
maintainers: ["jrmgx"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d9e6681e86a4154c1db93fe7a811419f14d5435b075081de74ba5c9ca5280b9/jrmgx/wikireveal.com"
---

# Wikireveal

> WikiReveal is a daily browser game where the player have to determine the subject of a random obfuscated Wikipedia article.
> A new puzzle will be available every day at [wikireveal.com](https://wikireveal.com)

## Technical Stack

This app/website uses PHP and Symfony as well as some vanilla JavaScript. 
It aims to be the simplest stack possible, so anyone could contribute.

### Local development

The project comes with a `Dockerfile`, so you can bootstrap your dev env in no time, the image is published at `jrmgx/wikireveal`

Run all the project commands with this line: `docker run -it --rm -v "$(pwd)":/app -p 8000:8000 jrmgx/wikireveal COMMAND`

You should make an alias like this: `alias wikireveal="docker run -it --rm -v "$(pwd)":/app -p 8000:8000 jrmgx/wikireveal"`. 
Now you can start any command easily like `wikireveal bin/console app:build` (this notation will be used in the doc from now).

### Local server

To ease the dev process, the project comes with a local server that shows the last daily puzzle. 
This allows you to take benefit of Symfony tooling.

First you must install the dependencies with: `wikireveal composer install` 
then start the local…
