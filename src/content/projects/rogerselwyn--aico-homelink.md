---
repo: "RogerSelwyn/AICO_HomeLINK"
name: "AICO_HomeLINK"
description: "Home Assistant AICO HomeLINK Integration"
readmeQualityOk: true
url: "https://github.com/RogerSelwyn/AICO_HomeLINK"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["aico", "home-assistant", "homeassistant", "homeassistant-custom-component", "homeassistant-integration", "homelink"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-09-19T10:23:36Z"
lastCommitAt: "2026-10-01T10:24:22Z"
lastReleaseAt: "2023-09-27T07:55:01Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 91
undervaluedScore: 77
maintainers: ["RogerSelwyn", "dependabot[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff56348badabc5bab938833300286bfbed17e86cf656189c0553a3ba5d750c58/RogerSelwyn/AICO_HomeLINK"
fundingLinks: ["CUSTOM:https://www.buymeacoffee.com/rogtp", "CUSTOM:https://www.paypal.com/donate/?hosted_button_id=F7TGHNGH7A526"]
---

[](#) [](https://github.com/RogerSelwyn) [](https://github.com/hacs/integration)

# AICO HomeLINK integration for Home Assistant 

The `homelink` platform allows you to view the status of your AICO alarm system. Note that you need an AICO HomeLINK dashboard account with Landlord access to be able to create the credentials needed to use this integration.

This table provides a list of AICO 1000 and 3000 series devices and their support status. It is possible that 600 series devices will also work, but these have not been tested at all:

| **Model No** | **Sensor Type** |**Model Type**    |**Supported** | **Notes**                   |
|:-------------|:-----------------|:-----------------|:------------:|:----------------------------|
| Ei1000G      | Gateway          | GATEWAY          | True         | Required                    |
| Ei1020       | Condensation, Damp, Mould |         | False        | It may work, but untested   |
| Ei1025       | Condensation, Damp, Mould, Air | ENVCO2SENSOR | True |                           |
| Ei3014       | Heat             | FIREALARM        | True         |                             |
| Ei3016       | Smoke            | FIREALARM        |…
