---
repo: "canonical/canonical.com"
name: "canonical.com"
description: "Repository for the new version of canonical.com"
readmeQualityOk: true
url: "https://github.com/canonical/canonical.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [76]
topics: ["website", "hacktoberfest", "web-and-design"]
stars: 145
forks: 154
openIssues: 27
closedIssues: 666
watchers: 17
contributors: 182
recentReleases: 0
createdAt: "2019-05-30T10:49:18Z"
lastCommitAt: "2026-07-23T06:14:55Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 51
maintainers: ["Skazitron", "muhammad-ali-pk", "steciuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/c38a743b92cacbdbf267503170b19dee4f7a8d3123c62791a2e9461a862a9c1a/canonical/canonical.com"
---

# &nbsp;canonical.com

**The new codebase, to replace [the old one](https://github.com/canonical-web-and-design/www.canonical.com/).**

This is the repository for the canonical.com website.

## Architecture overview

This website is written with the help of the [flask](http://flask.pocoo.org/) framework. In order to use functionalities that multiple of our websites here at Canonical share, we import the [base-flask-extension](https://github.com/canonical-web-and-design/canonicalwebteam.flask-base) module.

## Development

The simplest way to run the site is with [the `dotrun` snap](https://github.com/canonical/dotrun/):

```bash
dotrun
```

Afterwards the website will be available at <http://localhost:8002>.

When you start changing files, the server should reload and make the changes available immediately.

### Testing with Percy
- Ensure your local setup is up and running at localhost:8002
- Please ask for PERCY_TOKEN and save it in .env.local
- On linux, simply run `dotrun percy-snapshot`
- On mac, add the variables below to your .env.local and run `yarn percy-snapshot`
```
PERCY_BROWSER_EXECUTABLE=/Applications/Chromium.app/Contents/MacOS/Chromium…
