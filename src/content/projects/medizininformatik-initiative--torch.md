---
repo: "medizininformatik-initiative/torch"
name: "torch"
description: "A FHIR® Extraction Tool  for structured, consent-compliant data extraction"
readmeQualityOk: true
url: "https://github.com/medizininformatik-initiative/torch"
homepage: "https://medizininformatik-initiative.github.io/torch/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["fdpg-plus"]
stars: 14
forks: 0
openIssues: 60
closedIssues: 505
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2024-05-16T10:45:58Z"
lastCommitAt: "2026-11-26T12:41:18Z"
lastReleaseAt: "2025-08-25T13:02:48Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 70
maintainers: ["renovate[bot]", "Lucas0T", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d0bb79940a469259704b31b3842e717113ee17dc7888e228dbe2980c800dcbb/medizininformatik-initiative/torch"
---

# TORCH - Transfer Of Resources in Clinical Healthcare

## Goal

**T**ransfer **O**f **R**esources in **C**linical **H**ealthcare or **Torch** is a project that aims to provide
a service that allows the execution of data extraction queries on a FHIR-server.

The tool will take a **CRTDL** and StructureDefinitions to extract specific resources from a FHIR server.
It first extracts a cohort based on the cohort definition part of the **CRTDL** using either CQL or FLARE and FHIR
Search.
It then extracts resources for the cohort as specified in the cohort extraction part of the **CRTDL**, which specifies
which resources
to extract (Filters) and which attributes to extract for each resource.

The tool internally uses the [HAPI](https://hapifhir.io/) implementation for handling FHIR Resources.

## CRTDL

The **C**linical **R**esource **T**ransfer **D**efinition **L**anguage or **CRTDL** is a JSON format, which specifies a
data request.
This request is composed of two parts:
The cohort definition (for who (which patients) should data be extracted)
The data extraction (what data should be extracted)
