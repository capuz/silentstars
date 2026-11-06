---
repo: "jkerai1/SoftwareCertificates"
name: "SoftwareCertificates"
description: "Repository for Software Certs for easy software blocking across corp environments, for example, using MDE IOC"
readmeQualityOk: true
url: "https://github.com/jkerai1/SoftwareCertificates"
language: "Python"
languages: ["Python", "PowerShell"]
languagePcts: [66, 34]
topics: ["block", "certificate", "defender", "gpo", "software", "softwareblocking", "unsanctioned", "pull-requests", "azure", "defender-for-endpoint"]
stars: 91
forks: 13
openIssues: 0
closedIssues: 5
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2023-02-13T20:45:26Z"
lastCommitAt: "2026-11-06T11:25:05Z"
lastReleaseAt: "2025-02-22T10:16:59Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 48
maintainers: ["jkerai1", "MCIglo", "izikipizi"]
openGraphImageUrl: "https://opengraph.githubassets.com/7644e836c8060e33ad66c2cfbe6678f300ffe4b3fe79f04dc55b84e19f7dcde4/jkerai1/SoftwareCertificates"
---

# SoftwareCertificates  

Repository for Software Certs for easy software blocking (or allowing) across corp environments, for example, using [MDE IOC](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/indicator-certificates?view=o365-worldwide?WT.mc_id=MVP_473477)/AppLocker/[WDAC](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/windows-defender-application-control/wdac-and-applocker-overview?WT.mc_id=MVP_473477)/ Intune Remediation Script/ Intune EPM (I would recommend Reusable settings here)     

> WDAC is the preferred and best method for blocking executables but can be a monster to tackle and maintain with the possibility to brick a machine, if you need intend to rollout WDAC I recommend to check this [out](https://github.com/HotCakeX/Harden-Windows-Security/tree/main/WDACConfig) before doing so. I have written a blog post about WDAC [here](https://www.linkedin.com/posts/jay-kerai-cyber_intune-opensource-appcontrol-activity-7286366737460002816-6p-b/) also  

:warning:__Caution__: Some Certs for unsanctioned applications may be used for other applications from the same org that may be legitimate e.g.…
