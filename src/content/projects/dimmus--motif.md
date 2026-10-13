---
repo: "dimmus/motif"
name: "motif"
description: "Motif - The Industrial-Class UI Toolkit"
readmeQualityOk: true
url: "https://github.com/dimmus/motif"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-08-21T13:52:33Z"
lastCommitAt: "2026-10-13T10:57:02Z"
lastReleaseAt: "2026-10-04T13:14:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 63
maintainers: ["dimmus"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbf7d71c26297580b7d6d89f341d7e7eb65941e137dc98add7d2d3c6d47742a2/dimmus/motif"
discussionCount: 1
---

# Motif

Motif is the X11 user interface toolkit (libXm), with the Motif Resource
Manager (libMrm), the User Interface Language compiler (uil, libUil) and
the Motif Window Manager (mwm).  Motif was developed by the Open Software
Foundation from 1988 and became the toolkit of the Common Desktop
Environment; The Open Group released it under the LGPL in 2012.

This tree continues Motif 2.3.8, the last upstream release, as version
**2.5.0**.  It keeps the Motif 2.x API but is **not binary compatible**
with 2.3.8: the libraries have SONAME 5 (`libXm.so.5`, `libMrm.so.5`,
`libUil.so.5`) and programs built against 2.3.8 have to be recompiled.
See [CHANGELOG.md](https://github.com/dimmus/motif/blob/HEAD/CHANGELOG.md) for what changed and
[SECURITY.md](https://github.com/dimmus/motif/blob/HEAD/SECURITY.md) for the security fixes and how to report
vulnerabilities.

## Features

- The Motif 2.x widget set: `XmLabel`, `XmPushButton`, `XmToggleButton`,
  `XmText`, `XmTextField`, `XmList`, `XmScale`, `XmScrollBar`, `XmForm`,
  `XmRowColumn`, `XmPanedWindow`, `XmMainWindow`, `XmNotebook`,
  `XmContainer`, `XmComboBox`, `XmSpinBox`, the dialogs, and the widgets
  merged from the ICS extensions:…
