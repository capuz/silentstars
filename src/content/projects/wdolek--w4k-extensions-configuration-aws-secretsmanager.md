---
repo: "wdolek/w4k-extensions-configuration-aws-secretsmanager"
name: "w4k-extensions-configuration-aws-secretsmanager"
description: "AWS SecretsManager configuration provider"
readmeQualityOk: true
url: "https://github.com/wdolek/w4k-extensions-configuration-aws-secretsmanager"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2024-01-14T20:13:08Z"
lastCommitAt: "2026-09-08T08:16:33Z"
lastReleaseAt: "2025-11-12T09:07:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 44
maintainers: ["wdolek", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8015df960efe798b8a9ca8f34c1847e7a9f9294835dc1c7337b84db480095337/wdolek/w4k-extensions-configuration-aws-secretsmanager"
---

# W4k.Extensions.Configuration.Aws.SecretsManager

Configuration provider using AWS Secrets Manager as the source of data.

Using this provider, you can load secrets from AWS Secrets Manager and bind them to your configuration classes, using
all features of Options pattern (`IOptions<T>`).

The provider supports **refreshing secrets** (by polling, it's possible to provide your own mechanism)
and **custom secret processing** (which allows parsing formats other than JSON when using binary secrets).

## Installation

```shell
dotnet add package W4k.Extensions.Configuration.Aws.SecretsManager
```

## Usage

```csharp
var builder = WebApplication.CreateBuilder(args);

// add AWS Secrets Manager Configuration Provider for specific secret
builder.Configuration.AddSecretsManager(
    "my-secret-secrets",
    source => source.WithConfigurationKeyPrefix("AppSecrets"));

// ... and then bind configuration using key prefix "AppSecrets"
builder.Services
    .AddOptions<Secrets>()
    .BindConfiguration("AppSecrets");
```

Additionally, you can provide instance of `IAmazonSecretsManager`:

```csharp
// passing custom `IAmazonSecretsManager` (e.g. with custom credentials)
var client = new…
