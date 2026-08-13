---
repo: "destructurama/json-net"
name: "json-net"
description: "Adds support for logging JSON.NET dynamic types as structured data with Serilog"
readmeQualityOk: true
url: "https://github.com/destructurama/json-net"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 50
forks: 12
openIssues: 0
closedIssues: 12
watchers: 7
contributors: 8
recentReleases: 0
createdAt: "2015-04-01T21:43:00Z"
lastCommitAt: "2026-08-13T05:18:23Z"
lastReleaseAt: "2025-02-16T14:41:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 31
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/824bba046fd27760f8c510fca7bf21a165332635015a43ad4792bf758d4e4590/destructurama/json-net"
---

# Destructurama.JsonNet

Adds support for logging JSON.NET dynamic types as structured data with [Serilog](https://serilog.net).
For System.Text.Json dynamic types see [this repo](https://github.com/destructurama/system-text-json).

# Installation

Install from NuGet:

```powershell
Install-Package Destructurama.JsonNet
```

# Usage

Modify logger configuration:

```csharp
var log = new LoggerConfiguration().Destructure.JsonNetTypes()
```

Now any JSON.NET dynamic object can be represented in the log event's properties:

```csharp
using Destructurama;
using Newtonsoft.Json;
using Serilog;

var logger1 = new LoggerConfiguration().WriteTo.Console().CreateLogger();
var logger2 = new LoggerConfiguration().Destructure.JsonNetTypes().WriteTo.Console().CreateLogger();

var json = """
    {
      "name": "Tom",
      "age": 42,
      "isDeveloper": true
    }
    """;

var obj = JsonConvert.DeserializeObject<dynamic>(json);

logger1.Information("Deserialized without JsonNetTypes(): {@Obj}", obj);

logger2.Information("Deserialized with JsonNetTypes(): {@Obj}", obj);

Console.ReadKey();
```

Output:

```
[20:27:59 INF] Deserialized without JsonNetTypes(): [[[]], [[]], [[]]]
[20:27:59 INF]…
