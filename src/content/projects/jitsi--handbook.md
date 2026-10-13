---
repo: "jitsi/handbook"
name: "handbook"
description: "The Jitsi Handbook"
readmeQualityOk: true
url: "https://github.com/jitsi/handbook"
homepage: "https://jitsi.github.io/handbook/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [78, 22]
topics: ["jitsi", "documentation"]
stars: 228
forks: 528
openIssues: 0
closedIssues: 89
watchers: 21
contributors: 229
recentReleases: 0
createdAt: "2019-12-06T15:06:37Z"
lastCommitAt: "2026-10-13T10:57:56Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 50
maintainers: ["emrahcom", "hlvhe", "damencho"]
openGraphImageUrl: "https://opengraph.githubassets.com/72fc7fb3724865853baa617e749e7cb1de414dd502268d00c447fbb45d051f6a/jitsi/handbook"
---

# The Jitsi Handbook

This is The Jitsi Handbook. Your one-stop shop for Jitsi documentation. It's powered by [Docusaurus](https://docusaurus.io/).
The documentation website can be found [here](https://jitsi.github.io/handbook/).

## Building the site

The site is built automatically with every push thanks to a [GH Actions](https://github.com/jitsi/handbook/blob/master/.github/workflows/gh-pages.yml).

**NOTE:** You need to have Node.Js(>=16) installed in your system to build this site. NodeJs can be downloaded from [here](https://nodejs.org/en/download/)

If you want to build it locally, follow these simple steps:

1. Clone the repository

```shell
git clone https://github.com/jitsi/handbook.git
```

2. Move to the folder where the repository is cloned

```shell
cd handbook
```

3. Install the dependencies

```shell
npm install
```

4. Start the website

```shell
npm start
```

The website will be running at http://127.0.0.1:3000/handbook/

You can now edit the files in the `docs` folder and the site will reflect the changes immediately thanks to
live reloading.

## Contributing

We appreciate all contributions to this repository. Please make a Pull Request, no matter how small,…
