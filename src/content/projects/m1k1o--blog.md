---
repo: "m1k1o/blog"
name: "blog"
description: "Lightweight self-hosted facebook-styled PHP blog."
readmeQualityOk: true
url: "https://github.com/m1k1o/blog"
language: "PHP"
languages: ["PHP", "JavaScript", "CSS"]
languagePcts: [51, 26, 23]
topics: ["blog", "php", "lightweight", "self-hosted", "docker", "facebook"]
stars: 307
forks: 37
openIssues: 12
closedIssues: 29
watchers: 10
contributors: 10
recentReleases: 0
createdAt: "2016-12-27T20:22:20Z"
lastCommitAt: "2026-10-27T09:17:22Z"
lastReleaseAt: "2020-11-06T09:11:56Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 20
maintainers: ["m1k1o", "az10b"]
openGraphImageUrl: "https://opengraph.githubassets.com/f676fccc17b3f96051b138df07188429af0f24271342691271b752ada8a3d3e9/m1k1o/blog"
fundingLinks: ["GITHUB:https://github.com/m1k1o"]
---

# blog
This is a simple self-hosted, lightweight, singe-user PHP blog, where you can create your own Facebook-like feed. Give read access to other people, and you can share rich text with photos including highlighted code or links.

In this context lightweight means:
* No npm dependency, there won't be an annoying 1GB `node_modules` directory.
* No pipeline. What you see is pure code without a need to install it.
* No overhead, essential features, simple usage.

## Screenshots

## Zero configuration setup
Container will run without any initial configuration needed using SQLite as database provider. For better performance consider using MySQL.

```sh
docker run -d -p 80:80 -v $PWD/data:/var/www/html/data m1k1o/blog:latest
```

You can set environment variables, prefixed with `BLOG_` and uppercase. They can be found in `config.ini`.
```sh
docker run -d \
  -p 80:80 \
  -e "TZ=Europe/Vienna" \
  -e "BLOG_TITLE=Blog" \
  -e "BLOG_NAME=Max Musermann" \
  -e "BLOG_NICK=username" \
  -e "BLOG_PASS=password" \
  -e "BLOG_LANG=en" \
  -v $PWD/data:/var/www/html/data \
  m1k1o/blog:latest
```

Or for docker-compose format, see…
