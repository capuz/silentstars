---
repo: "CDFER/jlcpcb-parts-database"
name: "jlcpcb-parts-database"
description: "Automatically updated sqlite database of JLCPCB parts, filtered to only include components in stock. Includes a CSV file of basic and preferred parts."
readmeQualityOk: true
url: "https://github.com/CDFER/jlcpcb-parts-database"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [96]
topics: ["github-actions", "jlcpcb", "jlcpcb-assembly-service"]
stars: 46
forks: 3
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-09-08T02:13:06Z"
lastCommitAt: "2026-07-10T07:01:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 27
maintainers: ["CDFER"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ac3921657ac23349242dbea35323bd0eb1a9510659587bfe673109c66f6d098/CDFER/jlcpcb-parts-database"
---

# JLCPCB Parts Database

This repository processes the massive SQLite database from [yaqwsx/jlcparts](https://github.com/yaqwsx/jlcparts) into two convenient files.

### Files

* **Basic and Preferred Parts CSV**: A lightweight (~3MB) CSV file containing basic and preferred parts information.
* **In-Stock Components SQLite Database**: A filtered SQLite database (~1GB) containing only components with five or more items in stock.

### Why

The original database is a massive 10GB multi-volume zip archive, unsupported by most zip libraries due to its use of an older part of the zip standard. This repository simplifies access to the data by providing smaller, more manageable files.

### Automatically Updated Files

Both files are automatically updated using GitHub Actions and hosted on GitHub Pages:

* [Basic and Preferred Parts CSV](https://cdfer.github.io/jlcpcb-parts-database/jlcpcb-components-basic-preferred.csv)
* [In-Stock Components SQLite Database](https://cdfer.github.io/jlcpcb-parts-database/jlcpcb-components.sqlite3)

### Example Usage

Check out the included Jupyter Notebooks! It is probably best to start with `sqlite-search.ipynb` for an example of how to download the…
