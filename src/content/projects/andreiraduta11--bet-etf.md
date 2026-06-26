---
repo: "andreiraduta11/bet-etf"
name: "bet-etf"
description: "This repository consists of a transaction order calculator. Its purpose is to help investors better copy the BET index, ie. the behavior of the Romanian stock market."
url: "https://github.com/andreiraduta11/bet-etf"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 11
forks: 6
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-07-14T10:36:15Z"
lastCommitAt: "2026-06-26T21:33:10Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 70
undervaluedScore: 38
maintainers: ["andreiraduta11"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0b41e90b0afb7a93efa9d1988a4c66c59445d98d9889a37dd0a4349ab343f1c/andreiraduta11/bet-etf"
---

# bet-etf

The purpose of this repository is to help investors better copy the BET Index (ie. the behavior of the Romanian stock market). It consists of a transaction order calculator, so each investor can build its BET Index Exchange-Traded Fund.

# Design

There are 2 main components:

1.  `Collector` - module that fetch symbols list and details from the web.
    The sources of the information are the Bucharest Stock Exchange and the Tradeville broker websites.

2.  `Dash Application` - module with which the user will interact.
    This contains the Dash and HTML components and also the callback function that updates the content of the page at every change that user has made.

The Docker versions also contain other components like Grafana Dashboard and MySQL database.

# Implementation

The project has the following implementations:

1.  `PythonAnywhere` - <https://andreiraduta.pythonanywhere.com>
2.  `Docker Compose` - simple Docker application.
3.  `Docker Swarm` - built to deploy a stack of services on a swarm.

# Usage

The instructions can be found on the website page. It looks like this:
