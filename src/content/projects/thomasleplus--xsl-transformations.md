---
repo: "thomasleplus/xsl-transformations"
name: "xsl-transformations"
description: "A collection of XSLT files for all sorts of purposes."
readmeQualityOk: true
url: "https://github.com/thomasleplus/xsl-transformations"
language: "Java"
languages: ["Java"]
languagePcts: [82]
topics: ["xsl", "kml", "xslt-files", "xsl-transformations", "xml", "saxon", "java", "json"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-04-11T01:01:43Z"
lastCommitAt: "2026-07-24T06:07:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 83
maintainers: ["dependabot[bot]", "thomasleplus", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/09ac77e39381053fba548282b8fdd5df38422e0200b441267424a6dc6536b8f3/thomasleplus/xsl-transformations"
---

# XSL Transformations

A collection of XSLT files for all sorts of purposes.

Each transform has been tested with [Saxon-HE for Java](https://www.saxonica.com/download/java.xml). You can run Saxon directly from the command line like this:

`java -jar Saxon-HE-10.0.jar -xsl:transform:.xsl -s:source.xml -o:output.xml`

Any other XSLT processor supporting XSLT 3.0 should work as well. If you want to test them online, you can use [XSLT Fiddle](https://xsltfiddle.liberty-development.net).

## KML

### Sort Placemarks Alphabetically

[kml_sort_placemarks_alphabetically.xsl](https://github.com/thomasleplus/xsl-transformations/blob/HEAD/src/main/resources/xml/kml/kml_sort_placemarks_alphabetically.xsl) sorts the `Placemark` elements inside of a KML document in ascending alphabetical order. The `Folder` elements themselves are not reordered, only the `Placemark` elements inside each `Folder` element.

## JSON

### JSON to XML

[json_to_xml.xsl](https://github.com/thomasleplus/xsl-transformations/blob/HEAD/src/main/resources/json/json_to_xml.xsl) converts JSON data to XML format using the XSLT 3.0 `json-to-xml()` function. The input JSON should be contained within a `<data>` element.

###…
