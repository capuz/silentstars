---
repo: "prometheus/demo-site"
name: "demo-site"
description: "Demo site auto-deployed with Ansible."
readmeQualityOk: true
url: "https://github.com/prometheus/demo-site"
language: "HTML"
languages: ["HTML"]
languagePcts: [87]
stars: 129
forks: 60
openIssues: 7
closedIssues: 11
watchers: 12
contributors: 53
recentReleases: 0
createdAt: "2018-05-17T05:48:23Z"
lastCommitAt: "2026-07-21T06:10:39Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 77
undervaluedScore: 28
maintainers: ["renovate[bot]", "gardar", "SuperQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/44d4a2e1162c3727edb92f4d250ebec2cf502762bfbe7e10c523bf38d0126029/prometheus/demo-site"
---

# Prometheus monitoring demo site

## [demo.prometheus.io](https://demo.prometheus.io)

This repository provides a demo site for [prometheus](https://github.com/prometheus/prometheus), [alertmanager](https://github.com/prometheus/alertmanager), prometheus exporters, and [grafana](https://github.com/grafana/grafana).
Site is provisioned with ansible running every day and on all commits to master branch. Everything is fully automated with travis ci pipeline. If you want to check `ansible-playbook` output, go to [last build](https://app.circleci.com/pipelines/github/prometheus/demo-site).

Have a look at configuration files in [group_vars/](https://github.com/prometheus/demo-site/blob/HEAD/group_vars).

## Applications

All applications should be running on their default ports.

| App name          | Address (HTTP)                                       | Address (HTTPS)                                           |
|-------------------|------------------------------------------------------|-----------------------------------------------------------|
| node_exporter     | [demo.prometheus.io:9100][node_exporter_http]     | [node.demo.prometheus.io][node_exporter_https]         |
|…
