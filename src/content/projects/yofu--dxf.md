---
repo: "yofu/dxf"
name: "dxf"
description: "dxf for golang"
readmeQualityOk: true
url: "https://github.com/yofu/dxf"
homepage: "https://godoc.org/github.com/yofu/dxf"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 82
forks: 37
openIssues: 6
closedIssues: 4
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2015-08-07T13:51:33Z"
lastCommitAt: "2026-11-14T10:48:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 36
maintainers: ["yofu"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b25bcd71633330424e741f08ae7a53c579fb80ee78e5fa561366c5250920d89/yofu/dxf"
---

#dxf

DXF(Drawing Exchange Format by Autodesk, Inc) library for golang.

+ version: ACAD2000(AC1015)
+ format : ASCII

is only supported.

## Reference

[http://www.autodesk.com/techpubs/autocad/acad2000/dxf/index.htm](http://www.autodesk.com/techpubs/autocad/acad2000/dxf/index.htm)

## Example
```go
package main

import (
	"github.com/yofu/dxf"
	"github.com/yofu/dxf/color"
	"github.com/yofu/dxf/table"
	"log"
	"math"
)

func main() {
	d := dxf.NewDrawing()
	d.Header().LtScale = 100.0
	d.AddLayer("Toroidal", dxf.DefaultColor, dxf.DefaultLineType, true)
	d.AddLayer("Poloidal", color.Red, table.LT_HIDDEN, true)
	z := 0.0
	r1 := 200.0
	r2 := 500.0
	ndiv := 16
	dtheta := 2.0 * math.Pi / float64(ndiv)
	theta := 0.0
	for i := 0; i < ndiv; i++ {
		d.ChangeLayer("Toroidal")
		d.Circle(0.0, 0.0, z+r1*math.Cos(theta), r2-r1*math.Sin(theta))
		d.ChangeLayer("Poloidal")
		c, _ := d.Circle(r2*math.Cos(theta), r2*math.Sin(theta), 0.0, r1)
		dxf.SetExtrusion(c, []float64{-1.0 * math.Sin(theta), math.Cos(theta), 0.0})
		theta += dtheta
	}
	err := d.SaveAs("torus.dxf")
	if err != nil {
		log.Fatal(err)
	}
}
```

### Blocks

```go
d := dxf.NewDrawing()
d.BeginBlock("BOLT", 0.0, 0.0, 0.0) // entities…
