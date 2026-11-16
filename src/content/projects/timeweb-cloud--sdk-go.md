---
repo: "timeweb-cloud/sdk-go"
name: "sdk-go"
description: "Generated Go SDK for the Timeweb Cloud API"
originalDescription: "Сгенерированный Go SDK для API Timeweb Cloud"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/timeweb-cloud/sdk-go"
homepage: "https://timeweb.cloud/api-docs"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["api", "go", "sdk"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-08-17T15:01:03Z"
lastCommitAt: "2026-11-16T11:51:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 51
undervaluedScore: 42
maintainers: ["timeweb-cloud"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b329e6ac78919a5c2f48aadcedc27fff062ab37a71feeff4a079df325a9a1c8/timeweb-cloud/sdk-go"
---

# Go API client for openapi

# Introduction
The Timeweb Cloud API lets you manage cloud resources programmatically using standard HTTP requests.

Many of the features available in the Timeweb Cloud control panel are also available through the API, so you can automate your own workflows.

This documentation first describes the general design and operating principles of the API, and then the specific endpoints. Examples of requests to them are also provided.

## Requests
Requests must be made over the `HTTPS` protocol to ensure transaction encryption. The following request methods are supported:
|Method|Usage|
|--- |--- |
|GET|Retrieves data about collections and individual resources.|
|POST|For collections, creates a new resource of this type. Also used to perform actions on a specific resource.|
|PUT|Updates an existing resource.|
|PATCH|Some resources support partial updates, that is, updating only some of a resource's attributes. In this case, PATCH is used instead of the PUT method.|
|DELETE|Deletes a resource.|

The `POST`, `PUT`, and `PATCH` methods may include an object in the request body with the content type `application/json`.

### Parameters in…
