---
repo: "rcarmo/go-ooxml"
name: "go-ooxml"
description: "A Go library for reading, writing, and manipulating Office Open XML (OOXML) documents."
readmeQualityOk: true
url: "https://github.com/rcarmo/go-ooxml"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-01-30T17:10:40Z"
lastCommitAt: "2026-09-29T08:08:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["rcarmo"]
openGraphImageUrl: "https://opengraph.githubassets.com/8424f3d43a6287c1117b90abc0fc9bf715b54daabb8268ebb029af62fcdab59a/rcarmo/go-ooxml"
---

# go-ooxml

This is another of my "things that should exist" projects: a Go library for reading and writing Office Open XML (OOXML) documents. It handles Word (.docx), Excel (.xlsx) and PowerPoint (.pptx) files, with additive retained-source editors for a bounded set of changes. I am developing it against ECMA-376; [the native editing notes](https://github.com/rcarmo/go-ooxml/blob/HEAD/docs/design/native-enhancements.md) spell out what those editors can safely change.

## Installation

```bash
go get github.com/rcarmo/go-ooxml
```

## Usage

```go
package main

import (
	"log"

	"github.com/rcarmo/go-ooxml/pkg/document"
	"github.com/rcarmo/go-ooxml/pkg/presentation"
	"github.com/rcarmo/go-ooxml/pkg/spreadsheet"
)

func main() {
	// Word
	doc, err := document.New()
	if err != nil {
		log.Fatal(err)
	}
	defer doc.Close()
	doc.AddParagraph().SetText("Hello, World")
	if err := doc.SaveAs("hello.docx"); err != nil {
		log.Fatal(err)
	}

	// Excel
	wb, err := spreadsheet.New()
	if err != nil {
		log.Fatal(err)
	}
	defer wb.Close()
	sheet, err := wb.Sheet(0)
	if err != nil {
		log.Fatal(err)
	}
	if err := sheet.Cell("A1").SetValue("Hello"); err != nil {
		log.Fatal(err)
	}
	if err :=…
