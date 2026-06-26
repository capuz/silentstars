---
repo: "biothings/mygene.info"
name: "mygene.info"
description: "MyGene.info: A BioThings API for gene annotations"
url: "https://github.com/biothings/mygene.info"
homepage: "http://mygene.info"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["biothings", "gene", "gene-annotations", "api", "webservice", "bioinformatics", "ncats-translator"]
stars: 133
forks: 22
openIssues: 39
closedIssues: 95
watchers: 16
contributors: 32
recentReleases: 0
createdAt: "2016-03-29T00:36:49Z"
lastCommitAt: "2026-06-26T21:32:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 69
undervaluedScore: 28
maintainers: ["jal347"]
openGraphImageUrl: "https://opengraph.githubassets.com/3431d7cf2d5be5e963c04087f306f42eda6d7c2d942e63bd1de191a83e1395e7/biothings/mygene.info"
---

# MyGene.info

## Description
MyGene.info is a web API for accessing gene annotation information (Gene Annotation Query as a Service).  MyGene.info is part of [BioThings API](http://biothings.io) collection, together with [MyVariant.info](https://myvariant.info), [MyChem.info](https://mychem.info) and [more](https://biothings.io/).

For more information see this reference:

> Xin J, Mark A, Afrasiabi C, Tsueng G, Juchler M, Gopal N, Stupp GS, Putman TE, Ainscough BJ, Griffith OL, Torkamani A, Whetzel PL, Mungall CJ, Mooney SD, Su AI, Wu C.
> **High-performance web services for querying gene and variant annotation.**
> Genome Biol. 2016 May 6;17(1):91. doi: 10.1186/s13059-016-0953-9.
> https://www.ncbi.nlm.nih.gov/pubmed/27154141

## Setup Mygene.info Web Server Locally ##

#### 1. Prerequisites

    python (>=3.4)
    git 

   In Ubuntu/Debian system, you can install all prerequisites by

    sudo apt-get install python-dev python-setuptools git 

#### 2. Clone this repo:

    git clone https://github.com/biothings/mygene.info.git

#### 3. Setup a Python "virtualenv" (optional, but highly recommended):

    sudo easy_install pip
    sudo pip install virtualenv

    virtualenv…
