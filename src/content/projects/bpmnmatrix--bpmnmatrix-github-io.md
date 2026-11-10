---
repo: "bpmnmatrix/bpmnmatrix.github.io"
name: "bpmnmatrix.github.io"
description: "Comparison of BMPN tools"
readmeQualityOk: true
url: "https://github.com/bpmnmatrix/bpmnmatrix.github.io"
homepage: "https://bpmnmatrix.github.io"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [65, 25]
stars: 44
forks: 41
openIssues: 15
closedIssues: 20
watchers: 9
contributors: 34
recentReleases: 0
createdAt: "2015-03-10T10:22:48Z"
lastCommitAt: "2026-11-10T11:38:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 68
undervaluedScore: 41
maintainers: ["moritzhesse", "jschelle01", "danielmcquillen"]
openGraphImageUrl: "https://opengraph.githubassets.com/d07e9daed76554b84af5a21f24029112788bbd510e171e6fcbb58328449aec0c/bpmnmatrix/bpmnmatrix.github.io"
---

# BPMN Tool Matrix

This is a comparison matrix for BPMN tools. It lists 

* Name
* Creator
* Platform/Operating System
* BPMN Version
* First Release Date
* Latest Release Date
* Software License (free, proprietary, Shareware, Open Source)

The matrix is filterable by free or Open Source tools and by platform (Cross-Platform, Windows, Linux, Unix, Mac).

# Data

All data is managed in the [`data.json` file](https://github.com/bpmnmatrix/bpmnmatrix.github.io/blob/HEAD/data.json) and can be modified accordingly. Each entry has to follow this structure:

	{
        "Name": "Tool Name",
        "Version": "Tool Version",
        "URL": "Tool URL",
        "Creator": "Tool Creator",
        "Platform\/OS": "Short description of platform and/or operating systems",
        "OS": {
            "Cross-Platform": true|false,
            "Windows": true|false,
            "Mac": true|false,
            "Linux": true|false,
            "Unix": true|false
        },
        "BPMN Version": "BPMN Version",
        "First Release": "First Release Date (YYYY-MM-DD)",
        "Latest Release": "Latest Release Date (YYYY-MM-DD)",
        "License": {
            "free": true|false,…
