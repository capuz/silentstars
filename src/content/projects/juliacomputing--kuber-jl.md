---
repo: "JuliaComputing/Kuber.jl"
name: "Kuber.jl"
description: "Julia Kubernetes Client"
readmeQualityOk: true
url: "https://github.com/JuliaComputing/Kuber.jl"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
topics: ["julia", "kubernetes", "client-library"]
stars: 65
forks: 12
openIssues: 2
closedIssues: 9
watchers: 13
contributors: 27
recentReleases: 0
createdAt: "2016-10-17T03:06:20Z"
lastCommitAt: "2026-09-02T08:03:12Z"
lastReleaseAt: "2021-05-11T02:27:01Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 79
undervaluedScore: 29
maintainers: ["tanmaykm", "nkottary", "krynju"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a3d62c6e0eab3f9567e45ccf9e7596374ea5ffc6759d061503c7baa12081c0f/JuliaComputing/Kuber.jl"
---

# Kuber

A Julia Kubernetes Client.

An easy to use API to access Kubernetes clusters from Julia. Under the verb API sits a complete generated client: one module per Kubernetes API group version in `Kuber.ApiImpl` (`K8sV1`, `K8sAppsV1`, `K8sBatchV1`, …), with every low level operation and model type.

[Supported API Versions](https://github.com/JuliaComputing/Kuber.jl/blob/HEAD/SupportedAPIVersions.md)

> ### ⚠ This is the `openapi-v1-trial` branch
>
> A rebuild of Kuber on [OpenAPI.jl 1.0](https://github.com/JuliaComputing/OpenAPI.jl), released 2026-09-02 and resolved from the General registry — no `[sources]` pin. See [the trial plan](https://github.com/JuliaComputing/Kuber.jl/blob/HEAD/OpenAPIv1TrialBranchPlan.md) and [the evaluation notes](https://github.com/JuliaComputing/Kuber.jl/blob/HEAD/OpenAPIv1RewriteNotes.md). Requires **Julia 1.11+**, HTTP.jl 2.x and JSON.jl 1.7+.
>
> What changes for callers of the verb API:
>
> - **Absent fields are `ABSENT`, not `nothing`.** This is the one semantic change to watch for. A field missing from the payload now reads as `OpenAPI.Runtime.ABSENT`, and `nothing` means an explicit JSON `null`. Code doing `x.field === nothing` to test "not…
