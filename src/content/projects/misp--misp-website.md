---
repo: "MISP/misp-website"
name: "misp-website"
description: "MISP website (hugo-based)"
readmeQualityOk: true
url: "https://github.com/MISP/misp-website"
homepage: "https://www.misp-project.org/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 25
forks: 48
openIssues: 4
closedIssues: 12
watchers: 15
contributors: 44
recentReleases: 0
createdAt: "2016-07-23T16:52:20Z"
lastCommitAt: "2026-09-29T08:11:18Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 63
maintainers: ["adulau", "chrisr3d", "mokaddem"]
openGraphImageUrl: "https://opengraph.githubassets.com/57d78147208ec503cccfd605b648772841ebbb9f51d005c028fe0434988cb20c/MISP/misp-website"
---

# MISP Website

This is the repository of MISP website. The current online version of this portal can be found at [misp-project.org](https://www.misp-project.org/).

## Compiling a local version of the website

The MISP website is based on Hugo, a static site generator. If you plan on contributing major changes to the website, it is important to have a local version, so as to test your changes. 

To compile a local version of the website, run the following commands in a terminal:

1. Install all [Hugo and its prerequisites](https://gohugo.io/getting-started/installing/).

2. Clone the misp-website repository
    ```
    git clone https://github.com/MISP/misp-website.git
    ````
3. Change into your new directory
    ```
    cd misp-website
    ```
4. Init submodules
   ```
   git submodule init
   git submodule update
   ```
5. Build the site and make it available on a local server.
    ```
    hugo server
    ```

6. To preview your site in your web browser, navigate to [http://localhost:1313](http://localhost:1313).

## How to deploy the MISP website
