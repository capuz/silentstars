---
repo: "cholmes/qgis_plugin_gpq_downloader"
name: "qgis_plugin_gpq_downloader"
description: "A QGIS plugin to make it easier to stream data from large GeoParquet 1.1 datasets with BBOX."
readmeQualityOk: true
url: "https://github.com/cholmes/qgis_plugin_gpq_downloader"
homepage: "https://plugins.qgis.org/plugins/qgis_plugin_gpq_downloader/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["geoparquet", "gis", "qgis", "qgis-plugin"]
stars: 78
forks: 18
openIssues: 31
closedIssues: 95
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2024-11-25T01:25:13Z"
lastCommitAt: "2026-10-30T10:23:37Z"
lastReleaseAt: "2025-02-06T21:45:49Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 94
undervaluedScore: 51
maintainers: ["cholmes", "claude", "ll3an"]
openGraphImageUrl: "https://opengraph.githubassets.com/9865225169cb45508ac97b4639e12c46e8353afeef5b71e838dcdfb2e1a61784/cholmes/qgis_plugin_gpq_downloader"
---

# GeoParquet Downloader for QGIS

This repo contains a QGIS plugin for downloading GeoParquet data from cloud sources, including Overture Maps, Source Cooperative, and the ability to enter the location of any online GeoParquet file or partition. Just the user's current viewport then gets downloaded, as GeoParquet, DuckDB or GeoPackage.

The core idea is that GeoParquet can act more like a 'server', letting users download only the data they need, if you add a bit more smarts to the client. So this plugin uses [DuckDB](https://duckdb.org/) but abstracts all the details of forming the right queries to external sources, so users can just pick the data they want and pull it down with ease. And with GeoPackage output users don't even need to know anything about GeoParquet. More info is on the [plugin homepage](https://plugins.qgis.org/plugins/qgis_plugin_gpq_downloader/).

## Installation

The easiest way to install the plugin file is to use the QGIS plugin manager. Just go to `Plugins > Manage and Install Plugins`, click 
the 'install' tab and search for 'GeoParquet Downloader'. Click on 'Install Plugin' and it will install. Alternatively you can download the zip file from
one of the…
