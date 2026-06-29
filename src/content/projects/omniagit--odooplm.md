---
repo: "OmniaGit/odooplm"
name: "odooplm"
description: "Go to website for more information !! "
url: "https://github.com/OmniaGit/odooplm"
homepage: "https://odooplm.omniasolutions.website/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["odoo", "solidworks", "solidedge", "inventory", "autocad", "thinkdesign", "plm", "pdm", "product-lifecycle-management"]
stars: 142
forks: 113
openIssues: 5
closedIssues: 56
watchers: 28
contributors: 12
recentReleases: 0
createdAt: "2017-10-07T08:14:05Z"
lastCommitAt: "2026-06-29T07:21:37Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 51
maintainers: ["mboscolo", "jayraj-omnia", "aktiv-aadil-belim"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/106081773/74647180-f261-11e9-878f-3431f2be96ef"
---

# OdoPLM — Product Lifecycle Management for Odoo

  **OdoPLM** is an open-source PLM/PDM extension for [Odoo](https://www.odoo.com/),
  developed and maintained by [OmniaSolutions](https://www.omniasolutions.website).
  It integrates Odoo with the most popular CAD editors and provides document
  management, BOM versioning, revision workflows, and a browser-based 3D/2D viewer.

  > For issues or support: **info@omniasolutions.eu**
  > Full documentation: **https://odooplm.omniasolutions.website**

  ---

  ## CAD Client

  The desktop CAD client (connector) is hosted on SourceForge:

  **https://sourceforge.net/projects/openerpplm/**

  The client supports the following CAD editors:

  | CAD Editor | Notes |
  |---|---|
  | SolidWorks | Full integration (checkout, upload, BOM sync) |
  | SolidEdge | Full integration |
  | Autodesk Inventor | Full integration |
  | AutoCAD / DraftSight | 2D drawings |
  | ThinkDesign | Full integration |
  | FreeCAD | Open-source integration |

  The client communicates with Odoo via the REST API exposed by the `plm` module
  (`/plm_document_upload/login`, `/plm_document_upload/upload`, etc.).

  ---

  ## Modules

  ### Core

  | Module |…
