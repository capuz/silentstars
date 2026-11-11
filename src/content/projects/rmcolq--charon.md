---
repo: "rmcolq/charon"
name: "charon"
description: "Sift through read files and split into a small number of categories"
readmeQualityOk: true
url: "https://github.com/rmcolq/charon"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 2
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2024-10-04T09:30:30Z"
lastCommitAt: "2026-11-11T11:22:07Z"
lastReleaseAt: "2026-09-11T10:45:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 70
maintainers: ["rmcolq"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca1436bef8a68e45a7bf593cc4ebf1aae38cd600a1b6419581bd98d366397168/rmcolq/charon"
---

# Charon
_Clean Host Associated Reads Out Nanopore_

Probabilistically identify the host and microbial reads in a metagenomic dataset.

[TOC]: #

# Table of Contents
- [Introduction](#introduction)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

Charon allows indexing and classification of long reads into a small number of categories (<256 categories with 
references provided by <256 files) with the additional option of extracting one of these categories.

It was developed to classify metagenomic reads as either microbial or host. Unlike other de-hosting methods, it 
calculates a probability score of a read _belonging to a given category and not the other categories._
Other metagenomic de-hosting methods piggy-back off taxnomic classification methods (which give too specific taxonomic 
information) or mapping methods (which give too specific alignment information), neither of which provided probability
scores which could be used to set an acceptable threshold for e.g. releasing metagenomic data into the public domain.

## Quick Start

### Download an Index

Alternatively, a pre-built index for long reads is available via…
