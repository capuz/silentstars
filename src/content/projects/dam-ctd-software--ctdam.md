---
repo: "DAM-CTD-Software/ctdam"
name: "ctdam"
description: "Converting, parsing, processing and plotting Sea-Bird CTD data relying only on python code."
readmeQualityOk: true
url: "https://github.com/DAM-CTD-Software/ctdam"
homepage: "https://dam-ctd-software.github.io/ctdam/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 7
openIssues: 30
closedIssues: 67
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-03-03T13:20:23Z"
lastCommitAt: "2026-09-23T08:47:28Z"
lastReleaseAt: "2026-04-21T13:27:16Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 71
maintainers: ["EmilMichels", "claraollech124", "vedantishu2526"]
openGraphImageUrl: "https://opengraph.githubassets.com/144c6d2f7ea092ed8cc31c503afc5d14eb43864acbafd37e0eaf20e75b612b95/DAM-CTD-Software/ctdam"
discussionCount: 0
---

# ctdam

**ctdam** is a Python package designed to standardize and simplify the parsing, processing, and visualization of **Conductivity-Temperature-Depth (CTD) data** from diverse file formats. By converting raw CTD data into a **CF-compliant xarray Dataset**, the package enables seamless integration with the scientific Python ecosystem, leveraging the power of **xarray accessors** for data handling, analysis, and plotting.

## **Key Features**

### **1. Multi-Format Support**

Parse CTD data from a variety of file formats (e.g., `.hex`, `.cnv`, `.TOB`, `.nc`) into a **consistent, CF-compliant xarray Dataset**. The package abstracts away format-specific quirks, so you can focus on the data.

### **2. CF-Compliant Structure**

Outputs are structured as **xarray Datasets** with:

- Standardized variable names (e.g., `temperature`, `salinity`, `pressure`).
- Metadata (units, long names, coordinates) following **CF (Climate and Forecast) conventions** (e.g. `sea_water_temperature`, `sea_water_practical_salinity`, `sea_water_pressure`).
- Automatic handling of coordinate systems (e.g., depth, scan, time).

### **3. xarray Accessors for CTD Data**

Extend xarray’s functionality with…
