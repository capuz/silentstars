---
repo: "open-policy-agent/opa-control-plane"
name: "opa-control-plane"
description: "OPA Control Plane (OCP) simplifies how you manage policies for your OPA deployments."
readmeQualityOk: true
url: "https://github.com/open-policy-agent/opa-control-plane"
language: "Open Policy Agent"
languages: ["Open Policy Agent"]
languagePcts: [86]
stars: 63
forks: 25
openIssues: 23
closedIssues: 67
watchers: 4
contributors: 39
recentReleases: 1
createdAt: "2025-04-28T15:50:35Z"
lastCommitAt: "2026-07-13T06:38:39Z"
lastReleaseAt: "2026-06-09T09:01:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 54
maintainers: ["dependabot[bot]", "srenatus", "yi-chen-roger"]
openGraphImageUrl: "https://opengraph.githubassets.com/e96914ebd6fca8b59ca27f40a43ad0397049381def1e6e734f8f60260d45bf57/open-policy-agent/opa-control-plane"
---

# OPA Control Plane

OPA Control Plane (OCP) simplifies how you manage policies for your OPA
deployments. It provides a centralized management system to control how OPAs
receive the policies and data they need to make decisions. OCP provides:

- **Git-based Policy Management.** Build bundles based on Rego from multiple Git
  repositories and implement environment promotion strategies natively with Git.
- **External Datasources.** Fetch and bundle external data required by your
  policies build-time using HTTP push and pull datasources.
- **Highly-Available & Scalable Bundle Serving.** Distribute bundles to cloud
  object storage like AWS S3, Google Cloud Storage, or Azure Blob Storage and
  ensure your OPAs can quickly and reliably serve policy decisions.
- **Global and hierarchical policies.** Enforce organization-wide rules by
  defining global policies that get injected into bundles at build-time based on
  label selectors. Global policies can override other policies based on custom
  conflict resolution logic written in Rego.

## Learn More

- [Deploy as a service](http://openpolicyagent.org/docs/ocp/guide-deploy-as-a-service) - Run OCP as a standalone service in Kubernetes
-…
