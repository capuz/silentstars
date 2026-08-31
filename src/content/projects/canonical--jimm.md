---
repo: "canonical/jimm"
name: "jimm"
description: "Juju intelligent model manager web service"
readmeQualityOk: true
url: "https://github.com/canonical/jimm"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 15
forks: 13
openIssues: 5
closedIssues: 134
watchers: 7
contributors: 40
recentReleases: 0
createdAt: "2015-04-14T12:49:45Z"
lastCommitAt: "2026-08-31T09:58:48Z"
lastReleaseAt: "2023-07-10T11:41:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 74
maintainers: ["alesstimec", "kian99", "SimoneDutto"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdc52177741aa789b511d2c47102206defd74cb17e775334c1e016605408ee67/canonical/jimm"
---

# JIMM - Juju Intelligent Model Manager

[comment]: <> (Update the chat link below with a JIMM specific room)
<h4 align="center">
</h4>

JIMM is a Go based webserver used to provide extra functionality on top of Juju controllers. 
If you are unfamiliar with Juju, we suggest visiting the [Juju docs](https://juju.is/) - 
the open source orchestration engine for software operators.

JIMM provides the ability to manage multiple Juju controllers from a single location with 
enhanced enterprise functionality.

JIMM is the central component of JAAS (Juju As A Service), where JAAS is a set of services 
acting together to enable storing state, storing secrets and auth.

## Features

JIMM/JAAS provides enterprise level functionality layered on top of your Juju controller like:
- Federated login via an external identity provider using OAuth2.0 and OIDC.
- Fine grained access control with the ability to create user groups.
- A single gateway into your Juju estate.
- The ability to query for information across all your Juju controllers.

For a full overview of the capabilties, check out 
[the…
