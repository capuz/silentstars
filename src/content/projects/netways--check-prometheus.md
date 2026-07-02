---
repo: "NETWAYS/check_prometheus"
name: "check_prometheus"
description: "Icinga check plugin to check Prometheus"
url: "https://github.com/NETWAYS/check_prometheus"
homepage: "https://www.netways.de/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["icinga", "monitoring", "plugin", "prometheus", "developed-by-netways"]
stars: 20
forks: 4
openIssues: 1
closedIssues: 22
watchers: 7
contributors: 27
recentReleases: 0
createdAt: "2023-07-20T09:57:22Z"
lastCommitAt: "2026-07-02T06:32:31Z"
lastReleaseAt: "2026-03-09T12:58:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 56
maintainers: ["martialblog", "dependabot[bot]", "RincewindsHat"]
openGraphImageUrl: "https://opengraph.githubassets.com/8601e84a2c75e67a8aeb2a0c9a06c4aa70dfc849a97b091f8c2fb55437dffbcc/NETWAYS/check_prometheus"
---

# check_prometheus

An Icinga check plugin to check Prometheus.

Other Icinga and Prometheus integrations we provide:

* https://github.com/NETWAYS/icinga2-exporter
* https://github.com/NETWAYS/icingaweb2-module-perfdatagraphs-prometheus
* https://github.com/NETWAYS/alertmanager-icinga-bridge
* https://github.com/NETWAYS/notify-alertmanager

## Usage

```bash
Usage:
  check_prometheus [flags]
  check_prometheus [command]

Available Commands:
  alert       Checks the status of a Prometheus alert
  health      Checks the health or readiness status of the Prometheus server
  query       Checks the status of a Prometheus query

Flags:
  -H, --hostname string    Hostname of the Prometheus server (CHECK_PROMETHEUS_HOSTNAME) (default "localhost")
  -p, --port int           Port of the Prometheus server (default 9090)
  -U, --url string         URL/Path to append to the Promethes Hostname (CHECK_PROMETHEUS_URL) (default "/")
  -s, --secure             Use a HTTPS connection
  -i, --insecure           Skip the verification of the server's TLS certificate
  -b, --bearer string      Specify the Bearer Token for server authentication (CHECK_PROMETHEUS_BEARER)
  -u, --user string…
