---
repo: "openshift/monitoring-plugin"
name: "monitoring-plugin"
description: "Monitoring plugin for OpenShift console"
url: "https://github.com/openshift/monitoring-plugin"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 10
forks: 60
openIssues: 2
closedIssues: 7
watchers: 9
contributors: 2923
recentReleases: 0
createdAt: "2023-01-16T15:58:36Z"
lastCommitAt: "2026-06-30T06:51:00Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 76
maintainers: ["openshift-merge-bot[bot]", "jgbernalp", "PeterYurkovich"]
openGraphImageUrl: "https://opengraph.githubassets.com/409eeb992c50748b4cc2a1363f8ecb6b4545cfb1bcb8fa216f867e227aeba90a/openshift/monitoring-plugin"
---

# OpenShift Monitoring Plugin

This plugin runs in one of two modes, with and without feature flags. When deployed without any feature flags enabled, it will add the monitoring UI to the OpenShift web console. This is most commonly seen in the [CMO](https://github.com/openshift/cluster-monitoring-operator) deployment of it, which is shipped by default with every OpenShift cluster. Documentation for this mode is located under the [monitoring-plugin](#monitoring-plugin) heading.

When started with feature flag(s), it will instead only add functionality to the OpenShift web console related to the features. Documentation for this mode is located under the [monitoring-console-plugin](#monitoring-console-plugin) heading.

## monitoring-plugin

This section describes knowledge helpful to development of the default monitoring-plugin.

### Docker image

Before you can deploy the plugin on a cluster, you must build an image and push it to an image registry.

1. Build the image:

   ```sh
   docker build -t quay.io/my-repositroy/my-plugin:latest .
   ```

2. Run the image:

   ```sh
   docker run -it --rm -d -p 9001:80 quay.io/my-repository/my-plugin:latest
   ```

3. Push the image:…
