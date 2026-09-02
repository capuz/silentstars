---
repo: "Cloud-Architekt/AzurePrivilegedIAM"
name: "AzurePrivilegedIAM"
description: "Docs and samples for privileged identity and access management in Microsoft Azure and Microsoft Entra."
readmeQualityOk: true
url: "https://github.com/Cloud-Architekt/AzurePrivilegedIAM"
language: "JavaScript"
languages: ["JavaScript", "PowerShell"]
languagePcts: [60, 31]
topics: ["azure", "entra-id", "privileged-access-management", "privileged-access-security", "enterprise-access-model"]
stars: 205
forks: 39
openIssues: 0
closedIssues: 3
watchers: 6
contributors: 3
recentReleases: 0
createdAt: "2021-11-22T18:57:02Z"
lastCommitAt: "2026-09-02T08:04:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 40
maintainers: ["Cloud-Architekt"]
openGraphImageUrl: "https://opengraph.githubassets.com/92184f488c5a57f024e77f80b815f06cb3ef38ed376a6e55572a08819079558e/Cloud-Architekt/AzurePrivilegedIAM"
---

# Privileged Identity & Access in Microsoft Entra
Docs, resources and samples to implement a secure privileged identity and access management in Microsoft Azure and Microsoft Entra.

## 📝 Classification of Roles and Permissions
I've created an approach to automate classification of role actions based on Microsoft's Enterprise Access Model. Samples of the classification file which I've created for the implementation in EntraOps can be found here:

* [EntraOps - Defined Classification of Entra ID Role Actions in JSON](https://github.com/Cloud-Architekt/AzurePrivilegedIAM/blob/main/EntraOps_Classification/Classification_AadResources.json)
* [EntraOps - Defined Classification of Microsoft Graph API Permissions in JSON](https://github.com/Cloud-Architekt/AzurePrivilegedIAM/blob/main/EntraOps_Classification/Classification_ApiPermissions.json)

The generated classification (based on the previous definition files) are also available and can be used as lookup in analytics rules (in Microsoft Sentinel) or to built your own automation and/or entity enrichment:

* [Classified Entra ID Roles in…
