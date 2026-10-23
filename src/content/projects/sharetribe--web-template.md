---
repo: "sharetribe/web-template"
name: "web-template"
description: "Sharetribe Web Template - starting point to create a client app to your marketplace"
readmeQualityOk: true
url: "https://github.com/sharetribe/web-template"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 69
forks: 278
openIssues: 0
closedIssues: 17
watchers: 10
contributors: 25
recentReleases: 0
createdAt: "2021-10-11T12:47:56Z"
lastCommitAt: "2026-10-23T12:04:41Z"
lastReleaseAt: "2023-09-22T13:06:19Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 59
maintainers: ["Gnito", "SariSaar", "Schwerbelastung"]
openGraphImageUrl: "https://opengraph.githubassets.com/30975f80a866a307a7837c1e1049c8793dbe14d56172e48b3c2698c0e22e3500/sharetribe/web-template"
---

# Sharetribe Web Template

This is a template web application for Sharetribe marketplaces. You could create your own unique
marketplace web app by cloning this repository and then extending and customizing it to your needs.
This template is bootstrapped with
[create-react-app](https://github.com/facebookincubator/create-react-app) with some additions,
namely server side rendering, code-splitting, and a custom CSS setup.

## Quick start

### Setup localhost

If you just want to get the app running quickly to test it out, first install
[Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/), and follow along:

```sh
git clone git@github.com:sharetribe/web-template.git  # clone this repository
cd web-template/                                      # change to the cloned directory
yarn install                                          # install dependencies
yarn run config                                       # add the mandatory env vars to your local config
yarn run dev                                          # start the dev server, this will open a browser in localhost:3000
```

> **Note**: If you already have the NODE_ENV environment variable set to "production", you should…
