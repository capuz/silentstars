---
repo: "bybit-exchange/docs"
name: "docs"
description: "Bybit's API documentation, based on Docusaurus"
readmeQualityOk: true
url: "https://github.com/bybit-exchange/docs"
language: "MDX"
languages: ["MDX"]
languagePcts: [96]
stars: 20
forks: 19
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 15
recentReleases: 0
createdAt: "2022-11-14T03:02:20Z"
lastCommitAt: "2026-07-24T06:10:03Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 89
undervaluedScore: 65
maintainers: ["woodliang", "petifish", "doris-xiao-bybit"]
openGraphImageUrl: "https://opengraph.githubassets.com/58ca448e01459c7d34e204f28eda688811c1da3004df38ef7322e01503dfaa6c/bybit-exchange/docs"
---

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

### Requirements
* install latest version of NodeJs (version greater than 16.14). You could install it via npm
```shell
npm install -g n
```

* install yarn. You could install it via npm
```shell
npm install --global yarn
```

```
$ git clone git@github.com:bybit-exchange/docs.git  # clone the repo
```

```
$ cd docs
```

```
$ yarn  # install the dependencies
```

Running the below script copies our custom js files into an untracked lib directory, which enables sending authenticated requests to the bybit API.

It should be run on the first installation and on subsequent yarn upgrades.
```
$ chmod +x setup.sh
$ ./setup.sh
```

### Local Development
As we have english and chinese in the application, so you need to start them separately.
```
$ yarn start  # start the local EN site
```
```
$ yarn start --locale zh-TW  # start the local CN site
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Project Structure
```shell
├── docs   # put english mdx…
