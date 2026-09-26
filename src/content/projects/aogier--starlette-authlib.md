---
repo: "aogier/starlette-authlib"
name: "starlette-authlib"
description: "A drop-in replacement for Starlette session middleware, using Authlib's jwt"
readmeQualityOk: true
url: "https://github.com/aogier/starlette-authlib"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["starlette", "starlette-middleware", "asgi", "authlib", "jwt-middleware", "jwt"]
stars: 77
forks: 11
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2020-02-20T17:13:42Z"
lastCommitAt: "2026-09-26T08:46:02Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 30
maintainers: ["aogier", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8df2e03af7fe6d8ceacd8e25eac8456fb81eadf6d9ebefff642b5dbf68ecae7e/aogier/starlette-authlib"
---

# Starlette Authlib Middleware

## Introduction

A drop-in replacement for Starlette session middleware, using [authlib's jwt](https://docs.authlib.org/en/latest/jose/jwt.html).

## Rationale

It is sometimes necessary to integrate a Starlette-based application into more
complex scenarios where other actors need to make decisions based on session
data. This middleware makes this possible by using a standard JWT token instead
of the Starlette-encrypted one, thus simplifying interaction with third-party
components.

## Requirements

* Python 3.10+
* Starlette 0.9+

## Installation

```console
pip install starlette-authlib
```

## Usage

A complete example where we drop-in replace standard session middleware:

```python
from starlette.applications import Starlette

from starlette_authlib.middleware import AuthlibMiddleware as SessionMiddleware

app = Starlette()

app.add_middleware(SessionMiddleware, secret_key='secret')
```

Other things you can configure either via environment variables or `.env` file:

* `DOMAIN` - declare cookie domain. App must be under this domain. If empty,
  the cookie is restricted to the subdomain of the app (this is useful when you
  write eg. SSO portals)…
