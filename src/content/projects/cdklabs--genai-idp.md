---
repo: "cdklabs/genai-idp"
name: "genai-idp"
description: "GenAI Intelligent Document Processing (IDP) Accelerator for AWS CDK is designed to transform unstructured documents into structured data at scale using AWS's latest AI/ML services"
readmeQualityOk: true
url: "https://github.com/cdklabs/genai-idp"
homepage: "https://cdklabs.github.io/genai-idp/"
language: "Python"
languages: ["Python", "TypeScript", "Jupyter Notebook"]
languagePcts: [48, 26, 25]
topics: ["ai", "aws", "cdk", "genai", "idp"]
stars: 14
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-09-04T08:04:25Z"
lastCommitAt: "2026-05-28T12:40:09Z"
lastReleaseAt: "2025-10-06T05:47:40Z"
status: "at_risk"
tags: ["fork_magnet"]
healthScore: 51
undervaluedScore: 41
maintainers: ["dbalintx"]
openGraphImageUrl: "https://opengraph.githubassets.com/0316635c05fca3b0134b2184f139aac6cceed0fdd2d49fe47583b2f66f0488dd/cdklabs/genai-idp"
---

# GenAI IDP Accelerator for AWS CDK

A modular AWS CDK implementation of the GenAI Intelligent Document Processing (IDP) Accelerator, designed to transform unstructured documents into structured data at scale using AWS's latest AI/ML services.

## Overview

This project is a representation of the [GenAI Intelligent Document Processing Accelerator](https://github.com/aws-solutions-library-samples/accelerated-intelligent-document-processing-on-aws) as a set of composable AWS CDK packages, enabling more flexible deployment, customization, and integration options.

### Repository Structure

#### Packages
- `@cdklabs/genai-idp` - Core building blocks for document processing infrastructure
- `@cdklabs/genai-idp-bda-processor` - Pattern 1 implementation using Amazon Bedrock Data Automation
- `@cdklabs/genai-idp-bedrock-llm-processor` - Pattern 2 implementation for custom extraction using Amazon Bedrock models
- `@cdklabs/genai-idp-sagemaker-udop-processor` - Pattern 3 implementation for specialized document processing using Sagemaker Endpoint
