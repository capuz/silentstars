---
repo: "iftechfoundation/ifdb"
name: "ifdb"
description: "The software behind the Interactive Fiction Database (IFDB)"
readmeQualityOk: true
url: "https://github.com/iftechfoundation/ifdb"
language: "PHP"
languages: ["PHP"]
languagePcts: [81]
stars: 29
forks: 20
openIssues: 450
closedIssues: 410
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2021-01-22T23:14:10Z"
lastCommitAt: "2026-10-21T17:30:57Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 79
undervaluedScore: 52
maintainers: ["dfabulich", "salty-horse"]
openGraphImageUrl: "https://opengraph.githubassets.com/79986be1c6627367b40d6389e87d2d29a511a94586d75344cea8b39f357f1466/iftechfoundation/ifdb"
---

# IFDB

This is the source code for [IFDB](https://ifdb.org), the Interactive Fiction Database.

# Preparing Your Own Development Environment

The IFDB web app is a LAMP app (Linux, Apache, MySQL, PHP). The development environment runs on Docker.

1. Install Docker and Docker Compose. [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

2. Run `./prepare_dev_environment.sh` in this directory. That will download the current latest IFDB database backup from IFArchive, and put it in a place where Docker will expect to find it.

3. Run `docker compose up --build`. That will launch a MySQL Docker container and an Apache container with PHP, available on port 8080.

4. Go to `http://localhost:8080` on your machine. You should see IFDB running. You can login as `ifdbadmin` at `ifdb.org` with the password `secret` to sign in as an administrator. The administrator has access to the "system maintenance panel" at `http://localhost:8080/adminops`.

5. Alternatively, you can login as `test` at `ifdb.org` with the password `secret` to sign in as a regular test user named `Test Tester`.

6. Optionally, you can query the database using phpMyAdmin at `http://localhost:8081`…
