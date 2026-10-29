---
repo: "epfl-si/wp-ops"
name: "wp-ops"
description: "DevOps infrastructure for the WordPress-at-EFPL project"
readmeQualityOk: true
url: "https://github.com/epfl-si/wp-ops"
language: "HTML"
languages: ["HTML"]
languagePcts: [94]
stars: 6
forks: 5
openIssues: 2
closedIssues: 36
watchers: 5
contributors: 33
recentReleases: 0
createdAt: "2018-11-02T17:49:51Z"
lastCommitAt: "2026-10-29T14:07:07Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 84
maintainers: ["dwesh163", "domq", "rosamaggi"]
openGraphImageUrl: "https://opengraph.githubassets.com/49e606771f3003d708eb06ba384c4b0fd1644b8b181dd67b20d2d0312cfab7fb/epfl-si/wp-ops"
---

WordPress @ EPFL: DevOps Boogaloo

In this repository you will find:

- The Dockerfiles and build dependencies for all custom-made Docker images

- Some Ansible code to manage state on-disk and inside the Kubernetes data store

# Prerequisites and Tools

## OpenShift

1. [Install the OpenShift command-line tools]
1. Browse https://pub-os-exopge.epfl.ch/ and log in using your GASPAR credentials
1. From the “you” menu in the top right, select Copy Login Command
1. Paste into a terminal window
1. Check your access, e.g. <pre>oc get pods -n wwp-test</pre>

## Ansible

[Install Ansible] and familiarize yourself with how it works.

## Keybase and eyaml

These are required to (re)deploy QA and production secrets.

💡 You can get a lot of mileage out of Ansible and OpenShift even if
you *do not* have access to the Keybase teams. In that case,
feel free to skip this section.

1. Install eyaml with<pre>gem install hiera-eyaml</pre>
1. [Install Keybase] and create an account for yourself
1. Obtain membership in the relevant Keybase teams

# Operations

To be documented

# Contributor list

Big up to all the following people, without whom this project will not be

[access to the test and/or…
