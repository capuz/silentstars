---
repo: "un-fao/OpenNSIS"
name: "OpenNSIS"
description: "Open-source national soil information system — soil property maps, profile data, metadata catalogue and GloSIS federation, deployed with one command."
readmeQualityOk: true
url: "https://github.com/un-fao/OpenNSIS"
homepage: "https://un-fao.github.io/OpenNSIS/"
language: "PLpgSQL"
languages: ["PLpgSQL"]
languagePcts: [84]
topics: ["data-science", "federated", "soil", "glosis"]
stars: 5
forks: 4
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2025-08-22T13:59:46Z"
lastCommitAt: "2026-09-16T08:44:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 88
maintainers: ["eloi-ribeiro", "angelini75"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a327e0b6b470510d21b2dbc438ad921137fb4d77a366b0743c4466eee2e15a6/un-fao/OpenNSIS"
---

# OpenNSIS — Open National Soil Information System

A spatial data infrastructure for soils, designed to be deployed as a node of
the **GloSIS Federation**. Each instance hosts the soil data of one country or
organisation and exposes:

- a public **Web Mapping** application (OpenLayers) for viewing rasters,
  soil profiles and administrative division boundaries on a map;
- an **Admin Panel** for settings, users, projects, soil-profile ETL
  (CSV upload → validate → ingest → prune), raster upload, a raster
  calculator (DST) and administrative division boundary layers
  (GeoJSON / zipped Shapefile / GeoPackage, reprojected to WGS 84 on
  the fly);
- a **REST API** (FastAPI) for soil profiles, observations, layers, settings
  and admin operations;
- an **OGC API Records / CSW** metadata catalogue (pyCSW) for the rasters;
- a **WMS / WCS** server (MapServer) for rasters and profile points;
- an opt-in **Federation API** (sis-api-glosis) that lets the GloSIS
  Discovery Hub query this node for soil-profile data.

The data model is based on [ISO 28258](https://www.iso.org/standard/44595.html) and is derived from ISRIC's open-source implementation,…
