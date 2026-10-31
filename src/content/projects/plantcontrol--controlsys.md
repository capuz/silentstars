---
repo: "PlantControl/controlsys"
name: "controlsys"
description: "Go library for linear state-space control systems"
readmeQualityOk: true
url: "https://github.com/PlantControl/controlsys"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 16
forks: 2
openIssues: 0
closedIssues: 125
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-19T07:58:30Z"
lastCommitAt: "2026-10-31T16:00:33Z"
lastReleaseAt: "2026-04-25T00:10:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 52
maintainers: ["jamestjsp"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d738b7265c013c2be676fd222cbfdb4ba537b70b9cb3d076f4415bba78c5a2e/PlantControl/controlsys"
---

alt="controlsys"
       width="280">

  A control-systems toolbox for Go

Go control-system toolbox for modeling, analyzing, transforming, and designing continuous-time and discrete-time linear time-invariant models.

The state-space model is the fundamental representation. Transfer-function, zero-pole-gain, frequency-response data, model-array, generalized-model, and tunable-block workflows convert to or build on that core representation where needed.

## Install

```bash
go get plantcontrol.org/v2/controlsys/v2
```

Formerly `github.com/jamestjsp/controlsys` (releases up to v1.8.0). From v1.9.0 the module path is `plantcontrol.org/v1/controlsys`; for v2.0.0–v2.2.0 it is `plantcontrol.org/v1/controlsys/v2`; from v2.3.0 it is `plantcontrol.org/v2/controlsys/v2`.

Linear algebra uses [`plantcontrol.org/v1/gonum`](https://github.com/PlantControl/gonum), PlantControl's Gonum fork with additional LAPACK routines. It is an ordinary module dependency; no `replace` directive is needed.

## Production Readiness

This package is intended to be usable in production control and estimation code, with the usual caveat that numerical software still needs application-specific validation.

- Pin…
