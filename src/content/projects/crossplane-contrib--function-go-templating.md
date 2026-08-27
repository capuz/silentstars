---
repo: "crossplane-contrib/function-go-templating"
name: "function-go-templating"
description: "A Go templating composition function"
readmeQualityOk: true
url: "https://github.com/crossplane-contrib/function-go-templating"
homepage: "https://crossplane.io"
language: "Go"
languages: ["Go"]
languagePcts: [97]
stars: 99
forks: 64
openIssues: 28
closedIssues: 327
watchers: 4
contributors: 42
recentReleases: 0
createdAt: "2023-10-20T04:39:11Z"
lastCommitAt: "2026-08-27T14:12:23Z"
lastReleaseAt: "2024-10-18T08:41:34Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 54
maintainers: ["renovate[bot]", "bobh66", "phisco"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ebfaa96c9e2b9ce01a6104a5e3788fb96645e7bbfeead1e0afe0524d80e8d19/crossplane-contrib/function-go-templating"
---

# function-go-templating

This [composition function][docs-functions] allows you to compose Crossplane
resources using [Go templates][go-templates]. If you've written a [Helm
chart][helm-chart] before, using this function will be a familiar experience.

Here's an example:

```yaml
apiVersion: apiextensions.crossplane.io/v1
kind: Composition
metadata:
  name: example
spec:
  compositeTypeRef:
    apiVersion: example.crossplane.io/v1beta1
    kind: XR
  mode: Pipeline
  pipeline:
    - step: create-a-bucket
      functionRef:
        name: function-go-templating
      input:
        apiVersion: gotemplating.fn.crossplane.io/v1beta1
        kind: GoTemplate
        source: Inline
        inline:
          options:
            - missingkey=error
          template: |
            apiVersion: s3.aws.upbound.io/v1beta1
            kind: Bucket
            metadata:
              annotations:
                gotemplating.fn.crossplane.io/composition-resource-name: bucket
            spec:
              forProvider:
                region: {{ .observed.composite.resource.spec.region }}
    - step: automatically-detect-ready-composed-resources
      functionRef:
        name:…
