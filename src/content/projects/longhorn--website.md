---
repo: "longhorn/website"
name: "website"
description: "https://longhorn.io/"
readmeQualityOk: true
url: "https://github.com/longhorn/website"
language: "HTML"
languages: ["HTML"]
languagePcts: [72]
topics: ["longhorn", "kubernetes", "storage"]
stars: 25
forks: 202
openIssues: 0
closedIssues: 0
watchers: 15
contributors: 127
recentReleases: 0
createdAt: "2019-10-18T00:01:15Z"
lastCommitAt: "2026-07-23T06:15:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 62
maintainers: ["derekbit", "sushant-suse", "COLDTURNIP"]
openGraphImageUrl: "https://opengraph.githubassets.com/84b073a92067ede6b1ee970961ba5ec3fa41e325e3a59727f8874b7ac31e8e6f/longhorn/website"
---

# Longhorn Website

This repo houses the assets used to build the website for Longhorn, available at https://longhorn.io.

## Running the site locally

To run the website locally, you need to have the [Hugo](https://gohugo.io) static site generator installed (installation instructions [here](https://gohugo.io/getting-started/installing/)). You can find the latest release and pre-compiled binaries on the [Hugo releases page](https://github.com/gohugoio/hugo/releases). 

**Important:** This project requires the "extended" edition of Hugo to process SCSS/SASS files.

Once Hugo is installed:

```bash
yarn install
hugo server --buildDrafts --buildFuture
```

This starts Hugo in local mode. You can see access the site at http://localhost:1313.

## Publishing the site

The Longhorn site is automatically built and published by [Netlify](https://netlify.com) when changes are pushed to the `master` branch.

## New versions of the docs

To create a new version of the documentation:

1. Copy the most recent version of the documentation to create a new version. If the most recent version is 1.2.4 and you'd like to create 1.2.5:

    ```sh
    cp -rf content/docs/1.2.4 content/docs/1.2.5…
