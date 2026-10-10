---
repo: "256dpi/fire"
name: "fire"
description: "An idiomatic micro-framework for building Ember.js compatible APIs with Go."
readmeQualityOk: true
url: "https://github.com/256dpi/fire"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ember", "emberjs", "framework", "golang", "go", "mongodb", "oauth2", "json-api", "jsonapi"]
stars: 54
forks: 3
openIssues: 2
closedIssues: 3
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2016-05-15T22:04:47Z"
lastCommitAt: "2026-10-10T10:03:17Z"
lastReleaseAt: "2016-11-01T21:56:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 83
undervaluedScore: 29
maintainers: ["256dpi"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4bb3273aa090619d61f3881d72b2affe95440486ec04d124d6689d34dbc64c3/256dpi/fire"
---

# Go on Fire

**An idiomatic micro-framework for building Ember.js compatible APIs with Go.**

## Introduction

**Go on Fire** is built on top of the wonderful built-in [http](https://golang.org/pkg/net/http) package, implements the [JSON API](http://jsonapi.org) specification through the dedicated [jsonapi](https://github.com/256dpi/jsonapi) library, uses the official [mongo](https://github.com/mongodb/mongo-go-driver) driver for persisting resources with [MongoDB](https://www.mongodb.com), and leverages the dedicated [oauth2](https://github.com/256dpi/oauth2) library to provide out-of-the-box support for [OAuth2](https://oauth.net/2/) authentication using [JWT](https://jwt.io) tokens. Additionally, it provides packages for request authorization, asynchronous job processing, and WebSocket-based event sourcing.  

The deliberate and tight integration of these components provides a very simple and extensible set of abstractions for rapidly building backend services for websites that use [Ember.js](http://emberjs.com) as their frontend framework. Of course, it can also be used in conjunction with any other single-page application framework or as a backend for native mobile…
