---
repo: "d3x0r/JSOX"
name: "JSOX"
description: "JavaScript Object eXchange format; extended JSON/JSON6"
readmeQualityOk: true
url: "https://github.com/d3x0r/JSOX"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
stars: 57
forks: 8
openIssues: 4
closedIssues: 8
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2018-09-11T13:41:29Z"
lastCommitAt: "2026-08-07T05:15:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 28
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/2e1af40b3fcd947641103e92d3622668985dc732d5cd4e43f152a39dc742bec7/d3x0r/JSOX"
---

# JSOX – JavaScript Object eXchange format.

100% Compatible reader for JSON.  JSOX.stringify cannot generate JSON
compatible output; it would lose all the features anyway; use existing
`JSON.stringify()` if required, all JSON(JSON3/JSON5/JSON6) is valid JSOX.

JSOX adds Map, BigInt, Date, and TypeArray transport support, cyclic
objects, and includes keywords (5)'Infinity', (5)'NaN', (6)'undefined'.

JSOX adds optional processing of `typed` data.  Type names can be applied
to Objects, Arrays and Strings.  Type names are defined and provided with
to/from JSOX handlers by users of this library.   The data, decoded as
the object '{}', array '[]', or string '""' is passed to the fromJSOX 
handler, and the resulting value returned as the decoded object.
 
Typed-objects may also be emitted as a class-definition and then class-references.
A class-definition defines the fields in the object, and a class-reference would
provide the values for each field respectively.

A typed-object example: `v{ x, y } { a : v{1,2} }`, which decodes as `{ a : {x:1,y:2} }`.
It defines a template/class of object that has fields 'x', and 'y'.  Then
defines an object with a field A what is a object of type…
