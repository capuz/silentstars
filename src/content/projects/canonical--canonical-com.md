---
repo: "canonical/canonical.com"
name: "canonical.com"
description: "Repository for the new version of canonical.com"
readmeQualityOk: true
url: "https://github.com/canonical/canonical.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [75]
topics: ["website", "hacktoberfest", "web-and-design"]
stars: 153
forks: 165
openIssues: 39
closedIssues: 716
watchers: 18
contributors: 150
recentReleases: 0
createdAt: "2019-05-30T10:49:18Z"
lastCommitAt: "2026-10-29T10:21:14Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 50
maintainers: ["Skazitron", "Ataku-B", "stavropouloskonstantinoss"]
openGraphImageUrl: "https://opengraph.githubassets.com/e09180109af4c096f54bc6685128c5717e15c745133e310afa337b27c0999b3d/canonical/canonical.com"
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
