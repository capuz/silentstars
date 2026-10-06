---
repo: "nodef/extra-tunnel"
name: "extra-tunnel"
description: "Tunnel web server from private IP."
readmeQualityOk: true
url: "https://github.com/nodef/extra-tunnel"
homepage: "https://www.npmjs.com/package/extra-tunnel"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [79, 21]
topics: ["extra", "tunnel", "remote", "host", "web", "server", "private", "ip"]
stars: 28
forks: 44
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2017-10-19T20:00:54Z"
lastCommitAt: "2026-10-06T10:41:24Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 40
maintainers: ["wolfram77"]
openGraphImageUrl: "https://opengraph.githubassets.com/383aa01be962c029ab2e3430df4ee456de843c7613847b14768070e87ca5ba3f/nodef/extra-tunnel"
---

**Tunnel web server from private IP.**

A tunneling system, where the *tunnel* acts both as a *middle-man* and an
*HTTP server*. This enables *users* to access an HTTP server running
**locally**, through a *public-ip tunnel server*, which can be hosted on a
*cloud server*, like *[Heroku]*. The tunnel also supports **channels**, other
than HTTP which enables users to access *TCP servers*, like *SSH/FTP*,
running locally.

The system has 3 parts:
- **Tunnel**: acts as the tunnel server
- **Server**: enables local server to be hosted through *Tunnel*
- **Client**: enables local clients to request through *Tunnel*

Think of *Tunnel* like a *school*. It has multiple *channels*, like a school has
multiple *classrooms*. Each *channel* has a *Server*, like each classroom has a
*class teacher*.. Any number of *Clients* can connect to a *channel* and send
requests to the *Server*, and so can any number of *students* in a *classroom*
ask questions to their *class teacher*.

## Setup

### Tunnel

In order to start, we need a *Tunnel* first. Let's set it up:
1. Get *Tunnel* to your [GitHub].
    1. Create an account on [GitHub].
    2. Goto [extra-tunnel] repository, and fork it.
2. Create…
