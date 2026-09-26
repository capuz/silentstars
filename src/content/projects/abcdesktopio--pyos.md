---
repo: "abcdesktopio/pyos"
name: "pyos"
description: "abcdesktop API services"
readmeQualityOk: true
url: "https://github.com/abcdesktopio/pyos"
homepage: "https://abcdesktopio.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["python3", "cherrypy", "c", "ntlm-hash", "kerberos", "kubernetes", "pyos"]
stars: 5
forks: 3
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2021-01-07T08:35:11Z"
lastCommitAt: "2026-09-26T08:47:42Z"
lastReleaseAt: "2022-06-15T07:23:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 66
maintainers: ["alexandredevely", "Matt307082", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9f5c456d445425fb03d46875f8e25eeeddf90a8012e9b699d69c7ffd3a33790/abcdesktopio/pyos"
---

# pyos

## Summary

pyos is the backend control plane for abcdesktop. It exposes a CherryPy HTTP API used to authenticate users, create, resume, and remove cloud desktops, launch applications within those desktops, manage user desktops, and perform operator actions.

At runtime, pyos mediates between:

- Clients (web frontend and admin tools)
- Identity providers (OAuth2, LDAP/AD, anonymous, prelogin/logmein flows)
- Infrastructure services (Kubernetes, MongoDB, Memcached, DNS helpers)

The main service process is started by `od.py` and mounts API endpoints under `/API`.

## Flowchart

The principal workflow is an API client authenticating through configured providers, receiving JWT-based identity, opening an application, and obtaining desktop/application routing backed by Kubernetes. Controllers also expose management, application catalog, datastore, configuration, messaging, accounting, user, and store operations. 

``` mermaid
---
config:
  theme: redux
---
flowchart TD

subgraph group_api["API Surface"]
  node_auth_api["Authentication API<br/>[auth_controller.py]"]
  node_composer_api["Composer API"]
  node_core_api["Core API<br/>[core_controller.py]"]…
