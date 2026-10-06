---
repo: "python-scim/scim2-server"
name: "scim2-server"
description: "SCIM server core for any storage and web framework"
readmeQualityOk: true
url: "https://github.com/python-scim/scim2-server"
homepage: "https://scim2-server.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["provisioning", "rfc7643", "rfc7644", "scim", "scim2"]
stars: 15
forks: 4
openIssues: 1
closedIssues: 6
watchers: 7
contributors: 3
recentReleases: 1
createdAt: "2024-08-19T12:15:37Z"
lastCommitAt: "2026-10-06T10:42:35Z"
lastReleaseAt: "2026-09-25T06:53:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 70
maintainers: ["azmeuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/c237b708c22479f908152751b823827803ba50792c5d62ef10817f14f945017a/python-scim/scim2-server"
fundingLinks: ["GITHUB:https://github.com/yaal-coop"]
---

# scim2-server

A Python library that serves the SCIM protocol over any storage, built upon
[scim2-models](https://scim2-models.readthedocs.io), following the
[RFC7643](https://datatracker.ietf.org/doc/html/rfc7643.html) and
[RFC7644](https://datatracker.ietf.org/doc/html/rfc7644.html) specifications.
It validates the requests, applies them to the resources and builds the responses.
The application only reads and writes the resources.

It comes with an in-memory storage, WSGI and ASGI applications with no dependency, and a
`scim2-server` command that serves a test server.

## Who is it for?

scim2-server is for projects that need to:

- serve a standalone SCIM server;
- add SCIM to an existing application, with SCIM models that describe its data;
- test a SCIM client against a working server, from the `scim2-server` command, a container, or
  the [pytest-scim2-server](https://github.com/pytest-dev/pytest-scim2-server) fixture.

## What's SCIM anyway?

SCIM stands for System for Cross-domain Identity Management, and it is a provisioning protocol.
Provisioning is the action of managing a set of resources across different services, usually users and groups.
SCIM is often used between…
