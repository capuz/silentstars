---
repo: "titpetric/pendulum"
name: "pendulum"
description: "A simple markdown editor for static files (Hugo, Nexo, Jekyll, MkDocs, ...)"
readmeQualityOk: true
url: "https://github.com/titpetric/pendulum"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [79]
topics: ["hugo", "static-site", "static-site-generator", "jekyll", "nexo", "php", "slim-framework", "vuejs2"]
stars: 162
forks: 22
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2017-08-18T21:28:25Z"
lastCommitAt: "2026-11-17T12:20:34Z"
lastReleaseAt: "2017-08-25T13:41:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 38
maintainers: ["titpetric"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f802244611ce2e59e8d87732a3322b2261c9a1b9332ea8f136de93015cd6141/titpetric/pendulum"
---

# Pendulum

An editor for the markdown and text files in a folder. It runs where the files are, saves them in place, and commits every save when the folder is a git repository.

## Run it

```sh
go install github.com/titpetric/pendulum/cmd/pendulum@latest
pendulum ~/blog/content
```

Binaries for linux, macOS and windows are on [the releases page](https://github.com/titpetric/pendulum/releases/latest). In docker, mount the folder to edit:

```sh
docker run -d --name pendulum --restart=always \
	-p 8080:8080 \
	-v $(pwd):/app/contents \
	titpetric/pendulum
```

Either way the editor is on [localhost:8080](http://localhost:8080/).

| Flag        | Default                     | What it does                                  |
|-------------|-----------------------------|-----------------------------------------------|
| `-addr`     | `:8080`                     | address to listen on                          |
| `-contents` | `.`                         | folder to edit                                |
| `-ext`      | `jpg,jpeg,png,gif,svg,webp` | extensions an upload may use                  |
| `-autosave` | `0`                         | save an idle document by itself after this…
