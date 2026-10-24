---
repo: "sintaxi/rolodex"
name: "rolodex"
description: "Node user management system using redis"
readmeQualityOk: true
url: "https://github.com/sintaxi/rolodex"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 41
forks: 9
openIssues: 1
closedIssues: 2
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2011-10-17T05:56:39Z"
lastCommitAt: "2026-10-24T08:08:43Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 31
maintainers: ["sintaxi"]
openGraphImageUrl: "https://opengraph.githubassets.com/27783509faf165318150c09e3ffbffc19a7f1dfcbf28c9cf082b5d6d3264444f/sintaxi/rolodex"
---

# rolodex

## Instalation

I always recomend you bundle your dependencies with your application. To do
this, create a `package.json` file in the root of your project with the
minimum information...

    {
      "name": "yourapplication",
      "version": "0.1.0",
      "dependencies": {
        "rolodex": "0.8.0"
      }
    }

Then run the following command using npm...

    npm install

OR, if you just want to start playing with the library run...

    npm install rolodex

## Docs

To create a rolodex object that gives us user management functions we must pass
in a configuration object.

    var rolodex = require("rolodex")(config)

## Configuration

Rolodex can run in two different modes. `master` and `slave`.

Example of master configuration object...

    {
      "role": "master",
      "email": {
        "postmark": "dc2d8r99-771e-4d6f-95b8-3403e1bd5poi",
        "defaults": {
          "from"    : "thurston.moore@sonicyouth.com",
          "reply_to": "kim@sonicyouth.com"
        }
      },
      "redis": {
        ...
      }
    }

Example of master configuration object...

    {
      "role": "slave",
      "master": {
        ...
      }
    }

### Errors

Anytime…
