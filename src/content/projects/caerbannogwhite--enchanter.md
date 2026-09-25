---
repo: "caerbannogwhite/enchanter"
name: "enchanter"
description: "A library that helps you out of data nightmares in Go. 🧙‍♂️"
readmeQualityOk: true
url: "https://github.com/caerbannogwhite/enchanter"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["data", "data-science", "data-wrangling", "go", "golang", "statistics", "stats", "csv", "html", "json"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 5
recentReleases: 7
createdAt: "2023-10-18T20:51:22Z"
lastCommitAt: "2026-09-25T09:03:09Z"
lastReleaseAt: "2026-09-23T08:25:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 84
maintainers: ["caerbannogwhite", "sjh9714"]
openGraphImageUrl: "https://opengraph.githubassets.com/904e8f943d74a4f442185c5fb35be5d09838feb45b9b52c91767fd67824492ec/caerbannogwhite/enchanter"
---

## Enchanter 🧙‍♂️

> Formerly known as **aargh** — renamed in v0.2.0. The v0.1.x releases remain
> available under the old module path.

Enchanter is a data wrangling library in pure Go, in the spirit of Pandas and
Polars in Python and dplyr in R: typed, nullable columns (series) composed
into DataFrames with select / filter / group by / join / sort / aggregate
pipelines. Series and DataFrames interoperate with
[Apache Arrow](https://arrow.apache.org/), which also powers the Parquet and
Arrow IPC readers and writers.

Enchanter is a work in progress and the API is not stable yet.

### Install

```sh
go get github.com/caerbannogwhite/enchanter
```

Requires Go 1.26+. Pure Go, no cgo.

### Quick start

```go
package main

import (
	"strings"

	"github.com/caerbannogwhite/enchanter"
	"github.com/caerbannogwhite/enchanter/dataframe"
)

func main() {
	data1 := `
name,age,weight,junior,department,salary band
Alice C,29,75.0,F,HR,4
John Doe,30,80.5,true,IT,2
Bob,31,85.0,F,IT,4
Jane H,25,60.0,false,IT,4
Mary,28,70.0,false,IT,3
Oliver,32,90.0,true,HR,1
Ursula,27,65.0,f,Business,4
Charlie,33,60.0,t,Business,2
Megan,26,55.0,F,IT,3`

	dataframe.ReadCsv(enchanter.NewContext()).…
