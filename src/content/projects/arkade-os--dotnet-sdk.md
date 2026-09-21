---
repo: "arkade-os/dotnet-sdk"
name: "dotnet-sdk"
description: "NArk — .NET SDK for the Ark protocol. Build self-custodial, off-chain Bitcoin applications."
readmeQualityOk: true
url: "https://github.com/arkade-os/dotnet-sdk"
homepage: "https://arkade-os.github.io/dotnet-sdk/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
stars: 5
forks: 7
openIssues: 7
closedIssues: 23
watchers: 0
contributors: 9
recentReleases: 0
createdAt: "2026-01-21T14:32:31Z"
lastCommitAt: "2026-09-21T09:13:59Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 80
maintainers: ["Kukks", "d4rp4t", "jackstar12"]
openGraphImageUrl: "https://opengraph.githubassets.com/64318a2047792694e881dd59eea4db06fca3e9b612ed0cf11fb64a9b57febfb0/arkade-os/dotnet-sdk"
---

# NArk .NET SDK

A .NET SDK for building applications on [Arkade](https://arkadeos.com), an open execution engine for Bitcoin. Arkade makes transactions instant, low-cost, and programmable through virtual outputs, and every transaction it builds is a Bitcoin transaction.

The generated API reference is published at [arkade-os.github.io/dotnet-sdk](https://arkade-os.github.io/dotnet-sdk/).

## Packages

Swap persistence is available through the optional `NArk.Storage.EfCore.ArkadeIntents` package.
Register it alongside core storage and opt into its tables in your context:

```csharp
services.AddArkEfCoreStorage<MyDbContext>();
services.AddArkadeEfCoreStorage();
// MyDbContext.OnModelCreating:
modelBuilder.ConfigureArkEntities();
modelBuilder.ConfigureArkadeEntities();
```

Broadcast asset offers do not authenticate a particular solver; their `SolverPubkey()` metadata
is absent. RFQ swaps record the solver that quoted them.

| Package | Description |
|---------|-------------|
| **NArk.Abstractions** | Interfaces and domain types (`IVtxoStorage`, `IContractStorage`, `IWalletProvider`, `ArkCoin`, `ArkVtxo`, etc.) |
| **NArk.Core** | Core services: spending, batch management, VTXO…
