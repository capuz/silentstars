---
repo: "ministryofjustice/CFO-CaseAssessmentTrackingSystem"
name: "CFO-CaseAssessmentTrackingSystem"
description: "About HMPPS Creating Future Opportunities (CFO) - Case Assessment and Tracking System (CATS). Used to ratify the payments to non-government organisations who have been commissioned to deliver externally funded programmes by HMPPS CFO to offenders."
readmeQualityOk: true
url: "https://github.com/ministryofjustice/CFO-CaseAssessmentTrackingSystem"
homepage: "https://www.CreatingFutureOpportunities.gov.uk"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [68, 27]
stars: 5
forks: 4
openIssues: 0
closedIssues: 11
watchers: 5
contributors: 55
recentReleases: 0
createdAt: "2024-05-31T06:51:16Z"
lastCommitAt: "2026-07-20T06:34:12Z"
lastReleaseAt: "2025-08-28T13:28:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 89
maintainers: ["carlsixsmith-moj", "samgibsonmoj", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/22d344afd5ae75b61f811cb7fa862b248ccf3f6c669b0f12cf54d4392e4a544e/ministryofjustice/CFO-CaseAssessmentTrackingSystem"
discussionCount: 2
---

# Overview

HMPPS Creating Future Opportunities (CFO) utilise the Case Assessment and Tracking System (CATS) to support delivery of [CFO Evolution](https://www.CreatingFutureOpportunities.gov.uk) . The programme utilises external funding to perform rehabilitative services with offenders in custody and the community. Approx. 600 users from non-government organisations use CATS to record work performed with offenders creating an evidence base that supports performance management, payments to providers, ongoing research and audits from external bodies.

# Interfaces/Systems (Backend interface for surfacing the data to the front end)

* [.NET 10](https://dotnet.microsoft.com/en-us/download)
* [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet)

# Mechanism (How does it communicate with other systems? Frequency of data pull/push, reporting, events etc) 

CATS relies on the external data from Nomis and Delius. This is aggregated and managed by the [CFO Data Management System](https://github.com/ministryofjustice/CFO-DataManagementSystem).

# Technology (What's the technology that drives the product? i.e. Azure, java script etc) 

* ASP.NET Core (Blazor)
* C#
* LINQ
* Entity…
