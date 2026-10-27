---
repo: "TinyTapeout/tinytapeout_www"
name: "tinytapeout_www"
description: "Tiny Tapeout Website"
readmeQualityOk: true
url: "https://github.com/TinyTapeout/tinytapeout_www"
homepage: "https://tinytapeout.com"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [49, 35]
stars: 9
forks: 35
openIssues: 18
closedIssues: 50
watchers: 2
contributors: 34
recentReleases: 0
createdAt: "2022-10-20T17:00:15Z"
lastCommitAt: "2026-10-27T09:16:42Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 93
undervaluedScore: 87
maintainers: ["krisjdev", "mattvenn", "urish"]
openGraphImageUrl: "https://opengraph.githubassets.com/22401afdbc800c238f369e206a1fa62d75853dcf709b6d97b1c5cb5498775f4a/TinyTapeout/tinytapeout_www"
---

# Tiny Tapeout website

Contribution instructions:

* fork this repository
* *clone the forked repository recursively*
  updated as needed: ` git submodule update --init --recursive`
* install [hugo](https://github.com/TinyTapeout/tinytapeout_www/blob/HEAD/"https://github.com/gohugoio/hugo) at least version  `0.112.4`, preferably `0.159` or newer:
    * linux: `snap install hugo`
    * other platforms: https://gohugo.io/getting-started/installing/
* after cloning the repo, change to the new directory: cd tinytapeout_www
* start hugo server: hugo server
* access the website at http://localhost:1313

After testing your contribution works, please make a pull request.
Thanks!

## Developing the cloudflare functions (dynamic content)

**You only need this if you are working on dynamic content. It's not needed for static content.**

You'll need a recent version of node.js and npm. First, install wrangler:

```bash
npm i -g wrangler
```

Then, you can run the functions locally with:

```bash
npm run dev
```

Note: for the static content to be served correctly, you need to run `hugo` first (or `hugo -w` to watch for changes).

## Adding a new shuttle page

Run `hugo new…
