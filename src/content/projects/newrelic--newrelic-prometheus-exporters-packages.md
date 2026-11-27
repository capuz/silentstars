---
repo: "newrelic/newrelic-prometheus-exporters-packages"
name: "newrelic-prometheus-exporters-packages"
description: "Repository for packaging Prometheus exporters made by the community."
readmeQualityOk: true
url: "https://github.com/newrelic/newrelic-prometheus-exporters-packages"
language: "Go"
languages: ["Go", "Shell", "Go Template"]
languagePcts: [45, 27, 22]
stars: 6
forks: 11
openIssues: 3
closedIssues: 44
watchers: 7
contributors: 43
recentReleases: 0
createdAt: "2020-09-18T16:52:12Z"
lastCommitAt: "2026-11-27T03:45:33Z"
lastReleaseAt: "2022-04-12T10:19:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 86
undervaluedScore: 71
maintainers: ["renovate[bot]", "rajrohanyadav", "abhishuraina"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccb27769675213d6bd6a4c3a20baca87994aea29e8b6cec89a414d1ddcfff58c/newrelic/newrelic-prometheus-exporters-packages"
---

# Prometheus Exporter Packages

This project aims to provide a better installation and configuration experience for Prometheus exporters of `nri-prometheus`.
It packages several open-source Prometheus exporters together with a binary that translates the input data into
the specific format needed by the exporters and the `nri-prometheus` integration triggering their execution.

All native packages are available for installation in New Relic's public repositories.

## Basic architecture of prometheus based integrations 

With respect to "standard" integrations the ones based on prometheus do not collect the data anymore from
the service, but they leverages the configuration protocol in order to register both `nri-prometheus` and an exporter
(if the service does not expose directly prometheus metrics).

This repository provides a way to create packages to install the exporters, and an additional binary used to configure 
and trigger the execution of both `nri-prometheus` and the installed exporters.
