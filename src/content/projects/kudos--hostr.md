---
repo: "kudos/hostr"
name: "hostr"
description: "Mirrored from https://cremin.dev/jonathan/hostr"
readmeQualityOk: true
url: "https://github.com/kudos/hostr"
homepage: "https://hostr.co"
language: "JavaScript"
languages: ["JavaScript", "EJS"]
languagePcts: [46, 28]
topics: ["nodejs", "file-sharing"]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2015-08-23T23:46:03Z"
lastCommitAt: "2026-10-03T16:10:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 62
maintainers: ["kudos"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f8d5c351c4c6e27c71787187f5b801546ce5b47d27bb56b1027cd0118d52b96/kudos/hostr"
---

# Hostr

## About
Hostr is a project I started over ten years ago when I set out to learn web development. Since then it's seen over 100,000 signups and served up over 2 billion file downloads.

It has been through many iterations, but in its current incarnation Hostr uses [Hono](https://hono.dev/) for the backend, and [React](https://react.dev/) and [Webpack](https://webpack.js.org/) for the frontend.

## Getting Started

### Dependencies

Everything is taken care of by a `make build`.

### Enviroment Variable Configuration

See [`.envrc.example`](https://github.com/kudos/hostr/blob/HEAD/.envrc.example). Copy it to `.envrc`, modify and `source .envrc` for development. [direnv](https://github.com/direnv/direnv) is pretty nice for doing this automatically when you `cd` into your work directory.

## Usage

### Start the app

```
$ make compose-up
```

### Initialise the environment

```
$ make init migrate
```

### Run the tests

```
$ make test
```

## Licence

My primary motivation is to get to work on Hostr in public. Contributions are welcome and all Javascript is Apache licenced, however the brand is not. The brand includes the name, logo images, CSS and marketing HTML.
