---
repo: "wikimedia/operations-deployment-charts"
name: "operations-deployment-charts"
description: "Helm deployment charts for Wikimedia. Mirror from https://gerrit.wikimedia.org/g/operations/deployment-charts - our actual code is hosted with Gerrit (please see https://www.mediawiki.org/wiki/Developer_access for contributing)"
readmeQualityOk: true
url: "https://github.com/wikimedia/operations-deployment-charts"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [81]
stars: 9
forks: 7
openIssues: 1
closedIssues: 0
watchers: 12
contributors: 147
recentReleases: 0
createdAt: "2017-12-20T16:52:10Z"
lastCommitAt: "2026-09-14T09:11:51Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 70
undervaluedScore: 61
maintainers: ["blake353", "sfaci", "brouberol"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0c2f1cc9058a067bf36b5a5ef31326b9a5597eccbc91d29f74273a98821f046/wikimedia/operations-deployment-charts"
---

Wikimedia Helm Charts
=====================

This is the repo that powers <https://helm-charts.wikimedia.org/stable/>.

Here you will find the various helm charts the Wikimedia Foundation uses
in developing software and deploying it to production.

Creating a new chart
--------------------

If you want to create a new chart:

### Pre-requisites ###

* Python 3.9 or higher
* [sextant](https://gitlab.wikimedia.org/repos/sre/sextant/-/blob/main/README.md), our tool to manage helm charts, which you can install with
  `pip3 install sextant`
* Ruby 3.0 or higher
* `rake`, the ruby task executor
* docker or another container engine

### Steps ###

1. run `./create_new_service.sh`
2. follow the prompts. This will create your chart under `charts/<your-chart-name>`
3. Modify the default chart to fit your needs
4. Validate your new chart with our CI system: `rake run_locally["check_charts[lint/validate\,<your-chart-name>]"]`. WARNING: on M1 macs this could be unbearably slow at the moment.
5. test the new chart in minikube. WARNING: on M1 macs this could be very slow at the moment.
6. commit and upload the change to [Gerrit](https://gerrit.wikimedia.org)
7. wait for/request a review

###…
