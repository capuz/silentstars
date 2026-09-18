---
repo: "open-feature/flagd-testbed"
name: "flagd-testbed"
description: "Shared test harness for flagd SDK testing, with Gherkin tests"
readmeQualityOk: true
url: "https://github.com/open-feature/flagd-testbed"
homepage: "https://openfeature.dev"
language: "Gherkin"
languages: ["Gherkin"]
languagePcts: [87]
stars: 5
forks: 14
openIssues: 11
closedIssues: 31
watchers: 7
contributors: 59
recentReleases: 0
createdAt: "2022-07-12T20:16:44Z"
lastCommitAt: "2026-09-18T08:27:09Z"
lastReleaseAt: "2023-09-08T20:14:43Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 85
undervaluedScore: 70
maintainers: ["openfeaturebot", "toddbaert", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/45bcec422a0ec01d985957148cad8cb61b33ac88cbe465be23a1672de3df4793/open-feature/flagd-testbed"
---

# Flagd Test Harness

This repository contains a Docker image to support the [Gherkin test suites](https://github.com/open-feature/spec/blob/main/specification/appendix-b-gherkin-suites.md) defined in the OpenFeature specification.

## `flagd-testbed` Container

The **`flagd-testbed`** container is a Docker image that includes [**flagd**](https://flagd.dev/) and a testing utility called **launchpad**.
It provides a simple way to run end-to-end (E2E) tests across multiple SDKs.

### Launchpad

**Launchpad** is a control center for managing flagd during tests.
It exposes a REST interface that allows you to:

* Start, stop, or restart flagd
* Dynamically update a single flag, simulating real-time flag changes

This approach centralizes the test orchestration logic, reducing the need to replicate it across SDKs in multiple languages. This simplifies test implementation and allows contributors to focus on testing behavior rather than setup.

#### REST API & Development Docs

Detailed usage and API documentation can be found in the [Launchpad README](https://github.com/open-feature/flagd-testbed/blob/HEAD/launchpad/README.md).

#### Storing Configurations

Flagd configurations are…
