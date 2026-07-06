---
repo: "panoramicdata/LogicMonitor.Api"
name: "LogicMonitor.Api"
description: "LogicMonitor REST API nuget package"
readmeQualityOk: true
url: "https://github.com/panoramicdata/LogicMonitor.Api"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["logicmonitor", "api", "nuget", "dotnet", "dotnet-standard"]
stars: 5
forks: 2
openIssues: 4
closedIssues: 6
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2019-05-12T10:35:11Z"
lastCommitAt: "2026-07-06T07:02:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 76
maintainers: ["davidnmbond", "rolandbanks", "danielabbatt"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1e17b78011c7d19d103b2564e7f354a09793276fe97b9f796297cabd28b271a/panoramicdata/LogicMonitor.Api"
---

# LogicMonitor.Api

The LogicMonitor REST API nuget package, authored by Panoramic Data Limited.

If you want some LogicMonitor software developed, come find us at: https://www.panoramicdata.com/ !

To get started, watch the videos here:

http://www.panoramicdata.com/products/logicmonitor-api-nuget-package/

A simple example:

```c#
using LogicMonitor.Api;

[...]

public static async Task GetAllResources(ILogger logger, CancellationToken cancellationToken)
{
	using var logicMonitorClient = new LogicMonitorClient(
		new LogicMonitorClientOptions
		{
			Account = "acme",
			AccessId = "accessId",
			AccessKey = "accessKey",
			Logger = logger
		}
	);

	var resources = await logicMonitorClient
		.GetAllAsync<Resource>(cancellationToken)
		.ConfigureAwait(false);

	Console.WriteLine($"Resource Count: {resources.Count}");
}
```

## LogicModule Export/Import (JSON Format)

The modern LogicMonitor UI exports LogicModules to JSON format. This library supports both JSON and XML export/import:

```c#
// Export a DataSource as JSON (modern UI format)
var json = await logicMonitorClient
	.GetDataSourceJsonAsync(dataSourceId, cancellationToken);

// Export a DataSource as XML (legacy format)…
