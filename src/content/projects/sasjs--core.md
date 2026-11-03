---
repo: "sasjs/core"
name: "core"
description: "Macros for SAS® App Developers"
readmeQualityOk: true
url: "https://github.com/sasjs/core"
homepage: "https://core.sasjs.io"
language: "SAS"
languages: ["SAS"]
languagePcts: [99]
topics: ["sas", "sasjs", "viya"]
stars: 132
forks: 19
openIssues: 0
closedIssues: 119
watchers: 5
contributors: 20
recentReleases: 0
createdAt: "2020-07-07T20:16:43Z"
lastCommitAt: "2026-11-03T11:15:46Z"
lastReleaseAt: "2020-08-04T16:14:30Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 47
maintainers: ["sasjs-dev[bot]", "allanbowe", "tmoody"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/277913295/275e4b00-b29e-11eb-81fd-9324a8bac327"
fundingLinks: ["CUSTOM:https://getalby.com/p/sasjs"]
---

# Macro Core

Much quality. Many standards. The **Macro Core** library exists to save time and development effort! Herein ye shall find a veritable host of MIT-licenced, production quality SAS macros. These are a mix of tools, utilities, functions and code generators that are useful in the context of [Application Development](https://sasapps.io) on the SAS platform (eg https://datacontroller.io). [Contributions](https://github.com/sasjs/core/blob/main/.github/CONTRIBUTING.md) are welcome.

You can download and compile them all in just two lines of SAS code:

```sas
filename mc url "https://raw.githubusercontent.com/sasjs/core/main/all.sas";
%inc mc;
```

Documentation: https://core.sasjs.io

## Components

### BASE folder (All Platforms)

- OS independent
- Works on all SAS Platforms
- No X command
- Prefixes: `mf_`, `mp_`

### DDL folder (All Platforms)

- OS independent
- Works on all SAS Platforms
- No X command
- Prefixes: `mddl_(lib)_` -> where lib can be "SAS" (in relation to a SAS component) or "DC" (in relation to a Data Controller component)

This library will not be used for storing data entries (such as formats or datalines).  Where this becomes necessary in the future,…
