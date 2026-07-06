---
repo: "spatialthoughts/courses"
name: "courses"
description: "Code and HTML page repository for courses.spatialthoughts.com"
readmeQualityOk: true
url: "https://github.com/spatialthoughts/courses"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [100]
stars: 65
forks: 25
openIssues: 0
closedIssues: 27
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2019-10-24T03:45:23Z"
lastCommitAt: "2026-07-06T07:02:36Z"
lastReleaseAt: "2024-08-01T06:09:58Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 54
maintainers: ["spatialthoughts"]
openGraphImageUrl: "https://opengraph.githubassets.com/351082eb7a42acf2401cf34f289504e54f2cf2947f846386ed0e7ec1b1423b58/spatialthoughts/courses"
---

# Spatial Thoughts OpenCourseWare

This repository powers the content at [courses.spatialthoughts.com](https://courses.spatialthoughts.com/)

The html pages are built using R Studio as a [R Markdown Website](https://rmarkdown.rstudio.com/lesson-13.html).

The content has the following course pages

* Spatial Data Visualization and Analytics
* Advanced QGIS
* Automating GIS Workflows with QGIS
* Python Foundation for Spatial Analysis
* Mapping and Data Visualization with Python
* Customizing QGIS with Python
* Mastering GDAL Tools
* End-to-End Google Earth Engine
* Google Earth Engine for Water Resources Management


## Updating the content

Most courses are written using pure MarkDown in the corresponding `.Rmd` file. You can update the content directly. A few courses embed other `.md` files generated from Jupyter Notebooks - which need to be generated before building the site.

### Python Foundation for Spatial Analysis

1. Update the `.ipynb` files in the `code/python_foundation/` directory.
2. Run `python-foundation-package.sh` to generate `.md` files for each notebook

### Mapping and Data Visualization with Python

1. Update the `.ipynb` and…
