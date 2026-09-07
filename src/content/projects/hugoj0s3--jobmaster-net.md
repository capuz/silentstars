---
repo: "hugoj0s3/jobmaster-net"
name: "jobmaster-net"
description: "Distributed background job orchestration for .NET built for seamless horizontal scaling and multi-provider support"
readmeQualityOk: true
url: "https://github.com/hugoj0s3/jobmaster-net"
language: "C#"
languages: ["C#"]
languagePcts: [91]
topics: ["csharp", "distributed-systems", "dotnet", "high-availability", "horizontal-scaling", "mysql", "nats-jetstream", "natural-language", "postgresql", "queue-processing"]
stars: 24
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-13T03:47:29Z"
lastCommitAt: "2026-09-07T08:35:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 42
maintainers: ["hugoj0s3"]
openGraphImageUrl: "https://opengraph.githubassets.com/4863c50bd35c37b232ff630ebe32ab94d45da15695d5d2369088227ead2b4b55/hugoj0s3/jobmaster-net"
discussionCount: 1
---

# <img src="img/logo.svg" width="52" valign="middle" /> JobMaster

**Distributed job orchestration engine for .NET. Built for horizontal scale, designed for resilience.**

📖 **[docs.jobmaster.hugoj0s3.dev](https://docs.jobmaster.hugoj0s3.dev)**

---

## Quick Start

Standalone is the simplest way to run JobMaster. A single database connection handles coordination, job storage, and the transport layer — no additional brokers required.

### Register in Program.cs

```csharp
builder.Services.AddJobMasterCluster(config =>
{
    config.UseStandaloneCluster()
          .ClusterId("Local-Cluster-01")
          .UsePostgres("Host=localhost;Database=jobmaster_db;Username=postgres;Password=pwd")
          .AddWorker();
});

var app = builder.Build();

await app.Services.StartJobMasterRuntimeAsync();
```

### Implement a Job Handler

```csharp
public sealed class HelloJobHandler : IJobMasterHandler
{
    public async Task HandleAsync(JobContext job)
    {
        var name = job.MsgData.TryGetStringValue("Name") ?? "World";
        Console.WriteLine($"Hello {name}");
        await Task.CompletedTask;
    }
}
```

Handlers are resolved from the .NET DI container — inject your services…
