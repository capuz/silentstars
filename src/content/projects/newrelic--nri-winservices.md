---
repo: "newrelic/nri-winservices"
name: "nri-winservices"
description: "Windows services Integration for New Relic Infrastructure"
readmeQualityOk: true
url: "https://github.com/newrelic/nri-winservices"
language: "Go"
languages: ["Go"]
languagePcts: [91]
stars: 8
forks: 9
openIssues: 3
closedIssues: 53
watchers: 13
contributors: 41
recentReleases: 0
createdAt: "2020-05-07T13:53:19Z"
lastCommitAt: "2026-06-10T08:12:02Z"
lastReleaseAt: "2024-07-29T15:30:26Z"
status: "quiet"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 79
undervaluedScore: 52
maintainers: ["mbolla22", "nravada", "rajrohanyadav"]
openGraphImageUrl: "https://opengraph.githubassets.com/c37376b6d6a6de993910cb03c71a235c8b567285079d91c300a8872604aa80a3/newrelic/nri-winservices"
---

# New Relic Windows Services integration

New Relic's Windows Services integration collects data from the services running on your Windows hosts into our platform. You can check the state and start mode of each service, find out which hosts are running a service, add services to workloads, set up alerts for services, and more.
 
For information on how to use and configure the Windows services integration, [read the official documentation](https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/windows-services-integration). 
 
> Our integration is bundled with the [Windows agent](https://github.com/newrelic/nri-winservices/blob/HEAD/docs/infrastructure/install-configure-manage-infrastructure/windows-installation/install-infrastructure-windows-server-using-msi-installer): if you are already monitoring Windows hosts on New Relic, you just need to enable the integration to get Windows services data into our platform.

# Architecture

To get data from Windows, the Windows services integration uses a reduced version of the [Prometheus exporter for 
Windows](https://github.com/prometheus-community/windows_exporter), which exposes Prometheus metrics on the…
