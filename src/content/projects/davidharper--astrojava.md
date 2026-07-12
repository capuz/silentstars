---
repo: "DavidHarper/astrojava"
name: "astrojava"
description: "A Java package for reading JPL development ephemeris (DE) data files"
readmeQualityOk: true
url: "https://github.com/DavidHarper/astrojava"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2014-04-13T18:19:52Z"
lastCommitAt: "2026-07-12T06:15:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 65
undervaluedScore: 41
maintainers: ["DavidHarper"]
openGraphImageUrl: "https://opengraph.githubassets.com/3502713ab7b8f034d1728da141104920f7a8aba778e3ea7948322764797b991b/DavidHarper/astrojava"
---

# astrojava

A Java library to read JPL Development Ephemeris files and calculate
planetary positions from the data.

## Building the library

This project uses Gradle as its build tool.  You will need a recent
version of Gradle and a Java compiler capable of generating Java 16
code.  The source code is in the standard location for a Gradle
project, namely

`src/main/java`

The simplest option is to generate a JAR file containing the library
and all of the test classes.

`gradle jar`

The JAR file can be found in **build/libs**

To generate a Maven artefact, run

`gradle publish`

The generated files can be found in **build/repo**

## Documentation

The Javadoc documentation for the classes in this library is sparse
to non-existent.  If you wish to use this library, you should look
at the examples in the com.obliquity.astronomy.almanac.test package
to understand how the library works.

## Examples

### Prerequisites

**No data files are bundled with this project!**

You **must** download a JPL Development Ephemeris file from the
JPL Solar System Dynamics FTP server before you can use any of the
example programs.  The base URL is

`ftp://ssd.jpl.nasa.gov/pub/eph/planets/Linux`…
