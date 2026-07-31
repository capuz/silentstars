---
repo: "TexasInstruments/processor-sdk-doc"
name: "processor-sdk-doc"
description: "Processor SDK (PSDK) documentation source"
readmeQualityOk: true
url: "https://github.com/TexasInstruments/processor-sdk-doc"
homepage: "https://texasinstruments.github.io/processor-sdk-doc/"
language: "C"
languages: ["C", "Python"]
languagePcts: [51, 32]
topics: ["documentation", "texas-instruments", "python", "restructuredtext", "hacktoberfest", "ti-processors"]
stars: 37
forks: 88
openIssues: 12
closedIssues: 18
watchers: 10
contributors: 117
recentReleases: 0
createdAt: "2024-10-16T20:34:31Z"
lastCommitAt: "2026-07-31T06:28:12Z"
lastReleaseAt: "2025-04-22T10:30:13Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 64
maintainers: ["StaticRocket", "kwillis01", "praneethbajjuri"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/873850510/ee183eeb-f636-4adf-9b31-c28b8fe40d6f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063224Z&X-Amz-Expires=300&X-Amz-Signature=252b2421c6816daeb5fcc926c19e0edca15e70e53c05248f7c78d47048e93944&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTg0NCwibmJmIjoxNzg1NDc5NTQ0LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.pU3iNJFJFif_kT9L9vrujzt3T1LoNwpjPwWj7gcX78A"
discussionCount: 1
---

# Processor SDK documentation

This is the documentation for the Texas Instruments Processor Software
Development Kit (PSDK). It uses Sphinx and reStructuredText. There are some
light plugins and a custom configuration tool to handle device specific values.

## Build guide

Continue reading if you have any questions about the following command.

```
docker run -it --rm -v "$PWD":/build ghcr.io/texasinstruments/processor-sdk-doc:latest make DEVFAMILY=AM62X OS=linux
```

### Clone the repository

```
git clone https://github.com/TexasInstruments/processor-sdk-doc.git
```

### Start the container

A small container with all required tools is available on the GitHub. The source
is in the [`docker/`](https://github.com/TexasInstruments/processor-sdk-doc/blob/HEAD/docker/) subdirectory.

To start the container, issue the following at the root of the project.

```
docker run -it --rm -v "$PWD":/build ghcr.io/texasinstruments/processor-sdk-doc:latest
```

### Issue make

GNU Make handles some initial setup. Specify the `DEVFAMILY` and `OS` values as
either arguments to `make` or as environment variables.

`DEVFAMILY` stands for the Device Family. Possible values correspond to the
names of…
