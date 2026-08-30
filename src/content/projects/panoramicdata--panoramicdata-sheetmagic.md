---
repo: "panoramicdata/PanoramicData.SheetMagic"
name: "PanoramicData.SheetMagic"
description: "Save/Load C# generics to/from Excel (XLSX) spreadsheets, easily"
readmeQualityOk: true
url: "https://github.com/panoramicdata/PanoramicData.SheetMagic"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 12
forks: 0
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2019-03-31T13:45:57Z"
lastCommitAt: "2026-08-30T00:45:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 51
undervaluedScore: 32
maintainers: ["davidnmbond", "rolandbanks"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a84dbad4ee7eeae5cde13445f3bbcef301abc95f8d361999bdd6f6b66eaaea1/panoramicdata/PanoramicData.SheetMagic"
---

# PanoramicData.SheetMagic

Easily save/load data to/from Excel (XLSX) documents using strongly-typed C# classes.

## Requirements

- **.NET 10.0** - This library targets .NET 10.0 only
- **DocumentFormat.OpenXml 3.x** - required from 3.1 onwards

### Versioning

The `major.minor` prefix comes from `version.json` and the patch number is the
Nerdbank.GitVersioning commit height. The prefix sat at `3.0` from 2020 to 2026 across 53
releases and is not used to signal API breaks - check the package dependencies and release
notes rather than inferring compatibility from the version alone.

The height restarts from zero whenever the prefix changes, which would have dropped the
patch number from 136 to 1 when the prefix moved to `3.1`. `versionHeightOffset` in
`version.json` compensates for that, so numbering continues from where the `3.0` series
left off rather than restarting. Do not remove it: without it the next build would be
numbered *below* releases that are already published.

One such change is worth calling out, because the package metadata states it but the
version number does not: only one DocumentFormat.OpenXml assembly can load per process,
and from **3.1** SheetMagic…
