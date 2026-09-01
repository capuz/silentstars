---
repo: "manuelarte/gowasp"
name: "gowasp"
description: "Go application to explain some of the main 🌐 OWASP vulnerabilities ☣️"
readmeQualityOk: true
url: "https://github.com/manuelarte/gowasp"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [46, 22]
topics: ["golang", "owasp-top-10", "training", "vulnerabilities", "websecurity"]
stars: 14
forks: 2
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-05T14:36:37Z"
lastCommitAt: "2026-09-01T08:42:48Z"
lastReleaseAt: "2025-11-09T03:54:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 47
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f7f10e154cc406663cf2f9a2ba10b37c4331efa762cd51ba1e566be53910d194/manuelarte/gowasp"
---

# GOwasp

GOwasp simulates a vulnerable web application built with [Go][go] and [Vue.js][vuejs].
It showcases some of the most common security flaws found in modern web applications, based on the [OWASP Top 10](https://owasp.org/www-project-top-ten/) list.

The project encourages hands-on learning:

1. Exploit each vulnerability.
2. Understand the risk.
3. Apply the fix.

## 🔧 Prerequisites

* [Go](https://go.dev/doc/install)
* [pnpm](https://pnpm.io/)
* [Docker](https://docs.docker.com/get-docker/)

## 🚀Getting started

To run the app, in the root directory type:

```bash
make r
```

If you want to run it with Docker 🐳 locally, use:

```bash
make dr
```

Or without building it locally:

```bash
docker run -p 8083:8083 ghcr.io/manuelarte/gowasp:v0.0.6
```

You can find the Swagger UI in [swagger/index.html](http://localhost:8083/swagger/index.html).

## 🛠️ Application overview

Once the application is up and running, you can begin by exploring its core features.

### 🔑 Login/Signup page

Start by navigating to the [signup page][signup]. Try creating a user account with the following credentials:

```yaml
username: test
password: test
```

### 🏠 Welcome page

After logging in…
