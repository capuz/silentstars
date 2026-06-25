---
repo: "Duosmium/duosmium"
name: "duosmium"
description: "A Science Olympiad tournament results archive."
url: "https://github.com/Duosmium/duosmium"
homepage: "https://www.duosmium.org"
language: "Nunjucks"
languages: ["Nunjucks", "JavaScript"]
languagePcts: [60, 26]
topics: ["javascript", "11ty", "eleventy", "science-olympiad"]
stars: 17
forks: 12
openIssues: 7
closedIssues: 7
watchers: 1
contributors: 18
recentReleases: 0
createdAt: "2022-02-21T04:18:01Z"
lastCommitAt: "2026-06-25T01:32:51Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 72
maintainers: ["SentientTree", "kira-emmons", "duosmium-scoring[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b1c8020b7803ba22d20ddbb0c8d9ffdd6a939de93a629ecd8b577eefd43e187/Duosmium/duosmium"
---

# Duosmium Website

A JavaScript (11ty) rewrite of the [former Duosmium website](https://www.github.com/Duosmium/duosmium-ruby), previously written in Ruby/Middleman.

Visit: [https://www.duosmium.org/](https://www.duosmium.org/)

## Duosmium Results

An [archive](https://www.duosmium.org/results/) of any tournament results
that have been output as or converted into the
[SciolyFF](https://github.com/duosmium/sciolyff-js) (Science Olympiad File Format).

### How to view locally

Minimal instructions for Unix-based systems (MacOS, Linux, etc.) that will likely need to be modified depending on your
development setup:

```sh
git clone https://www.github.com/Duosmium/duosmium.git
npm install
npm run build
```

Windows doesn't use Unix shells/commands, so we have a separate `build` function for it:

```cmd
git clone https://www.github.com/Duosmium/duosmium.git
npm install
npm run build-windows
```

### Developing

To run the site locally, you'll need the [Netlify CLI](https://docs.netlify.com/cli/get-started/) in order to have the On-Demand Builders (which are just Netlify functions) to run properly. The site itself requires installing NodeJS and NPM.

To build the site for production,…
