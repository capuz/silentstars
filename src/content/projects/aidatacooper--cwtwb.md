---
repo: "aidatacooper/cwtwb"
name: "cwtwb"
description: "A Python-based engine that enables Text-to-Tableau twb dashboards generation."
readmeQualityOk: true
url: "https://github.com/aidatacooper/cwtwb"
homepage: "https://datacooper.com/en/cwtwb"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 51
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-02-28T08:24:05Z"
lastCommitAt: "2026-11-14T10:47:46Z"
lastReleaseAt: "2026-11-14T08:59:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 46
maintainers: ["imgwho"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc192b487a708df51e3f64ee2627facd33916e9b2213f024fa8b2a09c340fe8c/aidatacooper/cwtwb"
discussionCount: 0
---

# cwtwb

> Tableau workbook engineering for reproducible `.twb` / `.twbx` generation, validation, and migration.

**cwtwb** is a Python toolkit and Model Context Protocol (MCP) server for building Tableau Desktop workbooks from code or agent tool calls.

It is meant to be a **workbook engineering layer**, not a conversational analytics agent. The focus is reproducibility, inspectability, and safe automation in local workflows, scripts, and CI.

### Design Workflow Reference

The agent design workflow and the `design_advisor` skill are informed by Adam
Mico's [adammico-lab Tableau workflow skills](https://github.com/adammico-lab/adammico-lab),
especially Tableau Dashboard Blueprint's build-from-a-design-spec approach.
cwtwb independently adapts those ideas to reproducible `.twb` / `.twbx`
authoring; it does not depend on, bundle, or copy adammico-lab code or skill
content. cwtwb is not affiliated with Adam Mico, Salesforce, or Tableau.

The `cw` in `cwtwb` comes from `Cooper Wenhua`.

**Author:** Cooper Wenhua &lt;imgwho@gmail.com&gt;

[Website](https://datacooper.com) · [Source](https://github.com/aidatacooper/cwtwb) ·…
