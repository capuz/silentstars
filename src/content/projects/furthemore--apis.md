---
repo: "furthemore/APIS"
name: "APIS"
description: "Event Management System for Fan Conventions"
readmeQualityOk: true
url: "https://github.com/furthemore/APIS"
homepage: "http://www.furthemore.org/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [56, 25]
stars: 14
forks: 12
openIssues: 13
closedIssues: 109
watchers: 9
contributors: 11
recentReleases: 0
createdAt: "2016-07-14T16:02:58Z"
lastCommitAt: "2026-07-07T06:38:16Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 76
maintainers: ["dependabot[bot]", "Syfaro", "rechner"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fe92126600187addbcf6dec81a39382ca63fa262499c0144a68ca7d332b029b/furthemore/APIS"
---

# APIS EventManager

 [](https://coveralls.io/github/furthemore/APIS)

Data Model snapshot (7 December 2020): https://i.imgur.com/A4fPDf5.png

Stack:
  + Ubuntu 22.04 (LTS)
  + Python 3.14
  + Django 6.0
  + PostgreSQL 16.10
  + Bootstrap 3/jQuery 1.12
  + SolidJS
  + MQTT event passing

## Features
  + Take payments for pre-registration using [Square][square], both online
    and in-person with an [iPad app][ipad] as a customer-facing
    display, with cash drawer and receipt printer integration.
  + Manage staff registration and department hierarchies.
  + Handle dealer applications, registration, and payments.
  + Create limited-use discounts.
  + Handle on-site registration on your own kiosks, or via a public URL.
  + Populate attendee information by scanning their ID.
  + Print badges on the fly with a custom template on any compatible card
    or label printer, with Unicode-supported fonts (Emoji!)
  + Protect admin and volunteer logins with TOTP 2-Factor or FIDO U2F.

## Quick start
### Running Using Published Docker Images

    # Install docker using the instructions at either:
    #…
