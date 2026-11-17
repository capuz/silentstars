---
repo: "phoenixmldb/phoenixmldb-xquery"
name: "phoenixmldb-xquery"
description: "A modern XPath/XQuery 3.1/4.0 engine with Full-Text Search and Update Facility"
readmeQualityOk: true
url: "https://github.com/phoenixmldb/phoenixmldb-xquery"
homepage: "https://phoenixml.dev"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["csharp", "xquery", "xquery-lang"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 44
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-03-19T04:44:56Z"
lastCommitAt: "2026-11-17T14:42:10Z"
lastReleaseAt: "2026-10-06T02:46:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 76
maintainers: ["elvogel"]
openGraphImageUrl: "https://opengraph.githubassets.com/727384639d838580f8eed325cd9430ff69769d5eaa62fb61d8447154b2ef3b13/phoenixmldb/phoenixmldb-xquery"
---

# PhoenixmlDb XQuery

A modern XPath/XQuery 4.0 engine for .NET with Full-Text Search and Update Facility support.

## Features

### XPath/XQuery 4.0
- **76 new 4.0 functions** across fn:, math:, map:, and array: namespaces
- **Record types**: `record(name as xs:string, age as xs:integer)`
- **Enum types**: `enum("red", "green", "blue")`
- **Union types**: `union(xs:string, xs:integer)`
- **Thin arrow operator**: `$x -> upper-case()`
- **FLWOR `for member`**: iterate array members
- **FLWOR `otherwise`**: fallback for empty results
- **Keyword arguments**: `f(name := value)`
- **`not` keyword, `otherwise` operator, `while` clause**

### XQuery 3.1
- **Annotations**: `%public`, `%private`, `%updating` on function and variable declarations
- **Module imports**: `import module namespace ns = "uri" at "location"`
- **External variables**: `declare variable $x external;` with runtime binding via `SetExternalVariable()`
- **Direct element constructors**: `<element attr="val">text {expr} more</element>`
- **UCA collations**: Unicode Collation Algorithm with `lang`, `strength`, `fallback` parameters

### JSON Support
- `fn:parse-json()` — parse JSON strings into XDM maps and arrays
-…
