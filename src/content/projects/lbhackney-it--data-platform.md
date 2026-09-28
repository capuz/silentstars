---
repo: "LBHackney-IT/Data-Platform"
name: "Data-Platform"
description: "Hackney Data Platform Infrastructure and Code"
readmeQualityOk: true
url: "https://github.com/LBHackney-IT/Data-Platform"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python", "HCL"]
languagePcts: [35, 33, 30]
stars: 16
forks: 2
openIssues: 5
closedIssues: 1
watchers: 6
contributors: 40
recentReleases: 0
createdAt: "2021-03-23T10:21:49Z"
lastCommitAt: "2026-09-28T10:06:22Z"
lastReleaseAt: "2021-06-02T09:04:42Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 81
undervaluedScore: 54
maintainers: ["Tian-2017", "barnesm707", "timburke-hackit"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ea9efa1e6a5dcb517a611800ea1d5fb4d5ec4b0b925bf72fd8d791db1fc4b9e/LBHackney-IT/Data-Platform"
---

# Data Platform

Hackney Data Platform Infrastructure and Code

## Data Dictionary & Playbook

The Data Dictionary & Playbook can be found on the [Document Site](http://playbook.hackney.gov.uk/Data-Platform-Playbook/) and it's related [GitHub Repository](https://github.com/LBHackney-IT/Data-Platform-Playbook/)

## Architecture Decision Records

We use Architecture Decision Records (ADRs) to document architecture decisions that we make. They can be found in the
[Data Platform - Playbook](http://playbook.hackney.gov.uk/)

## Notebooks

We use [Jupyter Notebooks](https://jupyter.org/) to prototype glue jobs.
These can be hosted either [locally](https://github.com/LBHackney-IT/Data-Platform-Notebooks#running-jupyter-locally-using-docker) or in [AWS sagemaker](https://lbhackney-it.github.io/Data-Platform-Playbook/playbook/transforming-data/using-aws-glue/using-sagemaker).
The notebooks are stored in the [Data Platform Notebooks](https://github.com/LBHackney-IT/Data-Platform-Notebooks) GitHub repository.

## Terraform Deployment

The Terraform will be deployed, using GitHub Actions, on push to main / when a Pull Request is merged into main

#### /terraform/core

The terraform/core…
