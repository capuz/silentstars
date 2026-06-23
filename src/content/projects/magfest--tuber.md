---
repo: "magfest/tuber"
name: "tuber"
description: "Event Management Software, still in early development."
url: "https://github.com/magfest/tuber"
homepage: "https://magfest-tuber.readthedocs.io/en/latest/"
language: "CSS"
languages: ["CSS"]
languagePcts: [75]
topics: ["event-management", "shifts", "staff-management", "registration-system", "web-application", "vue", "vuex", "flask", "sqlalchemy"]
stars: 13
forks: 4
openIssues: 26
closedIssues: 53
watchers: 10
contributors: 14
recentReleases: 0
createdAt: "2019-09-08T20:43:52Z"
lastCommitAt: "2026-06-23T23:17:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 38
maintainers: ["bitbyt3r"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0f016f97b8b92c518ecfda2aefaeae0f90729a078781f45df823fb1ef66a19d/magfest/tuber"
---

# Tuber 🥔

</div>

Table of Contents
=================

* [Deployment](#deployment)
  * [Using Docker](#using-docker)

* [Development](#development)
  * [Backend](#backend)
  * [Frontend](#frontend)
  * [Database Migrations](#database-migrations)
  * [Troubleshooting](#troubleshooting)
    * [Mac Developer Setup](#mac-developer-setup)
    * [Alembic with Multiple Heads](#alembic-with-multiple-heads)

## Deployment

Tuber needs a database, a session store, and a job store as well as a web server. For testing and development you can use a single sqlite database as the database, session store and job store while using the build-in python and node webservers for a very simple deployment. Larger systems will benefit greatly from using a dedicated database instance (generally postgres), a redis server for sessions and jobs, and nginx or apache as a webserver.

There are numerous ways to configure things, but we try to make the most common was as simple as possible to implement.

### Using Docker

The latest version of Tuber is published to GitHub Packages as `ghcr.io/magfest/tuber-frontend:latest` and `ghcr.io/magfest/tuber-backend:latest`. [You can view them…
