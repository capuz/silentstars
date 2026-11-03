---
repo: "geobakery/GeospatialAnalyzer"
name: "GeospatialAnalyzer"
description: "GeospatialAnalyzer HTTP-API"
readmeQualityOk: true
url: "https://github.com/geobakery/GeospatialAnalyzer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 14
forks: 2
openIssues: 16
closedIssues: 35
watchers: 3
contributors: 11
recentReleases: 1
createdAt: "2023-10-11T14:56:18Z"
lastCommitAt: "2026-11-03T10:52:10Z"
lastReleaseAt: "2026-10-12T09:24:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 66
maintainers: ["sebeweiss", "dependabot[bot]", "NtnHgr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/703606230/06a54886-d8f8-473d-b49c-5525e41d5f19"
---

# GeospatialAnalyzer

This is an Open-Source-Project from Landesamt für Geobasisinformation Sachsen (GeoSN) with development support from con terra GmbH.

GeospatialAnalyzer is a Node.js based HTTP-API using NestJS, TypeORM, fastify, OpenAPI, Swagger and more.

The API can be integrated into different data processing and information systems, such as applications and specialised procedures.

It enables the transfer of geo-objects in the form of coordinates to check them against certain data topics using spatial tests.
The response contains attributes of the objects found and optionally their geometry. In this way its possible to automatically determine, for example, in which district or on which parcel a transferred object is located.

For more information have a look in the documentation.

## Key features

- Returns the attributes of the objects, which passed the query
- Optionally have the geometries in the response
- Support GeoJSON and EsriJSON as input and output
- Transformation into the other format
- Support for different CRS
- Support raster data also as tile set
- Unit- and E2E-Tests
- Modular codedesign
- Generic interoperability and interface architecture
- Fundamental…
