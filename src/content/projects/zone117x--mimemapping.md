---
repo: "zone117x/MimeMapping"
name: "MimeMapping"
description: "Constants for (almost) all MIME types and file extensions, and method to determine MIME type of a file name."
url: "https://github.com/zone117x/MimeMapping"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 84
forks: 23
openIssues: 3
closedIssues: 22
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2016-11-06T21:04:19Z"
lastCommitAt: "2026-07-03T06:22:53Z"
lastReleaseAt: "2026-01-30T10:15:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 40
maintainers: ["renovate[bot]", "zone117x", "viceice"]
openGraphImageUrl: "https://opengraph.githubassets.com/73558efc83bcb0fed0ccc7ce85c487f31447ee65756937c661c814950986afd5/zone117x/MimeMapping"
---

# MimeMapping

Constants for (almost) all MIME types and method to determine MIME type from a file name.
Contains just over 1000 mime types.

The Dictionary is generated from the [`jshttp/mime-db`](https://github.com/jshttp/mime-db#mime-db) `db.json`.
Works similar to .NET's [System.Web.MimeMapping.GetMimeMapping](https://learn.microsoft.com/dotnet/api/system.web.mimemapping.getmimemapping).

It aggregates data from the following sources:

- <https://www.iana.org/assignments/media-types/media-types.xhtml>
- <https://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types>
- <https://hg.nginx.org/nginx/raw-file/default/conf/mime.types>

The library is just a literal C# `Dictionary<string, string>` with over 1000 entries, and a helper method that can be passed a file path.

## Example Usage

```C#
string myFile = "myimage.jpg";
string mimeType = MimeMapping.MimeUtility.GetMimeMapping(myFile);
Console.WriteLine(mimeType); // output: image/jpeg

string randomFile = "data.asdf";
string mimeType = MimeMapping.MimeUtility.GetMimeMapping(randomFile);
Console.WriteLine(mimeType); // output: application/octet-stream

string rawExtension = "json";
string mimeType =…
