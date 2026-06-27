---
repo: "getcubby/cubby"
name: "cubby"
description: "This is a mirror of https://git.cloudron.io/apps/cubby"
url: "https://github.com/getcubby/cubby"
homepage: "https://getcubby.org/"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [65, 26]
stars: 5
forks: 0
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-12-15T12:57:08Z"
lastCommitAt: "2026-06-27T00:26:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 83
maintainers: ["gramakri", "nebulade"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2444dab6541a3796a6cbf8e54d64d77e3aeb810dbdab167cb813e36a59e704e/getcubby/cubby"
---

# Cubby

Cubby is a pure filesharing app with some built-in viewers (text, code, pdf, images, ...).
It further supports an external collabora office installation.

The app is mainly developed by the [Cloudron](https://cloudron.io) team to provide an open source file sharing application.

Currently only OpenID as authentication is supported.

## Issues and Feature requests

Report any issues or feature request at https://forum.cloudron.io/category/132/cubby

## Deployment

Download and build the app:
```
curl -L https://git.cloudron.io/cubby/cubby/-/archive/master/cubby-master.tar | tar x
cd cubby-master
npm install
cd frontend
npm install
npm run build
```

Expose environment variables to configure the app:
```
# public origin
APP_ORIGIN="https://example.com"    # must include schema http:// or https://

# local server port, usually behind a reverse proxy
PORT="3000"

# database
POSTGRESQL_HOST="postgres"
POSTGRESQL_PORT="3306"
POSTGRESQL_DATABASE="cubby"
POSTGRESQL_USERNAME="root"
POSTGRESQL_PASSWORD="password"

# OpenID provider
OIDC_ISSUER_BASE_URL="https://openid.provider.com"
OIDC_CLIENT_ID="client-id"
OIDC_CLIENT_SECRET="client-secret"

# SMTP server (optional)…
