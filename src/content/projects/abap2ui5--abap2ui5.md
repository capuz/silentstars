---
repo: "abap2UI5/abap2UI5"
name: "abap2UI5"
description: "Build UI5 Apps Purely in ABAP"
readmeQualityOk: true
url: "https://github.com/abap2UI5/abap2UI5"
homepage: "https://www.abap2UI5.org"
language: "ABAP"
languages: ["ABAP", "JavaScript"]
languagePcts: [70, 30]
topics: ["abap", "fiori", "ui5", "abap2ui5", "abapgit", "open-source", "openui5", "sapui5"]
stars: 381
forks: 73
openIssues: 4
closedIssues: 451
watchers: 8
contributors: 27
recentReleases: 0
createdAt: "2022-12-05T08:26:15Z"
lastCommitAt: "2026-09-15T08:55:04Z"
lastReleaseAt: "2024-03-11T14:58:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 40
maintainers: ["oblomov-dev", "dependabot[bot]", "abapsheep"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/574401773/01d11519-f023-4231-a694-da7ede0301b2"
---

<strong>Build UI5 Apps Purely in ABAP – no JavaScript, OData, or RAP needed.</strong>
</p>

  Just like the good old days when Selection Screens and ALVs delivered full UIs from a few lines of ABAP. Designed with a minimal system footprint, it runs in both on-premise and cloud environments.
</p>

</p>

</p>

</p>

## Why abap2UI5?
* **User-Friendly** – Implement a single interface to build a complete UI5 app, purely in ABAP
* **Minimal Footprint** – Needs only a simple HTTP handler – no BSP, OData, CDS, or RAP
* **Cloud & On-Premise Ready** – Runs in ABAP Cloud and Standard ABAP environments
* **Broad Compatibility** – Supports all ABAP releases from NW 7.02 to ABAP Cloud
* **Easy Installation** – Install via abapGit – no extra app deployment needed
* **Seamless Integration** – Runs in Launchpads and on BTP alongside your RAP and Fiori Elements apps

## Quick Start

Check out the [Getting Started Guide](https://abap2ui5.github.io/docs/get_started/quickstart.html) and jump in:

```abap
CLASS zcl_my_app DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES z2ui5_if_app.
ENDCLASS.

CLASS zcl_my_app IMPLEMENTATION.
  METHOD z2ui5_if_app~main.
    client->message_box_display( `Hello…
