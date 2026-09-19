---
repo: "macbre/farerskie-kadry-feed"
name: "farerskie-kadry-feed"
description: "Turn Instagram and Facebook feeds into RSS"
readmeQualityOk: true
url: "https://github.com/macbre/farerskie-kadry-feed"
homepage: "https://macbre.github.io/farerskie-kadry-feed/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [55, 45]
topics: ["faroese", "rss-feed"]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-07-18T09:46:35Z"
lastCommitAt: "2026-09-19T02:46:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 62
maintainers: ["macbre"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ff21e5e5fa66dd155a18cbac2f3d7f8311b828afdd74e37e116dd2ef8feaea4/macbre/farerskie-kadry-feed"
---

# py-facebook-feed

## Install

```
python3 -m venv env. env/bin/activate
. env/bin/activate
pip install -r requirements.txt
python main.py
```

## Access token

Make sure that `FB_TOKEN` env variable is set to the proper access token.

* https://developers.facebook.com/tools/accesstoken/
* https://developers.facebook.com/tools/debug/accesstoken/
* https://developers.facebook.com/docs/facebook-login/guides/access-tokens/get-long-lived/#long-lived-page-token 

For iterating over Instagram feed you need the FB access token with the `instagram_basic` right.
