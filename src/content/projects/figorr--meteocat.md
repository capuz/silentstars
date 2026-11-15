---
repo: "figorr/meteocat"
name: "meteocat"
description: "Home Assistant integration to download data from Meteocat API"
readmeQualityOk: true
url: "https://github.com/figorr/meteocat"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["home-assistant", "homeassistant", "meteocat", "hacs", "integration"]
stars: 17
forks: 2
openIssues: 0
closedIssues: 19
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2024-11-16T12:38:51Z"
lastCommitAt: "2026-11-15T11:17:43Z"
lastReleaseAt: "2025-02-04T21:49:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 58
maintainers: ["figorr", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e75a1dcaedafb002b671aa9febf99f31f36f9054b8008f242adc7117aa3f01dd/figorr/meteocat"
discussionCount: 4
---

# Meteocat for Home Assistant

This is a project to obtain meteorological data from the Meteocat API inside the Home Assistant environment.

All the data is property of Meteocat ("Servei Meteorològic de Catalunya"). This project is only a tool to offer an easy and secure access to the meteorological data provided by the "Servei Meteorològic de Catalunya" API, so you can use the data for your personal use.

Commercial use of this project or the data obtained from the API is not allowed without prior permission from the author, in case of the project, or from the "Servei Meteorològic de Catalunya" in the case of the data provided by the API.

**NOTE:** Meteocat API requires to use an API_KEY, you should ask to (https://apidocs.meteocat.gencat.cat/documentacio/acces-ciutada-i-administracio/)

You should include the following plans when you ask for the API KEY, otherwise the integration would fail during setup:
- "Dades de la XEMA"
- "Dades de la XDDE"
- "Dades de Predicció"

If you didn't include the XDDE plan when you asked for your API Key, you can set the XDDE limit to "0" during the setup, but it is not the recommended setup.

> **Note:** Station (XEMA) data and the derived ETo…
