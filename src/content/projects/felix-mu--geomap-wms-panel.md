---
repo: "felix-mu/geomap-wms-panel"
name: "geomap-wms-panel"
description: "Grafana geomap plugin with OGC WMS 1.3.0 integration. "
readmeQualityOk: true
url: "https://github.com/felix-mu/geomap-wms-panel"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["geomap", "grafana", "grafana-panel", "grafana-plugin", "wms-service"]
stars: 5
forks: 4
openIssues: 8
closedIssues: 42
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2024-04-19T14:37:00Z"
lastCommitAt: "2026-10-21T21:14:29Z"
lastReleaseAt: "2026-09-29T22:02:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 83
maintainers: ["felix-mu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/93b771cf7bccd09ffb60b8e2acacc52e15fc33f88a5bc59f656517182bce3f5d/felix-mu/geomap-wms-panel"
---

> [!IMPORTANT]
> From now on the panel builds from this repository and future releases are only compatible with Grafana versions `>= 12.3.0`. This is due to the migration actions needed to align the plugin with React 19 requirements, which introduces some breaking changes.
> More information about the Grafana migration to React 19 can be found here: https://grafana.com/blog/react-19-is-coming-to-grafana-what-plugin-developers-need-to-know/
>
> List of current plugin releases and the Grafana compatibilities:
> |Plugin version | Grafana version dependency |
> |---|---|
> |1.0.0| >=9.1.6 <12.3.0 |
> |2.0.0| >=9.1.6 <12.3.0 |
> |2.0.1| >=9.1.6 <12.3.0 |
> |2.0.2| >=9.1.6 <12.3.0 |
> |2.0.3| >=9.1.6 <12.3.0 |
> |>3.0.0| >= 12.3.0|

> [!WARNING]  
> Since **Grafana >= 11.3.x** the location of the map tooltip breaks due to https://github.com/grafana/grafana/pull/89921, which makes the `<body>` the scrollable element (https://github.com/grafana/grafana/issues/89894). This had the effect of breaking the computation of tooltips on the map canvas (https://github.com/grafana/grafana/pull/94827).
> 
> **Geomap WMS Panels of version 1.0.0, 1.0.1, 2.0.0 and 2.0.1** will experience these effects…
