---
repo: "RedHatInsights/rhsm-subscriptions"
name: "rhsm-subscriptions"
description: "Subscriptions-related services for the Insights Platform"
url: "https://github.com/RedHatInsights/rhsm-subscriptions"
language: "Java"
languages: ["Java"]
languagePcts: [95]
stars: 75
forks: 55
openIssues: 0
closedIssues: 0
watchers: 11
contributors: 139
recentReleases: 1
createdAt: "2019-03-20T19:26:56Z"
lastCommitAt: "2026-07-03T06:24:38Z"
lastReleaseAt: "2026-04-15T17:53:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 52
maintainers: ["Sgitario", "red-hat-konflux[bot]", "mstead"]
openGraphImageUrl: "https://opengraph.githubassets.com/29756ce05b4589f46260e94b90aa6700290ae7e72c12da407094e90976b1e023/RedHatInsights/rhsm-subscriptions"
---

# Subscription watch

Subscription watch tracks usage and capacity at an account-level.
Account-level reporting means that subscriptions are not directly associated to machines,
containers, or service instances.

Subscription watch can be thought of as several services that provide related functionality:

<details>
<summary>system conduit</summary>
Service that syncs system data from Hosted Candlepin into HBI.

</details>

<details>
<summary>metrics ingress</summary>
Services that sync system/instance telemetry data into Subscription watch.

</details>

<details>
<summary>tally</summary>
Service that tallies system usage based on telemetry data from various sources.

</details>

<details>
<summary>subscription sync</summary>
Service that syncs subscription/offering data from RH IT services.

</details>

<details>
<summary>API/UI</summary>
Customer facing views of the usage and capacity data.

</details>

<details>
<summary>billing usage notification</summary>
Services that notify billing services of hourly usage.

</details>

Networking diagrams show how requests are routed:

<details>
<summary>Customer-facing API</summary>

</details>

<details>
<summary>Admin/Internal…
