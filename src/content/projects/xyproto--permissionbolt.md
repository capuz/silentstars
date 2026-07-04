---
repo: "xyproto/permissionbolt"
name: "permissionbolt"
description: ":nut_and_bolt: Middleware for keeping track of users, login states and permissions"
url: "https://github.com/xyproto/permissionbolt"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["bcrypt", "middleware", "permissions", "user-auth", "bolt-database", "boltdb", "auth"]
stars: 88
forks: 8
openIssues: 1
closedIssues: 7
watchers: 6
contributors: 2
recentReleases: 0
createdAt: "2015-05-22T14:05:44Z"
lastCommitAt: "2026-07-04T19:19:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 72
undervaluedScore: 29
maintainers: ["xyproto"]
openGraphImageUrl: "https://opengraph.githubassets.com/781f00b66388e9d81dd0acf5fd4655ccc817c3cede72ae06618457c2a8cb1abd/xyproto/permissionbolt"
---

# Permissionbolt

Middleware for keeping track of users, login states and permissions.

Uses [Bolt](https://github.com/boltdb/bolt) for the database. For using [Redis](http://redis.io) as a backend instead, look into [permissions2](https://github.com/xyproto/permissions2).

Features and limitations
------------------------

* Uses secure cookies and stores user information in a Bolt database.
* Suitable for using Bolt database file (in a similar fashion to SQLite), registering/confirming users and managing public/user/admin pages.
* Supports registration and confirmation via generated confirmation codes.
* Tries to keep things simple.
* Only supports "public", "user" and "admin" permissions out of the box, but offers functionality for implementing more fine grained permissions, if so desired.
* Supports [Negroni](https://github.com/codegangsta/negroni), [Martini](https://github.com/go-martini/martini), [Gin](https://github.com/gin-gonic/gin), [Goji](https://github.com/zenazn/goji) and plain `net/http`.
* Should also work with other frameworks, since the standard http.HandlerFunc is used everywhere.
* The default permissions can be cleared with the Clear() function.

##…
