---
repo: "nordicsemi/zcbor"
name: "zcbor"
description: "Low footprint C/C++ CBOR library and Python tool providing code generation from CDDL descriptions."
readmeQualityOk: true
url: "https://github.com/nordicsemi/zcbor"
language: "C"
languages: ["C", "Python"]
languagePcts: [67, 30]
stars: 172
forks: 62
openIssues: 15
closedIssues: 132
watchers: 10
contributors: 23
recentReleases: 0
createdAt: "2020-01-23T16:15:01Z"
lastCommitAt: "2026-11-20T12:01:33Z"
lastReleaseAt: "2024-10-17T13:22:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 44
maintainers: ["oyvindronningstad", "pro-laxmi"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb346f175b65e27239ffa3682745a8951699fb4ae58ef65c125b8e6a4e26b5a2/nordicsemi/zcbor"
---

zcbor
=====

zcbor is a low footprint [CBOR](https://en.wikipedia.org/wiki/CBOR) library in the C language (C++ compatible), tailored for use in microcontrollers.
It comes with a schema-driven script tool that can validate your data, or even generate code.
The schema language (CDDL) allows creating very advanced and detailed schemas.

The validation and conversion part of the tool works with YAML and JSON data, in addition to CBOR.
It can for example validate a YAML file against a schema and convert it into CBOR.

The code generation part of the tool generates C code based on the given schema.
The generated code performs CBOR encoding and decoding using the C library, while also validating the data against all the rules in the schema.

The schema language used by zcbor is CDDL (Concise Data Definition Language) which is a powerful human-readable data description language defined in [IETF RFC 8610](https://datatracker.ietf.org/doc/rfc8610/).

Features
========

Here are some possible ways zcbor can be used:
