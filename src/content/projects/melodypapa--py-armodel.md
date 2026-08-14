---
repo: "melodypapa/py-armodel"
name: "py-armodel"
description: "support AUTOSAR model with python "
readmeQualityOk: true
url: "https://github.com/melodypapa/py-armodel"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["autosar", "arxml"]
stars: 16
forks: 10
openIssues: 0
closedIssues: 217
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2021-04-04T02:55:06Z"
lastCommitAt: "2026-08-14T05:15:05Z"
lastReleaseAt: "2024-11-15T03:00:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 100
undervaluedScore: 74
maintainers: ["melodypapa"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfc595d621b7772359814cf833af0c19d0552915424af52ee454d6908fb8be14/melodypapa/py-armodel"
---

# 1. py-armodel

## 1.1. Purpose

To support AUTOSAR model with python 

## 1.2. Reference Documents
1. AUTOSAR_TPS_XMLSchemaProductionRules.pdf
2. AUTOSAR_TPS_ARXMLSerializationRules.pdf

|Version|Documentation|Travis CI|Coverage Status|Pypi|
|--|--|--|--|--|
|[](https://badge.fury.io/gh/melodypapa%2Fpy-armodel)|[](https://py-armodel.readthedocs.io/en/latest)|[](https://www.travis-ci.com/melodypapa/py-armodel)|[](https://coveralls.io/github/melodypapa/py-armodel?branch=main)|[](https://badge.fury.io/py/armodel)|

Full documentation: https://py-armodel.readthedocs.io/en/latest/

## 1.3. How to create the distribution and upload to pypi
1. Run `python -m build` to generate distribution (requires `pip install build`)
2. Run `twine check dist/*` to check the validation of distribution
3. Run `twine upload dist/*` to upload to pypi repository
4. Check the website https://pypi.org/project/armodel/ to find out it works or not

And more details can be found at https://packaging.python.org/  

## 1.4. How to perform Tests

### Quick Start (Recommended)

Use the test runner script for colored output and comprehensive testing:

```bash
# Run all tests (unit + integration)
python…
