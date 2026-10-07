---
repo: "DHancock/WinAppSdkCleaner"
name: "WinAppSdkCleaner"
description: "A GUI utility for removing unwanted Windows Application Sdk versions"
readmeQualityOk: true
url: "https://github.com/DHancock/WinAppSdkCleaner"
language: "C#"
languages: ["C#"]
languagePcts: [97]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2022-09-15T08:56:00Z"
lastCommitAt: "2026-10-07T10:30:30Z"
lastReleaseAt: "2026-09-22T11:17:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 68
maintainers: ["DHancock"]
openGraphImageUrl: "https://opengraph.githubassets.com/650b6efae6320e55634c6bd09686453f67685d37856cacd67a9cc3598246f60d/DHancock/WinAppSdkCleaner"
---

# WinAppSdkCleaner
 A GUI utility for removing unwanted Windows Application Sdk versions.
 
> [!WARNING] 
> This is a developer only utility. The utility will list all packages that depend on a particular WinAppSdk framework package. If you remove the WinAppSdk that contains them, **the code will remove all the dependent packages first**. This includes windows utilities installed as part of the OS. The utility can not detect if a framework dependant unpackaged app has a dependencey on any WinAppSdk version. Removing the version may break that app. Use at your own risk.

 By default, the utility allows the removal of WinAppSdk packages for the current user. If you only install WinAppSdks using that user account, removing the WinAppSdk will recover the disk space.
 
 If you start utility elevated, it will allow the removal of an installed WinAppSdk for all users. Staged WinAppSdk packages cannot be removed by this utility and as such are omitted from the search results.
