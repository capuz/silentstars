---
repo: "sakowicz/actual-budget-prometheus-exporter"
name: "actual-budget-prometheus-exporter"
description: "Prometheus metrics exporter for Actual Budget app"
readmeQualityOk: true
url: "https://github.com/sakowicz/actual-budget-prometheus-exporter"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 45
forks: 6
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-02T12:34:27Z"
lastCommitAt: "2026-08-03T06:45:04Z"
lastReleaseAt: "2025-03-03T10:45:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["sakowicz"]
openGraphImageUrl: "https://opengraph.githubassets.com/acf681d5ac00992ecf6d9b1f2fce32f914de98b38f2c936f56b0bca400c092e8/sakowicz/actual-budget-prometheus-exporter"
---

# Actual Budget Prometheus Exporter

<p>
    </a>
    </a>
    </a>
</p>

### Description

Simple Prometheus exporter for [Actual Budget](https://actualbudget.com/).

It exposes the following metrics:

```prometheus
actual_budget_account_balance{account="Account Name",is_off_budget="false",budget="main"} 10000 # for each account
actual_budget_category_tranasction_count{category="Category Name",budget="main"} 1000 # for each category
actual_budget_uncategorized_transaction_count{budget="main"} 0
actual_budget_balance 1000000{budget="main"} # total balance
actual_budget_transaction_count{budget="main"} 1000
actual_budget_transfers_count{budget="main"} 100
```

### Grafana Dashboard

You can use the following Grafana dashboard to visualize the metrics exposed by the Actual Budget Prometheus Exporter:

[Actual Budget Grafana Dashboard](https://grafana.com/grafana/dashboards/22789-actual-budget/)

To import the dashboard, follow these steps:

1. Open your Grafana instance.
2. Go to the "Dashboards" section.
3. Click on "Import".
4. Enter the dashboard ID: `22789`.
5. Click "Load" and follow the instructions to complete the import.

### Configuration

```yaml
services:
  actual_server:…
