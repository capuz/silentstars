---
repo: "siliconcompiler/scgallery"
name: "scgallery"
description: "SiliconCompiler Design Gallery"
readmeQualityOk: true
url: "https://github.com/siliconcompiler/scgallery"
language: "SystemVerilog"
languages: ["SystemVerilog"]
languagePcts: [80]
stars: 76
forks: 10
openIssues: 0
closedIssues: 6
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2023-06-10T18:00:21Z"
lastCommitAt: "2026-08-28T12:23:56Z"
lastReleaseAt: "2024-09-20T16:19:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 50
maintainers: ["gadfort", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e409bde5aec31234a1278281612d6bef69f646ea77ea93b69a2bae267f9c1399/siliconcompiler/scgallery"
---

# SiliconCompiler Design Gallery
Design gallery for [SiliconCompiler](https://github.com/siliconcompiler/siliconcompiler).
This library uses the rtl2gds flow in SiliconCompiler to compile the designs from RTL to a GDS file.

# To install:
Utilize the same python environment as SiliconCompiler.

    git clone https://github.com/siliconcompiler/scgallery.git
    cd scgallery
    python3 -m pip install .

# To run a design:

    sc-gallery -design sha512  # Will run on all supported targets
    sc-gallery -design sha512 -target asap7_demo  # Will only run on asap7
    sc-gallery -target asap7_demo  # Will run all designs supported on asap7
    sc-gallery  # Will run all designs on all targets

# Extending with proprietary design and technologies:

    sc-gallery -gallery private.gallery -design aes  # Will run on all supported targets in your private gallery
    sc-gallery -gallery private.gallery  # Will run all designs on all targets in your private gallery

# To check, create, and update rules:

    python3 -m scgallery.rules -cfg <cfg> -rules <rules> -check  # Check if run met the rule requirements.
    python3 -m scgallery.rules -cfg <cfg> -rules <rules> -create  # Create an…
