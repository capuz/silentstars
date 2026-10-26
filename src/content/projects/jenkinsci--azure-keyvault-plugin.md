---
repo: "jenkinsci/azure-keyvault-plugin"
name: "azure-keyvault-plugin"
description: "Jenkins plugin for Azure Keyvault"
readmeQualityOk: true
url: "https://github.com/jenkinsci/azure-keyvault-plugin"
homepage: "https://plugins.jenkins.io/azure-keyvault/"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["azure", "azure-keyvault", "credential-provider"]
stars: 22
forks: 21
openIssues: 19
closedIssues: 51
watchers: 4
contributors: 732
recentReleases: 0
createdAt: "2019-01-31T04:26:11Z"
lastCommitAt: "2026-10-26T03:02:36Z"
lastReleaseAt: "2020-03-15T21:54:35Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 88
undervaluedScore: 53
maintainers: ["renovate[bot]", "timja", "timja-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/c133125409bee48041e686b1f1c5cd83b4327c5c63c295febcd0f38a4aaaf5bf/jenkinsci/azure-keyvault-plugin"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

# Azure Key Vault Plugin

This plugin enables Jenkins to fetch secrets from Azure Key Vault and inject them directly into build jobs.
It works similarly to the [Credential Binding Plugin](https://plugins.jenkins.io/credentials-binding/) and borrows much from the [Hashicorp Vault Plugin](https://plugins.jenkins.io/hashicorp-vault-plugin/).
The plugin acts as an Azure Active Directory Application and must be configured with a valid credential.

## System Configuration

### Via UI

In the Jenkins **Configure System** page, configure the following two options in the **Azure Key Vault Plugin** section
* **Key Vault URL** - The url where your Key Vault resides (e.g. `https://myvault.vault.azure.net/`)
* **Credential ID** - The ID associated with a secret in the Jenkins secret store. Supported types are:
    - **Azure Service Principal**
    - **Azure Managed Identity** (both user and system assigned)

### Via configuration-as-code

This plugin supports the [configuration as code](https://plugins.jenkins.io/configuration-as-code/) plugin:

Example yaml:
```yaml
credentials:
  system:
    domainCredentials:
      - credentials:
        - azure:
            azureEnvironmentName: "Azure"…
