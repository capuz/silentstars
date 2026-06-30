---
repo: "dbca-wa/it-assets"
name: "it-assets"
description: "DBCA IT assets management system"
url: "https://github.com/dbca-wa/it-assets"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 13
forks: 12
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2016-02-26T05:42:42Z"
lastCommitAt: "2026-06-30T06:50:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 78
maintainers: ["ropable", "AlasdairNation", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51329ffddbedb7031042cf800e29a7ea3c342dd78d0b5d69ed9d6c8dd9b62a90/dbca-wa/it-assets"
---

# IT Assets System

This project consists of a Django application used by the Department of
Biodiversity, Conservation and Attractions to record and manage IT assets
and analytics.

## Installation

Dependencies for this project are managed using [uv](https://docs.astral.sh/uv/).
With uv installed, change into the project directory and run:

    uv sync

Activate the virtualenv like so:

    source .venv/bin/activate

To run Python commands in the activated virtualenv, thereafter run them like so:

    python manage.py

Manage new or updated project dependencies with uv also, like so:

    uv add newpackage==1.0

## Environment variables

This project uses confy to set environment variables (in a `.env` file).
The following variables are required for the project to run:

    DATABASE_URL="postgis://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
    SECRET_KEY="ThisIsASecretKey"

## Running

Use `runserver` to run a local copy of the application:

    python manage.py runserver 0:8080

Run console commands manually:

    python manage.py shell_plus

## Unit tests

Run unit tests and obtain test coverage as follows:

    coverage run manage.py test --keepdb
    coverage report -m

## Docker…
