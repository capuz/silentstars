---
repo: "bcgov/nr-hydrometric-rating-curve"
name: "nr-hydrometric-rating-curve"
description: "A hydrometric rating curve describes the mathematical relationship between stage and discharge. The rating curve app allows users to upload any stage and discharge datasets, develop and optimize rating models as well as save and compare results from previous sessions."
readmeQualityOk: true
url: "https://github.com/bcgov/nr-hydrometric-rating-curve"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [55, 40]
topics: ["bcgov", "docker", "openshift", "openshift4", "python", "environment"]
stars: 6
forks: 2
openIssues: 2
closedIssues: 41
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2023-02-09T19:14:56Z"
lastCommitAt: "2026-09-21T09:15:04Z"
lastReleaseAt: "2024-09-25T01:53:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 84
maintainers: ["renovate[bot]", "DerekRoberts", "DM-co"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeb0681b4c53fa170f76d848b23db53b5bbbcbb77831653d80d1baa07f7720ce/bcgov/nr-hydrometric-rating-curve"
---

# Hydrometric Rating Application (HydRA)

## Intro

A hydrometric rating curve describes the mathematical relationship between stage and discharge for a given hydrometric station. Rating curves allow to convert stage measurements to discharge measurements based on previously measured stage and discharge data pairs. The Hydrometric Rating Application (HydRA) allows users to upload any stage and discharge datasets, develop and optimize rating models as well as save and compare results from previous sessions.

The HydRA app is hosted in the BC Gov GitHub organization and is available [here](https://hydra.nrs.gov.bc.ca/). This repository contains all source code for the HydRA app and allows to run the app locally using docker.

## Managing the app packages

After cloning the repository, use the `poetry` python package manager to install the dependencies by running `poetry install` from the `frontend` directory. To update the dependencies, run `poetry update` or edit the `pyproject.toml` file.

## Running the app locally

### With Docker or Podman

This project includes a `compose.yml` file at the project root that works with both Docker and Podman:

```bash
# Build and run
podman…
