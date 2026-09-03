---
repo: "georgenovak97/AVRO"
name: "AVRO"
description: "pyRevit extension with tools for Revit."
readmeQualityOk: true
url: "https://github.com/georgenovak97/AVRO"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-20T12:44:54Z"
lastCommitAt: "2026-09-03T08:13:05Z"
lastReleaseAt: "2026-06-03T11:51:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 36
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/eb8751d57648528a054dc720f5424c685d072db974085942d2e0392084a9b305/georgenovak97/AVRO"
---

[AVRO](https://avro.pro/) — BIM & IT Consulting by George Novak

#### Tools

- **Family Browser** — browse and load Revit families from a local or network library
  
	- Browse folders with `.rfa` files and thumbnail previews
	- Folder tree with multiple levels
    - Search by family name
    - Middle-click — open the family in Windows Explorer
    - Left-click — load and place the family in the project
    - Right-click — inspect family properties
	- Place in model with return to the browser window
    - Recent files list
    - Dark/light theme
    - Library and Refresh buttons for managing the family library

---
#### Installation
  
1. Add `https://github.com/georgenovak97/AVRO.git` via **pyRevit → Extensions → Git URL → Add and install**.
2. In the Revit ribbon, open **"AVRO"** → **"Tools"** → **"Family Browser"**.

---
#### First Launch

1. Go to the **"Additional"** tab in Revit.
2. Open **"Family Browser"**.
3. Click **"Library"** and select the root folder with your families.
4. Wait for the cache to load.

---
#### Requirements

- pyRevit 4.8+
- AVRO version 1.3
- Revit 2020–2025 (2026+ untested)

Reloading a family that is already in the project intentionally overwrites…
