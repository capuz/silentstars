---
repo: "leandro-cervelin/cf_api_net_core"
name: "cf_api_net_core"
description: ".NET 10.0 API using SQL Server with Entity Framework Core + Migration + DDD + Docker with compose"
readmeQualityOk: true
url: "https://github.com/leandro-cervelin/cf_api_net_core"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["csharp", "netcore", "api", "restful-api", "rest-api", "test", "moq", "ddd", "xunit", "docker"]
stars: 25
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2019-07-05T12:24:00Z"
lastCommitAt: "2026-10-21T17:31:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 42
maintainers: ["leandro-cervelin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81b2d1369a73215a7704e00fe93c66e29390d497df0864851adf2e985ac3b064/leandro-cervelin/cf_api_net_core"
---

# .NET 10.0 Example App / API
## .Net 10.0 API using SQL Server with Entity Framework Core
## Unit Tests and Integration Tests

## Project structure

The projects are split by responsibility and the references only point inward:

- `CF.Customer.Domain` - entities and business rules. Doesn't reference the other layers.
- `CF.Customer.Application` - the use cases (the facade) and DTOs. References Domain.
- `CF.Customer.Infrastructure` - EF Core, the `DbContext` and repositories. Implements the interfaces declared in the inner layers.
- `CF.Api` and `CF.ConsoleApp` - the entry points. They read config, wire up the services and call into the Application layer.
- `CF.Migrations` - the EF Core migrations, kept out of Infrastructure so they don't get in the way.

Because Domain and Application don't know about EF Core or ASP.NET, the business rules stay easy to test and the same core can run under more than one host. The API and the console app both register it the same way (`AddCustomerCore`); the console app is there mainly to prove that point.

Tests: `CF.Customer.UnitTest` and `CF.Api.UnitTest` run without a database. `CF.IntegrationTest` starts SQL Server with Testcontainers and…
