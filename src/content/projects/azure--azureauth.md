---
repo: "Azure/AzureAuth"
name: "AzureAuth"
description: "R package for OAuth 2.0 authentication with Azure Active Directory"
readmeQualityOk: true
url: "https://github.com/Azure/AzureAuth"
language: "R"
languages: ["R"]
languagePcts: [100]
topics: ["r", "azure-active-directory", "azure", "oauth2", "azure-sdk-r"]
stars: 48
forks: 23
openIssues: 23
closedIssues: 51
watchers: 19
contributors: 10000
recentReleases: 0
createdAt: "2019-05-17T19:37:26Z"
lastCommitAt: "2026-09-01T08:48:53Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 34
maintainers: ["hongooi73", "dependabot[bot]", "danfiedler-msft"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd66b728a2a1454a9b000a2c3f44ba42a794e627060a74ffd5231186031db09f/Azure/AzureAuth"
---

# AzureAuth <img src="man/figures/logo.png" align="right" width=150 />

AzureAuth provides [Azure Active Directory](https://learn.microsoft.com/azure/active-directory/develop/) (AAD) authentication functionality for R users of Microsoft's Azure cloud. Use this package to obtain OAuth 2.0 tokens for Azure services including Azure Resource Manager, Azure Storage and others. Both AAD v1.0 and v2.0 are supported.

The primary repo for this package is at https://github.com/Azure/AzureAuth; please submit issues and PRs there. It is also mirrored at the Cloudyr org at https://github.com/cloudyr/AzureAuth. You can install the development version of the package with `devtools::install_github("Azure/AzureAuth")`.

## Obtaining tokens

The main function in AzureAuth is `get_azure_token`, which obtains an OAuth token from AAD. The token is cached in a user-specific directory using the [rappdirs](https://github.com/r-lib/rappdirs) package, and future requests will use the cached token without needing you to reauthenticate.

```r
library(AzureAuth)

token <- get_azure_token(resource="myresource", tenant="mytenant", app="app_id", ...)
```

For reasons of CRAN policy, the first time AzureAuth is…
