---
repo: "pulumi/pulumi-dotnet"
name: "pulumi-dotnet"
description: ".NET support for Pulumi"
readmeQualityOk: true
url: "https://github.com/pulumi/pulumi-dotnet"
language: "C#"
languages: ["C#"]
languagePcts: [80]
stars: 43
forks: 34
openIssues: 142
closedIssues: 241
watchers: 14
contributors: 93
recentReleases: 0
createdAt: "2022-11-14T10:07:27Z"
lastCommitAt: "2026-10-20T08:11:54Z"
lastReleaseAt: "2023-05-24T13:21:58Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 57
maintainers: ["pulumi-renovate[bot]", "pulumi-bot", "Frassle"]
openGraphImageUrl: "https://opengraph.githubassets.com/986df0a6c9ef96be75710c38d28634ce7077eefdccdab2fcb64e7494eb1ff4aa/pulumi/pulumi-dotnet"
---

# .NET Language Provider

A .NET language provider for Pulumi. Use your favorite .NET language to write Pulumi programs and deploy infrastructure to any cloud.

## Installing the [nuget](https://www.nuget.org/packages/Pulumi) package
```
dotnet add package Pulumi
```

## Example Pulumi program with .NET and C#

Here's a simple example of a Pulumi app written in C# that creates some simple
AWS resources:

```c#
using System.Collections.Generic;
using System.Threading.Tasks;
using Pulumi;
using Pulumi.Aws.S3;

return await Deployment.RunAsync(() =>
{
    // Create the bucket, and make it public.
    var bucket = new Bucket("media", new ()
    {
        Acl = "public-read"
    });

    // Add some content.
    var content = new BucketObject("basic-content", new ()
    {
        Acl = "public-read",
        Bucket = bucket.Id,
        ContentType = "text/plain; charset=utf8",
        Key = "hello.txt",
        Source = new StringAsset("Made with ❤, Pulumi, and .NET"),
    });

    // Return some values that will become the Outputs of the stack.
    return new Dictionary<string, object>
    {
        ["hello"] = "world",
        ["bucket-id"] = bucket.Id,
        ["content-id"] =…
