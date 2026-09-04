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
stars: 149
forks: 157
openIssues: 35
closedIssues: 687
watchers: 17
contributors: 192
recentReleases: 0
createdAt: "2019-05-30T10:49:18Z"
lastCommitAt: "2026-09-04T08:10:49Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 51
maintainers: ["Skazitron", "Ataku-B", "nathanclairmonte"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d0f3db83cf3b8366c3829b866f85f18252a97b77c826934554cc060760a980f/canonical/canonical.com"
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
