---
repo: "tattle-made/website"
name: "website"
description: "Source code for Tattle's website."
url: "https://github.com/tattle-made/website"
homepage: "https://tattle.co.in/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
topics: ["website"]
stars: 6
forks: 20
openIssues: 35
closedIssues: 102
watchers: 3
contributors: 19
recentReleases: 0
createdAt: "2020-03-22T16:09:45Z"
lastCommitAt: "2026-07-01T07:07:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 90
maintainers: ["dennyabrain", "tarunima", "Preetiaarya"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb4ab9dd928b800547984cdcb07fb26bde9923a5046110164660e1a19d044613/tattle-made/website"
discussionCount: 1
---

# Website

Source code for Tattle's website. Its hosted at [tattle.co.in](https://tattle.co.in/)

Other than reading our tweets, blog and mailing list, reading the commit history of this repo is a great way to know what we are upto.

## Developing Locally

The website is built using [Gatsby](https://www.gatsbyjs.com/).
<br><br>
Install all the relevant dependencies

```sh
npm install
```

To start the development server run 
```sh
gatsby develop
``` 
A development server will be started at [http://localhost:8000](http://localhost:8000), the GraphQL structure will be deployed at [http://localhost:8000/__graphql](http://localhost:8000/__graphql) 

To build a production ready version of the website. Run, 
```sh
gatsby build
```

### How to Add an Update?
To make a change/ addition to the [Updates](https://tattle.co.in/updates) section on the website, could be done by adding/ editing a markdown file (.mdx).
The mark down files can be found in the udpates folder under src.
```
src   
└───updates
│   │   file1.mdx
│   │   file2.mdx
```
The .mdx files should look like this
```sh
---
date: YYYY-MM-DD
title: "Example Title"
excerpt: "A small demo of the .mdx file"
url:…
