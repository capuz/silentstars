---
repo: "retailnext/puppet-agent-exporter"
name: "puppet-agent-exporter"
description: "Prometheus exporter for Puppet Agent status"
url: "https://github.com/retailnext/puppet-agent-exporter"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["prometheus-exporter", "puppet-agent", "puppet", "prometheus"]
stars: 9
forks: 12
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2021-04-21T05:37:09Z"
lastCommitAt: "2026-06-27T00:34:08Z"
lastReleaseAt: "2025-07-02T01:58:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 66
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/440654180343aa9dcf10e90837208496360e9e1d9c6b9b8f156a676d144d1adf/retailnext/puppet-agent-exporter"
discussionCount: 1
---

# puppet-agent-exporter

## Puppet Agent Prometheus Exporter

This [Prometheus](https://prometheus.io/)
[exporter](https://prometheus.io/docs/instrumenting/exporters/)
exposes the status of the Puppet Agent on the host it is running on.

Unlike [puppet-prometheus_reporter](https://github.com/voxpupuli/puppet-prometheus_reporter)
and other solutions that rely on the Puppet Agent successfully a report to the
Puppet Server, this allows you to actively monitor the status of every node in
your environment that is discoverable by Prometheus.

### Metrics Exposed

```
# HELP puppet_config Puppet configuration.
# TYPE puppet_config gauge
puppet_config{environment="",server="puppet.redacted"} 1
# HELP puppet_last_catalog_version The version of the last attempted Puppet catalog.
# TYPE puppet_last_catalog_version gauge
puppet_last_catalog_version{version="1680640107"} 1
# HELP puppet_last_run_at_seconds Time of the last Puppet run.
# TYPE puppet_last_run_at_seconds gauge
puppet_last_run_at_seconds 1.6806401024160552e+09
# HELP puppet_last_run_duration_seconds Duration of the last Puppet run.
# TYPE puppet_last_run_duration_seconds gauge
puppet_last_run_duration_seconds 28.023470087
# HELP…
