---
repo: "DiamondLightSource/davidia"
name: "davidia"
description: "React component and web endpoints for scientific data visualization."
readmeQualityOk: true
url: "https://github.com/DiamondLightSource/davidia"
homepage: "https://diamondlightsource.github.io/davidia/"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [59, 39]
topics: ["cli", "gui", "python", "react", "fastapi"]
stars: 5
forks: 2
openIssues: 9
closedIssues: 12
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2022-07-18T08:39:04Z"
lastCommitAt: "2026-11-03T12:47:39Z"
lastReleaseAt: "2026-08-06T12:07:41Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 80
maintainers: ["PeterC-DLS", "VictoriaBeilsten-Edmands"]
openGraphImageUrl: "https://opengraph.githubassets.com/894e9e4e9996f1fa3bbf7a5d52f0870df5a932c30ba88a4319d5187d093fb3e6/DiamondLightSource/davidia"
---

# Davidia

Davidia comprises two parts: a plot server and a set of React components including a connected plot. The plot server has a REST api that allows clients to visualize data in connected plots in React applications.

## Demonstrating Davidia

Prepare a clean Python 3.12+ installation (this may be a conda or a virtual environment) then install the Davidia Python package with

### `pip install "davidia[all]"`

To start the demo, run

### `dvd-demo`

This starts the plot server, opens a browser window and runs a demo script that shows different plots. Note there are host and port settings available - read the builtin help with `dvd-demo -h`

## Running Python plot server (with bundled example client)

### `dvd-server -c -P 8000`

Open [localhost:8000](http://localhost:8000) to view it in the browser. Now test plot server with,

### `python -m davidia.demos`

## Benchmarking the plot client

Set the environment variable `DVD_BENCHMARK` as `on` or add a `-b` argument:

### `dvd-server -c -b -P 8000`

Run the script to trigger benchmarks:

### `dvd-benchmark`

See its builtin help using the `-h` argument.

## Storybook

View the Storybook…
