---
repo: "yaal-coop/canaille"
name: "canaille"
description: "Lightweight Identity and Autorization Management mirror https://gitlab.com/yaal/canaille"
readmeQualityOk: true
url: "https://github.com/yaal-coop/canaille"
homepage: "https://canaille.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["oauth2", "oauth", "oauth2-server", "openid-connect", "openidconnect", "openid", "openid-provider", "openldap", "ldap", "ldap-authentication"]
stars: 29
forks: 5
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 26
recentReleases: 0
createdAt: "2020-10-23T07:11:52Z"
lastCommitAt: "2026-10-29T21:21:07Z"
lastReleaseAt: "2025-03-28T19:49:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 80
undervaluedScore: 56
maintainers: ["azmeuk", "weblate", "sblondon"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/306557109/b95ecf2c-ab2d-4f2d-ae2c-530fdb362bd1"
fundingLinks: ["GITHUB:https://github.com/yaal-coop"]
---

**Canaille** is a French word meaning *rascal*. It is roughly pronounced **Can I?**,
as in *Can I access your data?* Canaille is a lightweight identity and authorization management software.

It aims to be very light, simple to install and simple to maintain.
It is **self-hosted** and **free and open source**: your users' identity data stays on your own infrastructure, and every feature lives in the MIT-licensed core — no paywalled edition, no proprietary add-on.

Its main features are :
- User profile and groups management;
- Authentication, registration, email confirmation, "I forgot my password" emails;
- Authorization management with [OpenID Connect](https://openid.net/developers/how-connect-works) identity;
- Provisioning with [SCIM](https://scim.libre.sh);
- SQLite, PostgreSQL and OpenLDAP support;
- Customizable, themable;
- The code is easy to read and easy to edit!

# Try it!

## Locally

Either run the development server

```bash
git clone https://gitlab.com/yaal/canaille.git && cd canaille
uv sync --all-extras --group devserver && uv run devserver
```

or run the Docker image

```bash
docker run -it -p 5000:5000 yaalcoop/canaille:latest
```

[Read more about…
