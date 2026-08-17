---
repo: "waseigo/ex_nominatim"
name: "ex_nominatim"
description: "A full-featured client for the OpenStreetMap Nominatim API V1, with extensive request validation, robust error-handling and reporting, and user guidance with helpful validation messages."
readmeQualityOk: true
url: "https://github.com/waseigo/ex_nominatim"
homepage: "https://overbring.com/software/ex_nominatim/"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["elixir", "nominatim-api", "openstreetmap"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-07-24T20:33:26Z"
lastCommitAt: "2026-08-04T22:24:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 65
maintainers: ["waseigo"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3f7867482b26d04e14d1d9a374b0ac3ed24afa930590697beeee17e64eb0737/waseigo/ex_nominatim"
---

# ExNominatim

**ExNominatim** is a full-featured client for the [OpenStreetMap](https://www.openstreetmap.org) [Nominatim API V1](https://nominatim.org/release-docs/latest/api/Overview/), with extensive request validation, robust error-handling and reporting, and user guidance with helpful validation messages.

## Goals

- Prevent unnecessary calls to the Nominatim API server by validating intended requests and preventing them if the request parameters are invalid.
- Solid error-handling for robustness in production.
- Provide helpful validation messages to the user when a request is deemed invalid.

## Features

- Covers the `/search`, `/reverse`, `/lookup`, `/status` and `/details` endpoints.
- `search_one/1` convenience for single-result lookups.
- Utilizes request parameter structs with the appropriate fields (except for `json_callback`) for each endpoint.
- Configurable for your application with overridable defaults using Elixir's `Config` module to set any default values, including the `:base_url` option for use with self-hosted Nominatim API instances.
- Validates parameter values prior to the request (possible to override this with the `force: true` option).
- Provides…
