---
repo: "landrix/LandrixXML-for-Pascal"
name: "LandrixXML-for-Pascal"
description: "Dependency-free XML library for Delphi 6-13 and Free Pascal: pull reader, writer, DOM, XML Schema and Schematron validation (XRechnung, ZUGFeRD/Factur-X, Peppol, GAEB)"
readmeQualityOk: true
url: "https://github.com/landrix/LandrixXML-for-Pascal"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [84]
topics: ["delphi", "einvoice", "factur-x", "freepascal", "gaeb", "pascal", "schematron", "xml", "xml-schema", "xpath"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-10-15T03:37:39Z"
lastCommitAt: "2026-11-16T11:55:16Z"
lastReleaseAt: "2026-11-12T17:59:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 51
maintainers: ["landrix"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcdfe2a94dd7740fd9861dc0d1704049325437743a05e3e008d1f600fb1969ac/landrix/LandrixXML-for-Pascal"
---

# LandrixXML for Pascal

A small, fast and dependency-free XML library for **Delphi 6 through
Delphi 13** and **Free Pascal 3.2+**: a pull reader, a streaming writer, a
DOM and locale-independent conversion helpers for XML Schema values.

> **Status:** version 0.4.0. The API may still change in details before
> 1.0; see the [CHANGELOG](https://github.com/landrix/LandrixXML-for-Pascal/blob/HEAD/CHANGELOG.md).

## Features

- **No dependencies:** only `SysUtils`, `Classes` and `Contnrs`. One code
  base for Ansi Delphi (6 to 2007), Unicode Delphi (2009 to 13, Win32 and
  Win64) and Free Pascal (Windows, Linux, macOS).
- **XML 1.0 with namespaces:** well-formedness is checked strictly, errors
  carry an error code, line, column and byte offset.
- **Input encodings:** UTF-8, UTF-16 LE/BE, ISO-8859-1, ISO-8859-15,
  Windows-1252 and US-ASCII; everything is converted to UTF-8 internally.
- **Pull reader** (`TLandrixXmlReader`) for large files, with zero-copy
  access to names and values.
- **Streaming writer** (`TLandrixXmlWriter`) with correct escaping, namespace
  checks, optional indentation that never alters mixed content, and base64
  output for attachments.
- **DOM**…
