---
repo: "EMMC-ASBL/tripper"
name: "tripper"
description: "Triplestore wrapper package for Python."
readmeQualityOk: true
url: "https://github.com/EMMC-ASBL/tripper"
homepage: "https://EMMC-ASBL.github.io/tripper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-documentation", "interface", "rdf", "triplestore"]
stars: 15
forks: 4
openIssues: 50
closedIssues: 77
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2022-10-07T08:28:26Z"
lastCommitAt: "2026-09-01T08:46:54Z"
lastReleaseAt: "2023-08-29T12:27:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["francescalb", "jesper-friis", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/547162834/580376a4-73eb-4422-94fb-9ddbeaa7baee"
discussionCount: 1
---

*Triplestore wrapper for Python providing a simple and consistent interface to a range of triplestore backends*

Tripper
=======

Getting started
---------------
* [Tutorial]
* [Documentation]
* [Reference manual]

Basic concepts
--------------
Tripper provides a simple and consistent interface to a range of triplestore backends.
It strives for simplicity and is modelled after [rdflib] (with a few simplifications).

In Tripper:

* All IRIs are represented by Python strings.
  Example: `https://w3id.org/emmo#Metre`

* Blank nodes are strings starting with `_:`.
  Example: `_:bnode1`

* Literals are constructed with [`tripper.Literal`][Literal].
  Example: `tripper.Literal(3.14, datatype=XSD.float)`

To make it easy to work with IRIs, provide Tripper a set of pre-defined namespaces, like `XSD.float`.
New namespaces can be defined with the [`tripper.Namespace`][Namespace] class.

A triplestore wrapper is created with the [`tripper.Triplestore`][Triplestore] class.

Sub-packages
------------
Additional functionality beyond interfacing triplestore backends is provided by specialised sub-package:

* [tripper.datadoc]: An API for data documentation.
* [tripper.units]: Working with units…
