---
repo: "GoogleCloudPlatform/genai-factory"
name: "genai-factory"
description: "A collection of end-to-end infrastructure blueprints to deploy generative AI infrastructures in GCP, using IaC and following security best-practices."
readmeQualityOk: true
url: "https://github.com/GoogleCloudPlatform/genai-factory"
language: "HCL"
languages: ["HCL", "Python"]
languagePcts: [50, 46]
topics: ["ai", "cloud-platform", "gcp", "generative-ai", "google-cloud", "google-cloud-platform", "infrastructure-as-code", "platform", "security", "terraform"]
stars: 185
forks: 37
openIssues: 1
closedIssues: 28
watchers: 2
contributors: 500
recentReleases: 0
createdAt: "2025-05-13T11:34:54Z"
lastCommitAt: "2026-11-19T10:56:57Z"
lastReleaseAt: "2026-04-25T07:36:13Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 43
maintainers: ["LucaPrete", "dependabot[bot]", "genai-factory-robot"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf4826e0ba3d51ab43335ad003a94c9e337c06e24c95051681ec28cd5c51dafe/GoogleCloudPlatform/genai-factory"
---

# GenAI Factory

Genai-factory is a collection of **end-to-end blueprints to deploy generative AI infrastructures** in GCP, following security best-practices.

- Embraces IaC best practices. Infrastructure is implemented in [Terraform](https://developer.hashicorp.com/terraform), leveraging [Terraform resources](https://registry.terraform.io/providers/hashicorp/google/latest/docs) and [Cloud Foundations Fabric modules](https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/modules).
- Leverages natively [shared VPCs](https://docs.cloud.google.com/vpc/docs/shared-vpc).
- Follows the least-privilege principle: no default service accounts, primitive roles, minimal permissions.
- Compatible with [Cloud Foundation Fabric FAST](https://github.com/GoogleCloudPlatform/cloud-foundation-fabric) [project-factory](https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/modules/project-factory) and application templates.

## Cloud Foundation Fabric Compatibility

Works with Cloud Foundation Fabric from [v60.0.0](https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/v60.0.0).
Compatibility with master is not guaranteed.
