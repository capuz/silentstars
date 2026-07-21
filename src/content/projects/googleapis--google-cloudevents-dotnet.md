---
repo: "googleapis/google-cloudevents-dotnet"
name: "google-cloudevents-dotnet"
description: "CloudEvent Types for .NET"
readmeQualityOk: true
url: "https://github.com/googleapis/google-cloudevents-dotnet"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 16
forks: 11
openIssues: 1
closedIssues: 23
watchers: 45
contributors: 99
recentReleases: 0
createdAt: "2020-06-17T18:33:52Z"
lastCommitAt: "2026-07-21T06:11:25Z"
lastReleaseAt: "2020-11-12T11:31:58Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 94
undervaluedScore: 43
maintainers: ["renovate-bot", "efevans", "suztomo"]
openGraphImageUrl: "https://opengraph.githubassets.com/3236f7cd3d4217a404196b4feadfdc283692efd65137cf94a4904af508ba4ae0/googleapis/google-cloudevents-dotnet"
---

# Google CloudEvents for  .NET

## Overview

This repository contains .NET libraries for CloudEvents issued by
Google. The `Google.Events.Protobuf` contains the Google event data
types, using Protocol Buffers as the serialization framework. Each
type is decorated with `CloudEventFormatterAttribute` to indicate an
appropriate `CloudEventFormatter` to use. This allows for seamless
integration in frameworks such as the Functions Framework, without
those frameworks depending on any libraries in this repository
directly.

## Usage

From the .NET Functions Framework, these packages are automatically
used for CloudEvent functions implementing
`ICloudEventFunction<TData>`, where `TData` is one of the event data
classes.

If you wish to use these classes in a different context, code might
typically look something like this:

```csharp
CloudEvent cloudEvent = ...; // However you obtain a CloudEvent

// The event data type from any of the serialization-specific packages.
StorageObjectData data = CloudEventConverters.ConvertCloudEventData<StorageData>(cloudEvent);
```

## Development

See [BUILDING](https://github.com/googleapis/google-cloudevents-dotnet/blob/HEAD/BUILDING.md) for more…
