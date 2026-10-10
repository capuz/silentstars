---
repo: "zew/go-questionnaire"
name: "go-questionnaire"
description: "HTML questionnaire. Flexible. Saves to JSON. Needs no database."
readmeQualityOk: true
url: "https://github.com/zew/go-questionnaire"
language: "Go"
languages: ["Go"]
languagePcts: [71]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-04-20T08:35:52Z"
lastCommitAt: "2026-10-10T10:04:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 74
undervaluedScore: 45
maintainers: ["pbberlin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f25f621301e5edf0a852e2ae672ce73113051aa50c387b1296d79a4880a4df36/zew/go-questionnaire"
---

# Go-Questionnaire

  

## Status

Version 2.0

Productive use at our research institute.

## Requirements

Go Version 1.__22__

### Non-technical properties

* Any number of surveys via single server - any path

* Secure login URLs < 65 characters in size

* Anonymous logins `example.com/a`

* Shortcut  logins `example.com/d/A5FE3P`

* Automatic smartphone version

* Simple design of new questionnaires

* Layout freedom - without HTML fumbling

* Support for any number of languages - Polish, Russian, Chinese

* Text blocks, support pages in several languages - written in simple `markdown` format

* Dynamic question texts based on login profile  

  * Dynamic textblocks  
    depending Euro membership, or industry sector  
    or based on previous answers
  * Based on function map `dynFuncs`

* Dynamic page structures based on `page`.`GeneratorFuncName`
  
  * Standard methods `AddGroup`, `AddInput` available 
  * Structure dynamic
  * Based on function map `funcPGs`

* Page structure dynamic
  * Show or suppress any page dynamically
  * Based on function map `funcPGs`

* Free HTML questions
  * function map `CompositeFuncs` allows groups  
    to render custom HTML form elements…
