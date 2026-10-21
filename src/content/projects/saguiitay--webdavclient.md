---
repo: "saguiitay/WebDAVClient"
name: "WebDAVClient"
description: "Strongly-typed, async WebDAV Client implementation in C#"
readmeQualityOk: true
url: "https://github.com/saguiitay/WebDAVClient"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["webdavclient", "async-webdav-client", "nuget"]
stars: 134
forks: 57
openIssues: 9
closedIssues: 21
watchers: 20
contributors: 9
recentReleases: 0
createdAt: "2014-10-06T16:33:18Z"
lastCommitAt: "2026-10-21T08:49:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 82
undervaluedScore: 44
maintainers: ["saguiitay", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d57a4a73f9ab939f7ef775ee86b11131df8ac54713474e308145bd74a7ec7a9/saguiitay/WebDAVClient"
---

# WebDAVClient

Browse WebDAV storage and transfer files from C#/.NET applications. Upload,
download, copy, move and delete files without hand-writing DAV requests or
parsing XML. Supports **.NET 8 and .NET 10**.

```pwsh
dotnet add package WebDAVClient
```

The v3 API, `DavClient`, is available from NuGet starting with **3.0.0**, released
October 20, 2026. No local library build is required.

## Authenticate, list files and download one

Set `WEBDAV_ENDPOINT` to your HTTPS collection URL, ending in `/`, and configure
`WEBDAV_USERNAME` and `WEBDAV_PASSWORD` outside source control. Set
`WEBDAV_REMOTE_FILE` to the name of an existing file in that collection.
`WEBDAV_OUTPUT` optionally selects a new local output path (default `download.bin`).

Paste this complete program into a console application after installing the package:

```csharp
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading;
using WebDAVClient;
using WebDAVClient.Helpers;

try
{
    string Required(string name) => Environment.GetEnvironmentVariable(name)
        ?? throw new ArgumentException("Set " + name + ".");

    var endpoint = new Uri(Required("WEBDAV_ENDPOINT"));…
