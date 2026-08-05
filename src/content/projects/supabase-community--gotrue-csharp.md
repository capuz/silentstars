---
repo: "supabase-community/gotrue-csharp"
name: "gotrue-csharp"
description: "C# implementation of Supabase's GoTrue"
readmeQualityOk: true
url: "https://github.com/supabase-community/gotrue-csharp"
homepage: "https://supabase-community.github.io/gotrue-csharp/api/Supabase.Gotrue.Client.html"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["gotrue", "supabase", "netstandard20", "xamarin"]
stars: 50
forks: 39
openIssues: 3
closedIssues: 45
watchers: 5
contributors: 42
recentReleases: 2
createdAt: "2021-01-31T11:27:09Z"
lastCommitAt: "2026-08-05T06:07:43Z"
lastReleaseAt: "2026-07-22T09:54:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 63
maintainers: ["Tr00d", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d60b2ac3bb6c48d34372a920b3c388e230c374b865afbc128679b209d896f700/supabase-community/gotrue-csharp"
discussionCount: 12
---

</p>

  </a>
</p>

---

## [Notice]: v5.0.0 renames this package from `gotrue-csharp` to `Supabase.Gotrue`. The depreciation notice has been set in NuGet. The API remains the same.

## New Features

### Unity Support

The Client works with Unity. You can find an example of a session persistence
implementation for Unity at this [gist](https://gist.github.com/wiverson/fbb07498743dff19b72c9c58599931e9).

```csharp

```

### Offline Support

The Client now better supports online/offline usage. The Client now has a simple boolean option "Online"
which can be set to to false. This can be combined with the NetworkStatus class to allow the client
to automatically go online & offline based on the device's network status.

To use this new NetworkStatus, add the following:

```csharp
// Create the client
var client = new Client(new ClientOptions { AllowUnconfirmedUserSessions = true });
// Create the network status monitor
var status = new NetworkStatus();
// Tell the network status monitor to update the client's online status
status.Client = client;
// Start the network status monitor
await status.StartAsync();
// rest of the usual client configuration
```

Only the stateful Client supports…
