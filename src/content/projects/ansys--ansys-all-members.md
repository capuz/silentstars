---
repo: "ansys/ansys-all-members"
name: "ansys-all-members"
description: "Repository for updating the ansys/all-members team automatically"
url: "https://github.com/ansys/ansys-all-members"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 5
openIssues: 0
closedIssues: 9
watchers: 6
contributors: 1503
recentReleases: 0
createdAt: "2022-05-27T06:38:54Z"
lastCommitAt: "2026-07-03T12:22:14Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 64
maintainers: ["dependabot[bot]", "pyansys-automation", "moe-ad"]
openGraphImageUrl: "https://opengraph.githubassets.com/9439e1ca4c4f8fea8589d8da1e762cd8cf2fff2f8aa951989c35edce54c19f78/ansys/ansys-all-members"
---

# Ansys all-members team

Repository for updating the ansys/all-members team automatically.

## Table of contents

- [Ansys all-members team](#ansys-all-members-team)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [How does it work?](#how-does-it-work)
  - [Requirements](#requirements)

## Introduction
GitHub organizations do not provide an off-the-shelf capability of creating
and maintaining up-to-date an *all-members* team. The goal of the ``update_team.py`` script
in this repository is to:

* Provided an org and an *all-members* team (i.e. ``@<MY_ORG>/all-members``), update its
members on the execution of this script.
* Provide the capability to automate the update of the members using GitHub Actions.

Feel free to fork this repository for your own application. You are also welcome to help
contribute to it in any possible way! Please submit an issue with any proposal you may have.

## How does it work?
This repository basically contains a simple Python script ``update_team.py``. Within this
script, there are two main variables which a user must take into account:

* ``MY_PAT``: this variable will basically include your personal authentication…
