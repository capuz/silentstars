---
repo: "ganhammar/AspNetCore.Identity.AmazonDynamoDB"
name: "AspNetCore.Identity.AmazonDynamoDB"
description: "An ASP.NET Core Identity 9.0 provider for DynamoDB."
readmeQualityOk: true
url: "https://github.com/ganhammar/AspNetCore.Identity.AmazonDynamoDB"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["aspnetcoreidentity", "dynamodb"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-09-19T19:28:38Z"
lastCommitAt: "2026-11-04T11:28:25Z"
lastReleaseAt: "2025-10-28T08:05:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 92
undervaluedScore: 61
maintainers: ["ganhammar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0724d1228e80a43dde4dfca26168a31f14a0476cf7589a3a4c3a023ed463c84/ganhammar/AspNetCore.Identity.AmazonDynamoDB"
---

# AspNetCore.Identity.AmazonDynamoDB

 [](https://codecov.io/gh/ganhammar/AspNetCore.Identity.AmazonDynamoDB) [](https://www.nuget.org/packages/AspNetCore.Identity.AmazonDynamoDB)

An [ASP.NET Core Identity](https://github.com/dotnet/aspnetcore/tree/main/src/Identity) provider for [DynamoDB](https://aws.amazon.com/dynamodb/), targeting .NET 8, 9 and 10. On .NET 10 it also stores passkey (WebAuthn) credentials through `IUserPasskeyStore<TUser>`.

## Getting Started

You can install the latest version via [Nuget](https://www.nuget.org/packages/AspNetCore.Identity.AmazonDynamoDB):

```
> dotnet add package AspNetCore.Identity.AmazonDynamoDB
```

Then you use the stores by calling `AddDynamoDbStores` on `IdentityBuilder`, with the user type and, when roles are used, the role type:

```c#
services
    .AddIdentityCore<DynamoDbUser>()
    .AddRoles<DynamoDbRole>()
    .AddDynamoDbStores<DynamoDbUser, DynamoDbRole>()
    .Configure(options =>
    {
        options.BillingMode = BillingMode.PROVISIONED; // Default is BillingMode.PAY_PER_REQUEST
        options.ProvisionedThroughput = new ProvisionedThroughput
        {
            ReadCapacityUnits = 5, // Default is 1…
