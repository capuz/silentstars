---
repo: "Skyscanner/pycfmodel"
name: "pycfmodel"
description: "A python model for Cloud Formation scripts"
readmeQualityOk: true
url: "https://github.com/Skyscanner/pycfmodel"
homepage: "https://pycfmodel.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 29
forks: 8
openIssues: 4
closedIssues: 4
watchers: 10
contributors: 42
recentReleases: 0
createdAt: "2018-06-22T12:30:30Z"
lastCommitAt: "2026-09-28T10:06:41Z"
lastReleaseAt: "2020-03-25T15:31:52Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 57
maintainers: ["dependabot[bot]", "jsoucheiron", "marcsantamaria-sky"]
openGraphImageUrl: "https://avatars.githubusercontent.com/u/522811?s=400&v=4"
---

# pycfmodel

*A python model for Cloud Formation scripts.*

**pycfmodel** makes it easier to work with CloudFormation scripts in Python by
creating a model comprised of python objects. Objects have various helper
functions which help with performing common tasks related to parsing and
inspecting CloudFormation scripts.

`pip install pycfmodel`

## Currently Supported

* AWSTemplateFormatVersion
* Conditions
* Description
* Mappings
* Metadata
* Outputs
* Parameters
* Resources:
    * Properties:
        * Policy
        * Policy Document
        * Principal
        * Security Group Egress Prop
        * Security Group Ingress Prop
        * Statement
        * Tag
    * EC2 VPC Endpoint Policy
    * Generic Resource
    * IAM Group
    * IAM Managed Policy
    * IAM Policy
    * IAM Role
    * IAM User
    * KMS Key
    * OpenSearch Service (legacy ElasticSearch resource)
        * Elasticsearch Domain
    * OpenSearch Service
        * OpenSearchService Domain
    * S3 Bucket
    * S3 Bucket Policy
    * Security Group
    * Security Group Egress
    * Security Group Ingress
    * SNS Topic Policy
    * SQS Queue Policy
    * WAFv2 IP Set
* Transform

## Example

```python
from…
