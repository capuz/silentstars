---
repo: "jupyterhub/configurable-http-proxy"
name: "configurable-http-proxy"
description: "node-http-proxy plus a REST API"
readmeQualityOk: true
url: "https://github.com/jupyterhub/configurable-http-proxy"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["proxy", "chp", "jupyterhub", "jupyter"]
stars: 273
forks: 141
openIssues: 14
closedIssues: 94
watchers: 19
contributors: 52
recentReleases: 0
createdAt: "2014-08-25T22:28:59Z"
lastCommitAt: "2026-10-31T15:58:01Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 41
maintainers: ["manics", "minrk", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb682e81d82225fbbded14236734949f90bd61df979a719582f7512524980a8a/jupyterhub/configurable-http-proxy"
---

# [configurable-http-proxy](https://github.com/jupyterhub/configurable-http-proxy)

**configurable-http-proxy** (CHP) provides you with a way to update and manage
a proxy table using a command line interface or REST API.
It is a simple wrapper around [node-http-proxy][]. node-http-proxy is an HTTP
programmable proxying library that supports websockets and is suitable for
implementing components such as reverse proxies and load balancers. By
wrapping node-http-proxy, **configurable-http-proxy** extends this
functionality to [JupyterHub] deployments.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
  - [Starting the proxy](#starting-the-proxy)
  - [Setting a default target](#setting-a-default-target)
  - [Command-line options](#command-line-options)
- [Using the REST API](#using-the-rest-api)
  - [REST API Basics](#rest-api-basics)
  - [Authenticating via passing a token](#authenticating-via-passing-a-token)
  - [Getting the routing table](#getting-the-routing-table)
  - [Adding new routes](#adding-new-routes)
  - [Deleting routes](#deleting-routes)
- [Custom error pages](#custom-error-pages)
  - [Setting the path for custom error…
