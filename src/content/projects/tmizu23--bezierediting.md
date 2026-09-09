---
repo: "tmizu23/BezierEditing"
name: "BezierEditing"
description: "[QGIS Plugin] BezierEditing plugin edits features with Bezier curves."
readmeQualityOk: true
url: "https://github.com/tmizu23/BezierEditing"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 9
openIssues: 1
closedIssues: 33
watchers: 7
contributors: 3
recentReleases: 0
createdAt: "2019-05-11T23:01:05Z"
lastCommitAt: "2026-09-09T08:18:56Z"
lastReleaseAt: "2022-03-08T06:42:02Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 39
maintainers: ["tmizu23", "OpenQGIS"]
openGraphImageUrl: "https://opengraph.githubassets.com/81086d1b092695b29a15c570a7fc81d9c8f8bd30c608ecb5574cd6f90bbf1622/tmizu23/BezierEditing"
discussionCount: 4
---

BezierEditing plugin - version 1.4.0
===================================
This is a [QGIS plugin](https://plugins.qgis.org/plugins/BezierEditing/) which edits features with Bezier curves.

  
Install
-------------

  You can install this plugin from QGIS menu --> plugin --> Manage and Install plugins... --> Bezier Editing

Documentation
-------------

  [English Document](https://github.com/tmizu23/BezierEditing/wiki/Document-(English)).
  
  [日本語のドキュメント](https://github.com/tmizu23/BezierEditing/wiki/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%EF%BC%88Japanese%EF%BC%89).

Dependent Python libraries and resources
--------------------------------------------

* [fitCurves](https://github.com/volkerp/fitCurves) for fitting one or more cubic Bezier curves to a polyline.
* https://github.com/tmizu23/cubic_bezier_curve/blob/master/cubic_bezier_curve.ipynb

Change Log
--------------------------------------------
Version 1.4.0
- added QGIS 4 (Qt6/PyQt6) compatibility
- maintained backward compatibility with QGIS 3.20+

Version 1.3.10
- fixed an issue where installation failed in Linux environments.

Version 1.3.9
- added streaming mode for freehand tool (click-move-click drawing…
