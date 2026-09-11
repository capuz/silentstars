---
repo: "ballerina-platform/wsdl-tools"
name: "wsdl-tools"
description: "Source code of WSDL to Ballerina Tool"
readmeQualityOk: true
url: "https://github.com/ballerina-platform/wsdl-tools"
language: "Java"
languages: ["Java"]
languagePcts: [88]
topics: ["ballerina"]
stars: 103
forks: 7
openIssues: 0
closedIssues: 0
watchers: 62
contributors: 40
recentReleases: 0
createdAt: "2022-04-28T11:36:38Z"
lastCommitAt: "2026-09-11T08:15:29Z"
lastReleaseAt: "2026-03-24T14:43:28Z"
status: "thriving"
tags: []
healthScore: 64
undervaluedScore: 19
maintainers: ["Nuvindu"]
openGraphImageUrl: "https://opengraph.githubassets.com/975cc5d736924d7cda2ef51628f48cc4d29d30153c4b56dbbe49414969c59771/ballerina-platform/wsdl-tools"
---

# Ballerina WSDL Tool  

`WSDL` (Web Services Description Language) is an XML-based language for describing the functionalities of a web service that uses SOAP as the underlying protocol for data transfer.  

This package contains the Ballerina WSDL tool, which generates Ballerina client stubs and record types from a given WSDL file. It simplifies the integration with SOAP-based web services by automatically generating necessary types and client functions.

## Installation

Execute the command below to pull the WSDL tool from [Ballerina Central](https://central.ballerina.io/ballerina/wsdl/latest).

```bash
bal tool pull wsdl
```

## Usage

The WSDL tool provides the following capabilities.

1. Generate Ballerina client functions for a given WSDL specification.
2. Generate Ballerina record types for an XML schema provided in the WSDL specification.

The client generated from a WSDL file can be used in your applications to call the SOAP-based web service defined in the WSDL.

The following command will generate Ballerina client stubs and records for a given WSDL file. It is mandatory to run the command within a Ballerina package.

```bash
bal wsdl <wsdl-file-path>…
