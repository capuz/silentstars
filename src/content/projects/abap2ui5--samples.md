---
repo: "abap2UI5/samples"
name: "samples"
description: "Learn abap2UI5: ready-to-run sample apps"
readmeQualityOk: true
url: "https://github.com/abap2UI5/samples"
language: "ABAP"
languages: ["ABAP"]
languagePcts: [81]
topics: ["abap2ui5", "abap", "fiori", "open-source", "openui5", "sapui5", "ui5", "abapgit", "ai-agents", "examples"]
stars: 58
forks: 21
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 21
recentReleases: 0
createdAt: "2023-05-21T11:35:33Z"
lastCommitAt: "2026-11-26T12:02:13Z"
lastReleaseAt: "2024-03-11T14:58:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 50
maintainers: ["oblomov-dev", "abapsheep", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4413cfbcf7b435ae295f8c8fea6b981e3b042d44fe00847a498fc7db0e2a358/abap2UI5/samples"
---

# abap2UI5 — samples

**Learn the abap2UI5 basics — 134 ready-to-run samples, from a one-class Hello
World to complete applications.**

Install them, click through, read the source: every sample adds one idea — a
binding, an event, a table, a popup — so the collection reads like a course.
It is the fastest way to learn abap2UI5 development.

#### Your first app

```abap
CLASS zcl_my_app DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES z2ui5_if_app.
ENDCLASS.

CLASS zcl_my_app IMPLEMENTATION.
  METHOD z2ui5_if_app~main.
    client->message_box_display( `Hello World` ).
  ENDMETHOD.
ENDCLASS.
```

That is a complete UI5 app — one interface, one method, and abap2UI5 renders
the rest. Everything in this repository grows from this pattern.

#### Try it in 60 seconds

1. Install [abap2UI5](https://github.com/abap2UI5/abap2UI5) — this repository
   ships apps, not the framework.
2. Pull this repository with [abapGit](https://abapgit.org), using the branch
   that matches your system:
