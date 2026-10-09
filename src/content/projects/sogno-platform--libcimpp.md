---
repo: "sogno-platform/libcimpp"
name: "libcimpp"
description: "C++ package to import and export CGMES / CIM IEC-61970 files in the XML/RDF format "
readmeQualityOk: true
url: "https://github.com/sogno-platform/libcimpp"
homepage: "https://sogno.energy/libcimpp/"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["cim", "iec61970", "cim-import", "cpp"]
stars: 27
forks: 19
openIssues: 0
closedIssues: 4
watchers: 6
contributors: 15
recentReleases: 1
createdAt: "2020-01-31T09:03:58Z"
lastCommitAt: "2026-10-09T18:56:04Z"
lastReleaseAt: "2026-09-20T16:25:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 65
maintainers: ["tom-hg57", "m-mirz"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c60778d23ad03e13b46f008b97934b6b3a622dead888bd7e68fb472014d4f42/sogno-platform/libcimpp"
---

# libcimpp

libcimpp is a serialiser & deserialiser library for C++ objects from XML/RDF documents based on the Common Information Model (CIM) standards (i.e. IEC61970/61968/62325) and CGMES for the energy sector.
It is part of the CIM++ project. More on CIM++ can be found [here](http://rdcu.be/vOop).

Supported CIM / CGMES versions:

+ CGMES_2.4.13_18DEC2013
+ CGMES_2.4.15_16FEB2016
+ CGMES_2.4.15_27JAN2020
+ [CGMES_3.0.0](https://sogno-platform.github.io/libcimpp/CGMES_3.0.0/annotated.html)

## General information

limcimpp uses [arabica](http://www.jezuk.co.uk/cgi-bin/view/arabica) as cross platform wrapper around one of the XML parsers listed in the dependencies (see below).
It is recommended to use libcimpp as cmake module.

## Dependencies

You need following software packages for libcimpp:

+ One of the following XML parsers:
  + [libxml2](http://www.xmlsoft.org/) (usually chosen under Linux and often can be installed as a package of the used distribution)
  + [Xerces](http://xerces.apache.org/xerces-c/)
  + [Microsoft XML Parser](https://support.microsoft.com/en-en/help/324460) (this one is used per default when building with MS Visual Studio)
+ Build system:
  +…
