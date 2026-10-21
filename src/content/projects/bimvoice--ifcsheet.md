---
repo: "BIMvoice/ifcsheet"
name: "ifcsheet"
description: "Draw, dimension and sheet IFC models in the browser. Plans, sections, annotations, PDF and DXF. Open source, MPL-2.0."
readmeQualityOk: true
url: "https://github.com/BIMvoice/ifcsheet"
homepage: "https://ifcsheet.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [72]
topics: ["2d-drafting", "bim", "cad", "drawings", "dxf", "ifc", "openbim", "webassembly"]
stars: 10
forks: 0
openIssues: 40
closedIssues: 47
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-11T12:17:20Z"
lastCommitAt: "2026-10-21T08:48:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["BIMvoice", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4508c388f52ef0513ac4e8abf7a28827d26cba66784da25283d114c2910a66d2/BIMvoice/ifcsheet"
---

# IfcSheet

**Drawings and documentation from IFC models, in the browser. For architects, engineers and BIM coordinators who deliver openBIM.**

IfcSheet opens an existing IFC model and produces the plans, sections, elevations and sheets that go with it. You dimension, tag, hatch and annotate on the views, lay them out on A0 to A4 sheets, and export to PDF, SVG or DXF. The model itself is never changed structurally. Only its properties can be edited.

## Why it exists

We work in native IFC. We model in Bonsai, and the model is the IFC file itself, with nothing to export and nothing lost on the way. That part works.

Then the project needs drawings. Plans, sections, dimensions, tags, sheets with a title block, a PDF set for the site and for the authority. Getting that out of Bonsai is where our days went. Setting up a drawing takes many steps, annotation is slow, and a small change to the model can mean redoing work on the sheet. Bonsai does a great deal and we contribute to it, but producing a drawing set with it was the most painful part of our job.

So we built the tool we wanted for that one part. IfcSheet opens the IFC you already have and does drawings and nothing else:…
